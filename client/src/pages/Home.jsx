import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <div className="flex-grow overflow-y-auto"></div>
    </div>
  );
};

export default Home;
