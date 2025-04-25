import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Chip,
  IconButton,
  Stack,
  Container,
  Paper,
  Tabs,
  Tab,
} from "@mui/material";
import { Favorite, FavoriteBorder, Add, Remove } from "@mui/icons-material";
import img from "@assets/feature_prod_01.jpg";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  const product = {
    title:
      'Apple MacBook Pro (15" Retina, Touch Bar, 2.2GHz 6‑Core i7, 16GB RAM, 256GB SSD)',
    price: 1200,
    originalPrice: 2400,
    images: [img, img, img, img],
    tags: ["Computer", "Mac Book", "MacBook Pro", "Laptop"],
    stock: "Available",
    ratingCount: 8,
    description: `
      Over the years, Apple has built a reputation for releasing its products with a lot of fanfare –
      but that didn’t exactly happen for the MacBook Pro 2018. Rather, Apple’s latest pro laptop experienced
      a subdued launch...`,
  };

  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <Box sx={{ backgroundColor: "#0d1117", color: "#c9d1d9", py: 6 }}>
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ backgroundColor: "#161b22", p: 3 }}>
          <Grid container spacing={4}>
            {/* Image Section */}
            <Grid item xs={12} md={6}>
              <img
                src={product.images[0]}
                alt="Main product"
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <Stack direction="row" spacing={1} mt={2}>
                {product.images.map((img, idx) => (
                  <Box
                    key={idx}
                    component="img"
                    src={img}
                    alt={`Thumb ${idx + 1}`}
                    sx={{
                      width: 70,
                      height: 50,
                      objectFit: "cover",
                      borderRadius: 1,
                      border: "2px solid #30363d",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </Stack>
            </Grid>

            {/* Details Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="h5" fontWeight={600} gutterBottom>
                {product.title}
              </Typography>

              <Typography variant="body2" gutterBottom>
                ⭐ {product.ratingCount} ratings
              </Typography>

              <Box sx={{ mb: 2 }}>
                <Typography variant="h4" component="span" fontWeight="bold">
                  ${product.price}
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    textDecoration: "line-through",
                    color: "#8b949e",
                    ml: 1,
                  }}
                >
                  ${product.originalPrice}
                </Typography>
                <Chip
                  label={`-${discountPercentage}%`}
                  color="error"
                  size="small"
                  sx={{ ml: 1 }}
                />
              </Box>

              <Typography variant="body2" sx={{ mb: 1 }}>
                Shipping Cost: <strong>$50</strong>
              </Typography>

              <Chip
                label={product.stock}
                color="success"
                size="small"
                sx={{ mb: 2 }}
              />

              <Stack direction="row" spacing={1} sx={{ my: 2 }}>
                {product.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    variant="outlined"
                    size="small"
                    sx={{ color: "#58a6ff", borderColor: "#30363d" }}
                  />
                ))}
              </Stack>

              {/* Quantity Selector */}
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{ mb: 2 }}
              >
                <IconButton
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  <Remove />
                </IconButton>
                <Typography>{quantity}</Typography>
                <IconButton onClick={() => setQuantity((q) => q + 1)}>
                  <Add />
                </IconButton>
              </Stack>

              {/* Action Buttons */}
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      textTransform: "none",
                      fontWeight: "bold",
                      borderRadius: 2,
                    }}
                  >
                    Add To Cart
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    variant="outlined"
                    size="large"
                    startIcon={
                      isWishlisted ? (
                        <Favorite color="error" />
                      ) : (
                        <FavoriteBorder />
                      )
                    }
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    sx={{
                      textTransform: "none",
                      fontWeight: "bold",
                      borderRadius: 2,
                    }}
                  >
                    {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Tabs Section */}
          <Box sx={{ mt: 5 }}>
            <Tabs
              value={tabIndex}
              onChange={(e, newValue) => setTabIndex(newValue)}
              textColor="inherit"
              TabIndicatorProps={{ style: { backgroundColor: "#58a6ff" } }}
            >
              <Tab label="Description" />
              <Tab label="Specifications" />
              <Tab label="Reviews" />
            </Tabs>
            <Box sx={{ mt: 2 }}>
              {tabIndex === 0 && (
                <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
                  {product.description}
                </Typography>
              )}
              {tabIndex === 1 && (
                <Typography variant="body2">
                  Technical specs go here.
                </Typography>
              )}
              {tabIndex === 2 && (
                <Typography variant="body2">
                  Customer reviews go here.
                </Typography>
              )}
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ProductPage;
