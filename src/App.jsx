import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex min-h-screen w-screen">
        <div className="flex-shrink-0 w-[20%] bg-red-300 sm:w-[16%] md:w-[12%] lg:w-[10%]">
          <Menu />
        </div>
        <div className="flex-grow bg-green-300 sm:w-[84%] md:w-[88%] lg:w-[90%] relative">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
