import React, { useState } from "react";
import "./App.css";
import HomePage from "./Components/Home/HomePage";
import Header from "./Components/Navbar/Header";
import AboutSection from "./Components/About/AboutUs";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <div className="App">
      <Header language={language} setLanguage={setLanguage} />
      <HomePage language={language} setLanguage={setLanguage} />
      <AboutSection language={language} />
    </div>
  );
}

export default App;
