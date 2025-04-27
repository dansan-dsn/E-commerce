import {
  Box,
  Button,
  Modal,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { useState, useMemo } from "react";
import Rating from "@mui/material/Rating";
import Pagination from "@mui/material/Pagination";
import CancelIcon from "@mui/icons-material/Cancel";

const reviews = [
  {
    id: 1,
    text: "Great product! Highly recommend.",
    stars: 5,
    date: "2023-10-01",
  },
  {
    id: 2,
    text: "Good quality, but a bit expensive.",
    stars: 4.5,
    date: "2023-10-02",
  },
  {
    id: 3,
    text: "Not what I expected. Could be better.",
    stars: 2,
    date: "2023-10-02",
  },
  {
    id: 4,
    text: "Excellent value for money!",
    stars: 5,
    date: "2023-10-02",
  },
  {
    id: 5,
    text: "Average product, nothing special.",
    stars: 3,
    date: "2023-10-02",
  },
  {
    id: 6,
    text: "Great product! Highly recommend.",
    stars: 5,
    date: "2023-10-01",
  },
  {
    id: 7,
    text: "Good quality, but a bit expensive.",
    stars: 4,
    date: "2023-10-02",
  },
  {
    id: 8,
    text: "Not what I expected. Could be better.",
    stars: 2,
    date: "2023-10-02",
  },
  {
    id: 9,
    text: "Excellent value for money!",
    stars: 5,
    date: "2023-10-02",
  },
  {
    id: 10,
    text: "Average product, nothing special.",
    stars: 3,
    date: "2023-10-02",
  },
];

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const reviewsPerPage = 5;

  //  current review pages
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = useMemo(() => {
    return reviews.slice(indexOfFirstReview, indexOfLastReview);
  }, [currentPage, reviewsPerPage]);

  const totalReviews = reviews.length;
  const totalStars = reviews.reduce((acc, review) => acc + review.stars, 0);
  const averageStarRating = ((totalStars / (totalReviews * 5)) * 10).toFixed(1);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  //   modal
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Box sx={{ p: 1, borderRadius: 1 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",

              gap: 1,
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
            >
              {averageStarRating}/10
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              <Rating value={averageStarRating} readOnly />
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", fontSize: "0.9rem" }}
            >
              {totalReviews} reviews
            </Typography>
          </Box>
          <Box>
            <Button onClick={handleOpenModal} variant="contained" size="small">
              Rate this product
            </Button>
          </Box>
          <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: { lg: 500, md: 400, sm: 300, xs: 320 },
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 2,
                borderRadius: 1,
              }}
            >
              <Box
                variant="form"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 1,
                }}
              >
                <Typography
                  id="modal-title"
                  variant="h6"
                  sx={{
                    fontSize: ".8rem",
                    fontWeight: "bold",
                    color: "text.tertiary",
                  }}
                  component="h2"
                >
                  Your Rating
                </Typography>
                <Box
                  onClick={handleCloseModal}
                  sx={{ color: "text.secondary", cursor: "pointer" }}
                  hover={{ color: "text.primary" }}
                  variant="span"
                >
                  <CancelIcon color="text.tertiary" />
                </Box>
              </Box>
              <Box variant="div">
                <Rating name="half-rating" vdefaultValue={0} precision={0.5} />
                <Typography
                  id="modal-description"
                  sx={{
                    mt: 2,
                    fontSize: ".8rem",
                    fontWeight: "bold",
                    color: "text.tertiary",
                  }}
                >
                  Your Review
                </Typography>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={4}
                  placeholder="Write your review here..."
                  style={{
                    width: "100%",
                    borderRadius: 4,
                    padding: 8,
                    border: "1px solid #ccc",
                    fontSize: "0.9rem",
                    backgroundColor: "#f5f7fa",
                  }}
                />
              </Box>
              <Box
                sx={{ display: "flex", mt: 2, justifyContent: "space-between" }}
              >
                <Button onClick={handleCloseModal}>Close</Button>
                <Button variant="contained" onClick={handleCloseModal}>
                  Submit
                </Button>
              </Box>
            </Box>
          </Modal>
        </Box>
        {currentReviews.map((review) => (
          <Box
            key={review.id}
            sx={{
              p: 2,
              borderRadius: 1,
              bgcolor: "background.paper",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Rating
                value={review.stars}
                name="half-rating"
                precision={0.5}
                readOnly
              />
              <Typography variant="span" sx={{ color: "gray" }}>
                by
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                User {review.id}
              </Typography>
            </Box>
            <Typography variant="body1">{review.text}</Typography>
            <Typography variant="caption" color="text.secondary">
              {new Date(review.date).toLocaleDateString()}
            </Typography>
          </Box>
        ))}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Pagination
            count={Math.ceil(reviews.length / reviewsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Reviews;
