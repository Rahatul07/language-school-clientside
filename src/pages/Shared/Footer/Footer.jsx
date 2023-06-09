import React from "react";
import logo from "../../../assets/logo2.png";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      <footer className="bg-secondary mt  px-10">
        <div className="container mx-auto py-8 px-4 ">
          <div className="flex flex-col md:flex-row ">
            <div className="w-full   py-10 mr-5  px-5 md:w-1/3 mb-5">
              <img className="w-10/12 pb-10" src={logo} alt="" />
              <li className="pb-3">
                <a href="#" className="text-gray-400 hover:text-primary">
                  About us
                </a>
              </li>
              <li className="pb-3">
                <a href="#" className="text-gray-400 hover:text-primary">
                  What we offer
                </a>
              </li>

              <li className="pb-3">
                <a href="#" className="text-gray-400 hover:text-primary">
                  Contact
                </a>
              </li>
            </div>
            <div className="w-full md:w-1/3   py-10 mr-5 pb-8 px-5 mb-5">
              <h4 className="text-white text-xl font-semibold mb-4">Courses</h4>
              <ul className="footer-links">
                <li className="pb-3">
                  <a href="#" className="text-gray-400 hover:text-primary">
                    Classroom courses
                  </a>
                </li>
                <li className="pb-3">
                  <a href="#" className="text-gray-400 hover:text-primary mb-3">
                    Virtual classroom courses
                  </a>
                </li>
                <li className="pb-3">
                  <a href="#" className="text-gray-400 hover:text-primary mb-3">
                    E-learning courses
                  </a>
                </li>
                <li className="pb-3">
                  <a href="#" className="text-gray-400 hover:text-primary ">
                    Video courses
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary pb-3">
                    Offline courses
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3   py-10 mr-5 pb-8 px-5 mb-5">
              <h4 className="text-white text-xl font-semibold mb-4">
                Community
              </h4>
              <ul className="footer-links">
                <li className="pb-3">
                  <a href="#" className="text-gray-400 hover:text-primary">
                    Learners
                  </a>
                </li>
                <li className="pb-3">
                  <a href="#" className="text-gray-400 hover:text-primary mb-3">
                    Partners
                  </a>
                </li>
                <li className="pb-3">
                  <a href="#" className="text-gray-400 hover:text-primary mb-3">
                    Developers
                  </a>
                </li>
                <li className="pb-3">
                  <a href="#" className="text-gray-400 hover:text-primary ">
                    Transaction
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary pb-3">
                    Teaching Center
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/3 mb-5  py-10  pb-8 px-5">
              <h4 className="text-white text-xl font-semibold mb-4">
                Connect With Us
              </h4>
              <ul className="social-media-links ">
                <li>
                  <a
                    href="#"
                    className="text-gray-400  flex items-center hover:text-primary mb-3 "
                  >
                    <BsFacebook />
                    <i className="pl-2">Facebook</i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary flex items-center mb-3"
                  >
                    <BsTwitter />
                    <i className=" pl-2">Twitter</i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary flex items-center mb-3"
                  >
                    <BsInstagram />
                    <i className=" pl-2">Instagram</i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary flex items-center"
                  >
                    <BsPinterest />
                    <i className="pl-2">Pinterest</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center mt-8">
            <hr className="w-16 border border-gray-600" />
            <p className="text-gray-400 mx-4">
              © 2023 Your educational Store. All rights reserved.
            </p>
            <hr className="w-16 border border-gray-600" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
