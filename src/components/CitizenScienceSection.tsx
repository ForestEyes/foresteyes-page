import { useLanguage } from "@/contexts/LanguageContext";
import appScreenshot from "@/assets/app-screenshot.jpeg";
import { ExternalLink } from "lucide-react";

export default function CitizenScienceSection() {
  const { t } = useLanguage();

  return (
    <section id="citizen-science" className="section-padding bg-background">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-4">
          {t("Plataforma de Ciência Cidadã", "Citizen Science Platform")}
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          {t(
            "O ForestEyes está disponível na plataforma Zooniverse, onde qualquer pessoa pode contribuir com a pesquisa.",
            "ForestEyes is available on the Zooniverse platform, where anyone can contribute to the research."
          )}
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              {t("Como você pode ajudar", "How you can help")}
            </h3>
            <ul className="space-y-3 text-muted-foreground mb-8">
              {[
                t("Acesse a plataforma Zooniverse", "Access the Zooniverse platform"),
                t("Crie uma conta gratuita", "Create a free account"),
                t("Analise imagens de satélite", "Analyze satellite images"),
                t("Classifique áreas como Floresta ou Não-Floresta", "Classify areas as Forest or Non-Forest"),
                t("Contribua para a ciência e conservação", "Contribute to science and conservation"),
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://www.zooniverse.org/projects/dallaqua/foresteyes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
              {t("Acessar Plataforma", "Go to Platform")}
            </a>
          </div>
          <div>
            <img
              src={appScreenshot}
              alt={t("Screenshot da plataforma ForestEyes", "ForestEyes platform screenshot")}
              className="rounded-xl shadow-lg w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
