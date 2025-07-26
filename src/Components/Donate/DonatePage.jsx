import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Container,
  LinearProgress,
  Chip,
  IconButton,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import {
  Favorite,
  FavoriteBorder,


  People,
  School,
  Restaurant,
  LocalHospital,
  Home,

  Payment,
  Security,
  VerifiedUser,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const content = {
  en: {
    title: "Make a Difference Today",
    subtitle: "Your donation can change lives and create lasting impact",
    description: "Every contribution, no matter how small, helps us continue our mission of empowering women, ending child marriage, and ensuring food security for all.",
    impact: {
      title: "Your Impact",
      description: "See how your donation makes a difference",
    },
    causes: {
      title: "Choose Your Cause",
      description: "Select a cause that resonates with your heart",
    },
    amounts: {
      title: "Donation Amounts",
      description: "Choose an amount that works for you",
    },
    custom: "Custom Amount",
    donate: "Donate Now",
    secure: "Secure Payment",
    trusted: "Trusted by 10,000+ donors",
  },
  hi: {
    title: "आज ही बदलाव लाएं",
    subtitle: "आपका दान जीवन बदल सकता है और स्थायी प्रभाव पैदा कर सकता है",
    description: "हर योगदान, चाहे कितना भी छोटा हो, हमें महिलाओं को सशक्त बनाने, बाल विवाह को समाप्त करने और सभी के लिए खाद्य सुरक्षा सुनिश्चित करने के हमारे मिशन को जारी रखने में मदद करता है।",
    impact: {
      title: "आपका प्रभाव",
      description: "देखें कि आपका दान कैसे बदलाव लाता है",
    },
    causes: {
      title: "अपना कारण चुनें",
      description: "एक ऐसा कारण चुनें जो आपके दिल से जुड़ा हो",
    },
    amounts: {
      title: "दान की राशि",
      description: "एक ऐसी राशि चुनें जो आपके लिए उपयुक्त हो",
    },
    custom: "कस्टम राशि",
    donate: "अब दान करें",
    secure: "सुरक्षित भुगतान",
    trusted: "10,000+ दानदाताओं द्वारा विश्वसनीय",
  },
};

const causes = [
  {
    id: "education",
    title: { en: "Education for Girls", hi: "लड़कियों की शिक्षा" },
    description: { en: "Support girls' education and break the cycle of poverty", hi: "लड़कियों की शिक्षा का समर्थन करें और गरीबी के चक्र को तोड़ें" },
    icon: School,
    color: "#FF6B6B",
    impact: { en: "₹500 provides books for 1 girl for 1 year", hi: "₹500 एक लड़की के लिए 1 साल की किताबें प्रदान करता है" },
    progress: 75,
  },
  {
    id: "food",
    title: { en: "Food Security", hi: "खाद्य सुरक्षा" },
    description: { en: "Provide nutritious meals to families in need", hi: "जरूरतमंद परिवारों को पौष्टिक भोजन प्रदान करें" },
    icon: Restaurant,
    color: "#4ECDC4",
    impact: { en: "₹200 feeds a family of 4 for 1 day", hi: "₹200 एक परिवार को 1 दिन का भोजन देता है" },
    progress: 60,
  },
  {
    id: "healthcare",
    title: { en: "Healthcare Access", hi: "स्वास्थ्य देखभाल" },
    description: { en: "Ensure access to basic healthcare services", hi: "बुनियादी स्वास्थ्य सेवाओं तक पहुंच सुनिश्चित करें" },
    icon: LocalHospital,
    color: "#45B7D1",
    impact: { en: "₹1000 provides health checkup for 5 children", hi: "₹1000 5 बच्चों के लिए स्वास्थ्य जांच प्रदान करता है" },
    progress: 45,
  },
  {
    id: "housing",
    title: { en: "Safe Housing", hi: "सुरक्षित आवास" },
    description: { en: "Build safe homes for vulnerable families", hi: "कमजोर परिवारों के लिए सुरक्षित घर बनाएं" },
    icon: Home,
    color: "#96CEB4",
    impact: { en: "₹5000 helps build 1 room for a family", hi: "₹5000 एक परिवार के लिए 1 कमरा बनाने में मदद करता है" },
    progress: 30,
  },
];

const donationAmounts = [
  { amount: 100, label: { en: "₹100", hi: "₹100" }, popular: false },
  { amount: 500, label: { en: "₹500", hi: "₹500" }, popular: true },
  { amount: 1000, label: { en: "₹1,000", hi: "₹1,000" }, popular: false },
  { amount: 2500, label: { en: "₹2,500", hi: "₹2,500" }, popular: false },
  { amount: 5000, label: { en: "₹5,000", hi: "₹5,000" }, popular: false },
];

const impactStats = [
  { number: "50,000+", label: { en: "Lives Impacted", hi: "प्रभावित जीवन" }, icon: People },
  { number: "1,000+", label: { en: "Girls Educated", hi: "शिक्षित लड़कियां" }, icon: School },
  { number: "25,000+", label: { en: "Meals Served", hi: "भोजन परोसा गया" }, icon: Restaurant },
  { number: "500+", label: { en: "Families Helped", hi: "मदद किए गए परिवार" }, icon: Home },
];

export default function DonatePage({ language }) {
  const [selectedCause, setSelectedCause] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(500);
  const [customAmount, setCustomAmount] = useState("");
  const [isLiked, setIsLiked] = useState({});
  const [showDonationDialog, setShowDonationDialog] = useState(false);
  const [donationForm, setDonationForm] = useState({
    name: "",
    email: "",
    phone: "",
    anonymous: false,
  });

  const handleCauseSelect = (causeId) => {
    setSelectedCause(causeId);
  };

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmount = (event) => {
    const value = event.target.value;
    setCustomAmount(value);
    if (value) {
      setSelectedAmount(parseInt(value));
    }
  };

  const handleLike = (causeId) => {
    setIsLiked(prev => ({ ...prev, [causeId]: !prev[causeId] }));
  };

  const handleDonate = () => {
    setShowDonationDialog(true);
  };

  const handleDonationSubmit = async () => {
    // Simulate donation processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setShowDonationDialog(false);
    setDonationForm({ name: "", email: "", phone: "", anonymous: false });
    alert(language === "en" ? "Thank you for your donation!" : "आपके दान के लिए धन्यवाद!");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <Box sx={{ minHeight: "100vh", pt: 8, pb: 6 }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #72be44 0%, #7dc657 50%, #5aa237 100%)",
          py: 8,
          position: "relative",
          overflow: "hidden",
        }}
      >
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
            <Typography
              variant="body1"
              sx={{
                color: "white",
                textAlign: "center",
                opacity: 0.8,
                maxWidth: 600,
                mx: "auto",
              }}
            >
              {content[language].description}
            </Typography>
          </motion.div>

          {/* Floating Hearts */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 0.6, y: -100 }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                position: "absolute",
                left: `${10 + i * 15}%`,
                top: "100%",
              }}
            >
              <Favorite sx={{ color: "rgba(255,255,255,0.3)", fontSize: 20 + i * 5 }} />
            </motion.div>
          ))}
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -4 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Impact Stats */}
          <motion.div variants={itemVariants}>
            <Paper
              elevation={8}
              sx={{
                p: 4,
                borderRadius: 3,
                background: "white",
                mb: 6,
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: "linear-gradient(90deg, #72be44, #7dc657, #5aa237)",
                },
              }}
            >
              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#333", textAlign: "center", mb: 4 }}>
                {content[language].impact.title}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center", color: "#666", mb: 4 }}>
                {content[language].impact.description}
              </Typography>

              <Grid container spacing={4} justifyContent="center" alignItems="stretch">
                {impactStats.map((stat, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index} display="flex" justifyContent="center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      style={{ width: '100%' }}
                    >
                      <Box
                        sx={{
                          textAlign: "center",
                          p: 2,
                          padding: "10px",
                          borderRadius: 2,
                          background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                          height: "100%",
                          minWidth: 180,
                          maxWidth: 220,
                          mx: "auto",
                          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                        }}
                      >
                        <stat.icon sx={{ fontSize: 40, color: "#72be44", mb: 1 }} />
                        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#333", mb: 1 }}>
                          {stat.number}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#666" }}>
                          {stat.label[language]}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </motion.div>

          {/* Causes Section */}
          <motion.div variants={itemVariants}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#333", textAlign: "center", mb: 2 }}>
              {content[language].causes.title}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center", color: "#666", mb: 4 }}>
              {content[language].causes.description}
            </Typography>

            <Grid container spacing={3} sx={{ mb: 6 }}>
              {causes.map((cause) => (
                <Grid item xs={12} sm={6} md={3} key={cause.id}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      sx={{
                        height: "100%",
                        cursor: "pointer",
                        border: selectedCause === cause.id ? "3px solid #72be44" : "3px solid transparent",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                        },
                      }}
                      onClick={() => handleCauseSelect(cause.id)}
                    >
                      <CardContent sx={{ p: 3, textAlign: "center" }}>
                        <Box sx={{ position: "relative" }}>
                          <Box
                            sx={{
                              width: 60,
                              height: 60,
                              borderRadius: "50%",
                              background: `linear-gradient(45deg, ${cause.color}, ${cause.color}dd)`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              mx: "auto",
                              mb: 2,
                              color: "white",
                            }}
                          >
                            <cause.icon sx={{ fontSize: 30 }} />
                          </Box>
                          <IconButton
                            sx={{
                              position: "absolute",
                              top: -10,
                              right: -10,
                              color: isLiked[cause.id] ? "#ff4757" : "#ccc",
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleLike(cause.id);
                            }}
                          >
                            {isLiked[cause.id] ? <Favorite /> : <FavoriteBorder />}
                          </IconButton>
                        </Box>

                        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "#333" }}>
                          {cause.title[language]}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#666", mb: 2 }}>
                          {cause.description[language]}
                        </Typography>

                        <Box sx={{ mb: 2 }}>
                          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                            <Typography variant="caption" sx={{ color: "#666" }}>
                              {language === "en" ? "Progress" : "प्रगति"}
                            </Typography>
                            <Typography variant="caption" sx={{ color: "#666" }}>
                              {cause.progress}%
                            </Typography>
                          </Box>
                          <LinearProgress
                            variant="determinate"
                            value={cause.progress}
                            sx={{
                              height: 8,
                              borderRadius: 4,
                              backgroundColor: "#f0f0f0",
                              "& .MuiLinearProgress-bar": {
                                background: `linear-gradient(90deg, ${cause.color}, ${cause.color}dd)`,
                                borderRadius: 4,
                              },
                            }}
                          />
                        </Box>

                        <Typography variant="caption" sx={{ color: "#72be44", fontWeight: "bold" }}>
                          {cause.impact[language]}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* Donation Amounts */}
          <motion.div variants={itemVariants}>
            <Paper
              elevation={8}
              sx={{
                p: 4,
                borderRadius: 3,
                background: "white",
                mb: 6,
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: "linear-gradient(90deg, #72be44, #7dc657, #5aa237)",
                },
              }}
            >
              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#333", textAlign: "center", mb: 2 }}>
                {content[language].amounts.title}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center", color: "#666", mb: 4 }}>
                {content[language].amounts.description}
              </Typography>

              <Grid container spacing={2} sx={{ mb: 4 }}>
                {donationAmounts.map((option) => (
                  <Grid item xs={6} sm={4} md={2.4} key={option.amount}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant={selectedAmount === option.amount ? "contained" : "outlined"}
                        fullWidth
                        sx={{
                          py: 2,
                          borderRadius: 2,
                          position: "relative",
                          background: selectedAmount === option.amount
                            ? "linear-gradient(45deg, #72be44, #7dc657)"
                            : "transparent",
                          borderColor: selectedAmount === option.amount ? "#72be44" : "#ddd",
                          color: selectedAmount === option.amount ? "white" : "#333",
                          fontWeight: "bold",
                          "&:hover": {
                            background: selectedAmount === option.amount
                              ? "linear-gradient(45deg, #5aa237, #6fb849)"
                              : "rgba(114, 190, 68, 0.1)",
                            borderColor: "#72be44",
                          },
                        }}
                        onClick={() => handleAmountSelect(option.amount)}
                      >
                        {option.label[language]}
                        {option.popular && (
                          <Chip
                            label={language === "en" ? "Popular" : "लोकप्रिय"}
                            size="small"
                            sx={{
                              position: "absolute",
                              top: -8,
                              right: -8,
                              background: "#ff6b6b",
                              color: "white",
                              fontSize: "0.7rem",
                            }}
                          />
                        )}
                      </Button>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ mb: 4 }}>
                <TextField
                  fullWidth
                  label={content[language].custom}
                  type="number"
                  value={customAmount}
                  onChange={handleCustomAmount}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "#72be44",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#72be44",
                      },
                    },
                  }}
                />
              </Box>

              <Box sx={{ textAlign: "center" }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleDonate}
                    disabled={!selectedAmount}
                    startIcon={<Payment />}
                    sx={{
                      background: "linear-gradient(45deg, #72be44, #7dc657)",
                      color: "white",
                      px: 6,
                      py: 2,
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      borderRadius: 3,
                      "&:hover": {
                        background: "linear-gradient(45deg, #5aa237, #6fb849)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 25px rgba(114, 190, 68, 0.3)",
                      },
                      "&:disabled": {
                        background: "#ccc",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    {content[language].donate}
                  </Button>
                </motion.div>

                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, mt: 3 }}>
                  <Security sx={{ color: "#72be44" }} />
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    {content[language].secure}
                  </Typography>
                  <VerifiedUser sx={{ color: "#72be44" }} />
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    {content[language].trusted}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </motion.div>
        </motion.div>
      </Container>

      {/* Donation Dialog */}
      <Dialog
        open={showDonationDialog}
        onClose={() => setShowDonationDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ background: "linear-gradient(45deg, #72be44, #7dc657)", color: "white" }}>
          {language === "en" ? "Complete Your Donation" : "अपना दान पूरा करें"}
        </DialogTitle>
        <DialogContent sx={{ pt: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={language === "en" ? "Full Name" : "पूरा नाम"}
                value={donationForm.name}
                onChange={(e) => setDonationForm({ ...donationForm, name: e.target.value })}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={language === "en" ? "Email" : "ईमेल"}
                type="email"
                value={donationForm.email}
                onChange={(e) => setDonationForm({ ...donationForm, email: e.target.value })}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={language === "en" ? "Phone Number" : "फोन नंबर"}
                value={donationForm.phone}
                onChange={(e) => setDonationForm({ ...donationForm, phone: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  {language === "en" ? "Donation Type" : "दान का प्रकार"}
                </FormLabel>
                <RadioGroup
                  value={donationForm.anonymous}
                  onChange={(e) => setDonationForm({ ...donationForm, anonymous: e.target.value === "true" })}
                >
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label={language === "en" ? "Public Donation" : "सार्वजनिक दान"}
                  />
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label={language === "en" ? "Anonymous Donation" : "गुमनाम दान"}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ p: 2, background: "#f8f9fa", borderRadius: 2 }}>
                <Typography variant="h6" sx={{ color: "#333", mb: 1 }}>
                  {language === "en" ? "Donation Summary" : "दान सारांश"}
                </Typography>
                <Typography variant="body1" sx={{ color: "#666" }}>
                  {language === "en" ? "Amount" : "राशि"}: ₹{selectedAmount}
                </Typography>
                {selectedCause && (
                  <Typography variant="body1" sx={{ color: "#666" }}>
                    {language === "en" ? "Cause" : "कारण"}: {causes.find(c => c.id === selectedCause)?.title[language]}
                  </Typography>
                )}
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button
            onClick={() => setShowDonationDialog(false)}
            sx={{ color: "#666" }}
          >
            {language === "en" ? "Cancel" : "रद्द करें"}
          </Button>
          <Button
            onClick={handleDonationSubmit}
            variant="contained"
            sx={{
              background: "linear-gradient(45deg, #72be44, #7dc657)",
              color: "white",
              "&:hover": {
                background: "linear-gradient(45deg, #5aa237, #6fb849)",
              },
            }}
          >
            {language === "en" ? "Complete Payment" : "भुगतान पूरा करें"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
} 