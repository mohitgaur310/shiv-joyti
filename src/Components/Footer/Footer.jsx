import React from "react";
import { Box, Grid, Typography, Divider, TextField, Button, IconButton, Container } from "@mui/material";
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
    address: "Lohiya Nagar Begusarai Bihar, BEGUSARAI (Bihar) 851218",
    contact: "Contact Us: Tel: +91 8409133789 | E-mail: shivjyoti763@gmail.com",
    subscribe: "Subscribe to Our Newsletter",
    name: "Name",
    email: "Enter Your Email",
    subscribeBtn: "SUBSCRIBE"
  },
  hi: {
    foundation: "शिव ज्योति फाउंडेशन",
    address: "लोहीया नगर बेगूसराय बिहार, बेगूसराय (बिहार) - 851218",
    contact: "संपर्क करें: टेल: +91 8409133789 | ईमेल: shivjyoti763@gmail.com",
    subscribe: "हमारे न्यूज़लेटर के लिए सब्सक्राइब करें",
    name: "नाम",
    email: "अपना ईमेल दर्ज करें",
    subscribeBtn: "सब्सक्राइब करें"
  }
};

export default function Footer({ language, setLanguage }) {
  
  return (
    <Box sx={{ background: '#4a4a4a', color: '#fff', pt: { xs: 6, md: 8 }, pb: 3, mt: 8 }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        {/* Top Links Section */}
        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center" sx={{ mb: { xs: 4, md: 6 } }}>
          {footerLinks[language].map((section, idx) => (
            <Grid item xs={12} sm={6} md={2.4} key={idx} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  fontWeight: 'bold', 
                  mb: { xs: 1.5, md: 2 }, 
                  borderBottom: '2px solid #fff', 
                  width: 'fit-content', 
                  mx: { xs: 'auto', md: 0 },
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  pb: 0.5,
                }}
              >
                {section.title}
              </Typography>
              {section.links.map((link, i) => (
                <Typography 
                  key={i} 
                  variant="body2" 
                  sx={{ 
                    mb: { xs: 0.5, md: 0.75 }, 
                    cursor: 'pointer', 
                    '&:hover': { textDecoration: 'underline' },
                    fontSize: { xs: '0.75rem', md: '0.875rem' },
                    lineHeight: 1.4,
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
        
        <Divider sx={{ my: { xs: 3, md: 4 }, borderColor: '#888' }} />
        
        {/* Bottom Section: Contact, Newsletter */}
        <Grid container spacing={{ xs: 3, md: 4 }} alignItems="flex-start" justifyContent="space-between">
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' }, mb: { xs: 3, md: 0 } }}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 'bold', 
                mb: { xs: 1, md: 1.5 },
                fontSize: { xs: '1rem', md: '1.25rem' },
              }}
            >
              {footerText[language].foundation}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                mb: { xs: 1, md: 1.5 },
                fontSize: { xs: '0.75rem', md: '0.875rem' },
                lineHeight: 1.5,
              }}
            >
              {footerText[language].address}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                mt: 1,
                fontSize: { xs: '0.75rem', md: '0.875rem' },
                lineHeight: 1.5,
              }}
            >
              {footerText[language].contact}
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6} sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: { xs: 'center', md: 'flex-end' }, 
            justifyContent: 'center' 
          }}>
            <Typography 
              variant="body2" 
              sx={{ 
                mb: { xs: 1.5, md: 2 }, 
                textAlign: { xs: 'center', md: 'right' },
                fontSize: { xs: '0.875rem', md: '1rem' },
                fontWeight: 500,
              }}
            >
              {footerText[language].subscribe}
            </Typography>
            <Box component="form" sx={{ 
              display: 'flex', 
              gap: { xs: 1, md: 2 }, 
              flexWrap: 'wrap', 
              justifyContent: { xs: 'center', md: 'flex-end' }, 
              width: '100%', 
              maxWidth: 420, 
              mb: { xs: 2, md: 3 } 
            }}>
              <TextField 
                variant="standard" 
                placeholder={footerText[language].name} 
                aria-label="Name" 
                sx={{ 
                  flex: 1, 
                  minWidth: { xs: 100, sm: 120 }, 
                  input: { color: '#fff', fontSize: { xs: '0.75rem', md: '0.875rem' } } 
                }} 
                InputProps={{ disableUnderline: true }}
              />
              <TextField 
                variant="standard" 
                placeholder={footerText[language].email} 
                aria-label="Email" 
                sx={{ 
                  flex: 2, 
                  minWidth: { xs: 150, sm: 180 }, 
                  input: { color: '#fff', fontSize: { xs: '0.75rem', md: '0.875rem' } } 
                }} 
                InputProps={{ disableUnderline: true }}
              />
              <Button 
                variant="contained" 
                sx={{ 
                  background: '#a4e05f', 
                  color: '#222', 
                  fontWeight: 'bold', 
                  px: { xs: 2, md: 4 }, 
                  borderRadius: 1, 
                  height: { xs: 36, md: 40 }, 
                  fontSize: { xs: '0.75rem', md: '0.875rem' },
                  '&:hover': { background: '#8fd44a' } 
                }}
              >
                {footerText[language].subscribeBtn}
              </Button>
            </Box>
          </Grid>
        </Grid>
        
        {/* Social Icons Centered Below */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: { xs: 1.5, md: 2 }, 
          mt: { xs: 3, md: 4 },
          flexWrap: 'wrap',
        }}>
          <IconButton 
            aria-label="Facebook" 
            sx={{ 
              background: '#222', 
              color: '#fff', 
              width: { xs: 36, md: 40 },
              height: { xs: 36, md: 40 },
              '&:hover': { background: '#555' } 
            }}
          >
            <FacebookIcon sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }} />
          </IconButton>
          <IconButton 
            aria-label="Twitter" 
            sx={{ 
              background: '#222', 
              color: '#fff', 
              width: { xs: 36, md: 40 },
              height: { xs: 36, md: 40 },
              '&:hover': { background: '#555' } 
            }}
          >
            <TwitterIcon sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }} />
          </IconButton>
          <IconButton 
            aria-label="YouTube" 
            sx={{ 
              background: '#222', 
              color: '#fff', 
              width: { xs: 36, md: 40 },
              height: { xs: 36, md: 40 },
              '&:hover': { background: '#555' } 
            }}
          >
            <YouTubeIcon sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }} />
          </IconButton>
          <IconButton 
            aria-label="Instagram" 
            sx={{ 
              background: '#222', 
              color: '#fff', 
              width: { xs: 36, md: 40 },
              height: { xs: 36, md: 40 },
              '&:hover': { background: '#555' } 
            }}
          >
            <InstagramIcon sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }} />
          </IconButton>
          <IconButton 
            aria-label="LinkedIn" 
            sx={{ 
              background: '#222', 
              color: '#fff', 
              width: { xs: 36, md: 40 },
              height: { xs: 36, md: 40 },
              '&:hover': { background: '#555' } 
            }}
          >
            <LinkedInIcon sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
} 