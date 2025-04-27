import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Switch,
  Container,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Profile = () => {
  // State for editable fields
  const [editMode, setEditMode] = useState(null);
  const [profileData, setProfileData] = useState({
    name: null ?? "N/A",
    address: "123 Main St, San Francisco, CA",
    contact: "+1 (555) 123-4567",
    email: "john.doe@example.com",
    paymentMethod: "Visa •••• 4242",
    mailPreference: true,
    accountActive: true,
  });

  const handleEdit = (field) => {
    setEditMode(field);
  };

  const handleSave = () => {
    setEditMode(null);
    // Here you would typically save to API
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4, pt: { xs: 15, sm: 17 } }}>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6">Personal Information</Typography>
        </Box>
        <Divider sx={{ mb: 3 }} />

        <List disablePadding>
          {/* Name Field */}
          <ListItem disablePadding sx={{ mb: 2 }}>
            <Box sx={{ width: "100%" }}>
              <Typography variant="subtitle2" color="text.secondary">
                Name
              </Typography>
              {editMode === "name" ? (
                <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                  <TextField
                    fullWidth
                    size="small"
                    name="name"
                    value={profileData.name}
                    onChange={handleChange}
                  />
                  <Button
                    startIcon={<SaveIcon />}
                    onClick={handleSave}
                    variant="contained"
                  >
                    Save
                  </Button>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 1,
                  }}
                >
                  <Typography>{profileData.name}</Typography>
                  <IconButton size="small" onClick={() => handleEdit("name")}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                </Box>
              )}
            </Box>
          </ListItem>

          {/* Address Field */}
          <ListItem disablePadding sx={{ mb: 2 }}>
            <Box sx={{ width: "100%" }}>
              <Typography variant="subtitle2" color="text.secondary">
                Address
              </Typography>
              {editMode === "address" ? (
                <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    size="small"
                    name="address"
                    value={profileData.address}
                    onChange={handleChange}
                  />
                  <Button
                    startIcon={<SaveIcon />}
                    onClick={handleSave}
                    variant="contained"
                  >
                    Save
                  </Button>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 1,
                  }}
                >
                  <Typography>{profileData.address}</Typography>
                  <IconButton
                    size="small"
                    onClick={() => handleEdit("address")}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                </Box>
              )}
            </Box>
          </ListItem>

          {/* Contact Field */}
          <ListItem disablePadding sx={{ mb: 2 }}>
            <Box sx={{ width: "100%" }}>
              <Typography variant="subtitle2" color="text.secondary">
                Contact
              </Typography>
              {editMode === "contact" ? (
                <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                  <TextField
                    fullWidth
                    size="small"
                    name="contact"
                    value={profileData.contact}
                    onChange={handleChange}
                  />
                  <Button
                    startIcon={<SaveIcon />}
                    onClick={handleSave}
                    variant="contained"
                  >
                    Save
                  </Button>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 1,
                  }}
                >
                  <Typography>{profileData.contact}</Typography>
                  <IconButton
                    size="small"
                    onClick={() => handleEdit("contact")}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                </Box>
              )}
            </Box>
          </ListItem>

          {/* Email Field */}
          <ListItem disablePadding sx={{ mb: 2 }}>
            <Box sx={{ width: "100%" }}>
              <Typography variant="subtitle2" color="text.secondary">
                Email
              </Typography>
              {editMode === "email" ? (
                <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                  <TextField
                    fullWidth
                    size="small"
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleChange}
                  />
                  <Button
                    startIcon={<SaveIcon />}
                    onClick={handleSave}
                    variant="contained"
                  >
                    Save
                  </Button>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 1,
                  }}
                >
                  <Typography>{profileData.email}</Typography>
                  <IconButton size="small" onClick={() => handleEdit("email")}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                </Box>
              )}
            </Box>
          </ListItem>
        </List>
      </Paper>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Payment Method
        </Typography>
        <Divider sx={{ mb: 3 }} />
        {editMode === "payment" ? (
          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField
              fullWidth
              size="small"
              name="paymentMethod"
              value={profileData.paymentMethod}
              onChange={handleChange}
            />
            <Button
              startIcon={<SaveIcon />}
              onClick={handleSave}
              variant="contained"
            >
              Save
            </Button>
          </Box>
        ) : (
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{profileData.paymentMethod}</Typography>
            <IconButton size="small" onClick={() => handleEdit("payment")}>
              <EditIcon fontSize="small" />
            </IconButton>
          </Box>
        )}
      </Paper>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Mail Preferences
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <ListItemText
            primary="Receive marketing emails"
            secondary="Get updates about new features and products"
          />
          <Switch
            name="mailPreference"
            checked={profileData.mailPreference}
            onChange={handleChange}
            color="primary"
          />
        </Box>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Account Status
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <ListItemText
            primary="Deactivate account"
            secondary="Temporarily disable your account"
          />
          <Switch
            name="accountActive"
            checked={profileData.accountActive}
            onChange={handleChange}
            color="error"
          />
        </Box>
        {!profileData.accountActive && (
          <Typography variant="body2" color="error" sx={{ mt: 2 }}>
            Warning: Your account will be deactivated immediately after 10
            minutes. Please contact support if you need assistance.
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default Profile;
