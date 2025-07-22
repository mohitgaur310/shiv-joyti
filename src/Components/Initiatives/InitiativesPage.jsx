import React, { useState } from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CloseIcon from '@mui/icons-material/Close';

const initiatives = [
  {
    title: "Education for All",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
    description: "We empower underprivileged children with access to quality education, digital learning, and creative opportunities to shape a brighter future.",
    icon: <SchoolIcon sx={{ fontSize: 36, color: '#72be44' }} />, 
    stat: "500+ children educated",
    details: "Our Education for All initiative has reached over 500 children in rural and urban areas, providing them with books, digital resources, and mentorship. We partner with local schools and volunteers to ensure every child has a chance to learn and grow.",
  },
  {
    title: "Women Empowerment",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    description: "Our programs uplift women through skill-building, entrepreneurship, and leadership, fostering independence and confidence.",
    icon: <Diversity3Icon sx={{ fontSize: 36, color: '#72be44' }} />, 
    stat: "200+ women empowered",
    details: "We run workshops and training sessions for women, helping them develop skills in tailoring, digital literacy, and small business management. Many have started their own ventures or found meaningful employment.",
  },
  {
    title: "Health & Nutrition",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    description: "We ensure access to healthcare, nutrition, and wellness for vulnerable communities, promoting healthy, happy lives.",
    icon: <FavoriteIcon sx={{ fontSize: 36, color: '#72be44' }} />, 
    stat: "1000+ meals served",
    details: "Our health camps and nutrition drives have provided over 1000 healthy meals and medical checkups to children and families in need. We also conduct awareness sessions on hygiene and preventive care.",
  },
  {
    title: "Community Outreach",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    description: "Engaging with local communities, we drive positive change through events, workshops, and sustainable development projects.",
    icon: <EmojiEventsIcon sx={{ fontSize: 36, color: '#72be44' }} />, 
    stat: "50+ events held",
    details: "From clean-up drives to cultural festivals, our outreach events bring people together and foster a sense of belonging. We work with local leaders to identify needs and create lasting impact.",
  },
];

export default function InitiativesPage() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleOpen = (idx) => {
    setSelected(idx);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ background: '#f7f7f7', py: { xs: 6, md: 10 } }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 3 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#222', mb: 2, textAlign: 'center', letterSpacing: 1 }}>
          Our Initiatives
        </Typography>
        <Typography variant="h6" sx={{ color: '#72be44', mb: 6, textAlign: 'center', fontStyle: 'italic' }}>
          Inspiring change, one initiative at a time.
        </Typography>
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
                    alt={item.title}
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
                  <Chip label={item.stat} color="success" size="medium" sx={{ position: 'absolute', bottom: 16, left: 16, bgcolor: '#eaf7e3', color: '#222', fontWeight: 600, fontSize: 16 }} />
                </Box>
                <CardContent sx={{ flexGrow: 1, position: 'relative', zIndex: 1, p: 3 }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#222', mb: 1, letterSpacing: 0.5 }}>{item.title}</Typography>
                  <Typography variant="body1" sx={{ color: '#555', mb: 2 }}>{item.description}</Typography>
                  <Button variant="outlined" sx={{ color: '#72be44', borderColor: '#72be44', fontWeight: 'bold', borderRadius: 2, textTransform: 'none', px: 3, '&:hover': { background: '#eaf7e3', borderColor: '#72be44' } }} onClick={() => handleOpen(idx)}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 'bold' }}>
          {selected !== null && initiatives[selected].title}
          <IconButton onClick={handleClose}><CloseIcon /></IconButton>
        </DialogTitle>
        <DialogContent>
          {selected !== null && (
            <>
              <Box sx={{ mb: 2 }}>
                <img src={initiatives[selected].image} alt={initiatives[selected].title} style={{ width: '100%', borderRadius: 12 }} />
              </Box>
              <Typography variant="body1" sx={{ mb: 2 }}>{initiatives[selected].details}</Typography>
              <Chip label={initiatives[selected].stat} color="success" sx={{ bgcolor: '#eaf7e3', color: '#222', fontWeight: 600 }} />
            </>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
} 