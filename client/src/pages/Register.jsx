import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import Password from "../components/Password";
import backgroundImg from "../assets/images/pexels-karolina-grabowska-5632382.jpg";
import { validatePassword, validateEmail } from "../utils/validator";

const Register = () => {
  return (
    <div
      className="p-2 min-h-screen flex bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="flex border shadow-2xl w-full md:w-3/4 px-6 md:px-36 justify-center items-center rounded-l-xl bg-slate-200">
        <div className=" leading-10 m-2">
          <h2 className="font-bold text-2xl text-center mb-5">
            Register Account
          </h2>
          <div className="flex ">
            <Link
              to="/register"
              className="w-full border border-blue-400 hover:bg-blue-600 relative rounded text-center"
            >
              <FcGoogle className="size-6 absolute bottom-2 left-6" />
              Google
            </Link>
          </div>
          <div className="flex justify-center mt-10">
            <span className="hidden md:block border-t-2 border-neutral-300 w-16 mr-4"></span>
            <span className="-mt-5 text-center  md:ml-0 ">
              or continue with email
            </span>
            <span className="hidden md:block border-t-2 border-neutral-300 w-16 ml-4"></span>
          </div>
          <form className="flex flex-col items-center">
            <label htmlFor="email" className="mb-5 relative flex text-gray-400">
              <MdOutlineEmail className="absolute left-1 top-4 size-6" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="py-2 rounded px-8 w-full bg-slate-300 text-neutral-700"
              />
            </label>
            <Password placeholder={"Password"} />
            <div className="flex justify-between">
              <p>Have Account?</p>
              <Link
                to="/login"
                className="underline opacity-70 mx-3 text-blue-600 hover:no-underline hover:opacity-100"
              >
                Login
              </Link>
            </div>
            <button
              type="submit"
              className="my-3 w-full px-10 rounded bg-blue-900 font-semibold hover:bg-blue-500"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
      {/* <div className=" hidden md:block md:w-3/4 text-white border shadow-2xl rounded-r-xl">
        <img src={img} alt="stocks" />
      </div> */}
    </div>
  );
};

export default Register;
