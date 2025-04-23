import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Checkbox,
  Button,
  Alert,
  Stack,
  Link,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import logo from "../../assets/dsn.svg";

export default function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setTimeout(() => {
      console.log("Mock submission:", formData);
      navigate("/");
      setLoading(false);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 2,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "100%",
          p: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box
          component="img"
          src={logo} // or require('./assets/logo.png')
          alt="Company Logo"
          sx={{
            height: 60,
            width: "auto",
            mx: "auto",
            mb: 1,
          }}
        />
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: 600,
            color: "text.primary", // Changed from secondary to primary for better visibility
            mb: 2, // Added margin bottom for spacing
          }}
        >
          Forgot your password?
          <Typography
            component="span"
            sx={{
              display: "block", // Makes it appear on new line
              fontSize: "1rem", // Smaller than h5
              fontWeight: 400, // Normal weight
              color: "text.secondary",
              mt: 1, // Space between heading and subtext
            }}
          >
            Enter your email to recover your account
          </Typography>
        </Typography>
        {error && (
          <Alert severity="error" sx={{ mb: 1 }}>
            {error}
          </Alert>
        )}
        <TextField
          label="Email"
          type="email"
          name="email"
          size="small"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 1 }}
        />
        <Button
          type="submit"
          variant="contained"
          size="medium"
          disabled={loading}
          fullWidth
          sx={{
            fontWeight: 600,
            letterSpacing: 0.5,
            bgcolor: "primary.main",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          {loading ? "sending code.." : "Send Reset Link"}
        </Button>
        <Stack direction="row" spacing={0.5} sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.tertiary">
            Can recover your account on this page
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
}
