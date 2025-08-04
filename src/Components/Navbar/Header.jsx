import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  MenuItem,
  Select,
  useTheme,
  useMediaQuery,
  Divider,
  Container,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { ScrollContext } from "../Layout/Layout";

const navLinks = {
  en: ["Home", "About Us", "Initiatives", "Gallery", "Contact"],
  hi: ["होम", "हमारे बारे में", "पहलक़दमी", "गैलरी", "संपर्क करें"],
};

export default function Header({ language, setLanguage }) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollToTop, scrollToAbout } = useContext(ScrollContext);
  
  let logoStyles = {
    fontWeight: "bold",
    textDecoration: "none",
    background: "radial-gradient(at bottom center, #72be44 0, #7dc657 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  
  const toggleDrawer = (open) => () => setOpen(open);

  const buttonStyle = {
    color: "#666",
    px: 2,
    py: 1.5,
    "&:hover": {
      background: "radial-gradient(at bottom center, #72be44 0, #7dc657 100%)",
      color: "#fff",
    },
  };

  // Navigation paths for other links
  const navPaths = ["/", null, "/initiatives", "/gallery", "/contact"];

  // Ensure navLinks[language] is always defined
  const navArray = navLinks[language] || navLinks.en;

  // Handler for Home click
  const handleHomeClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else if (typeof scrollToTop === "function") {
      scrollToTop();
    }
  };

  // Handler for About Us click
  const handleAboutClick = () => {
    if (location.pathname !== "/") {
      sessionStorage.setItem("scrollToAbout", "1");
      navigate("/");
    } else if (typeof scrollToAbout === "function") {
      scrollToAbout();
    }
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        color="inherit" 
        elevation={2}
        sx={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar 
            sx={{ 
              justifyContent: "space-between",
              minHeight: { xs: '64px', md: '70px' },
              px: { xs: 1, sm: 2 },
            }}
          >
            <Typography
              component={Link}
              to="/"
              sx={{
                ...logoStyles,
                cursor: "pointer",
                display: "inline-block",
                minHeight: '44px',
                minWidth: '44px',
                display: 'flex',
                alignItems: 'center',
              }}
              onClick={handleHomeClick}
            >
              <img
                src="https://res.cloudinary.com/dewft820i/image/upload/v1754237553/android-chrome-192x192_gnhxwh.png"
                alt="SHIV JOYTI"
                style={{ 
                  height: 'auto',
                  width: 'auto',
                  maxHeight: '50px',
                  maxWidth: '50px',
                }}
              />
            </Typography>

            {!isMobile && (
              <Box sx={{ 
                display: "flex", 
                alignItems: "center", 
                gap: { md: 2, lg: 3 },
                flexWrap: 'nowrap',
              }}>
                {navArray.map((label, index) =>
                  index === 0 ? (
                    <Button
                      key={label}
                      onClick={handleHomeClick}
                      sx={{
                        px: { md: 1.5, lg: 2 },
                        py: 1.5,
                        fontSize: { md: "0.875rem", lg: "1rem" },
                        color: "#666",
                        fontWeight: "bold",
                        bgcolor: "transparent",
                        minHeight: '44px',
                        minWidth: '44px',
                        "&:hover": {
                          color: " #72be44",
                          bgcolor: "rgba(114, 190, 68, 0.1)",
                        },
                      }}
                    >
                      {label}
                    </Button>
                  ) : index === 1 ? (
                    <Button
                      key={label}
                      onClick={handleAboutClick}
                      sx={{
                        px: { md: 1.5, lg: 2 },
                        py: 1.5,
                        fontSize: { md: "0.875rem", lg: "1rem" },
                        color: "#666",
                        fontWeight: "bold",
                        bgcolor: "transparent",
                        minHeight: '44px',
                        minWidth: '44px',
                        "&:hover": {
                          color: " #72be44",
                          bgcolor: "rgba(114, 190, 68, 0.1)",
                        },
                      }}
                    >
                      {label}
                    </Button>
                  ) : (
                    <Button
                      key={label}
                      component={Link}
                      to={navPaths[index]}
                      sx={{
                        px: { md: 1.5, lg: 2 },
                        py: 1.5,
                        fontSize: { md: "0.875rem", lg: "1rem" },
                        color: "#666",
                        fontWeight: "bold",
                        bgcolor: "transparent",
                        minHeight: '44px',
                        minWidth: '44px',
                        "&:hover": {
                          color: " #72be44",
                          bgcolor: "rgba(114, 190, 68, 0.1)",
                        },
                      }}
                    >
                      {label}
                    </Button>
                  )
                )}
                <Button
                  variant="contained"
                  component={Link}
                  to="/donate"
                  sx={{
                    backgroundColor: "#72be44",
                    color: "#fff",
                    px: { md: 2, lg: 2.5 },
                    py: 1.5,
                    fontSize: { md: "0.875rem", lg: "1rem" },
                    fontWeight: "bold",
                    minHeight: '44px',
                    minWidth: '44px',
                    "&:hover": {
                      background: "radial-gradient(at bottom center, #5aa237 0, #6fb849 100%)",
                      color: "#fff",
                      transform: "translateY(-1px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  {language === "en" ? "Donate Now" : "अब दान करें"}
                </Button>
                <Select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  size="small"
                  sx={{
                    color: "#666",
                    minHeight: '44px',
                    minWidth: '44px',
                    "& .MuiSelect-select": { 
                      padding: "8px 12px",
                      fontSize: { md: "0.875rem", lg: "1rem" },
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ddd",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#72be44",
                    },
                  }}
                >
                  <MenuItem value="en">EN</MenuItem>
                  <MenuItem value="hi">हिंदी</MenuItem>
                </Select>
              </Box>
            )}

            {isMobile && (
              <IconButton 
                edge="end" 
                color="primary" 
                onClick={toggleDrawer(true)}
                sx={{
                  minHeight: '44px',
                  minWidth: '44px',
                  color: '#666',
                  '&:hover': {
                    color: '#72be44',
                    bgcolor: 'rgba(114, 190, 68, 0.1)',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer 
        anchor="right" 
        open={open} 
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: { xs: '280px', sm: '320px' },
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(10px)',
          }
        }}
      >
        <Box sx={{ 
          display: "flex", 
          justifyContent: "flex-end", 
          p: 2,
          borderBottom: '1px solid #eee',
        }}>
          <IconButton 
            onClick={toggleDrawer(false)}
            sx={{
              minHeight: '44px',
              minWidth: '44px',
              color: '#666',
              '&:hover': {
                color: '#72be44',
                bgcolor: 'rgba(114, 190, 68, 0.1)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ pt: 1 }}>
          {navArray.map((label, index) =>
            index === 0 ? (
              <ListItem
                button
                key={label}
                onClick={() => {
                  toggleDrawer(false)();
                  handleHomeClick();
                }}
                sx={{
                  ...buttonStyle,
                  py: 2,
                  px: 3,
                  minHeight: '56px',
                  fontSize: '1rem',
                  fontWeight: 500,
                  borderBottom: '1px solid #f5f5f5',
                }}
              >
                <ListItemText primary={label} />
              </ListItem>
            ) : index === 1 ? (
              <ListItem
                button
                key={label}
                onClick={() => {
                  toggleDrawer(false)();
                  handleAboutClick();
                }}
                sx={{
                  ...buttonStyle,
                  py: 2,
                  px: 3,
                  minHeight: '56px',
                  fontSize: '1rem',
                  fontWeight: 500,
                  borderBottom: '1px solid #f5f5f5',
                }}
              >
                <ListItemText primary={label} />
              </ListItem>
            ) : (
              <ListItem
                button
                key={label}
                component={Link}
                to={navPaths[index]}
                sx={{
                  ...buttonStyle,
                  py: 2,
                  px: 3,
                  minHeight: '56px',
                  fontSize: '1rem',
                  fontWeight: 500,
                  borderBottom: '1px solid #f5f5f5',
                }}
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary={label} />
              </ListItem>
            )
          )}

          {/* Language Selector for Mobile */}
          <Divider sx={{ my: 2, mx: 3 }} />
          <ListItem
            sx={{ 
              flexDirection: "column", 
              alignItems: "flex-start", 
              px: 3,
              py: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{ 
                color: "#666", 
                mb: 2, 
                fontWeight: 600,
                fontSize: '0.875rem',
              }}
            >
              {language === "en" ? "Language" : "भाषा"}
            </Typography>
            <Select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              size="small"
              sx={{
                color: "#666",
                minWidth: 140,
                minHeight: '44px',
                "& .MuiSelect-select": { 
                  padding: "12px 16px",
                  fontSize: '1rem',
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ddd",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#72be44",
                },
              }}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="hi">हिंदी</MenuItem>
            </Select>
          </ListItem>

          <Divider sx={{ my: 2, mx: 3 }} />

          {/* Donate Button for Mobile */}
          <ListItem sx={{ px: 3, pb: 3 }}>
            <Button
              variant="contained"
              component={Link}
              to="/donate"
              fullWidth
              onClick={toggleDrawer(false)}
              sx={{
                backgroundColor: "#72be44",
                color: "#fff",
                py: 2,
                px: 3,
                fontWeight: "bold",
                fontSize: '1rem',
                minHeight: '56px',
                borderRadius: 2,
                "&:hover": {
                  background: "radial-gradient(at bottom center, #5aa237 0, #6fb849 100%)",
                  color: "#fff",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              {language === "en" ? "Donate Now" : "अब दान करें"}
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
