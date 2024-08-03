import React from "react";
import { Link } from "react-router-dom";
import { FaLuggageCart } from "react-icons/fa";

const footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="bg-slate-700 p-5 text-white">
        <div className="bg-slate-600 flex p-3 justify-around rounded-t md:rounded ">
          <div className="md:p-2">
            <h2 className="md:text-3xl font-extrabold  my-5 uppercase text-center text-emerald-500">
              Shopping
            </h2>
            <div className="flex gap-1 md:gap-4">
              <Link
                to="/dashboard"
                className=" px-1 md:px-4 py-1 text-xs md:text-lg bg-transparent rounded-full border cursor-pointer hover:bg-red-400 hover:border-none"
              >
                Shop Target
              </Link>
              <Link
                to="/dashboard"
                className="px-1 md:px-4 py-1 text-xs md:text-lg bg-transparent rounded-full border cursor-pointer hover:bg-red-400 hover:border-none"
              >
                Shop Overview
              </Link>
            </div>
          </div>
          <div className="md:p-2 relative">
            <h2 className="md:text-3xl font-extrabold my-5 uppercase text-center text-emerald-500">
              Contact us
            </h2>
            <div className="flex justify-end">
              <Link
                to="/contact-us"
                className="px-1 md:px-4 py-1 text-xs md:text-lg bg-transparent rounded-full border cursor-pointer hover:bg-red-400 hover:border-none"
              >
                Reach out
              </Link>
            </div>
          </div>
        </div>
        <nav className="bg-slate-500 flex justify-between md:px-20 py-4 relative z-40 md:mx-20 -mx-4 p-3 rounded-b-lg">
          <FaLuggageCart className="absolute top-2 left-56 text-9xl opacity-40 text-slate-600" />
          <div className="flex flex-col z-10">
            <h2 className="md:text-2xl uppercase font-extrabold text-amber-900">
              Learn
            </h2>
            <a
              href=""
              className="text-blue-700 opacity-100 hover:underline hover:opacity-70"
            >
              Faqs
            </a>
            <a
              href=""
              className="text-blue-700 opacity-100 hover:underline hover:opacity-70 "
            >
              Privacy Policy
            </a>
            <a
              href=""
              className="text-blue-700 opacity-100 hover:underline hover:opacity-70 "
            >
              Terms of use
            </a>
            <a
              href=""
              className="text-blue-700 opacity-100 hover:underline hover:opacity-70 "
            >
              Help
            </a>
          </div>
          <div className="flex flex-col z-10">
            <h2 className="md:text-2xl uppercase font-extrabold text-amber-900">
              Social
            </h2>
            <a
              href=""
              className="text-blue-700 opacity-100 hover:underline hover:opacity-70"
            >
              Facebook
            </a>
            <a
              href=""
              className="text-blue-700 opacity-100 hover:underline hover:opacity-70 "
            >
              Twitter(x)
            </a>
            <a
              href=""
              className="text-blue-700 opacity-100 hover:underline hover:opacity-70 "
            >
              Whatsapp
            </a>
            <a
              href=""
              className="text-blue-700 opacity-100 hover:underline hover:opacity-70 "
            >
              Instagram
            </a>
          </div>

          <div className="flex flex-col z-10">
            <h2 className="md:text-2xl uppercase font-extrabold text-amber-900">
              categories
            </h2>
            <p className="text-blue-700 opacity-100 ">Laptops</p>
            <p className="text-blue-700 opacity-100 ">Desktops</p>
            <p className="text-blue-700 opacity-100 ">Phones</p>
            <p className="text-blue-700 opacity-100 ">Home Theater</p>
            <p className="text-blue-700 opacity-100 "></p>
          </div>
          <div className="hidden items-center flex-wrap font-extrabold z-10">
            Our Products are kept in track.
            <br />
            Reachout Effectively
          </div>
          <FaLuggageCart className="absolute top-2 right-56 text-9xl opacity-40 text-slate-600" />
        </nav>
        <div>&copy;{currentYear}Buy now. All rights reserved</div>
      </div>
    </>
  );
};

export default footer;
