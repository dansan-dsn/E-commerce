import { Box } from "@mui/material";
import cover_img from "@assets/cover_front.png";

const HeroBanner = () => (
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
);

export default HeroBanner;
