import { useLanguage } from "@/contexts/LanguageContext";
import workshopFlyer from "@/assets/workshop-flyer.jpeg";
import { Calendar, MapPin, MessageSquare, Microscope, Users, Video, Phone } from "lucide-react";

export default function WorkshopSection() {
  const { t } = useLanguage();

  const highlights = [
    { icon: Microscope, text: t("Visitas ao INPE", "Visits to INPE") },
    { icon: MessageSquare, text: t("Palestras sobre IA e ciência cidadã", "Talks on AI and citizen science") },
    { icon: Users, text: t("Mesas de discussão sobre o futuro do projeto", "Discussions about the project's future") },
  ];

  return (
    <section id="workshop" className="section-padding bg-muted">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-4">
          Workshop
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          {t(
            '"Cidadãos monitorando desmatamento em florestas"',
            '"Citizens monitoring deforestation in forests"'
          )}
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
              I Workshop – {t("Projeto", "Project")} ForestEyes
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-foreground">
                <Calendar className="h-5 w-5 text-primary" />
                <span>{t("9 a 13 de março de 2026", "March 9–13, 2026")}</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>{t("ICT/UNIFESP – Evento Híbrido", "ICT/UNIFESP – Hybrid Event")}</span>
              </div>
            </div>

            <h4 className="font-heading font-bold text-foreground mb-3">{t("Destaques", "Highlights")}</h4>
            <ul className="space-y-3 mb-8">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                  <h.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  {h.text}
                </li>
              ))}
            </ul>

            <div className="space-y-3">
              <a
                href="https://drive.google.com/file/d/1UolWiaAWFrcAFEzxskczfKBJOtP6no0H/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
              >
                <Video className="h-5 w-5" />
                {t("Assistir sessões gravadas", "Watch recorded sessions")}
              </a>
            </div>
          </div>
          <div>
            <img
              src={workshopFlyer}
              alt={t("Flyer do Workshop ForestEyes", "ForestEyes Workshop Flyer")}
              className="rounded-xl shadow-lg w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
