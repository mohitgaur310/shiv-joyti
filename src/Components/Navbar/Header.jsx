import React, { useState } from "react";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navLinks = {
  en: ["Home", "About Us", "Initiatives", "Gallery", "Contact"],
  hi: ["होम", "हमारे बारे में", "पहलक़दमी", "गैलरी", "संपर्क करें"],
};

export default function Header({ language, setLanguage }) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
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

  return (
    <>
      <AppBar position="fixed" color="inherit" elevation={2}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component="a"
            href="#"
            sx={{
              ...logoStyles,
            }}
          >
            SHIV JOYTI
          </Typography>

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              {navLinks[language].map((link, index) => (
                <Button
                  key={link}
                  href={`#${navLinks.en[index]
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  sx={{
                    px: 2,
                    fontSize: "16px",
                    color: "#666",
                    fontWeight: "bold",
                    bgcolor: "white",
                    "&:hover": {
                      color: " #72be44",
                      // color: "#fff",
                    },
                  }}
                >
                  {link}
                </Button>
              ))}
              <Button
                variant="contained"
                href="#donate"
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
          {navLinks[language].map((text, index) => (
            <ListItem
              button
              key={text}
              component="a"
              href={`#${navLinks.en[index].toLowerCase().replace(/\s+/g, "-")}`}
              sx={buttonStyle}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
          <ListItem button component="a" href="#donate">
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "white",
                color: "#666",
                "&:hover": {
                  background:
                    "radial-gradient(at bottom center, #72be44 0, #7dc657 100%)",
                  color: "#fff",
                },
              }}
            >
              {language === "en" ? "Donate Now" : "अब दान करें"}
            </Button>
          </ListItem>
        </List>
      </Drawer>
      <Toolbar />
    </>
  );
}
