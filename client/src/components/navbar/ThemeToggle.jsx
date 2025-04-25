import { IconButton } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { useThemeContext } from "@contexts/ThemeContext";

export const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useThemeContext();

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {darkMode ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
};
