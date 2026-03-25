import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Publication {
  authors: string;
  title: string;
  venue: string;
  year: number;
  doi: string;
  linkLabel?: string;
}

const journals: Publication[] = [
  {
    authors:
      "Resende, H.; Neto, E.B.; Cappabianco, F.A.M.; Fazenda, Á.L.; Faria, F.A.",
    title:
      "Crowd-Powered Sampling for Machine Learning: Leveraging Citizen Scientist Response Patterns in AutoML Workflows",
    venue: "Journal of the Brazilian Computer Society, 32(1), 332-342",
    year: 2026,
    doi: "https://doi.org/10.5753/jbcs.2026.5888",
  },
  {
    authors: "Resende, H.; Fazenda, Á.L.; Cappabianco, F.A.M.; Faria, F.A.",
    title:
      "Increasing the reliability of citizen science campaign data for deforestation detection in tropical forests",
    venue: "Future Generation Computer Systems, v. 175, p. 108081",
    year: 2026,
    doi: "https://dx.doi.org/10.1016/j.future.2025.108081",
  },
  {
    authors:
      "Resende, H.; Fazenda, Á.L.; Oliveira, A.A.S.; Cappabianco, F.A.M.; Faria, F.A.",
    title:
      "Citizen Science in Action: Building Trust in Deforestation Data Through Continuous Reliability Enhancements",
    venue:
      "IEEE J. of Selected Topics in Applied Earth Observations and Remote Sensing",
    year: 2026,
    doi: "https://dx.doi.org/10.1109/JSTARS.2026.3655185",
  },
  {
    authors:
      "Borlido, I.; Bouhid, E.; Sundermann, V.; Resende, H.; Fazenda, A.L.; Faria, F.; Guimarães, S.J.F.",
    title:
      "How to Identify Good Superpixels for Deforestation Detection on Tropical Rainforests",
    venue: "IEEE Geoscience and Remote Sensing Letters",
    year: 2024,
    doi: "https://dx.doi.org/10.1109/LGRS.2024.3454973",
  },
  {
    authors: "Fazenda, Á.L.; Faria, F.A.",
    title:
      "ForestEyes: Citizen Scientists and Machine Learning-Assisting Rainforest Conservation",
    venue: "Communications of the ACM, v. 67, p. 95-96",
    year: 2024,
    doi: "https://dx.doi.org/10.1145/3653319",
  },
  {
    authors: "Dallaqua, F.B.J.R.; Fazenda, Á.L.; Faria, F.A.",
    title: "ForestEyes Project: Conception, enhancements, and challenges",
    venue: "Future Generation Computer Systems, v. 124, p. 422-435",
    year: 2021,
    doi: "https://dx.doi.org/10.1016/j.future.2021.06.002",
  },
  {
    authors: "Dallaqua, F.B.J.R.; Faria, F.A.; Fazenda, A.L.",
    title:
      "Building Data Sets for Rainforest Deforestation Detection Through a Citizen Science Project",
    venue: "IEEE Geoscience and Remote Sensing Letters",
    year: 2020,
    doi: "https://dx.doi.org/10.1109/lgrs.2020.3032098",
  },
  {
    authors: "Arcanjo, J.S.; Luz, E.F.P.; Fazenda, A.L.; Ramos, F.M.",
    title:
      "Methods for evaluating volunteers' contributions in a deforestation detection citizen science project",
    venue: "Future Generation Computer Systems, v. 56, p. 550-557",
    year: 2015,
    doi: "https://dx.doi.org/10.1016/j.future.2015.07.005",
  },
];

const conferences: Publication[] = [
  {
    authors:
      "Resende, H.; Faria, F.A.; Neto, E.B.; Borlido, I.; Sundermann, V.; Guimarães, S.J.F.; Fazenda, Á.L.",
    title:
      "Do Superpixel Segmentation Methods Influence Deforestation Image Classification?",
    venue:
      "2025 28th Iberoamerican Congress on Pattern Recognition (CIARP), Bogota, p. 1",
    year: 2025,
    doi: "",
  },
  {
    authors:
      "Resende, H.; Borlido, I.; Sundermann, V.; Neto, E.B.; Guimarães, S.J.F.; Faria, F.A.; Fazenda, Á.L.",
    title:
      "Exploring Superpixel Segmentation Methods in the Context of Citizen Science and Deforestation Detection",
    venue: "IGARSS 2025, Brisbane",
    year: 2025,
    doi: "https://dx.doi.org/10.1109/igarss55030.2025.11243539",
  },
  {
    authors: "Queiroz, V.D.B.E.; Resende, H.; Faria, F.A.; Fazenda, Á.L.",
    title:
      "Performance Assessment of Optical and SAR Imagery for Superpixel-Based Deforestation Mapping in the ForestEyes Project",
    venue: "SIBGRAPI 2025, Salvador",
    year: 2025,
    doi: "https://dx.doi.org/10.1109/sibgrapi67909.2025.11223381",
  },
  {
    authors: "Resende, H.; Fazenda, Á.L.; Faria, F.A.",
    title:
      "Rotulagem Massiva de Imagens por Ciência Cidadã para Detecção de Desmatamento",
    venue: "WCAMA 2025",
    year: 2025,
    doi: "https://dx.doi.org/10.5753/wcama.2025.7514",
  },
  {
    authors: "Neto, E.B.; Faria, F.A.; de Oliveira, A.A.S.; Fazenda, A.L.",
    title:
      "A Satellite Band Selection Framework for Amazon Forest Deforestation Detection Task",
    venue: "GECCO '24, Melbourne",
    year: 2024,
    doi: "https://dx.doi.org/10.1145/3638529.3654000",
  },
  {
    authors:
      "Resende, H.; Neto, E.B.; Cappabianco, F.A.M.; Fazenda, Á.L.; Faria, F.A.",
    title:
      "Sampling Strategies Based on Wisdom of Crowds for Amazon Deforestation Detection",
    venue: "SIBGRAPI 2024, Manaus",
    year: 2024,
    doi: "https://dx.doi.org/10.1109/sibgrapi62404.2024.10716332",
  },
  {
    authors: "Pimenta, G.B.A.; Dallaqua, F.B.J.R.; Fazenda, A.; Faria, F.A.",
    title:
      "Neuroevolution-based Classifiers for Deforestation Detection in Tropical Forests",
    venue: "SIBGRAPI 2022, Natal",
    year: 2022,
    doi: "https://dx.doi.org/10.1109/SIBGRAPI55357.2022.9991798",
  },
  {
    authors: "Dallaqua, F.B.J.R.; Fazenda, A.L.; Faria, F.A.",
    title: "ForestEyes Project: Can Citizen Scientists Help Rainforests?",
    venue: "eScience 2019, San Diego",
    year: 2019,
    doi: "https://dx.doi.org/10.1109/eScience.2019.00010",
  },
  {
    authors: "Dallaqua, F.B.J.R.; Faria, F.A.; Fazenda, A.L.",
    title: "Active Learning Approaches for Deforested Area Classification",
    venue: "SIBGRAPI 2018, Paraná",
    year: 2018,
    doi: "https://dx.doi.org/10.1109/SIBGRAPI.2018.00013",
  },
  {
    authors: "Arcanjo, J.S.; Luz, E.F.P.; Fazenda, A.L.; Ramos, F.M.",
    title: "Evaluating Volunteers' Contributions in a Citizen Science Project",
    venue: "eScience 2014, São Paulo",
    year: 2014,
    doi: "https://dx.doi.org/10.1109/escience.2014.18",
  },
];

const extendedAbstracts: Publication[] = [
  {
    authors: "Bouhid Neto, E.; Pedro, P.R.C.; Fazenda, Á.L.; Faria, F.A.",
    title:
      "Um arcabouço de Seleção de Bandas Landsat-8 baseado em UMDA para Detecção de Desmatamento",
    venue: "SIBGRAPI WUW 2023, Rio Grande",
    year: 2023,
    doi: "",
  },
  {
    authors: "Dallaqua, F.B.J.R.; Fazenda, Á.L.; Faria, F.A.",
    title:
      "Aprendizado Ativo com dados de Ciência Cidadã para o monitoramento de florestas tropicais",
    venue: "ERAMIA-SP 2020, São Paulo",
    year: 2020,
    doi: "",
  },
  {
    authors: "Dallaqua, F.B.J.R.; Fazenda, Á.L.; Faria, F.A.",
    title:
      "Projeto ForestEyes: Uma proposta para aliar Ciência Cidadã e Aprendizado de Máquina para monitoramento de desmatamento",
    venue: "GEOINFO 2020, São José dos Campos",
    year: 2020,
    doi: "",
  },
  {
    authors: "Dallaqua, F.B.J.R.; Fazenda, A.L.",
    title:
      "Sistema Distribuído de Classificação de Imagens aplicado a um Projeto de Ciência Cidadã",
    venue: "ERAD-SP 2016, São Paulo",
    year: 2016,
    doi: "",
  },
];

const abstracts: Publication[] = [
  {
    authors: "Bouhid Neto, E.; Fazenda, Á.L.; Faria, F.A.",
    title:
      "Um Sistema de Detecção de Desmatamento em Florestas Tropicais Baseado em Segmentação Semântica Profunda",
    venue: "XI Congresso Acadêmico UNIFESP, 2023",
    year: 2023,
    doi: "",
  },
  {
    authors: "Dallaqua, F.B.J.R.; Fazenda, A.L.",
    title:
      "Aprendizado de Máquina com Dados de Ciência Cidadã na Detecção de Desmatamento em Florestas Tropicais",
    venue: "VI Congresso Acadêmico UNIFESP, 2020",
    year: 2020,
    doi: "",
  },
];

const theses: Publication[] = [
  {
    authors: "Jordan Rojas Dallaqua, Fernanda Beatriz",
    title:
      "Projeto ForestEyes - Ciência Cidadã e Aprendizado de Máquina na Detecção de Áreas Desmatadas em Florestas Tropicais",
    venue: "Tese de Doutorado, Universidade Federal de São Paulo (UNIFESP)",
    year: 2020,
    doi: "https://repositorio.unifesp.br/items/c22df106-194f-43ee-ac15-392c601c89d6",
    linkLabel: "Link",
  },
  {
    authors: "Turri, João Pedro",
    title:
      "Processamento e segmentação de imagens de Synthetic Aperture Radar utilizando python",
    venue:
      "Monografia Final (TCC), MAC 499 - Trabalho de Formatura Supervisionado, IME-USP",
    year: 2023,
    doi: "https://linux.ime.usp.br/~yanomami/mac0499/files/monografia_joao_pedro_turri.pdf",
    linkLabel: "Link",
  },
];

function sortPublicationsByYear(items: Publication[]) {
  return [...items].sort((a, b) => b.year - a.year);
}

function PubList({ items }: { items: Publication[] }) {
  return (
    <ul className="space-y-4">
      {items.map((pub, i) => (
        <li key={i} className="border-l-2 border-primary/30 pl-4">
          <p className="text-xs text-muted-foreground mb-0.5">
            {pub.authors} ({pub.year})
          </p>
          <p className="text-sm font-semibold text-foreground leading-snug">
            {pub.title}
          </p>
          <p className="text-xs text-muted-foreground italic">{pub.venue}</p>
          {pub.doi && (
            <a
              href={pub.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-secondary transition-colors mt-1"
            >
              <ExternalLink className="h-3 w-3" /> {pub.linkLabel ?? "DOI"}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function PublicationsSection() {
  const { t } = useLanguage();

  const tabs = [
    {
      value: "journals",
      label: t("Periódicos", "Journals"),
      count: journals.length,
      data: sortPublicationsByYear(journals),
    },
    {
      value: "conferences",
      label: t("Simpósios", "Symposia"),
      count: conferences.length,
      data: sortPublicationsByYear(conferences),
    },
    {
      value: "extended",
      label: t("Resumos Expandidos", "Extended Abstracts"),
      count: extendedAbstracts.length,
      data: sortPublicationsByYear(extendedAbstracts),
    },
    {
      value: "abstracts",
      label: t("Resumos", "Abstracts"),
      count: abstracts.length,
      data: sortPublicationsByYear(abstracts),
    },
    {
      value: "theses",
      label: t("Teses", "Theses"),
      count: theses.length,
      data: sortPublicationsByYear(theses),
    },
  ];

  return (
    <section id="publications" className="section-padding bg-background">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-4">
          {t("Publicações", "Publications")}
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          {t(
            "Trabalhos acadêmicos publicados pelo projeto ForestEyes ao longo dos anos.",
            "Academic papers published by the ForestEyes project over the years.",
          )}
        </p>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="journals">
            <TabsList className="w-full flex flex-wrap h-auto gap-1 mb-6">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="text-xs sm:text-sm"
                >
                  {tab.label} ({tab.count})
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <PubList items={tab.data} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
