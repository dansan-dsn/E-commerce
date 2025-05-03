import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  Stack,
  Link,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import logo from "@assets/dsn.svg";
import PasswordInput from "@components/auth/PasswordInput";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }
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
          align="center"
          gutterBottom
          sx={{ fontWeight: 600, color: "primary.main" }}
        >
          Join Us Today
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 1 }}>
            {error}
          </Alert>
        )}

        <TextField
          label="Full Name"
          name="name"
          size="small"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 1 }}
        />

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

        <PasswordInput
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          fullWidth
          inputProps={{ minLength: 6 }}
          sx={{ mb: 1, color: "text.tertiary" }}
        />

        <PasswordInput
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          fullWidth
          inputProps={{ minLength: 6 }}
          sx={{ mb: 1, color: "text.tertiary" }}
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
          {loading ? "Creating Account..." : "Get Started"}
        </Button>

        <Stack
          direction="row"
          justifyContent="center"
          spacing={0.5}
          sx={{ mt: 2 }}
        >
          <Typography variant="body2" color="text.tertiary">
            Already have an account?
          </Typography>
          <Link
            component={RouterLink}
            to="/login"
            color="primary.main"
            fontWeight={500}
          >
            Sign In
          </Link>
        </Stack>
      </Box>
    </Container>
  );
}
