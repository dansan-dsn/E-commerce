import { Box, Typography } from "@mui/material";

const productSpecs = [
  { id: 1, title: "Brand", value: "Apple" },
  { id: 2, title: "Model", value: "MacBook Pro" },

  { id: 3, title: "Memory", value: "16GB" },
  { id: 4, title: "SSD", value: "512GB" },

  { id: 5, title: "Size", value: '14.2"' },
  { id: 6, title: "Resolution", value: "3024×1964" },
];

const Specifications = () => {
  return (
    <Box
      sx={{
        p: 1,
        width: { xs: "100%", md: "70%" }, // Gradual width reduction
        bgcolor: "background.paper",
        borderRadius: 1,
        boxShadow: 1,
      }}
    >
      {productSpecs.map((spec) => (
        <Box
          key={spec.id}
          sx={{
            mb: 2,
            border: 1,
            borderColor: "divider",
            borderRadius: 1,
            overflow: "hidden", // Keeps border radius on child elements
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 1.5,
              px: 1,
              bgcolor: "action.hover", // Slightly different background for the whole row
              transition: "background-color 0.2s",
              "&:hover": {
                bgcolor: "action.selected",
              },
            }}
          >
            <Box
              sx={{
                bgcolor: "background.default",
                px: 2,
                py: 1,
                borderRadius: 1,
                minWidth: { xs: "40%", sm: "35%", md: "30%" }, // Responsive title width
                maxWidth: { xs: "40%", sm: "35%", md: "30%" },
                boxShadow: "inset 0 0 4px rgba(0,0,0,0.1)",
              }}
            >
              <Typography
                component="dt"
                variant="body1"
                sx={{
                  fontWeight: 600, // Bolder for titles
                  color: "text.primary",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {spec.title}
              </Typography>
            </Box>

            <Typography
              component="dd"
              variant="body1"
              sx={{
                fontWeight: 400,
                color: "text.primary",
                textAlign: "right",
                flex: 1,
                pl: 2,
                pr: 1,
              }}
            >
              {spec.value}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Specifications;
