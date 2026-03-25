import { useLanguage } from "@/contexts/LanguageContext";
import {
  Satellite,
  Users,
  CheckSquare,
  Brain,
  BarChart3,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

export default function HowItWorksSection() {
  const { t } = useLanguage();

  const modules = [
    {
      icon: Satellite,
      title: t("Módulo de Pré-processamento", "Preprocessing Module"),
      steps: [
        t("Aquisição", "Acquisition"),
        t("Processamento", "Processing"),
        t("Segmentação", "Segmentation"),
      ],
      output: t("Saída: Segmentos", "Output: Segments"),
    },
    {
      icon: Users,
      title: t("Módulo de Ciência Cidadã", "Citizen Science Module"),
      steps: [
        t("Construção de Tarefas", "Task Construction"),
        t(
          "Construção da Campanha na Plataforma de Ciência Cidadã",
          "Campaign Construction on the Citizen Science Platform",
        ),
        t("Respostas dos Voluntários", "Volunteer Responses"),
      ],
      output: t(
        "Saída: Respostas de Voluntários",
        "Output: Volunteer Responses",
      ),
    },
    {
      icon: BarChart3,
      title: t(
        "Módulo de Organização e Seleção",
        "Organization and Selection Module",
      ),
      steps: [
        t("Classificação das Tarefas", "Task Classification"),
        t("Análises", "Analytics"),
        t(
          "Seleção de Amostras para o Módulo de Aprendizado de Máquina",
          "Sample Selection for the Machine Learning Module",
        ),
      ],
      output: t(
        "Saída: Amostras qualificadas para IA",
        "Output: Qualified samples for AI",
      ),
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-muted">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-4">
          {t("Como Funciona", "How It Works")}
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          {t(
            "O fluxo segue três módulos principais: pré-processamento das imagens, campanha de ciência cidadã e organização/seleção das respostas para alimentar o aprendizado de máquina.",
            "The workflow follows three main modules: image preprocessing, citizen science campaign execution, and response organization/selection to feed machine learning.",
          )}
        </p>

        <div className="space-y-8">
          <div className="bg-card border border-border rounded-xl p-4 md:p-5 flex items-start gap-3">
            <div className="bg-primary/10 rounded-full h-10 w-10 flex items-center justify-center mt-0.5">
              <Satellite className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-foreground text-sm md:text-base">
                {t(
                  "Entrada: Imagens de Sensoriamento Remoto",
                  "Input: Remote Sensing Images",
                )}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">
                {t(
                  "Imagens orbitais e de satélite iniciam o processo e alimentam o módulo de pré-processamento.",
                  "Orbital and satellite imagery starts the process and feeds the preprocessing module.",
                )}
              </p>
            </div>
          </div>

          <div className="space-y-3 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
            {modules.map((module, i) => (
              <div key={`module-flow-${i}`}>
                <div className="relative bg-card border border-border rounded-xl p-5 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center">
                      <module.icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-heading font-bold text-foreground text-sm md:text-base leading-tight">
                      {module.title}
                    </h4>
                  </div>

                  <ol className="space-y-2 mb-4">
                    {module.steps.map((step, stepIndex) => (
                      <li
                        key={stepIndex}
                        className="text-xs md:text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <CheckSquare className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>

                  <div className="pt-3 border-t border-border/70 flex items-start gap-2">
                    <Brain className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-xs md:text-sm font-semibold text-foreground">
                      {module.output}
                    </p>
                  </div>

                  {i < modules.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-5 -translate-y-1/2 h-9 w-9 rounded-full bg-primary text-primary-foreground items-center justify-center shadow-md border-2 border-background z-10">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </div>
                {i < modules.length - 1 && (
                  <div className="flex justify-center lg:hidden py-1">
                    <div className="h-9 w-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md border-2 border-background">
                      <ArrowDown className="h-4 w-4" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 md:p-5">
            <div className="flex items-start gap-3">
              <Brain className="h-5 w-5 text-primary mt-0.5" />
              <p className="text-xs md:text-sm text-foreground">
                {t(
                  "As amostras selecionadas no último módulo são usadas para treinar e aprimorar modelos de aprendizado de máquina aplicados ao monitoramento do desmatamento.",
                  "The samples selected in the final module are used to train and improve machine learning models for deforestation monitoring.",
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
