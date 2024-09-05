import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import backgroundImg from "../assets/images/shop.jpg";
import useImage from "../assets/images/shopping cart.jpeg";
import { validateEmail } from "../utils/validator";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3003/user/forgot_password",
        { email }
      );
      localStorage.setItem("userEmail", response.data.email);
      if (response.status === 200) {
        setEmail("");
        setError("");
        navigate("/verify", { state: { from: location.pathname } });
      }
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        if (status === 404) {
          setError("Email is not found");
        } else {
          setError("An error occurred. Please try again.");
        }
      }
    }
  };
  return (
    <div
      className="p-2 min-h-screen flex bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div
        className="flex border shadow-2xl w-full md:w-3/4 px-6 md:px-36 justify-center items-center rounded-l-xl"
        style={{
          backgroundImage: `url(${useImage})`,
        }}
      >
        <div className=" leading-10 m-2">
          <h2 className="font-bold text-2xl text-center mb-5  mt-14">
            Forgot Password
          </h2>
          {error && (
            <p className="text-red-800 w-full -mb-3 drop-shadow-2xl">{error}</p>
          )}
          <p className="flex-none justify-start text-slate-300">
            Enter email to send password reset OTP*
          </p>
          <form
            className="flex flex-col items-center"
            onSubmit={handlePasswordReset}
          >
            <label htmlFor="email" className="mb-5 relative flex text-gray-400">
              <MdOutlineEmail className="absolute left-1 top-2 size-6" />
              <input
                type="email"
                id="email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="py-2 rounded px-8 w-full bg-slate-300 text-neutral-700 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-red-500 focus:invalid:ring-pink-500"
              />
            </label>
            <button
              type="submit"
              className="my-3 w-full px-10 rounded bg-blue-900 font-semibold hover:bg-blue-500"
            >
              Submit Email
            </button>
            <div className="flex justify-between">
              <Link
                to="/login"
                className="underline mx-3 text-black hover:no-underline hover:opacity-700 relative"
              >
                <IoIosArrowBack className="absolute bottom-1 right-0 size-8" />
              </Link>
              Back to Login page
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
