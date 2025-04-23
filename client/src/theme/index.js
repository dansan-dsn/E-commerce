import { createTheme } from '@mui/material/styles';
import { lightPalette, darkPalette } from './palette/palette';
import typography from './typography/typography';
import components from './components';

const buildTheme = (mode = 'light') => {
  const palette = mode === 'dark' ? darkPalette : lightPalette;
  return createTheme({
    palette,
    typography,
    components,
    shape: { borderRadius: 8 }, // Global border radius
  });
};

// Default export (light theme)
export default buildTheme();

// Optional: Named exports for theme switching
export const lightTheme = buildTheme('light');
export const darkTheme = buildTheme('dark');