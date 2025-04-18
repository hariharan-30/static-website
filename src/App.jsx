import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
// import Navbar from "./components/Navbar";
// import HomeService from "./components/HomeService";
// import ServiceCard from "./components/ServiceCard";
// import About from "./components/About";
// import Client from "./components/Client";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage"
// import Testing from "./components/Testing";





const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route exact path="/header" element={<Header />} />
    //     <Route exact path="/landingpage" element={<LandingPage />} />
    //     <Route exact path="/navbar" element={<Navbar />} />
    //     <Route exact path="/service" element={<HomeService />} />
    //     <Route exact path="/card" element={<ServiceCard />} />
    //     <Route exact path="/about" element={<About />} />
    //     <Route exact path="/client" element={<Client />} />
    //     <Route exact path="/contact" element={<Contact />} />
    //     <Route exact path="/footer" element={<Footer />} />
    //     <Route exact path="/testing" element={<Testing />} />
    //   </Routes>
    // </BrowserRouter>
    <div>
      <LandingPage />
    </div>
  );
};

export default App;
