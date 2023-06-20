import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router";

import useAxiosSecure from "../../hooks/useAxiosSecure";
import CheckOutForm from "../../components/CheckOutForm/CheckOutForm";
import { useQuery } from "@tanstack/react-query";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);

const Payment = () => {
  const { id } = useParams();
  const [axiosSecure] = useAxiosSecure();

  const { data: bookingData = [] } = useQuery({
    queryKey: ["payment", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`selected_classes/${id}`);
      return res.data;
    },
  });

  return (
    <Elements stripe={stripePromise}>
      <CheckOutForm bookingData={bookingData} />
    </Elements>
  );
};

export default Payment;
