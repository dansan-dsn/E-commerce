import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import backgroundImg from "../assets/images/lock.jpg";
import useImage from "../assets/images/shopping cart.jpeg";
import axios from "axios";

const OtpVerification = () => {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const url = "http://localhost:3003/user/";

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    console.log("Retrieved email from localStorage:", storedEmail);
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      setMessage("Email not found. Please register or log in first.");
    }
  }, []);

  // useEffect(() => {
  // console.log("Location:", location.state.from);
  // const storedEmail = localStorage.getItem("userEmail");
  // if (window.location.pathname.startsWith("/forgot_password")) {
  //   if (storedEmail) {
  //     navigate(`/reset_password?email=${encodeURIComponent(storedEmail)}`);
  //   } else {
  //     setMessage("Email not found. Please register or log in first.");
  //   }
  // }
  //   if (location.state && location.state.from) {
  //     const previousPath = location.state.from;
  //     if (previousPath.startsWith("/forgot_password")) {
  //       navigate("/reset_password", { state: { email: location.state.email } });
  //     } else {
  //       setMessage("Email not found. Please register or log in first.");
  //     }
  //   }
  // }, [location, navigate]);

  const handleChange = (e, index) => {
    const newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otp = code.join("");

    try {
      const response = await axios.post(`${url}/verify`, {
        email,
        otp,
      });
      if (response.status === 200) {
        if (!response.data.username) {
          navigate("/user-info");
        } else if (location.state && location.state.from) {
          const previousPath = location.state.from;
          if (previousPath.startsWith("/forgot_password")) {
            const userEmail = response.data.email;
            navigate(`/reset_password/${userEmail}`);
          }
        } else {
          navigate("/login");
        }
      }
    } catch (err) {
      if (err.response) {
        switch (err.response.status) {
          case 400:
            setMessage("OTP is required");
            break;
          case 401:
            setMessage("Invalid OTP. Request a new one.");
            break;
          case 404:
            setMessage("Email not found. Please register or log in first.");
            break;
          default:
            setMessage("Verification failed. Please try again.");
        }
      } else if (err.request) {
        setMessage("Please check your connection");
      } else {
        setMessage("Error setting up request: " + err.message);
      }
    }
  };

  const handleNewCode = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/new-otp`, {
        email,
      });
      if (response.status === 200) {
        setMessage("Verification code sent successfully");
      }
    } catch (err) {
      if (err.response) {
        switch (err.response.status) {
          case 404:
            return setMessage(
              "Email not found. Please register or log in first."
            );
          case 429:
            return setMessage(
              "Too many requests in the last hour, try again later"
            );
          default:
            setMessage("Failed to send verification code. Please try again.");
        }
      } else if (err.request) {
        setMessage("Please check your connection");
      } else {
        setMessage("Error setting up request: " + err.message);
      }
    }
  };

  return (
    <div
      className="p-2 min-h-screen flex bg-cover bg-center text-black"
      style={{ backgroundImage: `url(${useImage})` }}
    >
      <div
        className="flex border shadow-2xl w-full md:w-3/4 px-6 md:px-36 justify-center items-center rounded-xl flex-col bg-white bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div>
          <h2 className="text-2xl font-extrabold capitalize">
            Account Verification
          </h2>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <p className="text-center mt-4">
              {email
                ? `Please enter the code we sent to ${email}`
                : "Email not found. Please register or log in first."}
            </p>
            <div className="mt-5 font-bold flex justify-between">
              <span className="">Code</span>
              <a
                href="/verify"
                className="text-blue-500 bg-red-200 mb-2 p-1 rounded cursor-pointer hover:underline"
                onClick={handleNewCode}
              >
                resend code
              </a>
            </div>
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
              Verify Account
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
