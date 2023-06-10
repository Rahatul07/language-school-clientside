import { FadeLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <FadeLoader size={100} className="text-primary" />
      {/* <FadeLoader size={100} color="primary" /> */}
    </div>
  );
};

export default Loader;
