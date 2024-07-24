import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <div className="flex-grow overflow-y-auto ">
        <div className="bg-blue-300 ">
          <div className="text-center bg-amber-600 mt-1">
            <h1 className="p-3 text-center uppercase font-bold">
              Treding Products
            </h1>
          </div>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Home;
