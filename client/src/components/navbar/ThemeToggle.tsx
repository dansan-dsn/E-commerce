import { IconButton } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
// import { useThemeContext } from "@contexts/ThemeContext";
import { useThemeStore } from "@/store/useThemeStore";

export const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useThemeStore();

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {darkMode ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
};
