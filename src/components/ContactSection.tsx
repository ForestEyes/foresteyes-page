import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Building } from "lucide-react";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-narrow max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
          {t("Contato", "Contact")}
        </h2>
        <p className="text-muted-foreground mb-8">
          {t(
            "Para mais informações sobre o projeto ForestEyes, entre em contato com a coordenação.",
            "For more information about the ForestEyes project, contact the coordination team.",
          )}
        </p>

        <div className="bg-card border border-border rounded-xl p-8 inline-block text-left">
          <h3 className="font-heading font-bold text-foreground text-lg mb-4">
            Prof. Álvaro Luiz Fazenda
          </h3>
          <div className="space-y-3 text-muted-foreground">
            <div className="flex items-center gap-3">
              <Building className="h-5 w-5 text-primary flex-shrink-0" />
              <span>ICT/UNIFESP – Instituto de Ciência e Tecnologia/Universidade Federal de São Paulo</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary flex-shrink-0" />
              <span>alvaro.fazenda@unifesp.br</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
