import react, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Loader from "./components/cards/Loader";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import OtpVerification from "./pages/OtpVerification";
import Orders from "./pages/Orders";
import Categories from "./pages/Categories";
import Account from "./pages/Account";
import Help from "./pages/Help";
import UserInfo from "./pages/user_info";
import ActivateAccount from "./pages/ActivateAccount";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    handleStart();
    const timeoutId = setTimeout(handleComplete, 1000); // delay

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard/:userId" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot_password" element={<ForgotPassword />} />
            <Route path="/verify" element={<OtpVerification />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/account" element={<Account />} />
            <Route path="/contact-us" element={<Help />} />
            <Route path="/user-info" element={<UserInfo />} />
            <Route path="/activate-account" element={<ActivateAccount />} />
            <Route path="/reset_password" element={<ResetPassword />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
};

export default App;
