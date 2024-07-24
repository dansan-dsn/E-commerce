import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImg from "../assets/images/lock.jpg";
import useImage from "../assets/images/shopping cart.jpeg";

const VerifyPassword = () => {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otp = code.join("");
    setMessage(`Entered OTP: ${otp}`);
    if (otp === "12345") {
      navigate("/dashboard");
    } else {
      setMessage("Invalid OTP. Please try again.");
    }
  };

  return (
    <div
      className="p-2 min-h-screen flex bg-cover bg-center text-black "
      style={{
        backgroundImage: `url(${useImage})`,
      }}
    >
      <div
        className="flex border shadow-2xl w-full md:w-3/4 px-6 md:px-36 justify-center items-center rounded-xl flex-col bg-white bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      >
        <div className="">
          <h2 className="text-2xl font-extrabold">Reset Password</h2>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <p className="text-center mt-4">
              Please enter the code we sent to your email
            </p>
            <span className="mt-5 font-bold">Code</span>
            <div className="ml-6 flex">
              {code.map((digit, index) => (
                <input
                  key={index}
                  value={digit}
                  type="text"
                  maxLength="1"
                  className="w-10 h-10 text-center bg-white border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 rounded mr-3 hide-caret"
                  placeholder="_"
                  onChange={(e) => handleChange(e, index)}
                />
              ))}
            </div>
            <button
              type="submit"
              className="w-full mt-10 p-2 rounded bg-amber-700 hover:bg-amber-600 text-white"
            >
              Reset Password
            </button>
            {message && (
              <p className="bg-neutral-400 rounded mt-1 text-red-700">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyPassword;
