import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import logo from "@assets/brand_01.png";

export const NavbarLogo = ({ searchOpen }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (isMobile && searchOpen) return null;

  return (
    <Link component={RouterLink} to="/">
      <img src={logo} alt="Company Logo" style={{ height: 40 }} />
    </Link>
  );
};
