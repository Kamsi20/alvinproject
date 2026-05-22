import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col lg:gap-30 gap-20 lg:h-40 bg-gray-800 text-white mt-10 ">
        <div className="text-3xl font-bold w-100 lg:p-10">
          Let's build something great together
        </div>
        <div className="flex bg-black rounded-2xl h-12 px-4 mt-10 py-1 lg:ml-80 ">
          Start a Project <FaArrowRight className="mt-1 ml-1 " />
        </div>
      </div>

      <div className="bg-black text-white lg:px-25 px-7 lg:py-10">
        <div className="grid lg:grid-cols-4 ">
          <div className="">
            <div className="text-4xl font-bold">Conne</div>
            <div>
              <p className="py-10 w-60 ">
                A creative marketing agency building brands that grow.
              </p>
              <p className="pb-10 flex gap-10">
                <FaInstagram
                  size={30}
                  className="bg-white text-black rounded-md"
                />{" "}
                <FaXTwitter
                  size={30}
                  className="bg-white text-black rounded-md"
                />
              </p>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-lg pt-10 pb-5">Navigation</h1>
            <p>About</p>
            <p>Services</p>
            <p>Contact</p>
            <p>Portfolio</p>
          </div>
          <div>
            <h1 className="font-bold text-lg pt-10 pb-5">Services</h1>
            <p>Advertising</p>
            <p>Media Management</p>
            <p>Cause Marketing</p>
            <p>Content Development</p>
            <p>Story Telling</p>
            <p>Branding and Design</p>
          </div>
          <div>
            <h1 className="font-bold text-lg pt-10 pb-5">Let's Connect</h1>
            <p>info@conneltd.com</p>
            <p>+2349909889847</p>
            <p>www,conneltd.com</p>
          </div>
        </div>
        <hr className="my-5"/>
        <div>
         <small> <p className="flex gap-3"><FaRegCopyright className="mt-1"/> 2026 Conne. All rights reserved.</p></small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
