import { useLanguage } from "@/contexts/LanguageContext";
import satelliteImg from "@/assets/satellite-deforestation.jpg";
import { TreePine, Satellite, Brain, Users } from "lucide-react";

export default function AboutSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: TreePine,
      title: t("Conservação Florestal", "Forest Conservation"),
      desc: t(
        "Monitoramento do desmatamento em florestas tropicais utilizando tecnologia de ponta.",
        "Monitoring deforestation in tropical rainforests using cutting-edge technology."
      ),
    },
    {
      icon: Satellite,
      title: t("Sensoriamento Remoto", "Remote Sensing"),
      desc: t(
        "Análise de imagens de satélite para identificar padrões de desmatamento.",
        "Analyzing satellite imagery to identify deforestation patterns."
      ),
    },
    {
      icon: Brain,
      title: t("Aprendizado de Máquina", "Machine Learning"),
      desc: t(
        "Modelos de IA treinados com dados de ciência cidadã para detecção automática.",
        "AI models trained with citizen science data for automatic detection."
      ),
    },
    {
      icon: Users,
      title: t("Ciência Cidadã", "Citizen Science"),
      desc: t(
        "Voluntários ao redor do mundo classificam imagens para apoiar a pesquisa.",
        "Volunteers around the world classify images to support the research."
      ),
    },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-4">
          {t("Sobre o Projeto", "About the Project")}
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          {t(
            "ForestEyes é um projeto de pesquisa científica focado no monitoramento do desmatamento usando imagens de satélite, ciência cidadã e aprendizado de máquina. O projeto une voluntários de todo o mundo a pesquisadores para treinar modelos de inteligência artificial capazes de detectar desmatamento em larga escala.",
            "ForestEyes is a scientific research project focused on monitoring deforestation using satellite images, citizen science, and machine learning. The project brings together volunteers from around the world and researchers to train AI models capable of detecting deforestation at large scale."
          )}
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={satelliteImg}
              alt={t("Imagem de satélite mostrando desmatamento", "Satellite image showing deforestation")}
              className="rounded-xl shadow-lg w-full"
            />
          </div>
          <div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              {t("Por que monitorar o desmatamento?", "Why monitor deforestation?")}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t(
                "O desmatamento tropical é uma das maiores ameaças ambientais do planeta, agravando as mudanças climáticas e a perda de biodiversidade. Monitorar essas mudanças é crucial para ações de conservação eficazes.",
                "Tropical deforestation is one of the planet's greatest environmental threats, worsening climate change and biodiversity loss. Monitoring these changes is crucial for effective conservation actions."
              )}
            </p>
            <p className="text-muted-foreground mb-4">
              {t(
                "O Projeto ForestEyes combina a análise visual humana - através da ciência cidadã - com algoritmos de aprendizado de máquina. O resultado é um sistema de monitoramento preciso, inclusivo, de baixo custo e escalável. Atualmente focado em ecossistemas tropicais, o projeto já expande seus horizontes para o contexto urbano.",
                "The ForestEyes Project combines human visual analysis through citizen science with machine learning algorithms. The result is a precise, inclusive, low-cost, and scalable monitoring system. Currently focused on tropical ecosystems, the project is already expanding its horizons to urban contexts."
              )}
            </p>
            <p className="text-muted-foreground">
              {t(
                "No futuro, a tecnologia será adaptada para monitorar a cobertura vegetal em cidades, auxiliando na gestão de áreas verdes, no combate às ilhas de calor e na promoção de cidades mais resilientes.",
                "In the future, this technology will be adapted to monitor vegetation cover in cities, supporting green area management, mitigating urban heat islands, and promoting more resilient cities."
              )}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <f.icon className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-heading font-bold text-foreground mb-2">{f.title}</h4>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
