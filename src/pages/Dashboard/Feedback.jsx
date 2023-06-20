import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Feedback = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [axiosSecure] = useAxiosSecure();
  const handleFeedback = (event) => {
    event.preventDefault();
    const feedback = event.target?.feedback?.value;
    console.log("feedback", feedback);

    axiosSecure
      .patch(`/feedback/classes/${id}`, {
        feedback: feedback,
      })
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank you so much!",
            showConfirmButton: false,
            timer: 1000,
          });
          navigate("/dashboard/manage_classes");
        }
      });
  };

  return (
    <form onSubmit={handleFeedback}>
      <textarea
        name="feedback"
        className="w-full focus:outline-none p-5"
        id=""
        cols="30"
        rows="10"
        placeholder="Please provide you feedback"
      ></textarea>
      <input
        className="btn btn-secondary mt-4"
        type="submit"
        value="Send Feedback"
      />
    </form>
  );
};

export default Feedback;
