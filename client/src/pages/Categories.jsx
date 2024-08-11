import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from "../assets/images/flash1.png";
import { IoAdd, IoRemove } from "react-icons/io5";
import Item from "../components/cards/Item";

const CategorySection = ({ title, items }) => {
  const [onDisplay, setOnDisplay] = useState(false);

  const handleToggleDisplay = () => {
    setOnDisplay(!onDisplay);
  };

  return (
    <div className="px-2 md:px-4 lg:px-10 mb-6">
      <div className="relative w-full mxs:w-36 lg:w-60 m-1">
        <h6 className="font-semibold">{title}</h6>
        <div
          onClick={handleToggleDisplay}
          className="absolute top-1 right-0 font-extrabold cursor-pointer hover:scale-105 hover:font-bold"
        >
          {onDisplay ? <IoRemove /> : <IoAdd />}
        </div>
      </div>
      <div
        className={`p-5 font-sans leading-9 py-1 transition-all duration-300 ease-in-out transform overflow-hidden 
            ${onDisplay ? "block" : "hidden"}`}
      >
        <div className="flex flex-col">
          {items.map((item) => (
            <a
              key={item}
              href=""
              className="hover:bg-neutral-300 px-2 rounded capitalize font-light"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <div className="flex-grow overflow-y-auto">
        <section className="flex flex-col p-4 shadow-inner">
          <h1 className="text-center  py-5 text-4xl font-sans font-bold text-amber-600">
            Basic Accessories
          </h1>
          <h4 className="font-semibold text-3xl text-blue-600">
            Phone Accessories
          </h4>
          <div className="flex flex-col mxs:flex-row justify-between ">
            <div className="gap-1 bg-slate-200 text-xs md:text-base shadow-2xl">
              <CategorySection
                title="Phones"
                items={[
                  "Phone case",
                  "Screen Protectors",
                  "Chargers and cables",
                  "Headphones and earbuds",
                  "Smartwatch bands",
                ]}
              />
              <CategorySection
                title="Laptops"
                items={[
                  "Sleeves and bags",
                  "Stands",
                  "Docking station",
                  "Disks",
                ]}
              />
              <CategorySection
                title="Gaming"
                items={["Gaming headsets", "Keyboards and mice", "monitors"]}
              />
              <CategorySection
                title="Home office"
                items={["webcams", "microphones", "speakers"]}
              />
              <CategorySection
                title="Miscellaneous"
                items={[
                  "powerbanks",
                  "cable organisers",
                  "screen cleaning kits",
                ]}
              />
            </div>
            <div className="max-h-full">
              <div className="shadow-inner">
                <Item />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Categories;
