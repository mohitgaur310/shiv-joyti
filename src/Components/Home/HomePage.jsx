import React, { useRef, useEffect, useContext } from "react";
import AboutSection from "../About/AboutUs";
import { Typography, Box, Button, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ScrollContext } from "../Layout/Layout";

const content = {
  en: {
    title: "Empowering Women & Supporting Communities",
    paragraph:
      "Our NGO is committed to uplifting women, ending child marriage, and ensuring no one goes hungry. We believe in creating a world where every woman has equal opportunities, every child a safe future, and every family access to food and dignity.",
    button: "Learn More",
  },
  hi: {
    title: "महिलाओं का सशक्तिकरण और समाज की सहायता",
    paragraph:
      "हमारा एनजीओ महिलाओं के उत्थान, बाल विवाह की समाप्ति और हर किसी को भोजन उपलब्ध कराने के लिए प्रतिबद्ध है। हम एक ऐसी दुनिया बनाना चाहते हैं जहाँ हर महिला को समान अवसर मिलें, हर बच्चे को सुरक्षित भविष्य मिले और हर परिवार को भोजन और गरिमा प्राप्त हो।",
    button: "और जानें",
  },
};

const images = [
  "/assests/pexels-ahmed-akacha-3313934-10629468.jpg",
  "/assests/top-view-origami-chain-people-with-globe.jpg",
];

export default function HomePage({ language }) {
  const aboutRef = useRef(null);
  const { registerScrollToTop, registerScrollToAbout } = useContext(ScrollContext);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (registerScrollToAbout) registerScrollToAbout(scrollToAbout);
    if (registerScrollToTop) registerScrollToTop(scrollToTop);
  }, [registerScrollToAbout, registerScrollToTop]);

  useEffect(() => {
    if (sessionStorage.getItem("scrollToAbout")) {
      scrollToAbout();
      sessionStorage.removeItem("scrollToAbout");
    }
  }, []);

  return (
    <>
      <Box sx={{ pt: { xs: 7, md: 8 } }}>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: 450, sm: 500, md: 550, lg: 600 },
                  overflow: "hidden",
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + src}
                  alt={`slide-${i}`}
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover", filter: "brightness(0.5)" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    px: { xs: 3, sm: 4, md: 5 },
                    textAlign: "center",
                    opacity: 0.95,
                    pt: { xs: 6, md: 0 }, // Increased top padding for mobile to avoid header overlap
                    pb: { xs: 4, md: 0 }, // Add bottom padding for mobile
                  }}
                >
                  <Container maxWidth="lg">
                    <Typography 
                      variant="h2" 
                      sx={{ 
                        fontWeight: "bold",
                        mb: { xs: 3, md: 4 },
                        fontSize: { xs: "2.25rem", sm: "2.75rem", md: "3.25rem", lg: "3.75rem" },
                        lineHeight: { xs: 1.1, md: 1.1 },
                        textShadow: "3px 3px 6px rgba(0,0,0,0.7)",
                        letterSpacing: { xs: "-0.02em", md: "-0.01em" },
                      }}
                    >
                      {content[language].title}
                    </Typography>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        mb: { xs: 4, md: 5 },
                        fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.375rem" },
                        lineHeight: { xs: 1.5, md: 1.6 },
                        maxWidth: { xs: "100%", md: "85%" },
                        mx: "auto",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                        opacity: 0.98,
                        fontWeight: { xs: 400, md: 500 },
                      }}
                    >
                      {content[language].paragraph}
                    </Typography>
                    <Button
                      variant="contained"
                      size="large"
                      onClick={scrollToAbout}
                      sx={{
                        backgroundColor: "white",
                        color: "#666",
                        px: { xs: 4, md: 5 },
                        py: { xs: 2, md: 2.5 },
                        fontSize: { xs: "1.125rem", md: "1.25rem" },
                        fontWeight: "bold",
                        borderRadius: 3,
                        boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
                        minHeight: { xs: "48px", md: "56px" },
                        "&:hover": {
                          background: "radial-gradient(at bottom center, #72be44 0, #7dc657 100%)",
                          color: "white",
                          transform: "translateY(-3px)",
                          boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {content[language].button}
                    </Button>
                  </Container>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <div ref={aboutRef}>
        <AboutSection language={language} />
      </div>
    </>
  );
}
