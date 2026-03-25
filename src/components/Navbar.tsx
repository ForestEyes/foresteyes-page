import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/forestEyesLogo.png";
import { Menu, X, Globe } from "lucide-react";

const navItems = [
  { pt: "Sobre", en: "About", href: "#about" },
  // { pt: "Como Funciona", en: "How It Works", href: "#how-it-works" },
  { pt: "Participar", en: "Participate", href: "#citizen-science" },
  { pt: "Publicações", en: "Publications", href: "#publications" },
  // { pt: "Workshop", en: "Workshop", href: "#workshop" },
  { pt: "Equipe", en: "Team", href: "#team" },
  // { pt: "Parceiros", en: "Partners", href: "#partners" },
  { pt: "Contato", en: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container-narrow flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-2">
          <img src={logo} alt="ForestEyes" className="h-32 w-32" />
          {/* <span className="font-heading font-bold text-lg text-primary">ForestEyes</span> */}
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {t(item.pt, item.en)}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            className="flex items-center gap-1 text-sm font-medium text-primary border border-primary rounded-md px-3 py-1.5 hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4" />
            {lang === "pt" ? "EN" : "PT"}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-b border-border pb-4 px-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary"
            >
              {t(item.pt, item.en)}
            </a>
          ))}
          <button
            onClick={() => {
              setLang(lang === "pt" ? "en" : "pt");
              setOpen(false);
            }}
            className="mt-2 flex items-center gap-1 text-sm font-medium text-primary"
          >
            <Globe className="h-4 w-4" />
            {lang === "pt" ? "English" : "Português"}
          </button>
        </div>
      )}
    </nav>
  );
}
