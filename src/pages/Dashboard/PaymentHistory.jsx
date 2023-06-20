import moment from "moment/moment";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: payments = [] } = useQuery({
    queryKey: ["payment history", user?._id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment_history/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <table className="table">
        {/* head */}
        <thead>
          <tr className="border-spacing-3 border-secondary border-b">
            <th className="text-base">#</th>
            <th className="text-base">Amount</th>
            <th className="text-base">Transaction Id</th>
            <th className="text-base">Email</th>
            <th className="text-base">Time</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={payment._id}>
              <td>{index + 1}</td>
              <td>${payment?.amount}</td>
              <td>{payment?.transactionId}</td>
              <td>{payment?.email}</td>

              <td>{moment(payment?.time).format("MMMM Do YYYY, h:mm a")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
