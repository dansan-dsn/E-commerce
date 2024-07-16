import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { TbPasswordMobilePhone } from "react-icons/tb";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className=" p-2 border border-red-300 bg-blue-300 min-h-screen">
      <div className=" flex">
        <div className="w-full md:w-3/4 py-24 px-6 md:px-36 leading-10">
          <h2 className="font-bold text-2xl text-center mb-5">
            Register to your Account
          </h2>
          <div className="flex justify-evenly py-5">
            <Link className="border border-blue-600 hover:bg-blue-600 text-white mr-3 px-8 rounded flex">
              <FcGoogle className="mt-3 -ml-3 mr-3" />
              Google
            </Link>
            <Link className="border border-black hover:bg-slate-900 text-white px-8 rounded flex">
              <FaGithub className="mt-3 -ml-3 mr-3" />
              Github
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
                className="pl-8 py-2 rounded max-w-80"
              />
            </label>
            <label
              htmlFor="password"
              className="mb-5 relative flex text-gray-400"
            >
              <TbPasswordMobilePhone className="absolute left-1 top-4 size-6" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                className="py-2 rounded px-8 max-w-80"
              />
              {showPassword ? (
                <FaRegEyeSlash
                  className="absolute right-2 top-4 size-5 cursor-pointer"
                  onClick={handleTogglePassword}
                  title="Hide password"
                />
              ) : (
                <FaRegEye
                  className="absolute right-2 top-4 size-5 cursor-pointer"
                  onClick={handleTogglePassword}
                  title="Show password"
                />
              )}
            </label>
            <div>
              <label htmlFor="check">
                <input type="checkbox" id="check" name="check" />
              </label>
              <Link to="/register">Forgot Password</Link>
            </div>
          </form>
        </div>
        <div className="bg-black hidden md:block">dodo</div>
      </div>
    </div>
  );
};

export default Register;
