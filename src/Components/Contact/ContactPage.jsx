import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
  Paper,
  Container,
  Divider,
  Alert,
  Snackbar,
} from "@mui/material";
import {
  WhatsApp,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  Star,
  EmojiEmotions,
  Celebration
} from "@mui/icons-material";
import { motion } from "framer-motion";

const content = {
  en: {
    title: "Get In Touch",
    subtitle: "Let's Connect & Make a Difference Together",
    description: "We'd love to hear from you! Whether you want to volunteer, donate, or just learn more about our initiatives, we're here to help.",
    form: {
      name: "Full Name",
      email: "Email Address",
      subject: "Subject",
      message: "Your Message",
      send: "Send Message",
    },
    contact: {
      title: "Contact Information",
      address: "Lohiya Nagar Begusarai Bihar, BEGUSARAI (Bihar) 851218",
      phone: "+91 8409133789",
      email: "shivjyoti763@gmail.com",
    },
    social: {
      title: "Follow Us",
      description: "Stay connected with us on social media",
    },
    features: {
      title: "Why Choose Us",
      items: [
        { icon: Star, title: "24/7 Support", desc: "We're always here for you" },
        { icon: EmojiEmotions, title: "Friendly Team", desc: "Meet our amazing volunteers" },
        { icon: Celebration, title: "Quick Response", desc: "Get replies within hours" },
      ]
    },
    sections: {
      inquiry: "ONLINE INQUIRY",
      details: "CONTACT DETAILS"
    }
  },
  hi: {
    title: "संपर्क करें",
    subtitle: "आइए जुड़ें और साथ में बदलाव लाएं",
    description: "हम आपसे सुनना चाहते हैं! चाहे आप स्वयंसेवक बनना चाहते हैं, दान करना चाहते हैं, या बस हमारी पहलों के बारे में जानना चाहते हैं, हम यहाँ मदद के लिए हैं।",
    form: {
      name: "पूरा नाम",
      email: "ईमेल पता",
      subject: "विषय",
      message: "आपका संदेश",
      send: "संदेश भेजें",
    },
    contact: {
      title: "संपर्क जानकारी",
      address: "लोहीया नगर बेगूसराय बिहार, बेगूसराय (बिहार) - 851218",
      phone: "+91 98765 43210",
      email: "info@shivjoyti.org",
    },
    social: {
      title: "हमें फॉलो करें",
      description: "सोशल मीडिया पर हमसे जुड़े रहें",
    },
    features: {
      title: "हमें क्यों चुनें",
      items: [
        { icon: Star, title: "24/7 सहायता", desc: "हम हमेशा आपके लिए यहाँ हैं" },
        { icon: EmojiEmotions, title: "दोस्ताना टीम", desc: "हमारे अद्भुत स्वयंसेवकों से मिलें" },
        { icon: Celebration, title: "त्वरित प्रतिक्रिया", desc: "घंटों में जवाब पाएं" },
      ]
    },
    sections: {
      inquiry: "ऑनलाइन पूछताछ",
      details: "संपर्क विवरण"
    }
  },
};

const socialLinks = [
  { icon: WhatsApp, color: "#25D366", label: "WhatsApp", hover: "Let's chat!" },
  { icon: Facebook, color: "#1877F2", label: "Facebook", hover: "Like us!" },
  { icon: Instagram, color: "#E4405F", label: "Instagram", hover: "Follow us!" },
  { icon: LinkedIn, color: "#0A66C2", label: "LinkedIn", hover: "Connect!" },
  { icon: Twitter, color: "#1DA1F2", label: "Twitter", hover: "Tweet us!" },
];

const floatingEmojis = ["🌟", "💚", "🤝", "✨", "🎯", "💪", "🌈", "🎉"];

export default function ContactPage({ language }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create floating particles
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 2 + 1,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  return (
    <Box sx={{ minHeight: "100vh", pt: { xs: 7, md: 8 }, pb: 6, position: "relative", overflow: "hidden" }}>
      {/* Animated Background Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            position: "absolute",
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: "linear-gradient(45deg, #72be44, #7dc657)",
            borderRadius: "50%",
            opacity: 0.3,
            zIndex: 0,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.speed * 10,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #72be44 0%, #7dc657 50%, #5aa237 100%)",
          py: { xs: 6, md: 8 },
          position: "relative",
          overflow: "hidden",
          mt: { xs: 2, md: 0 }, // Add margin top for mobile to avoid header overlap
        }}
      >
        {/* Floating Emojis */}
        {floatingEmojis.map((emoji, index) => (
          <motion.div
            key={index}
            style={{
              position: "absolute",
              fontSize: { xs: "1.5rem", md: "2rem" },
              zIndex: 1,
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * 300 + 100,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          >
            {emoji}
          </motion.div>
        ))}

        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "white",
                textAlign: "center",
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
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: { xs: -2, md: -4 }, position: "relative", zIndex: 2 }}>
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, sm: 4, md: 5 },
            borderRadius: 4,
            background: "#fff",
            mx: "auto",
            mb: 6,
          }}
        >
          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="flex-start" justifyContent="center">
            {/* Contact Form */}
            <Grid item xs={12} lg={6}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 600, 
                  letterSpacing: 2, 
                  mb: { xs: 2, md: 3 }, 
                  color: "#5aa237",
                  fontSize: { xs: "1rem", md: "1.125rem" },
                }}
              >
                {content[language].sections.inquiry}
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label={content[language].form.name}
                  value={formData.name}
                  onChange={handleInputChange("name")}
                  required
                  variant="outlined"
                  sx={{ mb: { xs: 2, md: 3 } }}
                />
                <TextField
                  fullWidth
                  label={content[language].form.email}
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange("email")}
                  required
                  variant="outlined"
                  sx={{ mb: { xs: 2, md: 3 } }}
                />
                <TextField
                  fullWidth
                  label={language === "en" ? "Phone" : "फोन"}
                  value={formData.phone || ""}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  variant="outlined"
                  sx={{ mb: { xs: 2, md: 3 } }}
                />
                <TextField
                  fullWidth
                  select
                  SelectProps={{ native: true }}
                  label={language === "en" ? "Select An Interest" : "रुचि चुनें"}
                  value={formData.interest || ""}
                  onChange={e => setFormData({ ...formData, interest: e.target.value })}
                  variant="outlined"
                  sx={{ mb: { xs: 2, md: 3 } }}
                >
                  <option value="" disabled>{language === "en" ? "Select An Interest" : "रुचि चुनें"}</option>
                  <option value="volunteer">{language === "en" ? "Volunteer" : "स्वयंसेवक"}</option>
                  <option value="donate">{language === "en" ? "Donate" : "दान करें"}</option>
                  <option value="learn">{language === "en" ? "Learn More" : "और जानें"}</option>
                  <option value="other">{language === "en" ? "Other" : "अन्य"}</option>
                </TextField>
                <TextField
                  fullWidth
                  label={content[language].form.message}
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange("message")}
                  required
                  variant="outlined"
                  sx={{ mb: { xs: 3, md: 4 } }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={isSubmitting}
                  sx={{
                    background: "linear-gradient(45deg, #72be44, #7dc657)",
                    color: "white",
                    px: { xs: 3, md: 4 },
                    py: { xs: 1.5, md: 2 },
                    fontWeight: "bold",
                    borderRadius: 2,
                    boxShadow: "none",
                    fontSize: { xs: "1rem", md: "1.125rem" },
                    '&:hover': {
                      background: "linear-gradient(45deg, #5aa237, #6fb849)",
                    },
                  }}
                  fullWidth
                >
                  {isSubmitting 
                    ? (language === "en" ? "Sending..." : "भेज रहे हैं...")
                    : content[language].form.send
                  }
                </Button>
              </Box>
            </Grid>
            
            {/* Contact Details */}
            <Grid item xs={12} lg={6}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 600, 
                  letterSpacing: 2, 
                  mb: { xs: 2, md: 3 }, 
                  color: "#5aa237",
                  fontSize: { xs: "1rem", md: "1.125rem" },
                }}
              >
                {content[language].sections.details}
              </Typography>
              <Box sx={{ mb: { xs: 3, md: 4 } }}>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: "#333", 
                    mb: { xs: 1, md: 2 },
                    fontSize: { xs: "0.875rem", md: "1rem" },
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ fontWeight: 600 }}>Email:</span> {content[language].contact.email}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: "#333", 
                    mb: { xs: 1, md: 2 },
                    fontSize: { xs: "0.875rem", md: "1rem" },
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ fontWeight: 600 }}>Phone:</span> {content[language].contact.phone}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: "#333", 
                    mb: { xs: 2, md: 3 },
                    fontSize: { xs: "0.875rem", md: "1rem" },
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ fontWeight: 600 }}>Address:</span><br />
                  {content[language].contact.address}
                </Typography>
              </Box>
              <Divider sx={{ my: { xs: 2, md: 3 } }} />
              <Box>
                <Typography 
                  variant="subtitle2" 
                  sx={{ 
                    fontWeight: 600, 
                    color: "#5aa237", 
                    mb: { xs: 1, md: 2 },
                    fontSize: { xs: "0.875rem", md: "1rem" },
                  }}
                >
                  Follow Us
                </Typography>
                <Box sx={{ 
                  display: "flex", 
                  gap: { xs: 1, md: 2 }, 
                  mt: 1,
                  flexWrap: "wrap",
                  justifyContent: { xs: "center", lg: "flex-start" },
                }}>
                  {socialLinks.map((social, index) => (
                    <IconButton
                      key={social.label}
                      sx={{
                        width: { xs: 36, md: 40 },
                        height: { xs: 36, md: 40 },
                        background: social.color,
                        color: "white",
                        '&:hover': {
                          background: social.color,
                          opacity: 0.85,
                          transform: "scale(1.1)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      <social.icon sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }} />
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      {/* Success Snackbar */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setShowSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {language === "en" ? "Message sent successfully! We'll get back to you soon." : "संदेश सफलतापूर्वक भेजा गया! हम जल्द ही आपसे संपर्क करेंगे।"}
        </Alert>
      </Snackbar>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </Box>
  );
} 