import React, { useRef, useState, useEffect } from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import ProductCard from "../../components/main/ProductCard";
import cover_img from "../../assets/cover_front.png";
import { products } from "../../utils/products";

const Home = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [useCarousel, setUseCarousel] = useState(false);
  const topDeals = products.slice(0, 6);

  // Check if we need carousel mode
  useEffect(() => {
    const checkLayout = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const containerWidth = container.offsetWidth;
        const padding = 48; // Total horizontal padding (24px each side)
        const gap = 24; // Gap between items
        const minCardWidth = 220; // Minimum card width you want
        const totalWidthNeeded = 6 * minCardWidth + 5 * gap + padding;

        setUseCarousel(containerWidth < totalWidthNeeded);
      }
    };

    checkLayout();
    const resizeObserver = new ResizeObserver(checkLayout);
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

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
    <Box
      sx={{
        pt: { xs: 15, sm: 17 },
        backgroundColor: "background.default",
      }}
    >
      {/* Recent Top Deals Section */}
      <Container
        maxWidth="xl"
        ref={containerRef}
        sx={{
          mt: 4,
          px: 3,
          "&.MuiContainer-maxWidthXl": {
            maxWidth: useCarousel ? "100%" : "xl",
          },
        }}
      >
        {/* Hero Banner Section */}
        <Box
          sx={{
            height: 400,
            backgroundImage: `url(${cover_img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mb: 4,
            borderRadius: 1,
            boxShadow: 3,
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography variant="h5" fontWeight={600}>
            Recent Top Deals
          </Typography>
          <Typography
            variant="body2"
            color="primary"
            sx={{
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Show more
          </Typography>
        </Box>

        {/* Products Container */}
        <Box sx={{ position: "relative" }}>
          {useCarousel && (
            <>
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
            </>
          )}

          <Box
            ref={scrollRef}
            sx={{
              display: "flex",
              gap: 3,
              overflowX: useCarousel ? "auto" : "hidden",
              flexWrap: useCarousel ? "nowrap" : "wrap",
              scrollBehavior: "smooth",
              pb: 2,
              "&::-webkit-scrollbar": { display: "none" },
              ...(!useCarousel && {
                justifyContent: "space-between",
              }),
            }}
          >
            {topDeals.map((product) => (
              <Box
                key={product.id}
                sx={{
                  flex: useCarousel ? "0 0 280px" : "0 0 calc(16.666% - 20px)",
                  minWidth: 0,
                  ...(!useCarousel && {
                    maxWidth: "calc(16.666% - 20px)",
                  }),
                }}
              >
                <ProductCard product={product} />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
