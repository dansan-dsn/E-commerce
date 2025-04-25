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

export default function VerifyEmail() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (otp.length !== 5) {
      setError("Please enter a valid 5-digit OTP");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      console.log("OTP submitted:", otp);
      navigate("/"); // Redirect after verification
      setLoading(false);
    }, 1500);
  };

  const handleResendOtp = () => {
    setResendDisabled(true);
    // Start countdown timer
    const timer = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setResendDisabled(false);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    console.log("Resending OTP...");
    // Here you would typically call your API to resend OTP
  };

  const handleOtpChange = (e) => {
    const value = e.target.value;
    // Only allow numbers and limit to 5 characters
    if (/^\d*$/.test(value) && value.length <= 5) {
      setOtp(value);
      setError("");
    }
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
          }}
        >
          Verify Your Email
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
            We've sent a 5-digit code to your email
          </Typography>
        </Typography>
        {error && (
          <Alert severity="error" sx={{ mb: 1 }}>
            {error}
          </Alert>
        )}
        <TextField
          label="Verification Code"
          type="text"
          name="otp"
          size="small"
          value={otp}
          onChange={handleOtpChange}
          inputProps={{
            maxLength: 5,
            inputMode: "numeric",
            pattern: "[0-9]*",
          }}
          required
          fullWidth
          sx={{ mb: 1 }}
        />
        <Button
          type="submit"
          variant="contained"
          size="medium"
          disabled={loading || otp.length !== 5}
          fullWidth
          sx={{
            fontWeight: 600,
            letterSpacing: 0.5,
            bgcolor: "primary.main",
            "&:hover": {
              bgcolor: "primary.dark",
            },
            mb: 2,
          }}
        >
          {loading ? "Verifying..." : "Verify Email"}
        </Button>

        <Stack direction="row" justifyContent="center" spacing={1}>
          <Typography variant="body2" color="text.secondary">
            Didn't receive code?
          </Typography>
          <Button
            onClick={handleResendOtp}
            disabled={resendDisabled}
            sx={{
              minWidth: "auto",
              p: 0,
              fontWeight: 500,
              color: resendDisabled ? "text.disabled" : "primary.main",
            }}
          >
            {resendDisabled ? `Resend in ${resendTimer}s` : "Resend"}
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
