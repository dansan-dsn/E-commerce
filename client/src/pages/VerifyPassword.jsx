import React from "react";
import backgroundImg from "../assets/images/lock.jpg";
import useImage from "../assets/images/shopping cart.jpeg";

const VerifyPassword = () => {
  return (
    <>
      <div
        className="p-2 min-h-screen flex bg-cover bg-center text-black "
        style={{
          backgroundImage: `url(${useImage})`,
        }}
      >
        <div
          className="flex border shadow-2xl w-full md:w-3/4 px-6 md:px-36 justify-center items-center rounded-xl bg-cover bg-center flex-col"
          style={{
            backgroundImage: `url(${backgroundImg})`,
          }}
        >
          <h2 className="text-2xl font-extrabold">Reset Password</h2>
          <form className="flex flex-col">
            <p className="text-center mt-4 text-neutral-900">
              Please enter the code we sent to your email
            </p>
            <span className="mt-5 font-bold">code</span>
            <label htmlFor="" className="ml-6">
              <input
                type="text"
                maxLength="1"
                className="w-10 h-10 text-center bg-white border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 rounded mr-3 hide-caret"
                placeholder="_"
              />
              <input
                type="text"
                maxLength="1"
                className="w-10 h-10 text-center bg-white border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 rounded mr-3 hide-caret"
                placeholder="_"
              />
              <input
                type="text"
                maxLength="1"
                className="w-10 h-10 text-center bg-white border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 rounded mr-3 hide-caret"
                placeholder="_"
              />
              <input
                type="text"
                maxLength="1"
                className="w-10 h-10 text-center bg-white border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 rounded mr-3 hide-caret"
                placeholder="_"
              />
              <input
                type="text"
                maxLength="1"
                className="w-10 h-10 text-center bg-white border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 rounded mr-3 hide-caret"
                placeholder="_"
              />
            </label>
            <button
              type="submit"
              className="w-full mt-10 p-2 rounded bg-amber-700 hover:bg-amber-600 text-white"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default VerifyPassword;
