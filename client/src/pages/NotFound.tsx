import { Container, Box, Typography, Button, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const NotFound = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        py: 4,
      }}
    >
      <Box
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <ErrorOutlineIcon
          sx={{
            fontSize: 80,
            color: theme.palette.mode === "dark" ? "error.light" : "error.main",
          }}
        />

        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            color: "text.primary",
          }}
        >
          404
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mb: 2,
            color: "text.secondary",
          }}
        >
          Page Not Found
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            color: "text.secondary",
          }}
        >
          The page you're looking for doesn't exist or has been moved.
        </Typography>

        <Button
          component={RouterLink}
          to="/"
          variant="contained"
          size="large"
          sx={{
            px: 4,
            py: 1.5,
            fontWeight: 600,
          }}
        >
          Return Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
