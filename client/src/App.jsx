import { useState } from "react";
import { ThemeProvider, CssBaseline, IconButton } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lightTheme, darkTheme } from "./theme"; // Now using named exports
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import Home from "./pages/app/Home";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/auth/ForgotPassword";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <IconButton
        onClick={() => setDarkMode(!darkMode)}
        sx={{ position: "fixed", top: 16, right: 16, zIndex: 9999 }}
      >
        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
