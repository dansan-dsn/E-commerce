export const lightPalette = {
  primary: {
    main: "#1976d2", // Brand blue
    light: "#42a5f5",
    dark: "#0d47a1",
  },
  secondary: {
    main: "#9c27b0", // Brand purple
  },
  error: {
    main: "#d32f2f",
  },
  background: {
    default: "#f5f7fa", // Lighter gray (better contrast)
    paper: "#ffffff", // Pure white cards
  },
  text: {
    primary: "#4d5969", // Darker gray (better readability)
    secondary: "#4a5568",
    tertiary: "#464646",
  },
  contrastThreshold: 4.5, // WCAG AA compliance
};

export const darkPalette = {
  ...lightPalette,
  mode: "dark",
  background: {
    default: "#0f111a", // Deep blue-gray
    paper: "#141824", // Noticeably darker than default
  },
  text: {
    primary: "#edf2f7", // Soft white
    secondary: "#a0aec0",
    tertiary: "#5e6e82",
  },
};
