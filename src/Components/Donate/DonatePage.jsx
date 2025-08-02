import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Container,
  Stack,
  IconButton,
  Tooltip,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  AccountBalance,
  Security,
  VerifiedUser,
  ContentCopy,
  Info,
} from "@mui/icons-material";
import { motion } from "framer-motion";

// Content object remains the same
const content = {
  en: {
    title: "Support Our Cause",
    subtitle: "Your donation helps us continue our mission.",
    description: "Every contribution helps us empower women, end child marriage, and ensure food security for all.",
    bankDetails: "Bank Details for Donation",
    ifsc: "IFSC Code",
    accountNumber: "Account Number",
    branchCode: "Branch Code",
    secure: "Secure Banking",
    trusted: "Trusted by 10,000+ donors",
    note: "Please use your name as a reference in the transaction.",
    copied: "Copied to clipboard!",
  },
  hi: {
    title: "हमारे कारण का समर्थन करें",
    subtitle: "आपका दान हमें अपना मिशन जारी रखने में मदद करता है।",
    description: "हर योगदान हमें महिलाओं को सशक्त बनाने, बाल विवाह को समाप्त करने और सभी के लिए खाद्य सुरक्षा सुनिश्चित करने में मदद करता है।",
    bankDetails: "दान के लिए बैंक विवरण",
    ifsc: "आईएफएससी कोड",
    accountNumber: "खाता संख्या",
    branchCode: "शाखा कोड",
    secure: "सुरक्षित बैंकिंग",
    trusted: "10,000+ दानदाताओं द्वारा विश्वसनीय",
    note: "कृपया लेन-देन में अपने नाम को संदर्भ के रूप में उपयोग करें।",
    copied: "क्लिपबोर्ड पर कॉपी किया गया!",
  },
};

const bankInfo = {
  ifsc: "IBKL01077BD",
  accountNumber: "000135001000185",
  branchCode: "102",
};

export default function DonatePage({ language }) {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // --- New Function: Handles copying text to the clipboard ---
  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setSnackbarOpen(true);
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f9f9f9", pt: { xs: 7, md: 8 }, pb: 6 }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #72be44 0%, #7dc657 50%, #5aa237 100%)",
          py: { xs: 6, md: 8 },
          color: "white",
          textAlign: "center",
          mt: { xs: 0, md: 0 }, // Add margin top for mobile to avoid header overlap
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h2" 
              component="h1" 
              fontWeight="bold" 
              gutterBottom
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                lineHeight: { xs: 1.2, md: 1.1 },
                mb: { xs: 2, md: 3 },
              }}
            >
              {content[language].title}
            </Typography>
            <Typography 
              variant="h6" 
              component="p" 
              sx={{ 
                opacity: 0.9, 
                maxWidth: 600, 
                mx: "auto",
                fontSize: { xs: '1rem', md: '1.25rem' },
                lineHeight: 1.4,
                px: { xs: 2, md: 0 },
              }}
            >
              {content[language].subtitle}
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="sm" sx={{ mt: { xs: -4, md: -6 } }}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* --- Simplified Bank Details Card --- */}
          <motion.div variants={itemVariants}>
            <Paper
              elevation={6}
              sx={{
                p: { xs: 3, sm: 4 },
                borderRadius: 4,
                position: "relative",
                overflow: "hidden",
                borderTop: "5px solid #72be44",
              }}
            >
              <Stack spacing={3} alignItems="center">
                <AccountBalance sx={{ fontSize: { xs: 40, md: 50 }, color: "primary.main" }} />
                <Typography 
                  variant="h4" 
                  fontWeight="bold" 
                  color="text.primary"
                  sx={{
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    textAlign: 'center',
                  }}
                >
                  {content[language].bankDetails}
                </Typography>

                {/* --- New Layout: Replaced Grid with Stack for a cleaner list --- */}
                <Stack spacing={2.5} sx={{ width: "100%", pt: 2 }}>
                  {[
                    { label: content[language].ifsc, value: bankInfo.ifsc },
                    { label: content[language].accountNumber, value: bankInfo.accountNumber },
                    { label: content[language].branchCode, value: bankInfo.branchCode },
                  ].map((item) => (
                    <Box
                      key={item.label}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        p: { xs: 1.5, md: 2 },
                        borderRadius: 2,
                        backgroundColor: "grey.100",
                      }}
                    >
                      <Box>
                        <Typography 
                          variant="body2" 
                          color="text.secondary"
                          sx={{
                            fontSize: { xs: '0.75rem', md: '0.875rem' },
                            mb: 0.5,
                          }}
                        >
                          {item.label}
                        </Typography>
                        <Typography 
                          variant="h6" 
                          fontWeight="medium" 
                          sx={{ 
                            fontFamily: "monospace",
                            fontSize: { xs: '1rem', md: '1.125rem' },
                            wordBreak: 'break-all',
                          }}
                        >
                          {item.value}
                        </Typography>
                      </Box>
                      <Tooltip title={content[language].copied.split('!')[0]} placement="top">
                        <IconButton 
                          onClick={() => handleCopyToClipboard(item.value)} 
                          size="large"
                          sx={{
                            width: { xs: 36, md: 40 },
                            height: { xs: 36, md: 40 },
                          }}
                        >
                          <ContentCopy sx={{ color: "text.secondary" }} />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  ))}
                </Stack>

                {/* --- Redesigned Note Section --- */}
                <Alert
                  icon={<Info fontSize="inherit" />}
                  severity="info"
                  sx={{ 
                    width: "100%", 
                    mt: 2, 
                    justifyContent: "center",
                    fontSize: { xs: '0.875rem', md: '1rem' },
                  }}
                >
                  {content[language].note}
                </Alert>

                {/* --- Simplified Security Footer --- */}
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={1} 
                  alignItems="center" 
                  sx={{ 
                    mt: 2, 
                    color: "text.secondary",
                    textAlign: 'center',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Security fontSize="small" />
                    <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                      {content[language].secure}
                    </Typography>
                  </Box>
                  <Box 
                    component="span" 
                    sx={{ 
                      display: { xs: 'none', sm: 'block' },
                      mx: 1 
                    }}
                  >
                    •
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <VerifiedUser fontSize="small" />
                    <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                      {content[language].trusted}
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Paper>
          </motion.div>
        </motion.div>
      </Container>

      {/* Snackbar for copy feedback */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert 
          onClose={() => setSnackbarOpen(false)} 
          severity="success" 
          sx={{ 
            width: "100%",
            fontSize: { xs: '0.875rem', md: '1rem' },
          }}
        >
          {content[language].copied}
        </Alert>
      </Snackbar>
    </Box>
  );
}