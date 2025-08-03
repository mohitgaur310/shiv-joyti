import React, { useState } from "react";
import {
  Box,
  Typography,
  Modal,
  IconButton,
  Container,
  Grid,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";

const content = {
  en: {
    title: "Gallery",
    subtitle: "Celebrating moments, memories, and milestones together.",
  },
  hi: {
    title: "गैलरी",
    subtitle: "पलों, यादों और उपलब्धियों का जश्न मनाते हुए।",
  },
};

const images = [
  {
    url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    captionEn: "Community Clean-up Drive",
    captionHi: "सामुदायिक सफाई अभियान",
  },
  {
    url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    captionEn: "Women Empowerment Workshop",
    captionHi: "महिला सशक्तिकरण कार्यशाला",
  },
  {
    url: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
    captionEn: "Children's Education Program",
    captionHi: "बच्चों की शिक्षा कार्यक्रम",
  },
  {
    url: "https://res.cloudinary.com/dewft820i/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1754237133/WhatsApp_Image_2025-08-03_at_20.20.38_zw3fke.jpg",
    captionEn: "Food Distribution",
    captionHi: "स्वास्थ्य और पोषण शिविर",
  },
  {
    url: "https://res.cloudinary.com/dewft820i/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1754236852/WhatsApp_Image_2025-08-03_at_20.24.35_bkkhgh.jpg",
    captionEn: "Food Distribution",
    captionHi: "सांस्कृतिक उत्सव",
  },
  {
    url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    captionEn: "Volunteer Team Meeting",
    captionHi: "स्वयंसेवक टीम बैठक",
  },
  {
    url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    captionEn: "School Supplies Distribution",
    captionHi: "स्कूल सामग्री वितरण",
  },
  {
    url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    captionEn: "Art & Craft Session",
    captionHi: "कला और शिल्प सत्र",
  },
];

export default function GalleryPage({ language, setLanguage }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  console.log("GalleryPage", language);
  console.log("GalleryPage setLanguage", setLanguage);
  const handleOpen = (idx) => {
    setSelected(idx);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handlePrev = () =>
    setSelected((selected - 1 + images.length) % images.length);
  const handleNext = () => setSelected((selected + 1) % images.length);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: { xs: 7, md: 8 },
        pb: 6,
        position: "relative",
      }}
    >
      {/* Green Hero Section */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #72be44 0%, #7dc657 50%, #5aa237 100%)",
          py: { xs: 6, md: 8 },
          mb: { xs: 4, md: 6 },
          textAlign: "center",
          mt: { xs: 0, md: 0 }, // Add margin top for mobile to avoid header overlap
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontWeight: "bold",
              mb: { xs: 1, md: 2 },
              letterSpacing: 1,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              lineHeight: { xs: 1.2, md: 1.1 },
            }}
          >
            {content[language].title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              opacity: 0.92,
              fontStyle: "italic",
              maxWidth: 600,
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.25rem" },
              lineHeight: 1.4,
              px: { xs: 2, md: 0 },
            }}
          >
            {content[language].subtitle}
          </Typography>
        </Container>
      </Box>

      {/* Gallery Content */}
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Box sx={{ py: { xs: 4, md: 8 } }}>
          <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
            {images.map((image, idx) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                <Box
                  onClick={() => handleOpen(idx)}
                  sx={{
                    position: "relative",
                    height: { xs: 200, sm: 220, md: 240 },
                    cursor: "pointer",
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
                    },
                  }}
                >
                  <img
                    src={image.url}
                    alt={language === "en" ? image.captionEn : image.captionHi}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background:
                        "linear-gradient(transparent, rgba(0,0,0,0.7))",
                      color: "white",
                      p: { xs: 1.5, md: 2 },
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "0.75rem", md: "0.875rem" },
                        lineHeight: 1.3,
                      }}
                    >
                      {language === "en" ? image.captionEn : image.captionHi}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Modal for Image View */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: { xs: 2, md: 4 },
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "90vw",
            maxHeight: "90vh",
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            overflow: "hidden",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: { xs: 8, md: 16 },
              right: { xs: 8, md: 16 },
              bgcolor: "rgba(0,0,0,0.5)",
              color: "white",
              zIndex: 1,
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.7)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: { xs: 8, md: 16 },
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "rgba(0,0,0,0.5)",
              color: "white",
              zIndex: 1,
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.7)",
              },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: { xs: 8, md: 16 },
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "rgba(0,0,0,0.5)",
              color: "white",
              zIndex: 1,
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.7)",
              },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>

          {selected !== null && (
            <Box>
              <img
                src={images[selected].url}
                alt={
                  language === "en"
                    ? images[selected].captionEn
                    : images[selected].captionHi
                }
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "80vh",
                  objectFit: "contain",
                }}
              />
              <Box sx={{ p: { xs: 2, md: 3 }, textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "1rem", md: "1.25rem" },
                  }}
                >
                  {language === "en"
                    ? images[selected].captionEn
                    : images[selected].captionHi}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
}
