import React from "react";
import slider from "../../assets/slider.png";
import Header from "../Header";
import Navbar from "../Navbar";
import ServiceCard from "../ServiceCard";
import HomeService from "../HomeService";
import About from "../About";
import Client from "../Client";
import Contact from "../Contact";
import Footer from "../Footer";

const LandingPage = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
        <Navbar />
      </div>
      <div className="bg-blue-200 w-screen pt-[100px]">
        <div
          className="flex flex-col md:flex-row justify-around items-center"
          id="home"
        >
          <div className="w-[300px] mt-24  md:w-[600px] ml-12 md:mt-0 md:pl-0 lg:ml-12">
            <h1 className="font-sans text-4xl font-bold text-blue-700 mb-4">
              Repair and Maintenance Services
            </h1>
            <p className="font-sans text-[18px] font-normal text-[#6b7280]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum
              voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur,
              tempora iusto, ad possimus soluta hic praesentium mollitia
              consequatur beatae, aspernatur culpa.
            </p>
            <button className="h-10 w-40 bg-orange-600 text-white font-medium text-center text-base mt-7 md:mb-10">
              READ MORE
            </button>
          </div>
          <div>
            <img src={slider} className="w-100 mt-5 h-full md:mt-14" />
          </div>
        </div>
      </div>

      <div id="about">
        <About />
      </div>

      <div id="services">
        <HomeService className="mt-10" />
        <div className="mb-10">
          <ServiceCard />
        </div>
      </div>

      <div id="clients">
        <Client />
      </div>

      <div id="contact" className="mt-10">
        <Contact />
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
