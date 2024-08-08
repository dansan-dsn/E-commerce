import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaEdit } from "react-icons/fa";
import img from "../assets/images/flash1.png";
import Item from "../components/cards/Item";

const Account = () => {
  const user = [
    {
      name: "Dansan",
      email: "ddryn979@gmail.com",
      phone: 12345,
      city: "Kyanja",
      country: "Uganda",
      password: "helloDan",
      address: "Rutooma, Rurehe",
    },
  ];

  const orders = [
    {
      id: 1,
      image: img,
      category: "flash",
      name: "Usb Aluminium type C",
      price: 20,
      discount: 10,
    },
  ];

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <div className="flex-grow overflow-y-auto ">
        {user.map((person) => {
          return (
            <div className="bg-slate-300">
              <div className="grid md:grid-cols-2 grid-cols-1 p-5 gap-5 place-items-center">
                <article className="flex gap-4 shadow-2xl p-3 rounded w-full bg-gray-300">
                  <h1 className="font-extrabold  md:text-3xl capitalize font-sans text-amber-700">
                    Personal Info
                  </h1>
                  <div className="flex flex-col gap-5 mt-6 relative font-semibold md:w-3/4">
                    <p className="">{person.name}</p>
                    <span>{person.email}</span>
                    <span>{person.phone}</span>
                    <span>{person.address}</span>
                    <span>{person.city}</span>
                    <span>{person.country}</span>
                    <FaEdit
                      className="absolute -left-28 md:-left-32 lg:-left-48 size-5 md:size-8 bottom-0 cursor-pointer hover:text-blue-500"
                      title="Edit"
                    />
                  </div>
                </article>
                <article className="shadow-2xl rounded md:w-3/4 bg-gray-300 p-2">
                  <h1 className="font-extrabold text-3xl capitalize font-sans text-center text-amber-700">
                    payment methods
                  </h1>
                  <div className=" mt-3 flex flex-col md:flex-row gap-2 p-3">
                    <button className="bg-red-300 md:w-1/3 p-3 rounded transition hover:scale-105 hover:shadow-lg ">
                      <h6 className="font-bold">Mobile Payment</h6>
                      <p></p>
                    </button>
                    <button className="bg-red-300 md:w-1/3 p-3 rounded transition hover:scale-105 hover:shadow-lg">
                      <h6 className="font-bold">Pay cash</h6>
                    </button>
                    <button className="bg-red-300 md:w-1/3 p-3 rounded transition hover:scale-105 hover:shadow-lg ">
                      <h6 className="font-bold">Use Credit card</h6>
                    </button>
                  </div>
                </article>
              </div>
              <article className="shadow-2xl bg-gray-300 py-4">
                <h1 className="text-center font-extrabold text-3xl text-amber-700">
                  Wish List
                </h1>
                <Item />
              </article>
            </div>
          );
        })}
        <Footer />
      </div>
    </div>
  );
};

export default Account;
