import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Alert,
  Stack,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import logo from "../../assets/dsn.svg";
import PasswordInput from "../../components/auth/PasswordInput";

export default function ResetPassword() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setLoading(true);
    setError("");

    // Mock API call
    setTimeout(() => {
      console.log("Password reset successful:", formData.password);
      setLoading(false);
      setSuccess(true);

      // Redirect after 2 seconds
      setTimeout(() => navigate("/login"), 2000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (error) setError("");
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
          src={logo}
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
            color: "text.primary",
            mb: 2,
            textAlign: "center",
          }}
        >
          Create New Password
          <Typography
            component="span"
            sx={{
              display: "block",
              fontSize: "1rem",
              fontWeight: 400,
              color: "text.secondary",
              mt: 1,
            }}
          >
            Your new password must be different from previous passwords
          </Typography>
        </Typography>

        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Password updated successfully! Redirecting to login...
          </Alert>
        )}

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <PasswordInput
          label="New Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
          inputProps={{ minLength: 8 }}
        />

        <PasswordInput
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
          inputProps={{ minLength: 8 }}
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={loading || success}
          fullWidth
          sx={{
            fontWeight: 600,
            letterSpacing: 0.5,
            py: 1.5,
            bgcolor: "primary.main",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          {loading ? "Updating..." : "Reset Password"}
        </Button>

        <Stack
          direction="row"
          justifyContent="center"
          spacing={1}
          sx={{ mt: 2 }}
        >
          <Typography variant="body2" color="text.secondary">
            Remember your password?
          </Typography>
          <Button
            component={RouterLink}
            to="/login"
            size="small"
            sx={{
              minWidth: "auto",
              p: 0,
              fontWeight: 500,
              color: "primary.main",
            }}
          >
            Login
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
