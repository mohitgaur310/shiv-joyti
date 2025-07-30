import React from "react";
import { Box, Typography, Card, CardContent, CardMedia, IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import SchoolIcon from '@mui/icons-material/School';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import HandshakeIcon from '@mui/icons-material/Handshake';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const content = {
  en: {
    heading: "The Minds Behind the Mission",
    cofounders: [
      {
        name: "CHANDRA KUMAR SINGH",
        title: "President",
        img: "/assests/pexels-ahmed-akacha-3313934-10629468.jpg",
        bio: "Working since 14-08-2008. Dedicated to empowering women, ending child marriage, and ensuring food security for all."
      },
      {
        name: "MANAS BHARDWAJ",
        title: "Secretary",
        img: "/assests/top-view-origami-chain-people-with-globe.jpg",
        bio: "Working since 01-07-2019. Committed to community welfare and social development initiatives."
      },
      {
        name: "BHARTI KUMARI",
        title: "Treasurer",
        img: "/assests/pexels-ahmed-akacha-3313934-10629468.jpg",
        bio: "Working since 02-02-2024. Focused on financial management and organizational growth."
      },
    ],
    aboutText: `Shiv Jyoti Foundation was born out of a dream — a dream to uplift the most vulnerable sections of our society. Our founders have dedicated their lives to service and community welfare. We work tirelessly to empower women, end child marriage, and ensure food security for all. Through our various initiatives, we strive to create a world where every woman has equal opportunities, every child a safe future, and every family access to food and dignity. Our team believes in the power of community and the importance of education, health, and social justice. Together, we are building a brighter, more inclusive future for everyone.`,
  },
  hi: {
    heading: "मिशन के पीछे का दिमाग",
    cofounders: [
      {
        name: "चंद्र कुमार सिंह",
        title: "अध्यक्ष",
        img: "/assests/pexels-ahmed-akacha-3313934-10629468.jpg",
        bio: "14-08-2008 से कार्यरत। महिलाओं को सशक्त बनाने, बाल विवाह को समाप्त करने और सभी के लिए खाद्य सुरक्षा सुनिश्चित करने के लिए समर्पित।"
      },
      {
        name: "मानस भारद्वाज",
        title: "सचिव",
        img: "/assests/top-view-origami-chain-people-with-globe.jpg",
        bio: "01-07-2019 से कार्यरत। समुदाय कल्याण और सामाजिक विकास पहलों के लिए प्रतिबद्ध।"
      },
      {
        name: "भारती कुमारी",
        title: "कोषाध्यक्ष",
        img: "/assests/pexels-ahmed-akacha-3313934-10629468.jpg",
        bio: "02-02-2024 से कार्यरत। वित्तीय प्रबंधन और संगठनात्मक विकास पर केंद्रित।"
      },
    ],
    aboutText: `शिव ज्योति संस्था की स्थापना एक सपने से हुई थी – समाज के सबसे कमजोर वर्ग की सहायता करना। हमारे संस्थापकों ने अपने जीवन को सेवा और समाज कल्याण को समर्पित किया है। हम महिलाओं को सशक्त बनाने, बाल विवाह को समाप्त करने और सभी के लिए खाद्य सुरक्षा सुनिश्चित करने के लिए निरंतर प्रयासरत हैं। अपनी विभिन्न पहलों के माध्यम से, हम एक ऐसी दुनिया बनाने का प्रयास करते हैं जहाँ हर महिला को समान अवसर मिले, हर बच्चे को सुरक्षित भविष्य मिले और हर परिवार को भोजन और गरिमा मिले। हमारी टीम समुदाय की शक्ति और शिक्षा, स्वास्थ्य और सामाजिक न्याय के महत्व में विश्वास करती है। हम सब मिलकर सभी के लिए एक उज्जवल और समावेशी भविष्य का निर्माण कर रहे हैं।`,
  },
};

// Single Co-Founder Card Component
const CofounderCard = ({ founder }) => (
  <Card sx={{
    borderRadius: '18px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0px 6px 30px 0px rgba(34,34,34,0.12)'
  }}>
    <CardMedia
      component="img"
      height="320"
      image={process.env.PUBLIC_URL + founder.img}
      alt={founder.name}
      sx={{ objectFit: 'cover' }}
    />
    <CardContent sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="body1" sx={{ color: '#72be44', fontWeight: 'bold' }}>
        {founder.title}
      </Typography>
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', my: 0.5 }}>
        {founder.name}
      </Typography>
      {founder.bio && (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {founder.bio}
        </Typography>
      )}
    </CardContent>
    <Box sx={{ p: 1, px: 2 }}>
      <IconButton aria-label="linkedin"><LinkedInIcon /></IconButton>
      <IconButton aria-label="twitter"><TwitterIcon /></IconButton>
    </Box>
  </Card>
);

export default function AboutSection({ language }) {
  const data = content[language] || content.en;

  // What We Do items
  const whatWeDoItems = [
    {
      icon: <SchoolIcon sx={{ fontSize: 48, color: '#72be44' }} />,
      title: language === 'en' ? 'Access to Quality Education' : 'गुणवत्तापूर्ण शिक्षा तक पहुँच',
      desc: language === 'en' ? 'Empowering children with learning opportunities.' : 'बच्चों को सीखने के अवसर प्रदान करना।',
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 48, color: '#72be44' }} />,
      title: language === 'en' ? 'Bridge Course for Non-School Going Children' : 'गैर-स्कूल जाने वाले बच्चों के लिए ब्रिज कोर्स',
      desc: language === 'en' ? 'Helping out-of-school children catch up.' : 'स्कूल से बाहर बच्चों की मदद करना।',
    },
    {
      icon: <Diversity3Icon sx={{ fontSize: 48, color: '#72be44' }} />,
      title: language === 'en' ? 'Remedial Education Support' : 'सहायक शिक्षा समर्थन',
      desc: language === 'en' ? 'Personalized help for struggling students.' : 'संघर्षरत छात्रों के लिए व्यक्तिगत सहायता।',
    },
    {
      icon: <WorkspacePremiumIcon sx={{ fontSize: 48, color: '#72be44' }} />,
      title: language === 'en' ? 'Scholarship Support for Continued Education' : 'निरंतर शिक्षा के लिए छात्रवृत्ति समर्थन',
      desc: language === 'en' ? 'Enabling bright minds to pursue their dreams.' : 'प्रतिभाशाली छात्रों को उनके सपनों को पूरा करने में मदद करना।',
    },
  ];

  return (
    <Box id="about" sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#fff" }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 3 }}>
        {/* What We Do Section */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', color: '#222', mb: 2 }}>
            {language === 'en' ? 'What We Do' : 'हम क्या करते हैं'}
          </Typography>
          <Typography variant="h6" sx={{ color: '#555', maxWidth: 800, mx: 'auto', fontWeight: 400, mb: 6 }}>
            {data.aboutText}
          </Typography>
          {/* Creative horizontal row */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', gap: { xs: 4, md: 2 }, mb: 6 }}>
            {whatWeDoItems.map((item, idx) => (
              <React.Fragment key={idx}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 180, maxWidth: 220 }}>
                  <Box sx={{
                    width: 90,
                    height: 90,
                    borderRadius: '50%',
                    border: '2.5px dashed #72be44',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#eaf7e3',
                    mb: 2,
                  }}>
                    {item.icon}
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, fontStyle: 'italic', textAlign: 'center', mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555', textAlign: 'center' }}>
                    {item.desc}
                  </Typography>
                </Box>
                {idx < whatWeDoItems.length - 1 && (
                  <ArrowForwardIosIcon sx={{ color: '#b5d7a6', fontSize: 32, mx: { xs: 0, md: 2 }, my: { xs: 2, md: 0 }, alignSelf: 'center' }} />
                )}
              </React.Fragment>
            ))}
          </Box>
        </Box>
        {/* Minds Behind the Mission Section */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', color: '#222' }}>
            {data.heading}
          </Typography>
        </Box>
        {/* Replaced Grid with Box for single-row 30/30/30 layout */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 3 }}>
          {data.cofounders.map((founder, i) => (
            <Box key={i} sx={{ flex: '0 0 30%' }}>
              <CofounderCard founder={founder} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
