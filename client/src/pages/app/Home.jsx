import React, { useRef, useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import { products } from "@utils/products";
import HeroBanner from "@components/main/home/HeroBanner";
import SectionHeader from "@components/main/home/SectionHeader";
import ProductCarousel from "@components/main/home/ProductCarousel";
import ProductGrid from "@components/main/home/ProductGrid";
import Footer from "@components/main/Footer";

const Home = () => {
  const containerRef = useRef(null);
  const [useCarousel, setUseCarousel] = useState(false);
  const topDeals = products.slice(0, 6);

  // Check if we need carousel mode
  useEffect(() => {
    const checkLayout = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const containerWidth = container.offsetWidth;
        const padding = 48;
        const gap = 24;
        const minCardWidth = 220;
        const totalWidthNeeded = 6 * minCardWidth + 5 * gap + padding;

        setUseCarousel(containerWidth < totalWidthNeeded);
      }
    };

    checkLayout();
    const resizeObserver = new ResizeObserver(checkLayout);
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <Box
      sx={{
        pt: { xs: 15, sm: 17 },
        backgroundColor: "background.default",
      }}
    >
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
        <HeroBanner />

        <SectionHeader title="Recent Top Deals" showMore />

        {useCarousel ? (
          <ProductCarousel products={topDeals} />
        ) : (
          <ProductGrid products={topDeals} />
        )}
        <SectionHeader title="New Arrivals" showMore />
        {useCarousel ? (
          <ProductCarousel products={products} />
        ) : (
          <ProductGrid products={products} />
        )}
        <Footer />
      </Container>
    </Box>
  );
};

export default Home;
