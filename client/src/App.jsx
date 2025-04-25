import { useState } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  useTheme,
} from "@mui/material";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lightTheme, darkTheme } from "@theme";
import { ThemeProvider, useThemeContext } from "@contexts/ThemeContext";
import Navbar from "@components/navbar/Navbar";
// auth routes
import Signup from "@pages/auth/Signup";
import Signin from "@pages/auth/Signin";
import NotFound from "@pages/NotFound";
import ForgotPassword from "@pages/auth/ForgotPassword";
import VerifyEmail from "@pages/auth/VerifyEmail";
import ResetPassword from "@pages/auth/ResetPassword";
// main routes
import Home from "@pages/app/Home";
import ProductDetails from "@pages/app/ProductDetails";

const authRoutes = [
  "/signup",
  "/login",
  "/forgot-password",
  "/verify-email",
  "/reset-password",
];

function AppContent() {
  const { darkMode } = useThemeContext();
  const location = useLocation();
  const isAuthRoute = authRoutes.includes(location.pathname);

  return (
    <MuiThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {!isAuthRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        {/* Add more routes as needed */}
        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MuiThemeProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
