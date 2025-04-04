// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="bg-blue-200 p-5">
//       <div className="flex flex-row justify-between items-center">
//         <h1 className="text-blue-700 font-sans text-2xl font-bold md:ml-10">
//           INANCE
//         </h1>

//         <div className="md:hidden">
//           {isMobileMenuOpen ? (
//             <CloseIcon className="text-black" onClick={toggleMobileMenu} />
//           ) : (
//             <MenuIcon className="text-black" onClick={toggleMobileMenu} />
//           )}
//         </div>

//         <div className="hidden md:block">
//           <ul className="flex flex-row justify-end">
//             <li>
//               <Link className="text-blue-700 text-[22px] font-sans font-medium hover:text-blue-500">
//                 Home
//               </Link>
//             </li>
//             <li className="ml-10">
//               <Link className="text-black text-[22px] font-normal font-sans hover:text-blue-700">
//                 About
//               </Link>
//             </li>
//             <li className="ml-10">
//               <Link className="text-black text-[22px] font-normal font-sans hover:text-blue-700">
//                 Services
//               </Link>
//             </li>
//             <li className="ml-10 mr-10">
//               <Link className="text-black text-[22px] font-normal font-sans hover:text-blue-700">
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {isMobileMenuOpen && (
//         <div className="md:hidden">
//           <ul className="flex flex-col items-center bg-blue-300 p-4">
//             <li className="py-2">
//               <Link
//                 className="text-blue-700 text-[22px] font-medium font-sans hover:text-blue-500"
//                 onClick={toggleMobileMenu}
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="py-2">
//               <Link
//                 className="text-black text-[22px] font-normal font-sans hover:text-blue-700"
//                 onClick={toggleMobileMenu}
//               >
//                 About
//               </Link>
//             </li>
//             <li className="py-2">
//               <Link
//                 className="text-black text-[22px] font-normal font-sans hover:text-blue-700"
//                 onClick={toggleMobileMenu}
//               >
//                 Services
//               </Link>
//             </li>
//             <li className="py-2">
//               <Link
//                 className="text-black text-[22px] font-normal font-sans hover:text-blue-700"
//                 onClick={toggleMobileMenu}
//               >
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-200 w-screen p-5">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-blue-700 font-sans text-2xl font-bold">
          INANCE
        </h1>

        <div className="md:hidden">
          {isMobileMenuOpen ? (
            <CloseIcon className="text-black" onClick={toggleMobileMenu} />
          ) : (
            <MenuIcon className="text-black" onClick={toggleMobileMenu} />
          )}
        </div>

        <div className="hidden md:block">
          <ul className="flex flex-row justify-end">
            <li>
              <a
                href="#home"
                className="text-blue-700 text-[22px] font-sans font-medium hover:text-blue-500"
              >
                Home
              </a>
            </li>
            <li className="ml-10">
              <a
                href="#about"
                className="text-black text-[22px] font-normal font-sans hover:text-blue-700"
              >
                About
              </a>
            </li>
            <li className="ml-10">
              <a
                href="#services"
                className="text-black text-[22px] font-normal font-sans hover:text-blue-700"
              >
                Services
              </a>
            </li>
            <li className="ml-10">
              <a
                href="#contact"
                className="text-black text-[22px] font-normal font-sans hover:text-blue-700"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center bg-blue-300 p-4">
            <li className="py-2">
              <a
                href="#home"
                className="text-blue-700 text-[22px] font-medium font-sans hover:text-blue-500"
                onClick={toggleMobileMenu}
              >
                Home
              </a>
            </li>
            <li className="py-2">
              <a
                href="#about"
                className="text-black text-[22px] font-normal font-sans hover:text-blue-700"
                onClick={toggleMobileMenu}
              >
                About
              </a>
            </li>
            <li className="py-2">
              <a
                href="#services"
                className="text-black text-[22px] font-normal font-sans hover:text-blue-700"
                onClick={toggleMobileMenu}
              >
                Services
              </a>
            </li>
            <li className="py-2">
              <a
                href="#contact"
                className="text-black text-[22px] font-normal font-sans hover:text-blue-700"
                onClick={toggleMobileMenu}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
