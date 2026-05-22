import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import img1 from '/src/assets/1.jpg'
import img2 from '/src/assets/2.jpg'
import img3 from '/src/assets/3.jpg'
import img4 from '/src/assets/4.jpg'
import img5 from '/src/assets/5.jpg'
import img6 from '/src/assets/6.jpg'
import img7 from '/src/assets/7.jpg'
import img8 from '/src/assets/8.jpg'
import img9 from '/src/assets/9.jpg'
import img10 from '/src/assets/10.jpg'
import img11 from '/src/assets/11.jpg'

const Branding = () => {
  return (
    <div>
      <div>
        <div className=" flex lg:flex-row flex-col lg:gap-20 ">
          <div className=" my-15 mx-10">
            <p className="mb-5 font-bold">.PORTFOLIO</p>
            <p className="font-semibold text-4xl">OUR WORK</p>
          </div>
          <div className="lg:mt-25 lg:w-100 w-80 lg:ml-65 mb-10">
            <p className="font-semibold">
              {" "}
              A selection of ideas, campaings, and experiences we've crafted for
              brands across
            </p>
          </div>
        </div>
        <hr className="text-gray-400 " />
        <div>
          <div className="flex lg:flex-row flex-col lg:gap-15 gap-5 mt-8  text-sm">
            <p>ALL</p>
            <p className="font-bold">BRANDING</p>
            <p>VIDEOS</p>
            <p>CONTENT</p>
            <p>DIGITAL</p>
            <p>EXPERIENCES</p>
          </div>
          <div className="my-10 grid lg:grid-cols-3 grid-cols-1 lg:mx-15 mx-7">
            <div>
              <img
                className="h-95 w-80 rounded-2xl bg-red-700 mb-4 mr-4 hover:bg-red-300 hover:shadow-2xl"
                src={img1} 
              />
            </div>
            <div>
              <img
                className="h-95 w-80 rounded-2xl bg-red-700 mb-4 mr-4 hover:bg-red-300 hover:shadow-2xl"
                src={img2} 
              />
            </div>
            <div>
              <img
                className="h-95 w-80 rounded-2xl bg-red-700 mb-4 mr-4 hover:bg-red-300 hover:shadow-2xl"
               src={img3} 
              />
            </div>
            <div>
              <img
                className="h-95 w-80 rounded-2xl bg-red-700 mb-4 mr-4 hover:bg-red-300 hover:shadow-2xl"
                src={img4} 
              />
            </div>
            <div>
              <img
                className="h-95 w-80 rounded-2xl bg-red-700 mb-4 mr-4 hover:bg-red-300 hover:shadow-2xl"
               src={img5} 
              />
            </div>
            <div>
              <img
                className="h-95 w-80 rounded-2xl bg-red-700 mb-4 mr-4 hover:bg-red-300 hover:shadow-2xl"
               src={img6} 
              />
            </div>
            <div>
              <img
                className="h-95 w-80 rounded-2xl bg-red-700 mb-4 mr-4 hover:bg-red-300 hover:shadow-2xl"
               src={img7} 
              />
            </div>
            <div>
              <img
                className="h-95 w-80 rounded-2xl bg-red-700 mb-4 mr-4 hover:bg-red-300 hover:shadow-2xl"
                 src={img8} 
              />
            </div>
          </div>
        </div>
        <hr className="text-gray-400 " />
        <p className="text-sm font-bold pt-10">BRANDS WE'VE WORKED WITH</p>
        <div className="flex lg:flex-row flex-col gap-10 lg:pl-30 h-65 mt-5 w-250 hover:border-2 rounded-2xl">
          <div className="w-60 "><img  src={img9}  /></div>
          <div className="w-60 "><img  src={img10}  /></div>
          <div className="w-60 "><img  src={img11}  /></div>
         
        </div>
        <div className="bg-gray-300 rounded-2xl lg:mt-20 mt-140 flex lg:flex-row flex-col lg:gap-30 gap-10 lg:h-50 h-90 ">
          <div className="w-80 lg:pt-20 pl-10 text-2xl font-bold">LET'S BUILD SOMETHING GREAT TOGETHER.</div>
          <div className="w-70 lg:pt-20 text-sm lg:pl-1 pl-10">We patner with ambitious brands to create ideas that inspire, connect and drive real impact</div>
          <div className="flex w-60 lg:pt-20 font-bold lg:pl-1 pl-10">START A PROJECT <FaArrowRight className="mt-1 ml-1"/> </div>
        </div>
        
      </div>
    </div>
  );
};

export default Branding;
