import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import About from "./components/About";
import { useEffect, useState } from "react";
import { translations } from "./translations";

function App() {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio-language");
      return Object.hasOwn(translations, saved) ? saved : "de";
    } catch (error) {
      console.warn("Spracheinstellung konnte nicht geladen werden:", error);
      return "de";
    }
  });
  const text = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem("portfolio-language", language);
    } catch (error) {
      console.warn("Spracheinstellung konnte nicht gespeichert werden:", error);
    }
  }, [language]);

  return (
    <div className="min-h-screen bg-black">
      <Header text={text} language={language} setLanguage={setLanguage} />
      <Hero text={text.hero} />
      <About text={text.about} />
      <Skills text={text.skills} />
      <Experience text={text.experience} />
      <Projects text={text.projects} />
      <Footer text={text.footer} nav={text.nav} />
    </div>
  );
}

export default App;
