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
      <AppBar position="fixed" color="inherit" elevation={2}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            component={Link}
            to="/"
            sx={{
              ...logoStyles,
              cursor: "pointer",
              display: "inline-block",
            }}
            onClick={handleHomeClick}
          >
            <img
              src="/assests/logo_shivjyoti.png"
              alt="SHIV JOYTI"
              style={{ height: 60 }}
            />
          </Typography>

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              {navArray.map((label, index) =>
                index === 0 ? (
                  <Button
                    key={label}
                    onClick={handleHomeClick}
                    sx={{
                      px: 2,
                      fontSize: "16px",
                      color: "#666",
                      fontWeight: "bold",
                      bgcolor: "white",
                      "&:hover": {
                        color: " #72be44",
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
                      px: 2,
                      fontSize: "16px",
                      color: "#666",
                      fontWeight: "bold",
                      bgcolor: "white",
                      "&:hover": {
                        color: " #72be44",
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
                      px: 2,
                      fontSize: "16px",
                      color: "#666",
                      fontWeight: "bold",
                      bgcolor: "white",
                      "&:hover": {
                        color: " #72be44",
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
                  px: 2,
                  "&:hover": {
                    background:
                      "radial-gradient(at bottom center, #5aa237 0, #6fb849 100%)",
                    color: "#fff",
                  },
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
                  "& .MuiSelect-select": { padding: "4px 8px" },
                }}
              >
                <MenuItem value="en">EN</MenuItem>
                <MenuItem value="hi">हिंदी</MenuItem>
              </Select>
            </Box>
          )}

          {isMobile && (
            <IconButton edge="end" color="primary" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navArray.map((label, index) =>
            index === 0 ? (
              <ListItem
                button
                key={label}
                onClick={() => {
                  toggleDrawer(false)();
                  handleHomeClick();
                }}
                sx={buttonStyle}
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
                sx={buttonStyle}
              >
                <ListItemText primary={label} />
              </ListItem>
            ) : (
              <ListItem
                button
                key={label}
                component={Link}
                to={navPaths[index]}
                sx={buttonStyle}
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary={label} />
              </ListItem>
            )
          )}

          {/* Language Selector for Mobile */}
          <Divider sx={{ my: 2 }} />
          <ListItem
            sx={{ flexDirection: "column", alignItems: "flex-start", px: 3 }}
          >
            <Typography
              variant="body2"
              sx={{ color: "#666", mb: 1, fontWeight: 500 }}
            >
              {language === "en" ? "Language" : "भाषा"}
            </Typography>
            <Select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              size="small"
              sx={{
                color: "#666",
                minWidth: 120,
                "& .MuiSelect-select": { padding: "8px 12px" },
              }}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="hi">हिंदी</MenuItem>
            </Select>
          </ListItem>

          <Divider sx={{ my: 2 }} />

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
                py: 1.5,
                fontWeight: "bold",
                "&:hover": {
                  background:
                    "radial-gradient(at bottom center, #5aa237 0, #6fb849 100%)",
                  color: "#fff",
                },
              }}
            >
              {language === "en" ? "Donate Now" : "अब दान करें"}
            </Button>
          </ListItem>
        </List>
      </Drawer>
      {/* <Toolbar /> */}
    </>
  );
}
