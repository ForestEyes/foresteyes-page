import { useLanguage } from "@/contexts/LanguageContext";
import heroImg from "@/assets/hero-forest.jpg";
import satelliteImg from "@/assets/satellite-deforestation.jpg";
import appImg from "@/assets/app-screenshot.jpeg";
import workshopImg from "@/assets/workshop-flyer.jpeg";

export default function MediaSection() {
  const { t } = useLanguage();

  const images = [
    { src: heroImg, alt: t("Vista aérea da floresta tropical", "Aerial view of the rainforest") },
    { src: satelliteImg, alt: t("Imagem de satélite - desmatamento", "Satellite image - deforestation") },
    { src: appImg, alt: t("Plataforma ForestEyes", "ForestEyes Platform") },
    { src: workshopImg, alt: t("Workshop ForestEyes", "ForestEyes Workshop") },
  ];

  return (
    <section id="media" className="section-padding bg-background">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-4">
          {t("Mídia", "Media")}
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          {t("Imagens do projeto e da plataforma.", "Project and platform images.")}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-xl">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
