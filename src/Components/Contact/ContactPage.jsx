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
      address: "123 Community Street, New Delhi, India",
      phone: "+91 98765 43210",
      email: "info@shivjoyti.org",
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
      address: "123 कम्युनिटी स्ट्रीट, नई दिल्ली, भारत",
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
  // const [hoveredSocial, setHoveredSocial] = useState(null);
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
    <Box sx={{ minHeight: "100vh", pt: 8, pb: 6, position: "relative", overflow: "hidden" }}>
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
          py: 8,
          mb: { xs: 4, md: 6 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Floating Emojis */}
        {floatingEmojis.map((emoji, index) => (
          <motion.div
            key={index}
            style={{
              position: "absolute",
              fontSize: "2rem",
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
              variant="h3"
              sx={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
                mb: 1,
                letterSpacing: 1,
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
              }}
            >
              {content[language].subtitle}
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ mt: -4, position: "relative", zIndex: 2 }}>
        <Paper
          elevation={3}
          sx={{
            p: { xs: 2, sm: 4 },
            borderRadius: 4,
            background: "#fff",
            maxWidth: 900,
            mx: "auto",
            mb: 6,
          }}
        >
          <Grid container spacing={4} alignItems="flex-start" justifyContent="center">
            {/* Contact Form */}
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, letterSpacing: 2, mb: 2, color: "#5aa237" }}>
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
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label={content[language].form.email}
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange("email")}
                  required
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label={language === "en" ? "Phone" : "फोन"}
                  value={formData.phone || ""}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  select
                  SelectProps={{ native: true }}
                  label={language === "en" ? "Select An Interest" : "रुचि चुनें"}
                  value={formData.interest || ""}
                  onChange={e => setFormData({ ...formData, interest: e.target.value })}
                  variant="outlined"
                  sx={{ mb: 2 }}
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
                  sx={{ mb: 3 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={isSubmitting}
                  sx={{
                    background: "linear-gradient(45deg, #72be44, #7dc657)",
                    color: "white",
                    px: 4,
                    py: 1.5,
                    fontWeight: "bold",
                    borderRadius: 2,
                    boxShadow: "none",
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
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, letterSpacing: 2, mb: 2, color: "#5aa237" }}>
                {content[language].sections.details}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ color: "#333", mb: 1 }}>
                  <span style={{ fontWeight: 600 }}>Email:</span> info@shivjoyti.org
                </Typography>
                <Typography variant="body2" sx={{ color: "#333", mb: 1 }}>
                  <span style={{ fontWeight: 600 }}>Phone:</span> +91 98765 43210
                </Typography>
                <Typography variant="body2" sx={{ color: "#333", mb: 2 }}>
                  <span style={{ fontWeight: 600 }}>Address:</span><br />123 Community Street, New Delhi, India
                </Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#5aa237", mb: 1 }}>
                  Follow Us
                </Typography>
                <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                  {socialLinks.map((social, index) => (
                    <IconButton
                      key={social.label}
                      sx={{
                        width: 40,
                        height: 40,
                        background: social.color,
                        color: "white",
                        '&:hover': {
                          background: social.color,
                          opacity: 0.85,
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      <social.icon />
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