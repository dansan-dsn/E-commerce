import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImg from "../assets/images/lock.jpg";
import useImage from "../assets/images/shopping cart.jpeg";
import axios from "axios";

const OtpVerification = () => {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    console.log("Retrieved email from localStorage:", storedEmail);
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      setMessage("Email not found. Please register or log in first.");
    }
  }, []);

  const handleChange = (e, index) => {
    const newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otp = code.join("");

    try {
      const response = await axios.post("http://localhost:3003/user/verify", {
        email,
        otp,
      });
      if (response.status === 200) {
        navigate("/user-info");
      }
    } catch (err) {
      if (err.response) {
        switch (err.response.status) {
          case 400:
            return setMessage("OTP is required");
          case 401:
            return setMessage("Invalid OTP. Request a new one.");
          case 404:
            return setMessage(
              "Email not found. Please register or log in first."
            );
          default:
            return setMessage("Verification failed. Please try again.");
        }
      } else if (err.request) {
        setMessage("Please check your connecton");
      } else {
        setMessage("Error setting up request " + err.message);
      }
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
          <h2 className="text-2xl font-extrabold capitalize">
            Account Verification
          </h2>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <p className="text-center mt-4">
              {email
                ? `Please enter the code we sent to ${email}`
                : "Email not found. Please register or log in first."}
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
              disabled={!email}
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

export default OtpVerification;
