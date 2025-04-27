import { useRef } from "react";
import { Box, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import ProductCard from "@components/main/products/ProductCard";

const ProductCarousel = ({ products }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{ position: "relative" }}>
      <IconButton
        onClick={() => scroll("left")}
        sx={{
          position: "absolute",
          left: -16,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          backgroundColor: "background.paper",
          boxShadow: 2,
          "&:hover": { backgroundColor: "action.hover" },
        }}
      >
        <ChevronLeft />
      </IconButton>

      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          gap: 3,
          overflowX: "auto",
          scrollBehavior: "smooth",
          pb: 2,
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {products.map((product) => (
          <Box key={product.id} sx={{ flex: "0 0 280px", minWidth: 0 }}>
            <ProductCard product={product} />
          </Box>
        ))}
      </Box>

      <IconButton
        onClick={() => scroll("right")}
        sx={{
          position: "absolute",
          right: -16,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          backgroundColor: "background.paper",
          boxShadow: 2,
          "&:hover": { backgroundColor: "action.hover" },
        }}
      >
        <ChevronRight />
      </IconButton>
    </Box>
  );
};

export default ProductCarousel;
