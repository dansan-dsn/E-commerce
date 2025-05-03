import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Grid,
  Button,
  Stack,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import img from "@/assets/images/category_img_02.jpg";

// Utility function to truncate title to a specific character limit
const truncateTitle = (title, charLimit = 10) => {
  if (title.length > charLimit) {
    return title.substring(0, charLimit) + "..."; // Add ellipsis if the title exceeds the char limit
  }
  return title;
};

const wishlistItems = [
  {
    id: 1,
    title: "Stylish Sneakers for a Modern Look",
    price: "$89.99",
    image: img,
  },
  {
    id: 2,
    title: "Elegant Watch with Classic Design",
    price: "$299.99",
    image: img,
  },
  {
    id: 3,
    title: "Minimalist Backpack with Storage",
    price: "$120.00",
    image: img,
  },
  {
    id: 4,
    title:
      "Very Long Title for a Product That Might Cause Layout Issues and Make the Card Height Uneven",
    price: "$120.00",
    image: img,
  },
];

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([...wishlistItems]);

  const handleRemove = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Container maxWidth="xl" sx={{ pb: 4, pt: { xs: 15, sm: 17 } }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        My Wishlist
      </Typography>

      {wishlist.length === 0 ? (
        <Box
          sx={{
            mt: 5,
            textAlign: "center",
          }}
        >
          <FavoriteIcon color="disabled" sx={{ fontSize: 80, mb: 2 }} />
          <Typography variant="h6" color="text.secondary">
            Your wishlist is empty
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={4}>
          {wishlist.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Paper
                sx={{
                  display: "flex",
                  padding: 2,
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: 120,
                    height: 120,
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                  image={item.image}
                  alt={item.title}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    ml: 2,
                    flexGrow: 1,
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        fontSize: { xs: 15, sm: 12 },
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap", // Prevent title from wrapping
                      }}
                    >
                      {truncateTitle(item.title, 30)}{" "}
                      {/* Limit to 30 characters */}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "text.secondary", fontSize: 16 }}
                    >
                      {item.price}
                    </Typography>
                  </CardContent>
                  <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                    <IconButton
                      onClick={() => handleRemove(item.id)}
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                    <Button variant="outlined" size="small">
                      Move to Cart
                    </Button>
                  </Stack>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Wishlist;
