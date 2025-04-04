import React from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from '@mui/icons-material/Email';

const Header = () => {
  return (
    <div className=" bg-black w-screen md:flex flex-row justify-between items-center p-7">
      <div className="flex flex-row items-center mb-5 md:mb-0">
        <CallIcon className="text-orange-500"/>
        <p className="text-white pl-2">Call : +01 123455678990</p>
      </div>
      <div className="flex flex-row items-center">
        <EmailIcon className="text-orange-500"/>
        <p className="text-white pl-2">Email : mail@domain.com</p>
      </div> 
    </div>
  );
};

export default Header;
