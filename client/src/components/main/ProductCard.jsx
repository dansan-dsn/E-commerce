import { useState } from "react";
import {
  Card,
  CardMedia,
  Typography,
  Box,
  Rating,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [favorite, setFavorite] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative", // For absolute positioning of favorite button
      }}
    >
      <Link
        to={`/products/${product.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Card
          sx={{
            transition: "transform 0.2s",
            transform: hovered ? "scale(1.03)" : "scale(1)",
            boxShadow: "none",
            borderRadius: 1,
            cursor: "pointer",
            overflow: "hidden", // Ensures no content spills out
            position: "relative",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Favorite Button (absolute positioned) */}
          <IconButton
            aria-label="add to favorites"
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 2,
              color: favorite ? "error.main" : "rgba(255,255,255,0.8)",
              backgroundColor: "rgba(0,0,0,0.05)",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.1)",
              },
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setFavorite(!favorite);
            }}
          >
            {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>

          <CardMedia
            component="img"
            image={product.imageUrl}
            alt={product.name}
            sx={{
              width: "100%",
              height: { xs: 180, sm: 220, md: 240 },
              objectFit: "cover",
              aspectRatio: "1/1", // Ensures square aspect ratio
            }}
          />

          <Box
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
            }}
          >
            <Typography variant="body1" fontWeight="bold" noWrap>
              {product.name}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Rating value={4.5} precision={0.5} readOnly size="small" />
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ ml: 1 }}
              >
                (67)
              </Typography>
            </Box>
            <Typography variant="caption" color="text.secondary">
              dbrand skin available
            </Typography>
            <Box sx={{ display: "flex", alignItems: "baseline", mt: 1 }}>
              {product.discountedPrice ? (
                <>
                  <Typography variant="h6" fontWeight="bold" color="error">
                    ${product.discountedPrice}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ ml: 1, textDecoration: "line-through" }}
                  >
                    ${product.price}
                  </Typography>
                </>
              ) : (
                <Typography variant="h6" fontWeight="bold">
                  ${product.price}
                </Typography>
              )}
            </Box>
            <Typography variant="caption" color="text.secondary">
              2 colors
            </Typography>
          </Box>
        </Card>
      </Link>
    </Box>
  );
}
