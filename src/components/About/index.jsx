import React from "react";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

import about from "../../assets/about.jpg";

const About = () => {
  return (
    <div className="pt-10 pb-10">
      <div className="md:mt-[-100px]">
        <div className="flex flex-col items-center md:flex-row justify-center">
          <div className="bg-white shadow-lg mb-5 w-80 mt-7 h-[200px] flex flex-col justify-center items-center hover:bg-orange-500 transition-colors duration-300 md:ml-5 md:mt-0 md:w-96">
            <div>
              <PlumbingIcon className="text-lg text-[#6b7280] mb-5" />
              <h2 className="font-sans font-semibold text-lg text-[#6b7280]">
                REPAIR
              </h2>
            </div>
          </div>

          <div className="bg-orange-500 shadow-lg mb-5 w-80 h-[200px] flex flex-col justify-center items-center md:ml-5 md:w-96">
            <div>
              <HomeWorkIcon className="text-white mb-5" />
              <h2 className="font-sans font-semibold text-lg text-white ">
                IMPROVE
              </h2>
            </div>
          </div>
          <div className="bg-white shadow-lg mb-5 w-80  h-[200px] flex flex-col justify-center items-center hover:bg-orange-500 transition-colors duration-300 md:ml-5 md:mt-0 md:w-96">
            <div>
              <PlumbingIcon className="text-lg text-[#6b7280] mb-5" />
              <h2 className="font-sans font-semibold text-lg text-[#6b7280]">
                MAINTAIN
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 mb-10">
        <div className="p-10 pt-0 mr-10  flex flex-col justify-center">
          <h1 className="font-sans text-4xl font-bold text-black ">About us</h1>
          <p className="font-sans text-base font-normal text-[#6b7280] mt-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomisedThere are many variations of passages of Lorem
            Ipsum available, but the majority have suffered alteration in some
            form, by injected humour, or randomised
          </p>
          <button className="bg-blue-600 text-white h-10 w-40 shadow-lg shadow-blue-300  font-medium text-center text-base mt-7 ">
            READ MORE
          </button>
        </div>
        <img src={about} />
      </div>
    </div>
  );
};

export default About;
