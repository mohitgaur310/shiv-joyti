import React, { useRef, useEffect, useContext } from "react";
import AboutSection from "../About/AboutUs";
import { Typography, Box, Button } from "@mui/material";
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
      <Box >
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
                  height: { xs: 400, sm: 600 },
                  overflow: "hidden",
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + src}
                  alt={`slide-${i}`}
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover", filter: "brightness(0.6)" }}
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
                    px: 3,
                    textAlign: "center",
                    opacity: 0.8,
                  }}
                >
                  <Typography variant="h3" gutterBottom>
                    {content[language].title}
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    {content[language].paragraph}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "white",
                      color: "#666",
                      px: 2,
                      "&:hover": {
                        background:
                          "radial-gradient(at bottom center, #72be44 0, #7dc657 100%)",
                        color: "white",
                      },
                    }}
                  >
                    {content[language].button}
                  </Button>
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
