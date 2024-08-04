import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaEdit } from "react-icons/fa";

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
      order: {
        item: "banger",
        price: 200,
        category: "speaker",
      },
    },
  ];
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <div className="flex-grow overflow-y-auto ">
        {user.map((person) => {
          return (
            <div className="flex justify-around py-10 bg-slate-300">
              <div className="flex gap-4 m-3 p-4 shadow-2xl rounded md:w-1/3 place-content-center bg-gray-300">
                <h1 className="font-extrabold text-3xl capitalize font-sans text-amber-700">
                  Personal Info
                </h1>
                <div className="flex flex-col gap-5 mt-6 relative font-semibold">
                  <p className="">{person.name}</p>
                  <span>{person.email}</span>
                  <span>{person.phone}</span>
                  <span>{person.address}</span>
                  <span>{person.city}</span>
                  <span>{person.country}</span>
                  <FaEdit
                    className="absolute right-80 size-10 bottom-0 cursor-pointer hover:text-blue-500"
                    title="Edit"
                  />
                </div>
              </div>
              <div className="m-3 p-4 shadow-2xl rounded md:w-1/3 bg-gray-300">
                <h1 className="font-extrabold text-3xl capitalize font-sans text-center text-amber-700">
                  Your Orders
                </h1>
                <div className=" mt-3"></div>
              </div>
            </div>
          );
        })}
        <Footer />
      </div>
    </div>
  );
};

export default Account;
