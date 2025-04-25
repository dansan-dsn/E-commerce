import { Box, Typography } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

const SectionHeader = ({ title, showMore }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mb: 3,
    }}
  >
    <Typography variant="h5" fontWeight={600}>
      {title}
    </Typography>

    {showMore && (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
        <ChevronRight />
      </Box>
    )}
  </Box>
);

export default SectionHeader;
