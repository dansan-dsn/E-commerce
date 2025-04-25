import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Button,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  AccountCircle,
  ShoppingCart,
  Person,
  Receipt,
  Favorite,
  Login,
} from "@mui/icons-material";

export const UserMenu = ({ isMobile, searchOpen }) => {
  const [userAnchorEl, setUserAnchorEl] = useState(null);
  const theme = useTheme();
  const userMenuOpen = Boolean(userAnchorEl);

  const handleUserMenuClick = (event) => setUserAnchorEl(event.currentTarget);
  const handleClose = () => setUserAnchorEl(null);

  return (
    <>
      {!isMobile && (
        <Button
          variant="outlined"
          component={RouterLink}
          to="/signup"
          startIcon={<Login />}
          sx={{
            borderRadius: "50px",
            textTransform: "none",
            px: 3,
            mr: 1,
          }}
        >
          Sign Up
        </Button>
      )}

      <IconButton sx={{ mx: 0.5 }}>
        <Badge badgeContent={4} color="error">
          <ShoppingCart />
        </Badge>
      </IconButton>

      <IconButton onClick={handleUserMenuClick} sx={{ ml: 0.5 }}>
        <AccountCircle />
      </IconButton>

      <Menu
        anchorEl={userAnchorEl}
        open={userMenuOpen}
        onClose={handleClose}
        PaperProps={{
          sx: {
            minWidth: 200,
            mt: 1,
            py: 0,
            borderRadius: "8px",
            boxShadow: theme.shadows[3],
          },
        }}
      >
        <MenuItem
          onClick={handleClose}
          component={RouterLink}
          to="/profile"
          sx={{ py: 1.5 }}
        >
          <ListItemIcon>
            <Person fontSize="small" />
          </ListItemIcon>
          <ListItemText>My Profile</ListItemText>
        </MenuItem>

        <MenuItem
          onClick={handleClose}
          component={RouterLink}
          to="/orders"
          sx={{ py: 1.5 }}
        >
          <ListItemIcon>
            <Receipt fontSize="small" />
          </ListItemIcon>
          <ListItemText>My Orders</ListItemText>
        </MenuItem>

        <MenuItem
          onClick={handleClose}
          component={RouterLink}
          to="/wishlist"
          sx={{ py: 1.5 }}
        >
          <ListItemIcon>
            <Favorite fontSize="small" />
          </ListItemIcon>
          <ListItemText>Wishlist</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};
