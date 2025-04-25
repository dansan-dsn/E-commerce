import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { NavbarLogo } from "./NavbarLogo";
import { SearchBar } from "./SearchBar";
import { ThemeToggle } from "./ThemeToggle";
import { UserMenu } from "./UserMenu";
import { CategoriesMenu } from "./CategoriesMenu";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "background.default",
        color: "text.primary",
        backdropFilter: "blur(8px)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 1, gap: 2 }}>
          <NavbarLogo searchOpen={searchOpen} />
          <SearchBar searchOpen={searchOpen} setSearchOpen={setSearchOpen} />

          <Box
            sx={{ display: "flex", alignItems: "center", gap: 1, ml: "auto" }}
          >
            <UserMenu isMobile={isMobile} searchOpen={searchOpen} />
            <ThemeToggle />
          </Box>
        </Toolbar>

        {(!isMobile || !searchOpen) && (
          <Toolbar disableGutters sx={{ borderTop: 1, borderColor: "divider" }}>
            <CategoriesMenu />
          </Toolbar>
        )}
      </Container>
    </AppBar>
  );
};

export default Navbar;
