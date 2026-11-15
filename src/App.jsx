import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import About from "./components/About";
import { useEffect, useState } from "react";
import { partnerTranslations, translations } from "./translations";
import { legalTranslations } from "./legalTranslations";
import PartnerServices from "./pages/PartnerServices";
import LegalPage from "./pages/LegalPage";

function App() {
  const isPartnerPage = /^\/partner-services\/?$/.test(window.location.pathname);
  const legalPage = /^\/impressum\/?$/.test(window.location.pathname)
    ? "imprint"
    : /^\/datenschutz\/?$/.test(window.location.pathname) ? "privacy" : null;
  const isSubpage = isPartnerPage || Boolean(legalPage);
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

  useEffect(() => {
    if (!isPartnerPage && !legalPage) return;
    const previousTitle = document.title;
    let meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content");
    const created = !meta;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    document.title = isPartnerPage ? partnerTranslations[language].seo.title : `${legalTranslations[language][legalPage]} | patelot.cloud`;
    if (isPartnerPage) meta.setAttribute("content", partnerTranslations[language].seo.description);
    else meta.removeAttribute("content");
    return () => {
      document.title = previousTitle;
      if (created) meta.remove();
      else if (previousDescription === null) meta.removeAttribute("content");
      else meta.setAttribute("content", previousDescription);
    };
  }, [isPartnerPage, legalPage, language]);

  return (
    <div className="min-h-screen bg-black">
      <Header text={text} language={language} setLanguage={setLanguage} isPartnerPage={isPartnerPage} isSubpage={isSubpage} partnerNav={partnerTranslations[language].nav} />
      {isPartnerPage ? (
        <PartnerServices text={partnerTranslations[language]} />
      ) : legalPage ? (
        <LegalPage text={legalTranslations[language]} page={legalPage} />
      ) : (
        <>
          <Hero text={text.hero} />
          <About text={text.about} />
          <Skills text={text.skills} />
          <Experience text={text.experience} />
          <Projects text={text.projects} />
        </>
      )}
      <Footer text={text.footer} nav={text.nav} isSubpage={isSubpage} />
    </div>
  );
}

export default App;
