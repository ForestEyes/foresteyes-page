import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-forest.jpg";
import { ArrowDown, BookOpen, Users } from "lucide-react";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-accent/70" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in-up">
          ForestEyes
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 font-body mb-4 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          {t(
            "Ciência Cidadã e Aprendizado de Máquina para a Conservação de Florestas Tropicais",
            "Citizen Science and Machine Learning for Rainforest Conservation"
          )}
        </p>
        <p className="text-base md:text-lg text-primary-foreground/75 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          {t(
            "Um projeto de pesquisa que combina voluntários, imagens de satélite e inteligência artificial para monitorar e combater o desmatamento.",
            "A research project combining volunteers, satellite imagery, and artificial intelligence to monitor and fight deforestation."
          )}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          <a href="#about" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors">
            <ArrowDown className="h-5 w-5" />
            {t("Saiba Mais", "Learn More")}
          </a>
          <a href="#publications" className="inline-flex items-center gap-2 border-2 border-primary-foreground/50 text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
            <BookOpen className="h-5 w-5" />
            {t("Publicações", "Publications")}
          </a>
          <a
            href="https://www.zooniverse.org/projects/dallaqua/foresteyes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary transition-colors"
          >
            <Users className="h-5 w-5" />
            {t("Participar", "Join the Project")}
          </a>
        </div>
      </div>
    </section>
  );
}
