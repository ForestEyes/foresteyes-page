import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap } from "lucide-react";

export default function PartnersSection() {
  const { t } = useLanguage();

  const partners = [
    {
      name: "ICT – Universidade Federal de São Paulo (UNIFESP)",
      desc: t(
        "Instituto de Ciência e Tecnologia da UNIFESP, localizado em São José dos Campos, Brasil. Coordenador do projeto ForestEyes.",
        "Institute of Science and Technology at UNIFESP, located in São José dos Campos, Brazil. Coordinator of the ForestEyes project."
      ),
      country: t("Brasil", "Brazil"),
    },
    {
      name: "Instituto Superior Técnico – Universidade de Lisboa",
      desc: t(
        "Instituição de ensino e pesquisa de referência em Portugal, colaboradora internacional do projeto.",
        "Leading teaching and research institution in Portugal, international collaborator of the project."
      ),
      country: "Portugal",
    },
  ];

  return (
    <section id="partners" className="section-padding bg-muted">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-4">
          {t("Parceiros", "Partners")}
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          {t(
            "O ForestEyes é uma colaboração entre instituições de pesquisa do Brasil e Portugal.",
            "ForestEyes is a collaboration between research institutions from Brazil and Portugal."
          )}
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {partners.map((p, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-heading font-bold text-foreground mb-1">{p.name}</h4>
              <span className="text-xs font-semibold text-secondary mb-3 block">{p.country}</span>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-muted rounded-xl p-6 text-center max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground">
            {t("Financiado pela", "Funded by")}{" "}
            <strong className="text-foreground">FAPESP</strong>{" "}
            – {t("Fundação de Amparo à Pesquisa do Estado de São Paulo", "São Paulo Research Foundation")}{" "}
            <br />
            <span className="text-xs">{t("Processo", "Grant")} 2023/00782-0</span>
          </p>
        </div>
      </div>
    </section>
  );
}
