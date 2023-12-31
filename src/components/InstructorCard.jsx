import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const InstructorCard = ({ instructor }) => {
  const { name, image, students, email } = instructor || {};
  console.log(instructor);
  return (
    <div
      data-aos="fade-down"
      className="h-[400px] border relative overflow-hidden group"
    >
      <img src={image} className="h-full w-full" alt="" />
      <div className="w-full absolute bottom-0 left-0 bg-secondary bg-opacity-80 h-0 group-hover:h-full duration-500 ease-in-out">
        <div className="translate-y-[220px] text-white text-center ">
          <h3 className="text-3xl  font-bold">{name}</h3>

          <h4 className="text-lg mt-0 mb-1">{email}</h4>
          <p className=" ">Students: {students || 0}</p>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className=" p-1 bg-primary text-white text-lg hover:scale-110">
              <AiOutlineMail />
            </span>
            <span className=" p-1 bg-primary text-white text-lg hover:scale-110">
              <FaLinkedinIn />
            </span>
            <span className=" p-1 bg-primary text-white text-lg hover:scale-110">
              <AiOutlineWhatsApp />
            </span>
            <span className=" p-1 bg-primary text-white text-lg hover:scale-110">
              <CiFacebook />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
