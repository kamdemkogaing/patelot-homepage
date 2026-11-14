import {
  ArrowUpRight,
  Briefcase,
  Code2,
  FolderKanban,
  Home,
  Mail,
  Menu,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const navigation = [
  { href: "#home", icon: Home },
  { href: "#about", icon: UserRound },
  { href: "#skills", icon: Code2 },
  { href: "#experience", icon: Briefcase },
  { href: "#projects", icon: FolderKanban },
  { href: "#contact", icon: Mail },
];

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
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setScrollProgress(getScrollProgress());
      const marker = Math.min(window.innerHeight * 0.3, 180);
      let active = navigation[0].href;
      for (const { href } of navigation) {
        const section = document.getElementById(href.slice(1));
        if (section && section.getBoundingClientRect().top <= marker) {
          active = href;
        }
      }
      if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1) {
        active = "#contact";
      }
      setActiveSection(active);
    };

    const frame = window.requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.cancelAnimationFrame(frame);
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
              <div className="flex items-center gap-1 rounded-full border border-white/10 bg-slate-950/50 p-1 shadow-inner shadow-black/20">
                {navigation.map(({ href }, index) => (
                  <a
                    key={href}
                    href={href}
                    aria-current={activeSection === href ? "location" : undefined}
                    className={`relative whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8cba3] ${
                      activeSection === href
                        ? "bg-[#9CAF88] text-slate-950 shadow-md shadow-black/20"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {text.nav[index]}
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
            <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-950/60 p-2">
              {navigation.map(({ href, icon: Icon }, index) => (
                <a
                  key={href}
                  href={href}
                  aria-current={activeSection === href ? "location" : undefined}
                  tabIndex={isOpen ? undefined : -1}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#b8cba3] ${
                    activeSection === href
                      ? "bg-[#9CAF88]/20 text-white"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0 text-[#b8cba3]" aria-hidden="true" />
                  <span className="flex-1">{text.nav[index]}</span>
                  <ArrowUpRight className="h-4 w-4 text-slate-500 transition-colors group-hover:text-[#b8cba3]" aria-hidden="true" />
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
