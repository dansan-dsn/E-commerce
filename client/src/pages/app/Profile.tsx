import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Divider,
  Switch,
  Container,
  IconButton,
  Stack,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Footer from "@components/main/Footer";

const Profile = () => {
  const [editMode, setEditMode] = useState(null);

  const [profileData, setProfileData] = useState({
    name: "N/A",
    address: "123 Main St, San Francisco, CA",
    contact: "+1 (555) 123-4567",
    email: "john.doe@example.com",
    paymentMethod: "Visa •••• 4242",
    mailPreference: true,
    accountActive: true,
  });

  const handleEdit = (field) => setEditMode(field);

  const handleSave = () => setEditMode(null);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const EditableField = ({ label, fieldName, multiline = false }) => (
    <Box>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        {label}
      </Typography>
      {editMode === fieldName ? (
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <TextField
            fullWidth
            size="small"
            name={fieldName}
            value={profileData[fieldName]}
            onChange={handleChange}
            multiline={multiline}
            rows={multiline ? 3 : 1}
          />
          <Button
            startIcon={<SaveIcon />}
            onClick={handleSave}
            variant="contained"
            size="small"
          >
            Save
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography>{profileData[fieldName] || "N/A"}</Typography>
          <IconButton size="small" onClick={() => handleEdit(fieldName)}>
            <EditIcon fontSize="small" />
          </IconButton>
        </Box>
      )}
    </Box>
  );

  return (
    <Container maxWidth="xl" sx={{ pb: 4, pt: { xs: 17, sm: 19 } }}>
      <Paper
        sx={{ p: 3, mb: 4, height: "100%", borderRadius: 1, boxShadow: 3 }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Typography variant="h5" fontWeight="bold">
            Personal Information
          </Typography>
        </Box>

        <Stack spacing={3}>
          <EditableField label="Name" fieldName="name" />
          <EditableField label="Address" fieldName="address" multiline />
          <EditableField label="Contact" fieldName="contact" />
          <EditableField label="Email" fieldName="email" />
        </Stack>
      </Paper>

      <Stack spacing={3}>
        {/* Payment Method */}
        <Paper sx={{ p: 3, borderRadius: 1, boxShadow: 3 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Payment Method
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <EditableField label="Payment Method" fieldName="paymentMethod" />
        </Paper>

        {/* Mail Preferences */}
        <Paper sx={{ p: 3, borderRadius: 1, boxShadow: 3 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Mail Preferences
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 1,
            }}
          >
            <Box>
              <Typography variant="subtitle1">
                Receive marketing emails
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Get updates about new features
              </Typography>
            </Box>
            <Switch
              name="mailPreference"
              checked={profileData.mailPreference}
              onChange={handleChange}
              color="primary"
            />
          </Box>
        </Paper>

        {/* Account Status */}
        <Paper sx={{ p: 3, borderRadius: 1, boxShadow: 3 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Account Status
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 1,
            }}
          >
            <Box>
              <Typography variant="subtitle1">Deactivate account</Typography>
              <Typography variant="body2" color="text.secondary">
                Temporarily disable your account
              </Typography>
            </Box>
            <Switch
              name="accountActive"
              checked={profileData.accountActive}
              onChange={handleChange}
              color="error"
            />
          </Box>
          {!profileData.accountActive && (
            <Typography variant="body2" color="error" sx={{ mt: 2 }}>
              Warning: Your account will be deactivated immediately
            </Typography>
          )}
        </Paper>
      </Stack>
      <Footer />
    </Container>
  );
};

export default Profile;
