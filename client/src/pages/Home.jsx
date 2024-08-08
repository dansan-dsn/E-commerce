import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Item from "../components/cards/Item";
import DisplayReview from "../components/cards/DisplayReview";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <div className="flex-grow overflow-y-auto">
        <div className="bg-blue-300">
          <div className="text-center bg-fuchsia-600 mt-1">
            <h1 className="p-3 text-center uppercase font-bold">
              products on Discount
            </h1>
          </div>
          <Carousel />
          <div>
            <div className="flex justify-between py-2 px-10 bg-fuchsia-600 mt-1">
              <p className="font-semibold">New Arrivals</p>
              <Link
                to="/categories"
                className="font-semibold uppercase hover:text-gray-600"
              >
                See All
              </Link>
            </div>
            <Item />
          </div>
          <DisplayReview />
          <Reviews />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
