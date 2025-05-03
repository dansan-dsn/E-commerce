import { useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Typography,
  Box,
  useTheme,
  ListItemIcon,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Devices,
  Checkroom,
  Home,
  Apps,
} from "@mui/icons-material";

export const CategoriesMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton
        onClick={handleMenuClick}
        sx={{
          "&:hover": {
            backgroundColor: "transparent",
          },
          borderRadius: 0,
          padding: "8px 12px",
        }}
      >
        <MenuIcon />
        <Typography sx={{ ml: 1, fontWeight: 600 }}>Categories</Typography>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            minWidth: 300,
            [theme.breakpoints.up("md")]: {
              width: 600,
              padding: 2,
            },
          },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 2,
            padding: 2,
          }}
        >
          {/* Electronics Section */}
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <Devices fontSize="small" />
              </ListItemIcon>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Electronics
              </Typography>
            </Box>
            {["Phones", "Laptops", "TVs", "Cameras"].map((item) => (
              <MenuItem key={item} onClick={handleClose} sx={{ pl: 4 }}>
                {item}
              </MenuItem>
            ))}
          </Box>

          {/* Fashion Section */}
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <Checkroom fontSize="small" />
              </ListItemIcon>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Fashion
              </Typography>
            </Box>
            {["Men", "Women", "Kids", "Accessories"].map((item) => (
              <MenuItem key={item} onClick={handleClose} sx={{ pl: 4 }}>
                {item}
              </MenuItem>
            ))}
          </Box>

          {/* Home & Garden Section */}
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <Home fontSize="small" />
              </ListItemIcon>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Home & Garden
              </Typography>
            </Box>
            {["Furniture", "Decor", "Kitchen", "Garden"].map((item) => (
              <MenuItem key={item} onClick={handleClose} sx={{ pl: 4 }}>
                {item}
              </MenuItem>
            ))}
          </Box>
        </Box>

        <Divider sx={{ my: 1 }} />

        <MenuItem
          onClick={handleClose}
          sx={{
            justifyContent: "center",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Apps fontSize="small" sx={{ mr: 1 }} />
            <Typography>View All Categories</Typography>
          </Box>
        </MenuItem>
      </Menu>
    </Box>
  );
};
