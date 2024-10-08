import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import Password from "../components/Password";
import backgroundImg from "../assets/images/shop.jpg";
import useImage from "../assets/images/shopping cart.jpeg";
import { validatePassword, validateEmail } from "../utils/validator";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (!validateEmail(email)) {
        setError("Please enter a valid email address");
        return;
      }
      // if (!validatePassword(password)) {
      //   setError(`Please enter a valid password`);
      //   return;
      // }

      if (!password) return setError("Please enter a password");

      const response = await axios.post("http://localhost:3003/user/register", {
        email,
        password,
      });
      setEmail("");
      setPassword("");
      setError("");
      if (response.status === 201) {
        localStorage.setItem("userEmail", response.data.email);
        navigate("/verify");
      }
    } catch (err) {
      if (err.response.status === 409) {
        setError("Email already registered, you can login");
      }
      console.log(err);
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
            Register Account
          </h2>
          <div className="flex">
            <Link
              to="/register"
              className="w-full border border-slate-500 hover:bg-blue-600 relative rounded text-center bg-slate-500"
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
          {error && (
            <p className="text-red-800 w-full -mb-3 drop-shadow-2xl">{error}</p>
          )}
          <form
            className="flex flex-col items-center"
            onSubmit={handleRegistration}
          >
            <label htmlFor="email" className="mb-5 relative flex text-gray-400">
              <MdOutlineEmail className="absolute left-1 top-2 size-6" />
              <input
                type="text"
                value={email}
                id="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="py-2 rounded px-8 w-full bg-slate-300 text-neutral-700"
              />
            </label>
            <Password
              placeholder={"Password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-between">
              <p>Have Account?</p>
              <Link
                to="/login"
                className="underline mx-3 text-black hover:no-underline hover:opacity-700 "
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
    </div>
  );
};

export default Register;
