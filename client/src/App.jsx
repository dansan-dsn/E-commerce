import react, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Loader from "./components/cards/Loader";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyPassword from "./pages/VerifyPassword";

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
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot_password" element={<ForgotPassword />} />
            <Route
              path="/forgot_password/verify"
              element={<VerifyPassword />}
            />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
};

export default App;
