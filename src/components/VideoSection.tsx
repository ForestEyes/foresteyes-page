import { useLanguage } from "@/contexts/LanguageContext";

export default function VideoSection() {
  const { t } = useLanguage();

  return (
    <section id="video" className="section-padding bg-muted">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-4">
          {t("Veja o Projeto em Ação", "See the Project in Action")}
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          {t(
            "Assista ao vídeo para entender como o ForestEyes combina ciência cidadã e inteligência artificial para monitorar o desmatamento.",
            "Watch the video to understand how ForestEyes combines citizen science and artificial intelligence to monitor deforestation."
          )}
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full overflow-hidden rounded-xl shadow-lg" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/FqKINKR69Ww"
              title="ForestEyes Project"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
