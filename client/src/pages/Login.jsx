import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import Password from "../components/Password";
import backgroundImg from "../assets/images/shop.jpg";
import useImage from "../assets/images/shopping cart.jpeg";
import { validateEmail } from "../utils/validator";
import axios from "axios";
import Notifications from "../components/Notifications";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!password) {
      setError("Please enter password");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3003/user/login", {
        email,
        password,
      });
      localStorage.setItem("userEmail", response.data.email);
      if (response.status === 200) {
        setEmail("");
        setPassword("");
        setError("");
        navigate("/dashboard");
      } else if (response.status === 201) {
        navigate("/verify");
      }
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 400:
            return setError("Email or password is incorrect");
          case 401:
            return setError("Wrong password");
          case 410:
            setError("Account is deactivated");
            setShowNotifications(true);
            break;
          default:
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
        <Notifications
          type="warning"
          show={showNotifications}
          onClose={() => setShowNotifications(false)}
        >
          <Link
            to={"/activate-account"}
            className="hover:text-blue-700 hover:underline"
          >
            Activate account
          </Link>
        </Notifications>
        <div className=" leading-10 m-2">
          <h2 className="font-bold text-2xl text-center mb-5  mt-14">
            Login Account
          </h2>
          <div className="flex ">
            <Link
              to="/login"
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
          <form className="flex flex-col items-center" onSubmit={handleLogin}>
            <label htmlFor="email" className="mb-5 relative flex text-gray-400">
              <MdOutlineEmail className="absolute left-1 top-2 size-6" />
              <input
                type="email"
                id="email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="py-2 rounded px-8 w-full bg-slate-300 text-neutral-700"
              />
            </label>
            <Password
              placeholder={"Password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-end w-full -mt-7">
              {/* <Link to="" className="font-semibold" disabled={!activate}>
                Activate Me
              </Link> */}
              <Link
                to="/forgot_password"
                className="underline mx-3 text-black hover:no-underline hover:opacity-700"
              >
                ForgotPassword?
              </Link>
            </div>
            <button
              type="submit"
              className="my-3 w-full px-10 rounded bg-blue-900 font-semibold hover:bg-blue-500"
            >
              Login
            </button>
            <div className="flex justify-between">
              <p>Without Account?</p>
              <Link
                to="/register"
                className="underline mx-3 text-black hover:no-underline hover:opacity-700 "
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
