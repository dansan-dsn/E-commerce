import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Your Company
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Making the world a better place through technology and innovation.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" color="#546e7a" display="block" mb={1}>
              Home
            </Link>
            <Link href="#" color="#546e7a" display="block" mb={1}>
              Products
            </Link>
            <Link href="#" color="#546e7a" display="block" mb={1}>
              Services
            </Link>
            <Link href="#" color="#546e7a" display="block" mb={1}>
              About Us
            </Link>
          </Grid>

          {/* Support */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              Support
            </Typography>
            <Link href="#" color="#546e7a" display="block" mb={1}>
              Contact
            </Link>
            <Link href="#" color="#546e7a" display="block" mb={1}>
              FAQ
            </Link>
            <Link href="#" color="#546e7a" display="block" mb={1}>
              Privacy Policy
            </Link>
            <Link href="#" color="#546e7a" display="block" mb={1}>
              Terms
            </Link>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              Payment Method
            </Typography>
            <Typography color="#546e7a" display="block" mb={1}>
              On Delivery
            </Typography>
            <Typography color="#546e7a" display="block" mb={1}>
              Paypal
            </Typography>
            <Typography color="#546e7a" display="block" mb={1}>
              Mobile Money
            </Typography>
            <Typography color="#546e7a" display="block" mb={1}>
              Bank Account
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} My Company. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
