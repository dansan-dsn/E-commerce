import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    setEmail(userEmail);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    if (!newpassword) return setErr("Please enter a new password");
    try {
      const response = await axios.put(
        "http://localhost:3003/user/verify-password",
        { email, newpassword }
      );
      if (response.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      if (error.response.status === 404) {
        setErr("Email not found. Please try again.");
      } else if (error.response.status === 401) {
        setErr("All fields must be filled");
      } else if (error.response.status === 403) {
        setErr("Please verify your email address");
      } else {
        setErr("An error occurred. Please try again.");
      }
    }
  };
  return (
    <div className="bg-blue-100 h-screen flex justify-center items-center flex-col gap-6">
      <p className="text-xl font-sans">New Password resetting</p>
      <form className="flex flex-col gap-3 text-center" onSubmit={handleSubmit}>
        {err && (
          <p className="text-red-800 w-full -mb-3 drop-shadow-2xl">{err}</p>
        )}
        <label className="flex items-center justify-center gap-3">
          <input
            type="password"
            value={newpassword}
            className="w-4/5  rounded border-none outline-none"
            placeholder="New password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
        <label className="flex items place-content-center">
          <input
            type="submit"
            value="Change"
            className="bg-blue-400 p-2 w-4/5  rounded hover:rounded-full hover:duration-75 hover:delay-100 cursor-pointer"
          />
        </label>
      </form>
      <p className="flex justify-start">
        <Link
          to="/login"
          className="text-green-900 hover:underline hover:text-green-600"
        >
          Go back to login
        </Link>
      </p>
    </div>
  );
};

export default ResetPassword;
