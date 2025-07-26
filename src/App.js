import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/Home/HomePage";
import InitiativesPage from "./Components/Initiatives/InitiativesPage";
import GalleryPage from "./Components/Gallery/GalleryPage";
import ContactPage from "./Components/Contact/ContactPage";
import DonatePage from "./Components/Donate/DonatePage";
import Layout from "./Components/Layout/Layout";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const [language, setLanguage] = useState("en");
  const aboutRef = useRef(null);
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Layout language={language} setLanguage={setLanguage} onAboutClick={scrollToAbout}>
          <Routes>
            <Route path="/" element={<HomePage language={language} setLanguage={setLanguage} />} />
            <Route path="/gallery" element={<GalleryPage language={language} setLanguage={setLanguage} />} />
            <Route path="/initiatives" element={<InitiativesPage language={language} setLanguage={setLanguage} />} />
            <Route path="/contact" element={<ContactPage language={language} setLanguage={setLanguage} />} />
            <Route path="/donate" element={<DonatePage language={language} setLanguage={setLanguage} />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
