import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { Box, Typography, Modal, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';

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
    captionHi: "सामुदायिक सफाई अभियान"
  },
  {
    url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    captionEn: "Women Empowerment Workshop",
    captionHi: "महिला सशक्तिकरण कार्यशाला"
  },
  {
    url: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
    captionEn: "Children's Education Program",
    captionHi: "बच्चों की शिक्षा कार्यक्रम"
  },
  {
    url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    captionEn: "Health & Nutrition Camp",
    captionHi: "स्वास्थ्य और पोषण शिविर"
  },
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    captionEn: "Cultural Festival",
    captionHi: "सांस्कृतिक उत्सव"
  },
  {
    url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    captionEn: "Volunteer Team Meeting",
    captionHi: "स्वयंसेवक टीम बैठक"
  },
  {
    url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    captionEn: "School Supplies Distribution",
    captionHi: "स्कूल सामग्री वितरण"
  },
  {
    url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    captionEn: "Art & Craft Session",
    captionHi: "कला और शिल्प सत्र"
  },
];

const heights = [240, 320, 200, 280, 260, 220, 300, 250];

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
  const handlePrev = () => setSelected((selected - 1 + images.length) % images.length);
  const handleNext = () => setSelected((selected + 1) % images.length);

  return (
    <Box sx={{ minHeight: "100vh", pt: 8, pb: 6, position: "relative" }}>
      {/* Green Hero Section */}
      <Box sx={{
        background: 'linear-gradient(135deg, #72be44 0%, #7dc657 50%, #5aa237 100%)',
        py: 8,
        mb: { xs: 4, md: 6 },
        textAlign: 'center',
      }}>
        <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold', mb: 1, letterSpacing: 1 }}>
          {content[language].title}
        </Typography>
        <Typography variant="h6" sx={{ color: 'white', opacity: 0.92, fontStyle: 'italic', maxWidth: 600, mx: 'auto' }}>
          {content[language].subtitle}
        </Typography>
      </Box>
      {/* Existing Content */}
      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 3 }}>
         
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'center',
          }}>
            {images.map((img, idx) => (
              <Box
                key={idx}
                sx={{
                  mb: 4,
                  borderRadius: 4,
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: '0px 6px 24px 0px rgba(114,190,68,0.10)',
                  cursor: 'pointer',
                  transition: 'transform 0.22s, box-shadow 0.22s',
                  '&:hover': {
                    transform: 'scale(1.045) rotate(-1deg)',
                    boxShadow: '0px 12px 36px 0px rgba(114,190,68,0.18)',
                  },
                  height: heights[idx % heights.length],
                  background: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={() => handleOpen(idx)}
              >
                <img
                  src={img.url}
                  alt={language === 'hi' ? img.captionHi : img.captionEn}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }}
                />
                {/* Hover overlay */}
                <Box sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  bgcolor: 'rgba(34,34,34,0.18)',
                  opacity: 0,
                  transition: 'opacity 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 20,
                  textShadow: '0 2px 8px #222',
                  pointerEvents: 'none',
                  zIndex: 2,
                  '&:hover': { opacity: 1 },
                }}
                  className="gallery-hover-overlay"
                >
                  {language === 'hi' ? img.captionHi : img.captionEn}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        {/* Modal/Lightbox */}
        <Modal open={open} onClose={handleClose} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ outline: 'none', position: 'relative', bgcolor: '#fff', borderRadius: 4, p: 2, boxShadow: 6, maxWidth: '90vw', maxHeight: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 8, right: 8, zIndex: 2 }}><CloseIcon /></IconButton>
            <img
              src={selected !== null ? images[selected].url : ''}
              alt={selected !== null ? (language === 'hi' ? images[selected].captionHi : images[selected].captionEn) : ''}
              style={{ maxWidth: '80vw', maxHeight: '60vh', borderRadius: 8, marginBottom: 16 }}
            />
            <Typography variant="h6" sx={{ color: '#222', mb: 2, textAlign: 'center' }}>
              {selected !== null && (language === 'hi' ? images[selected].captionHi : images[selected].captionEn)}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <IconButton onClick={handlePrev} sx={{ bgcolor: '#eaf7e3', '&:hover': { bgcolor: '#72be44', color: '#fff' } }}><ArrowBackIosNewIcon /></IconButton>
              <IconButton onClick={handleNext} sx={{ bgcolor: '#eaf7e3', '&:hover': { bgcolor: '#72be44', color: '#fff' } }}><ArrowForwardIosIcon /></IconButton>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
} 