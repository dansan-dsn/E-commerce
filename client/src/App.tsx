import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lightTheme, darkTheme } from "./theme";
import { useThemeStore } from "@/store/useThemeStore";
import Navbar from "@/components/navbar/Navbar";

// Auth routes
import Signup from "@/pages/auth/Signup";
import Signin from "@/pages/auth/Signin";
import NotFound from "@/pages/NotFound";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import VerifyEmail from "@/pages/auth/VerifyEmail";
import ResetPassword from "@/pages/auth/ResetPassword";

// Main app routes
import Home from "@/pages/app/Home";
import ProductDetails from "@/pages/app/ProductDetails";
import Profile from "@/pages/app/Profile";
import Wishlist from "@/pages/app/Wishlist";

const authRoutes: string[] = [
  "/signup",
  "/login",
  "/forgot-password",
  "/verify-email",
  "/reset-password",
];

const AppContent: React.FC = () => {
  const darkMode = useThemeStore((state) => state.darkMode);
  const location = useLocation();
  const isAuthRoute = authRoutes.includes(location.pathname);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {!isAuthRoute && <Navbar />}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
