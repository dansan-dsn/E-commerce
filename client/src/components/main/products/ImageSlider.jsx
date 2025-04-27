import { Box } from "@mui/material";
import Slider from "react-slick";

const ImageSlider = ({ images }) => {
  const settings = {
    dots: images.length > 1,
    infinite: images.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: images.length > 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };

  const imageStyles = {
    width: "100%",
    height: { xs: "300px", sm: "400px" },
    borderRadius: 1,
    border: "2px solid #30363d",
    cursor: "pointer",
    bgcolor: "#f5f5f5",
  };

  return (
    <Box>
      {images.length === 0 ? (
        <Box
          sx={{
            ...imageStyles,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography>No images available</Typography>
        </Box>
      ) : images.length === 1 ? (
        <Box
          component="img"
          src={images[0]}
          alt="Product"
          sx={{ ...imageStyles, objectFit: "contain" }}
        />
      ) : (
        <Box sx={{ ...imageStyles, position: "relative" }}>
          <Slider {...settings}>
            {images.map((img, idx) => (
              <Box
                key={idx}
                component="img"
                src={img}
                alt={`Thumb ${idx + 1}`}
                sx={{ ...imageStyles, objectFit: "cover" }}
              />
            ))}
          </Slider>
        </Box>
      )}
    </Box>
  );
};

export default ImageSlider;
