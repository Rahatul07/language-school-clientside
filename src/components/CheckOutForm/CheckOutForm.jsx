import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckOutForm.css";

import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
const CheckOutForm = ({ bookingData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [paymentError, setPaymentError] = useState("");
  console.log("after minus", bookingData.seats - 1);

  useEffect(() => {
    if (bookingData.price) {
      axiosSecure
        .post("/create_payment_intent", {
          price: bookingData?.price,
        })
        .then((res) => {
          console.log(res.data);
          setClientSecret(res.data?.client_secret);
        });
    }
  }, [bookingData.price, axiosSecure]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setPaymentError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    // confirmCard payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
            email: user?.email || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("[confirmError]", confirmError);
      setPaymentError(confirmError.message);
    } else {
      console.log("[paymentIntent]", paymentIntent);
    }
    if (paymentIntent.status === "succeeded") {
      // save payment history
      // update seats,
      //update enrolled count
      // delete selected items
      // save to enrolled class
      //  update teacher student count
      const paymentInfo = {
        payment_history: {
          amount: paymentIntent?.amount / 100,
          transactionId: paymentIntent?.id,
          email: user?.email,
          time: new Date(),
        },

        enrolled_info: {
          email: user?.email,
          image: bookingData?.image,
          classId: bookingData?.classId,
          className: bookingData?.name,
          price: bookingData?.price,
          teacher_email: bookingData?.teacher_email,
          teacher_name: bookingData?.teacher_name,
          enrolled_date: new Date(),
          status: "paid",
        },
        update_class: {
          classId: bookingData?.classId,
          seats: bookingData?.seats - 1,
          enrolled: bookingData?.enrolled + 1,
        },
        selectedId: bookingData?._id,
      };
      axiosSecure
        .post("/payment", {
          ...paymentInfo,
        })
        .then((res) => {
          if (res?.data?.deletedCount) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Enroll Successful",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/dashboard/my_enrolled_class");
          }
        })
        .catch((error) => setPaymentError(error.message));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button id="btn-pay" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {paymentError && <p className="text-red-500 text-">{paymentError}</p>}
    </>
  );
};

export default CheckOutForm;
