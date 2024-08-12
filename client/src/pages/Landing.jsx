import React from "react";
import { Link } from "react-router-dom";
import LandingNavbar from "../components/LandingNavbar";
import Carousel from "../components/Carousel";
import Item from "../components/cards/Item";
import DisplayReview from "../components/cards/DisplayReview";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <>
      <div className="flex flex-col h-screen overflow-hidden">
        <LandingNavbar />
        <div className="flex-grow overflow-y-auto">
          <div className="bg-blue-400">
            <h2 className="p-3 -mb-3 text-white text-center uppercase font-bold">
              products on Discount
            </h2>
            <Carousel />
            <div>
              <div className="flex justify-between py-2 px-10 text-white mt-1">
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
    </>
  );
};

export default Landing;
