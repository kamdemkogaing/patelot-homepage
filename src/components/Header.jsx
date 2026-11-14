import { Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

const getScrollProgress = () => {
  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  return scrollableHeight > 0
    ? Math.min(Math.max((window.scrollY / scrollableHeight) * 100, 0), 100)
    : 0;
};

const Header = ({ text, language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 20);
  const [scrollProgress, setScrollProgress] = useState(getScrollProgress);
  const links = ["#home", "#about", "#skills", "#experience", "#projects", "#contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setScrollProgress(getScrollProgress());
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-800/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl shadow-slate-900/20"
          : "bg-slate-900/80 backdrop-blur-sm md:mx-4 md:mt-4 md:rounded-2xl"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <nav className="w-full px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 w-full">
            {/* Logo Section - ganz links */}
            <div className="flex items-center gap-3 min-w-0">
              <a
                href="#home"
                className="group flex items-center gap-2 hover:scale-105 transition-transform duration-300 min-w-0"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#9CAF88] to-[#556B2F] rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <img
                    src="/logo-kamdem.png"
                    alt="Kamdem Logo"
                    className="relative h-8 sm:h-10 w-auto rounded-lg"
                  />
                </div>
                <div className="flex min-w-0 flex-col">
                  <span className="truncate text-base sm:text-xl font-bold bg-gradient-to-r from-[#9CAF88] to-[#556B2F] bg-clip-text text-transparent">
                    patelot.cloud
                  </span>
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#9CAF88] animate-pulse" />
                    <span className="text-xs text-gray-400 font-medium">
                      by Patrick Kamdem
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:block">
              <div className="flex items-baseline">
                {links.map((href, index) => (
                  <a
                    key={href}
                    href={href}
                    className="group relative px-2 py-2 rounded-xl text-sm text-gray-300 hover:text-white transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 font-medium">
                      {text.nav[index]}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#9CAF88]/10 to-[#556B2F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#9CAF88] to-[#556B2F] group-hover:w-full transition-all duration-300"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button - ganz rechts */}
            <div className="flex shrink-0 items-center gap-2">
              <div role="group" aria-label={text.language} className="flex items-center rounded-full border border-slate-600 bg-slate-900/80 p-1">
                {["de", "en", "fr"].map((code) => (
                  <button
                    key={code}
                    type="button"
                    lang={code}
                    aria-label={{ de: "Deutsch", en: "English", fr: "Français" }[code]}
                    aria-pressed={language === code}
                    onClick={() => setLanguage(code)}
                    className={`rounded-full px-2 py-1 text-xs font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9CAF88] ${language === code ? "bg-[#9CAF88] text-slate-900" : "text-gray-300 hover:text-white"}`}
                  >
                    {code.toUpperCase()}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? text.menuClose : text.menuOpen}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                className="xl:hidden group relative p-2 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#9CAF88]/10 to-[#556B2F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                {isOpen ? (
                  <X className="w-6 h-6 text-white relative z-10" />
                ) : (
                  <Menu className="w-6 h-6 text-white relative z-10" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            id="mobile-navigation"
            aria-hidden={!isOpen}
            className={`xl:hidden overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="space-y-1 pt-2">
              {links.map((href, index) => (
                <a
                  key={href}
                  href={href}
                  tabIndex={isOpen ? undefined : -1}
                  onClick={() => setIsOpen(false)}
                  className="group block relative px-4 py-3 rounded-xl text-gray-300 hover:text-white transition-all duration-300 overflow-hidden"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10 font-medium">
                    {text.nav[index]}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#9CAF88]/10 to-[#556B2F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-[#9CAF88] to-[#556B2F] group-hover:h-8 transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#9CAF88] to-[#556B2F] rounded-b-2xl overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#556B2F] to-[#9CAF88] transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </header>
  );
};

export default Header;
