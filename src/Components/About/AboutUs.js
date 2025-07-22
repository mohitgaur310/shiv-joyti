import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const content = {
  en: {
    heading: "About Us",
    subheading: "Meet the Founder",
    description: `Shiv Jyoti Foundation was born out of a dream — a dream to uplift the most vulnerable sections of our society. Our founder Mr. [Name] has dedicated his life to service and community welfare.`,
  },
  hi: {
    heading: "हमारे बारे में",
    subheading: "संस्थापक का परिचय",
    description: `शिव ज्योति संस्था की स्थापना एक सपने से हुई थी – समाज के सबसे कमजोर वर्ग की सहायता करना। हमारे संस्थापक श्री [नाम] ने अपने जीवन को सेवा और समाज कल्याण को समर्पित किया है।`,
  },
};

export default function AboutSection({ language }) {
  console.log("🚀 ~ AboutSection ~ language:", language);
  const { heading, subheading, description } = content[language];

  return (
    <Box id="about" sx={{ py: 8, px: 3, backgroundColor: "#f9f9f9" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: "bold",
          mb: 6,
          background:
            "radial-gradient(at bottom center, #72be44 0, #7dc657 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {heading}
      </Typography>

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={5}>
          <Paper
            elevation={3}
            sx={{
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="/images/founder.jpg" // make sure the image exists in public/images/
              alt={subheading}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} md={7}>
          <Typography variant="h6" sx={{ color: "#666", mb: 2 }}>
            {subheading}
          </Typography>
          <Typography variant="body1" sx={{ color: "#666", lineHeight: 1.7 }}>
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
