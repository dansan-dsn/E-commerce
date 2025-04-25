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
import logo from "@assets/dsn.svg";
import PasswordInput from "@components/auth/PasswordInput";

export default function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
          align="center"
          gutterBottom
          sx={{
            fontWeight: 600,
            color: "primary.main",
            mb: 2,
          }}
        >
          Welcome Back
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
        <Stack
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          spacing={0.5}
        >
          <Typography variant="body2" color="text.tertiary">
            <Checkbox defaultChecked size="small" />
            Remember me
          </Typography>
          <Link
            component={RouterLink}
            to="/forgot-password"
            color="primary.main"
            fontWeight={500}
            sx={{}}
            underline="hover"
          >
            Forgot Password
          </Link>
        </Stack>

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
          {loading ? "Logging in..." : "Login"}
        </Button>

        <Stack
          direction="row"
          justifyContent="center"
          spacing={0.5}
          sx={{ mt: 2 }}
        >
          <Typography variant="body2" color="text.tertiary">
            Have an account?
          </Typography>
          <Link
            component={RouterLink}
            to="/signup"
            color="primary.main"
            fontWeight={500}
          >
            Sign Up
          </Link>
        </Stack>
      </Box>
    </Container>
  );
}
