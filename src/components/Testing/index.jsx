import React, { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Testing = () => {
  const [theme, setTheme] = useState(false);

  const onClickIcon = () => {
    if (theme) {
    
    }
  };

  return (
    <div>
      <div className="bg-green-600 p-6">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-sans text-4xl font-bold text-gray-300">
            HARIHARAN
          </h1>
          <div className="flex flex-row items-center">
            <DarkModeIcon onClick={onClickIcon} />
            <button className="bg-yellow-400 text-white text-center font-sans text-base h-[40px] w-[100px] rounded-md ml-5">
              UPDATE
            </button>
          </div>
        </div>
      </div>
      <div className="h-screen w-screen bg-red-400"></div>
    </div>
  );
};

export default Testing;
