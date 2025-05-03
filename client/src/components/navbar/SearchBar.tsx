import { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Paper,
  Typography,
  useTheme,
  useMediaQuery,
  Fade,
  ClickAwayListener,
} from "@mui/material";
import { Search as SearchIcon, Close as CloseIcon } from "@mui/icons-material";

export const SearchBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = [
    "Wireless Headphones",
    "Smart Watches",
    "Running Shoes",
    "Yoga Mats",
    "Water Bottles",
  ];

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
    if (isSearchOpen) {
      setSearchQuery("");
      setShowSuggestions(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setShowSuggestions(false);
    if (isMobile) {
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    if (!isMobile) {
      setIsSearchOpen(true);
    }
  }, [isMobile]);

  return (
    <Box
      sx={{
        position: "relative",
        flex: isMobile ? (isSearchOpen ? 1 : 0) : 1,
        maxWidth: isMobile ? (isSearchOpen ? "100%" : "40px") : "600px",
        transition: "all 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: isMobile && !isSearchOpen ? "flex-end" : "flex-start",
      }}
    >
      {/* Mobile Search Toggle */}
      {isMobile && !isSearchOpen && (
        <IconButton
          onClick={toggleSearch}
          sx={{
            p: 1,
            mr: isMobile && !isSearchOpen ? 0 : 1,
          }}
        >
          <SearchIcon />
        </IconButton>
      )}

      {/* Search Input */}
      {(isSearchOpen || !isMobile) && (
        <ClickAwayListener
          onClickAway={() => {
            setShowSuggestions(false);
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              flex: 1,
            }}
          >
            <Paper
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                borderRadius: "50px",
                backgroundColor: "action.hover",
                "&:hover": { backgroundColor: "action.selected" },
                pr: 1,
              }}
            >
              <IconButton
                sx={{
                  p: theme.spacing(1),
                  color: "text.secondary",
                }}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>

              <InputBase
                fullWidth
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => setShowSuggestions(searchQuery.length > 0)}
                sx={{
                  flex: 1,
                  py: 1,
                  px: 0,
                }}
              />

              {(searchQuery || isMobile) && (
                <IconButton
                  onClick={handleClearSearch}
                  size="small"
                  sx={{
                    color: "text.secondary",
                    p: 0.5,
                  }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              )}
            </Paper>

            {/* Suggestions Dropdown */}
            {showSuggestions && (
              <Fade in={showSuggestions}>
                <Paper
                  sx={{
                    position: "absolute",
                    top: "calc(100% + 4px)",
                    left: 0,
                    right: 0,
                    zIndex: theme.zIndex.modal,
                    py: 1,
                    maxHeight: "300px",
                    overflow: "auto",
                    boxShadow: theme.shadows[4],
                    border: `1px solid ${theme.palette.divider}`,
                  }}
                >
                  {suggestions
                    .filter((suggestion) =>
                      suggestion
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                    )
                    .map((suggestion, index) => (
                      <Box
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        sx={{
                          px: 2,
                          py: 1.5,
                          cursor: "pointer",
                          "&:hover": {
                            backgroundColor: "action.hover",
                          },
                        }}
                      >
                        <Typography variant="body1">{suggestion}</Typography>
                      </Box>
                    ))}
                </Paper>
              </Fade>
            )}
          </Box>
        </ClickAwayListener>
      )}
    </Box>
  );
};
