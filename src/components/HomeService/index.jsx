import React from "react";
import logo from "../../assets/logo.png";

import "./index.css";

const HomeService = () => {
  return (
    <div className="bg-blue-200 w-screen  md:flex flex-row justify-center items-center p-10">
      <div className="hidden md:block">
        <img src={logo} className="md:w-full" />
      </div>
      <div>
        <div className="md:w-[480px]">
          <h1 className="font-sans text-2xl md:text-4xl font-bold text-blue-700">
            We Provide Professional Home Services.
          </h1>
          <p className="font-sans text-base text-black leading-6 mt-7">
            randomised words which don't look even slightly believable. If you
            are going to use a passage of Lorem Ipsum, you need to be sure there
            isn't anything embarrassing hidden in the middle of text. All
            randomised words which don't look even slightly
          </p>
          <button className="h-10 w-40 bg-orange-600 shadow-md shadow-orange-300 text-white font-medium text-center text-base mt-7">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeService;
