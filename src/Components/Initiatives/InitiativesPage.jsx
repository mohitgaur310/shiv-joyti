import React, { useState } from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CloseIcon from '@mui/icons-material/Close';

const content = {
  en: {
    title: "Our Initiatives",
    subtitle: "Inspiring change, one initiative at a time.",
  },
  hi: {
    title: "हमारी पहलें",
    subtitle: "एक पहल से बदलाव लाते हुए।",
  },
};

const initiatives = [
  {
    titleEn: "Education for All",
    titleHi: "सभी के लिए शिक्षा",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
    descriptionEn: "We empower underprivileged children with access to quality education, digital learning, and creative opportunities to shape a brighter future.",
    descriptionHi: "हम वंचित बच्चों को गुणवत्तापूर्ण शिक्षा, डिजिटल लर्निंग और रचनात्मक अवसरों तक पहुंच प्रदान करके सशक्त बनाते हैं।",
    icon: <SchoolIcon sx={{ fontSize: 36, color: '#72be44' }} />, 
    statEn: "500+ children educated",
    statHi: "500+ बच्चों को शिक्षित किया",
    detailsEn: "Our Education for All initiative has reached over 500 children in rural and urban areas, providing them with books, digital resources, and mentorship. We partner with local schools and volunteers to ensure every child has a chance to learn and grow.",
    detailsHi: "हमारी 'सभी के लिए शिक्षा' पहल ने ग्रामीण और शहरी क्षेत्रों में 500 से अधिक बच्चों तक पहुंच बनाई है, उन्हें किताबें, डिजिटल संसाधन और मार्गदर्शन प्रदान किया है।",
  },
  {
    titleEn: "Women Empowerment",
    titleHi: "महिला सशक्तिकरण",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    descriptionEn: "Our programs uplift women through skill-building, entrepreneurship, and leadership, fostering independence and confidence.",
    descriptionHi: "हमारे कार्यक्रम महिलाओं को कौशल निर्माण, उद्यमिता और नेतृत्व के माध्यम से सशक्त बनाते हैं।",
    icon: <Diversity3Icon sx={{ fontSize: 36, color: '#72be44' }} />, 
    statEn: "200+ women empowered",
    statHi: "200+ महिलाओं को सशक्त बनाया",
    detailsEn: "We run workshops and training sessions for women, helping them develop skills in tailoring, digital literacy, and small business management. Many have started their own ventures or found meaningful employment.",
    detailsHi: "हम महिलाओं के लिए कार्यशालाएं और प्रशिक्षण सत्र चलाते हैं, उन्हें सिलाई, डिजिटल साक्षरता और छोटे व्यवसाय प्रबंधन में कौशल विकसित करने में मदद करते हैं।",
  },
  {
    titleEn: "Health & Nutrition",
    titleHi: "स्वास्थ्य और पोषण",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    descriptionEn: "We ensure access to healthcare, nutrition, and wellness for vulnerable communities, promoting healthy, happy lives.",
    descriptionHi: "हम कमजोर समुदायों के लिए स्वास्थ्य देखभाल, पोषण और कल्याण तक पहुंच सुनिश्चित करते हैं।",
    icon: <FavoriteIcon sx={{ fontSize: 36, color: '#72be44' }} />, 
    statEn: "1000+ meals served",
    statHi: "1000+ भोजन परोसे गए",
    detailsEn: "Our health camps and nutrition drives have provided over 1000 healthy meals and medical checkups to children and families in need. We also conduct awareness sessions on hygiene and preventive care.",
    detailsHi: "हमारे स्वास्थ्य शिविरों और पोषण अभियानों ने जरूरतमंद बच्चों और परिवारों को 1000 से अधिक स्वस्थ भोजन और चिकित्सा जांच प्रदान की है।",
  },
  {
    titleEn: "Community Outreach",
    titleHi: "सामुदायिक आउटरीच",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    descriptionEn: "Engaging with local communities, we drive positive change through events, workshops, and sustainable development projects.",
    descriptionHi: "स्थानीय समुदायों के साथ जुड़कर, हम कार्यक्रमों, कार्यशालाओं और सतत विकास परियोजनाओं के माध्यम से सकारात्मक बदलाव लाते हैं।",
    icon: <EmojiEventsIcon sx={{ fontSize: 36, color: '#72be44' }} />, 
    statEn: "50+ events held",
    statHi: "50+ कार्यक्रम आयोजित",
    detailsEn: "From clean-up drives to cultural festivals, our outreach events bring people together and foster a sense of belonging. We work with local leaders to identify needs and create lasting impact.",
    detailsHi: "सफाई अभियानों से लेकर सांस्कृतिक त्योहारों तक, हमारे आउटरीच कार्यक्रम लोगों को एक साथ लाते हैं और अपनत्व की भावना को बढ़ावा देते हैं।",
  },
];

export default function InitiativesPage({ language, setLanguage }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleOpen = (idx) => {
    setSelected(idx);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ minHeight: "100vh", pt: 8, pb: 6, position: "relative" }}>
      {/* Green Hero Section */}
      <Box sx={{
        background: 'linear-gradient(135deg, #72be44 0%, #7dc657 50%, #5aa237 100%)',
        py: 8,
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
          <Grid container spacing={5} justifyContent="center">
            {initiatives.map((item, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card
                  sx={{
                    borderRadius: '22px',
                    boxShadow: '0px 8px 32px 0px rgba(34,34,34,0.13)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'transform 0.2s, box-shadow 0.2s, border 0.2s',
                    border: '2.5px solid transparent',
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.03)',
                      boxShadow: '0px 16px 48px 0px rgba(34,190,68,0.18)',
                      border: '2.5px solid #72be44',
                    },
                    background: '#fff',
                    minHeight: 420,
                    p: 2,
                    maxWidth: 370,
                    width: '100%',
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="220"
                      image={item.image}
                      alt={language === 'hi' ? item.titleHi : item.titleEn}
                      sx={{ objectFit: 'cover', filter: 'brightness(0.85)' }}
                    />
                    <Box sx={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      bgcolor: '#fff',
                      borderRadius: '50%',
                      p: 1.5,
                      boxShadow: 1,
                    }}>{item.icon}</Box>
                    <Chip label={language === 'hi' ? item.statHi : item.statEn} color="success" size="medium" sx={{ position: 'absolute', bottom: 16, left: 16, bgcolor: '#eaf7e3', color: '#222', fontWeight: 600, fontSize: 16 }} />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, position: 'relative', zIndex: 1, p: 3 }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#222', mb: 1, letterSpacing: 0.5 }}>{language === 'hi' ? item.titleHi : item.titleEn}</Typography>
                    <Typography variant="body1" sx={{ color: '#555', mb: 2 }}>{language === 'hi' ? item.descriptionHi : item.descriptionEn}</Typography>
                    <Button variant="outlined" sx={{ color: '#72be44', borderColor: '#72be44', fontWeight: 'bold', borderRadius: 2, textTransform: 'none', px: 3, '&:hover': { background: '#eaf7e3', borderColor: '#72be44' } }} onClick={() => handleOpen(idx)}>
                      {language === 'hi' ? 'और जानें' : 'Learn More'}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 'bold' }}>
          {selected !== null && (language === 'hi' ? initiatives[selected].titleHi : initiatives[selected].titleEn)}
          <IconButton onClick={handleClose}><CloseIcon /></IconButton>
        </DialogTitle>
        <DialogContent>
          {selected !== null && (
            <>
              <Box sx={{ mb: 2 }}>
                <img src={initiatives[selected].image} alt={language === 'hi' ? initiatives[selected].titleHi : initiatives[selected].titleEn} style={{ width: '100%', borderRadius: 12 }} />
              </Box>
              <Typography variant="body1" sx={{ mb: 2 }}>{language === 'hi' ? initiatives[selected].detailsHi : initiatives[selected].detailsEn}</Typography>
              <Chip label={language === 'hi' ? initiatives[selected].statHi : initiatives[selected].statEn} color="success" sx={{ bgcolor: '#eaf7e3', color: '#222', fontWeight: 600 }} />
            </>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
} 