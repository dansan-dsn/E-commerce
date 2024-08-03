import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdOutlineEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Help = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <div className="flex-grow overflow-y-auto">
        <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 font-sans">
          <h2 className="text-white capitalize text-3xl font-semibold my-3">
            contact us
          </h2>
          <form className="flex flex-col gap-10">
            <label htmlFor="name" className="relative">
              <FaUser className="absolute top-3 left-2 opacity-60" />
              <input
                type="text"
                name="name"
                id="name"
                className="outline-none border-none rounded pl-8 p-2 w-64 md:w-80"
                placeholder="Name"
                required
              />
            </label>
            <label htmlFor="email" className="relative">
              <MdOutlineEmail className="absolute top-3 left-2 opacity-60" />
              <input
                type="email"
                name="email"
                id="email"
                className="outline-none border-none rounded pl-8 p-2 w-64 md:w-80"
                placeholder="Email"
                required
              />
            </label>
            <textarea
              type="textarea"
              rows={4}
              className="outline-none border-none rounded p-2 w-64 md:md:w-80"
              placeholder="message"
              required
            ></textarea>
            <button
              type="submit"
              className="p-3 w-64 md:w-80 bg-blue-400 rounded-full hover:transition hover:scale-105 ease-in-out delay-75 hover:bg-blue-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Help;
