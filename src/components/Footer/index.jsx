// import React from "react";

// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import MailIcon from "@mui/icons-material/Mail";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import XIcon from "@mui/icons-material/X";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import CopyrightIcon from "@mui/icons-material/Copyright";

// const Footer = () => {
//   return (
//     <div className="bg-blue-950 w-screen pt-5 pb-5">
//       <h1 className="font-sans text-3xl font-bold text-white text-center pt-10 pb-10">
//         GET IN TOUCH
//       </h1>
//       <div className="flex flex-row justify-around items-center mt-10">
//         <div className="flex flex-col justify-center items-center">
//           <div className="bg-blue-500 h-20 w-20 flex flex-row justify-center items-center rounded-full hover:bg-orange-400">
//             <LocationOnIcon className="text-white text-4xl" />
//           </div>
//           <p className="text-white text-base font-sans mt-5">
//             location
//           </p>
//         </div>
//         <div className="flex flex-col justify-center items-center">
//           <div className="bg-blue-500 h-20 w-20 flex flex-row justify-center items-center rounded-full hover:bg-orange-400">
//             <LocalPhoneIcon className="text-white" />
//           </div>
//           <p className="text-white text-base font-sans mt-5">+91 785412098</p>
//         </div>
//         <div className="flex flex-col justify-center items-center">
//           <div className="bg-blue-500 h-20 w-20 flex flex-row justify-center items-center rounded-full hover:bg-orange-400">
//             <MailIcon className="text-white" />
//           </div>
//           <p className="text-white text-base font-sans mt-5">
//             xyz143@gmail.com
//           </p>
//         </div>
//       </div>

//       <div>
//         <h1 className="font-sans text-3xl font-bold  text-white text-center pt-10 pb-10">
//           FOLLOW US
//         </h1>
//         <div className="flex flex-row justify-center items-center">
//           <div className="bg-white w-56 p-1 flex justify-center items-center">
//             <FacebookIcon className="mr-2 text-blue-600" />
//             <LinkedInIcon className="mr-2 text-blue-400" />
//             <InstagramIcon className="mr-2 text-pink-600" />
//             <YouTubeIcon className="mr-2 text-red-600" />
//             <XIcon />
//           </div>
//         </div>
//         <hr className="border-[2px] mt-20 ml-10 mr-10" />
//         <div className="flex flex-row justify-center items-center mt-10">
//           <CopyrightIcon className="text-white" />
//           <p className="text-white text-lg font-sans">
//             2025 All Rights Reserved. By HTML Design
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <div className="bg-blue-950 w-screen pt-5 pb-5">
      <h1 className="font-sans text-3xl font-bold text-white text-center pt-10 pb-10">
        GET IN TOUCH
      </h1>
      <div className="flex flex-col md:flex-row justify-around items-center mt-10 relative">
        <div className="absolute top-16 left-[250px] right-[250px] h-[1px] bg-white z-0"></div>
        <div className="flex flex-col justify-center items-center relative z-10">
          <div className="bg-blue-500 h-20 w-20  flex flex-row justify-center items-center rounded-full hover:bg-orange-400">
            <LocationOnIcon className="text-white text-4xl" />
          </div>
          <p className="text-white text-base font-sans mt-5">location</p>
        </div>
        <div className="flex flex-col justify-center items-center relative z-10">
          <div className="bg-blue-500 h-20 w-20 flex flex-row justify-center items-center rounded-full mt-7 hover:bg-orange-400">
            <LocalPhoneIcon className="text-white" />
          </div>
          <p className="text-white text-base font-sans mt-5">+91 785412098</p>
        </div>
        <div className="flex flex-col justify-center items-center relative z-10">
          <div className="bg-blue-500 h-20 w-20 flex flex-row justify-center items-center rounded-full mt-7 hover:bg-orange-400">
            <MailIcon className="text-white" />
          </div>
          <p className="text-white text-base font-sans mt-5">
            xyz143@gmail.com
          </p>
        </div>
      </div>

      <div>
        <h1 className="font-sans text-3xl font-bold  text-white text-center pt-10 pb-10">
          FOLLOW US
        </h1>
        <div className="flex flex-row justify-center items-center">
          <div className="bg-white w-44 p-1 flex justify-center items-center">
            <FacebookIcon className="mr-2 text-blue-600" />
            <LinkedInIcon className="mr-2 text-blue-400" />
            <InstagramIcon className="mr-2 text-pink-600" />
            <YouTubeIcon className="mr-2 text-red-600" />
            <XIcon />
          </div>
        </div>
        <hr className="border-[1px] mt-20 ml-10 mr-10" />
        <div className="flex flex-row justify-center items-center mt-10">
          <CopyrightIcon className="text-white" />
          <p className="text-white text-lg font-sans">
            2025 All Rights Reserved. By HTML Design
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
