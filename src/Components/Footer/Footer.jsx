import React, { useState } from "react";
import { Box, Grid, Typography, Divider, TextField, Button, IconButton } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const footerLinks = {
  en: [
    {
      title: "ABOUT US",
      links: ["About Shiv Jyoti", "Impact", "Reach & Presence", "MileStones", "Privacy Policy"]
    },
    {
      title: "OUR WORK",
      links: ["Education", "Health", "Livelihood", "Women Empowerment", "Disaster Response"]
    },
    {
      title: "CAMPAIGNS",
      links: ["Shiksha Na Ruke", "Health Cannot Wait", "She Can Fly", "Swabhiman", "Tayyari Kal Ki"]
    },
    {
      title: "GET INVOLVED",
      links: ["Individual Support", "Corporate Partnerships", "Volunteer", "School Partnerships", "Careers"]
    },
    {
      title: "RESOURCE CENTRE",
      links: ["Annual Report", "Newsletter", "Stories of Change", "The Shiv Jyoti Blog", "Films"]
    }
  ],
  hi: [
    {
      title: "हमारे बारे में",
      links: ["शिव ज्योति के बारे में", "प्रभाव", "पहुंच और उपस्थिति", "शिव ज्योति स्टोन्स", "गोपनीयता नीति"]
    },
    {
      title: "हमारा कार्य",
      links: ["शिक्षा", "स्वास्थ्य", "आजिविका", "महिला सशक्तिकरण", "आपदा प्रतिक्रिया"]
    },
    {
      title: "अभियान",
      links: ["शिक्षा ना रुके", "स्वास्थ्य जरूरी है", "वह उड़ सकती है", "स्वाभिमान", "तैयारी कल की"]
    },
    {
      title: "शामिल हों",
      links: ["व्यक्तिगत समर्थन", "कॉर्पोरेट साझेदारी", "स्वयंसेवक", "स्कूल साझेदारी", "करियर"]
    },
    {
      title: "संसाधन केंद्र",
        links: ["वार्षिक रिपोर्ट", "न्यूज़लेटर", "परिवर्तन की कहानियाँ", "शिव ज्योति ब्लॉग", "फिल्में"]
    }
  ]
};

const footerText = {
  en: {
    foundation: "SHIV JYOTI FOUNDATION",
    address: "B-10, 2nd Floor, Sector-1, Noida, Uttar Pradesh, India",
    contact: "Contact Us: Tel: +91-11-43123700 | E-mail: info@shivjyotifoundation.org",
    subscribe: "Subscribe to Our Newsletter",
    name: "Name",
    email: "Enter Your Email",
    subscribeBtn: "SUBSCRIBE"
  },
  hi: {
    foundation: "शिव ज्योति फाउंडेशन",
    address: "बी-10, दूसरी मंजिल, सेक्टर-1, नोएडा, उत्तर प्रदेश, भारत",
    contact: "संपर्क करें: टेल: +91-11-43123700 | ईमेल: info@shivjyotifoundation.org",
    subscribe: "हमारे न्यूज़लेटर के लिए सब्सक्राइब करें",
    name: "नाम",
    email: "अपना ईमेल दर्ज करें",
    subscribeBtn: "सब्सक्राइब करें"
  }
};

export default function Footer({ language, setLanguage }) {
  
  return (
    <Box sx={{ background: '#4a4a4a', color: '#fff', pt: 8, pb: 3, mt: 8 }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 3 }}>
        {/* Language Toggle */}
      
        {/* Top Links Section */}
        <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
          {footerLinks[language].map((section, idx) => (
            <Grid item xs={12} sm={6} md={2.4} key={idx} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, borderBottom: '2px solid #fff', width: 'fit-content', mx: { xs: 'auto', md: 0 } }}>
                {section.title}
              </Typography>
              {section.links.map((link, i) => (
                <Typography key={i} variant="body2" sx={{ mb: 0.5, cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>{link}</Typography>
              ))}
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ my: 4, borderColor: '#888' }} />
        {/* Bottom Section: Contact, Newsletter */}
        <Grid container spacing={4} alignItems="flex-start" justifyContent="space-between">
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' }, mb: { xs: 3, md: 0 } }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
              {footerText[language].foundation}
            </Typography>
            <Typography variant="body2">
              {footerText[language].address}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              {footerText[language].contact}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-end' }, justifyContent: 'center' }}>
            <Typography variant="body2" sx={{ mb: 1, textAlign: { xs: 'center', md: 'right' } }}>
              {footerText[language].subscribe}
            </Typography>
            <Box component="form" sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-end' }, width: '100%', maxWidth: 420, mb: 2 }}>
              <TextField variant="standard" placeholder={footerText[language].name} aria-label="Name" sx={{ flex: 1, minWidth: 120, input: { color: '#fff' } }} InputProps={{ disableUnderline: true }}/>
                <TextField variant="standard" placeholder={footerText[language].email} aria-label="Email" sx={{ flex: 2, minWidth: 180, input: { color: '#fff' } }} InputProps={{ disableUnderline: true }}/>
              <Button variant="contained" sx={{ background: '#a4e05f', color: '#222', fontWeight: 'bold', px: 4, borderRadius: 1, height: 40, '&:hover': { background: '#8fd44a' } }}>
                {footerText[language].subscribeBtn}
              </Button>
            </Box>
          </Grid>
        </Grid>
        {/* Social Icons Centered Below */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
          <IconButton aria-label="Facebook" sx={{ background: '#222', color: '#fff', '&:hover': { background: '#555' } }}><FacebookIcon /></IconButton>
          <IconButton aria-label="Twitter" sx={{ background: '#222', color: '#fff', '&:hover': { background: '#555' } }}><TwitterIcon /></IconButton>
          <IconButton aria-label="YouTube" sx={{ background: '#222', color: '#fff', '&:hover': { background: '#555' } }}><YouTubeIcon /></IconButton>
          <IconButton aria-label="Instagram" sx={{ background: '#222', color: '#fff', '&:hover': { background: '#555' } }}><InstagramIcon /></IconButton>
          <IconButton aria-label="LinkedIn" sx={{ background: '#222', color: '#fff', '&:hover': { background: '#555' } }}><LinkedInIcon /></IconButton>
        </Box>
      </Box>
    </Box>
  );
} 