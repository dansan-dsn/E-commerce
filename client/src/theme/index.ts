import { createTheme } from "@mui/material/styles";
import { lightPalette, darkPalette } from "./palette/palette";
import typography from "./typography/typography";
import components from "./components";

export const lightTheme = createTheme({
  palette: lightPalette,
  typography,
  components,
  shape: { borderRadius: 8 },
});

export const darkTheme = createTheme({
  palette: darkPalette,
  typography,
  components,
  shape: { borderRadius: 8 },
});

export default lightTheme;
