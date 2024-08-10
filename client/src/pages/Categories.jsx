import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from "../assets/images/flash1.png";
import { IoAdd, IoRemove } from "react-icons/io5";

const items = [
  {
    id: 1,
    image: img,
    category: "flash",
    name: "Usb Aluminium type C",
    price: 20,
    discount: 10,
  },
  {
    id: 2,
    image: img,
    category: "Phone",
    name: "Usb Aluminium type C",
    price: 20,
    discount: 10,
  },
  {
    id: 3,
    image: img,
    category: "flash",
    name: "Usb Aluminium type C",
    price: 20,
    discount: 10,
  },
  {
    id: 4,
    image: img,
    category: "Phone",
    name: "Usb Aluminium type C",
    price: 20,
    discount: 10,
  },
];

const Categories = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <div className="flex-grow overflow-y-auto">
        <section className="flex flex-col p-4 ">
          <h1 className="text-center">Basic accessories</h1>
          <h4 className="font-extrabold text-3xl">Phones Accessories</h4>
          <div className="border border-red-600 flex justify-between">
            <div className="grid grid-cols-1 border border-blue-300 gap-1 bg-slate-200">
              <div className="px-4 border border-gray-600">
                <div className="relative w-72 border border-black m-1">
                  <h6 className="font-semibold">Phone</h6>
                  <IoAdd className="absolute top-1 right-0 font-extrabold cursor-pointer " />
                </div>
                <div className="px-5 font-sans leading-9">
                  <p>Phone case</p>
                  <p>Screen Protectors</p>
                  <p>Chargers and cables</p>
                  <p>headphone and earbuds</p>
                  <p>smartwatch bands</p>
                </div>
              </div>
              <div className="px-4 border border-gray-600">
                <div className="relative w-72 border border-black m-1">
                  <h6 className="font-semibold">Phone</h6>
                  <IoAdd className="absolute top-1 right-0 font-extrabold cursor-pointer " />
                </div>
                <div className="px-5 font-sans leading-9">
                  <p>Phone case</p>
                  <p>Screen Protectors</p>
                  <p>Chargers and cables</p>
                  <p>headphone and earbuds</p>
                  <p>smartwatch bands</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-11 boder border-pink-600">
              <div className="boder border-black"> cow </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Categories;
