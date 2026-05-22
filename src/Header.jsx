import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex lg:gap-60 gap-10  pt-10 pb-4">
        <div className="text-3xl font-bold">Conne</div>
        <div className="hidden md:flex lg:gap-15 font-semibold mt-1 ">
          <p>About</p>
          <p>Services</p>
          <p>Contact</p>
          <p>Portfolio</p>
        </div>
        <div>
          <button className="bg-black rounded-2xl  text-white w-30 h-7 ml-7 mt-1 ">
            Let's Talk <FaArrowRight className="text-white"/>
          </button>
         
        </div>
        <div>
          <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </div>

      <hr className="text-gray-400 " />

      {open && (
        <div className="md:hidden bg-white shadow-md flex flex-col items-center gap-4 py-4 w-60 ml-50 ">
          <div
            onClick={() => setOpen(!open)}
            className=" flex flex-col gap-2  ml-30"
          >
            <div className=" mr-17 font-semibold mt-1 ">
              <p>About</p>
              <p>Services</p>
              <p>Contact</p>
              <p>Portfolio</p>
           
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
