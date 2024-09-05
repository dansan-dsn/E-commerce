import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ActivateAccount = () => {
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return setErr("Please enter a valid email");

    try {
      const response = await axios.post("http://localhost:3003/user/activate", {
        email,
      });
      localStorage.setItem("userEmail", response.data.email);
      if (response.status === 200) {
        setEmail("");
        setErr("");
        navigate("/verify");
      }
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 404:
            setErr("Email not available");
            break;
          case 400:
            return setErr("Email is already activated");
          default:
            setErr("An error occurred. Please try again.");
            break;
        }
      }
    }
  };
  return (
    <div className="p-6 flex justify-center h-screen items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 md:p-9 rounded shadow-lg relative"
      >
        <h3 className="text-gray-950 text-xl font-sans text-center">
          Please provide your email
        </h3>
        {err && (
          <div className="text-red-800 w-full -mb-3 drop-shadow-2xl">{err}</div>
        )}
        <label className="flex items-center">
          <span className="hidden md:block">Email:</span>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            className="ml-2 border-none outline-none rounded focus:border-green-400"
          />
        </label>
        <button className="w-full bg-blue-500 p-2 rounded hover:scale-105 right-0">
          Send
        </button>
      </form>
    </div>
  );
};

export default ActivateAccount;
