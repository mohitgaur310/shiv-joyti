import React, { createContext, useRef } from "react";
import Header from "../Navbar/Header";
import Footer from "../Footer/Footer";

export const ScrollContext = createContext({});

export default function Layout({ children, language, setLanguage, ...rest }) {
  const scrollToTopRef = useRef(null);
  const scrollToAboutRef = useRef(null);

  const registerScrollToTop = fn => { scrollToTopRef.current = fn; };
  const registerScrollToAbout = fn => { scrollToAboutRef.current = fn; };
  const scrollToTop = () => { if (typeof scrollToTopRef.current === 'function') scrollToTopRef.current(); };
  const scrollToAbout = () => { if (typeof scrollToAboutRef.current === 'function') scrollToAboutRef.current(); };

  return (
    <ScrollContext.Provider value={{ registerScrollToTop, registerScrollToAbout, scrollToTop, scrollToAbout }}>
      <Header language={language} setLanguage={setLanguage} {...rest} />
      <main 
        style={{ 
          minHeight: "70vh",
          width: '100%',
          overflowX: 'hidden',
        }}
      >
        {children}
      </main>
      <Footer language={language} setLanguage={setLanguage} />
    </ScrollContext.Provider>
  );
}