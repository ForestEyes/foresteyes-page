import { useLanguage } from "@/contexts/LanguageContext";
import { User } from "lucide-react";

const collaborators = [
  {
    name: "Álvaro Luiz Fazenda",
    affiliation: "ICT/UNIFESP",
    role: "coordinator",
  },
  { name: "Fabio Augusto Faria", affiliation: "IST/ULisboa" },
  { name: "Fábio Augusto Menocci Cappabianco", affiliation: "ICT/UNIFESP" },
  { name: "Eduardo Bouhid Neto", affiliation: "IC/UNICAMP" },
  { name: "Juan Carlos Guerra Blas", affiliation: "ICT/UNIFESP" },
  { name: "Hugo Resende", affiliation: "ICT/UNIFESP, IFSulMinas" },
  { name: "Fernanda B.J. Dallaqua", affiliation: "Visiona" },
  { name: "Amanda Sales", affiliation: "USP" },
  { name: "Pedro Luiz da Silva Pereira", affiliation: "ICT/UNIFESP" },
  { name: "Jonathas Ferreira dos Santos", affiliation: "ICT/UNIFESP" },
  { name: "Vinícius D'Lucas B. Queiroz", affiliation: "INPE" },
  { name: "Vanessa Andrade Pereira", affiliation: "ICT/UNIFESP" },
  { name: "Luiz Augusto Martins Pereira", affiliation: "ICT/UNIFESP" },
  { name: "Alfredo Goldman Vel Lejbman", affiliation: "IME/USP" },
  {
    name: "Silvio Jamil Ferzoli Guimarães",
    affiliation: "PUC Minas",
    // lattes: "https://lattes.cnpq.br/8522089151904453",
  },
  {
    name: "Isabela Borlido Barcelos",
    affiliation: "PUC Minas",
    // lattes: "https://lattes.cnpq.br/4938326680404443",
  },
  {
    name: "Victor Gabriel Mendes Sündermann",
    affiliation: "PUC Minas",
    // lattes: "https://lattes.cnpq.br/6083509570153406",
  },
];

export default function TeamSection() {
  const { t } = useLanguage();

  return (
    <section id="team" className="section-padding bg-background">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-4">
          {t("Equipe", "Team")}
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          {t(
            "Pesquisadores e colaboradores que fazem parte do projeto ForestEyes.",
            "Researchers and collaborators who are part of the ForestEyes project.",
          )}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {collaborators.map((c, i) => (
            <div
              key={i}
              className={`bg-card border border-border rounded-xl p-4 text-center hover:shadow-md transition-shadow ${
                c.role === "coordinator" ? "ring-2 ring-primary" : ""
              }`}
            >
              <User className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-heading font-bold text-foreground text-xs leading-tight mb-1">
                {c.name}
              </h4>
              {c.affiliation && (
                <span className="text-[10px] text-muted-foreground">
                  {c.affiliation}
                </span>
              )}
              {/* {c.lattes && (
                <a
                  href={c.lattes}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[10px] font-semibold text-primary hover:text-secondary transition-colors mt-1"
                >
                  Lattes
                </a>
              )} */}
              {c.role === "coordinator" && (
                <span className="block text-[10px] font-semibold text-primary mt-1">
                  {t("Coordenador", "Coordinator")}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
