import react, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserInfo = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    setEmail(userEmail);
  });
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <form className="p-10 flex flex-col shadow-2xl m-4">
          <h2 className="text-amber-600 font-bold text-xl text-center py-3 capitalize">
            Please provide your info for{" "}
            <span className="lowercase text-green-500">{email}</span>
          </h2>
          <label
            htmlFor="username"
            className="font-semibold mb-3 flex items-center gap-8"
          >
            <span className="hidden md:block">Name:</span>
            <input
              type="text"
              id="username"
              className="outline-none border-none rounded"
              placeholder="Name"
            />
          </label>
          <label
            htmlFor="username"
            className="font-semibold mb-3 flex items-center gap-1"
          >
            <span className="hidden md:block">Phone no:</span>
            <input
              type="text"
              id="username"
              className="outline-none border-none rounded"
              placeholder="phone number"
            />
          </label>
          <label
            htmlFor="username"
            className="font-semibold mb-3 flex items-center gap-3"
          >
            <span className="hidden md:block">Address:</span>
            <input
              type="text"
              id="username"
              className="outline-none border-none rounded"
              placeholder="address"
            />
          </label>
          <button className="border border-blue-500 p-2 mt-8 hover:bg-blue-500 rounded font-extrabold">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UserInfo;
