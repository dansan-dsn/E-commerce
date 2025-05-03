import { create } from "zustand";

type ThemeState = {
  darkMode: boolean;
  toggleTheme: () => void;
};

// Load initial state from localStorage
const getInitialDarkMode = (): boolean => {
  if (typeof window === "undefined") return false; // SSR safety
  return localStorage.getItem("darkMode") === "true";
};

export const useThemeStore = create<ThemeState>((set) => ({
  darkMode: getInitialDarkMode(),
  toggleTheme: () =>
    set((state) => {
      const newMode = !state.darkMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return { darkMode: newMode };
    }),
}));
