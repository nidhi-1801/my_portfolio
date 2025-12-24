import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import tmobile from "@/assets/images/tmobile.png";
import pwc from "@/assets/images/pwc.png";
import tcs from "@/assets/images/tcs.png";


const portfolioProjects = [
  {
    company: "T-Mobile",
    year: "May 2024 - Nov 2025",
    title: "Data Scientist",
    results: [
      { title: "Led end-to-end deployment of time series models (ARIMAX, Gradient Boosting) to predict customer support volumes." },
      { title: "Designed and analyzed A/B experiments using causal impact analysis to drive key product decisions." },
      { title: "Built scalable feature engineering pipelines with Python and Airflow, improving model accuracy by 22%." },
      { title: "Established automated production monitoring for model drift and forecast error (WAPE) using retraining workflows." },
    ],
    image: tmobile,
  },
  {
    company: "PWC",
    year: "Jan 2023 – Dec 2023",
    title: "Junior Data Scientist",
    results: [
      { title: "Deployed predictive classification models for 100+ entities, reducing manual compliance workflows by 40%." },
      { title: "Built production-ready Python pipelines on Azure ML for automated model training and inference." },
      { title: "Achieved a 30% reduction in False Positives by designing optimal evaluation metrics like Precision-Recall curves." },
      { title: "Developed high-efficiency SQL & Python ETL pipelines integrating 50+ disparate data sources into a feature store." },
    ],
    image: pwc
  },
  {
    company: "Tata Consultancy Services (TCS)",
    year: "May 2021 – Dec 2022",
    title: "Data Analyst",
    results: [
      { title: "Built and deployed machine learning models for customer behavior prediction across the full data science lifecycle." },
      { title: "Applied supervised learning techniques to solve complex classification and regression problems." },
      { title: "Owned data quality for workforce management models by querying large datasets using SQL and NumPy." },
      { title: "Partnered with cross-functional teams to troubleshoot data issues and improve analytical workflows." },
    ],
    image: tcs, // You can swap this with a different image asset if available
  },
];

export const ProjectsSection = () => {
  return (
    <section id="experience" className="pb-16 lg:py-24">
      <div className="container">
          <SectionHeader eyebrow="Real World Results" title="Experience" description="See how I transformed the concepts I learned into real time experiences" />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-tr from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-xs md:text-sm text-white/50 " key={result.title}>
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  {/*<a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>View in Github</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>*/}
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-md-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
