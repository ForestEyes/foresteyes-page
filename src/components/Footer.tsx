import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/forestEyesLogo.png";
import { Github } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  const links = [
    { label: t("Sobre", "About"), href: "#about" },
    { label: t("Participar", "Participate"), href: "#citizen-science" },
    { label: t("Publicações", "Publications"), href: "#publications" },
    { label: t("Equipe", "Team"), href: "#team" },
    { label: t("Contato", "Contact"), href: "#contact" },
  ];

  return (
    <footer className="bg-accent text-accent-foreground py-12 px-4">
      <div className="container-narrow">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src={logo}
              alt="ForestEyes"
              className="h-32 w-32 brightness-0 invert scale-150 ms-5"
            />
            <p className="text-sm text-accent-foreground/75">
              {t(
                "Ciência Cidadã e Aprendizado de Máquina para a Conservação de Florestas Tropicais.",
                "Citizen Science and Machine Learning for Rainforest Conservation.",
              )}
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-3">
              {t("Navegação", "Navigation")}
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-accent-foreground/75 hover:text-accent-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-3">
              {t("Links", "Links")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.zooniverse.org/projects/dallaqua/foresteyes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent-foreground/75 hover:text-accent-foreground transition-colors"
                >
                  Zooniverse
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ForestEyes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-accent-foreground/75 hover:text-accent-foreground transition-colors"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 pt-6 text-center text-xs text-accent-foreground/60">
          <p>
            {t("Financiado pela", "Funded by")} FAPESP –{" "}
            {t("Processo", "Grant")} 2023/00782-0
          </p>
          <p className="mt-1">
            © {new Date().getFullYear()} ForestEyes.{" "}
            {t("Todos os direitos reservados.", "All rights reserved.")}
          </p>
        </div>
      </div>
    </footer>
  );
}
