import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import amazon from "@/assets/images/amazon-laptop.png";
import stumagz from "@/assets/images/stumagz-laptop.png";

const portfolioProjects = [
  {
    company: "T-Mobile",
    year: "May 2024 - August 2024",
    title: "Data Scientist",
    results: [
      { title: "Designed and Built end-to-end monitoring system that captured ML features of product's video at at various stages in its lifecycle." },
      { title: "integrated across SageMaker pipelines owned by more than 10 teams, which significantly enhanced the system's debuggability." },
      { title: "Used various AWS services like SageMaker, Dynamo DB, Amazon S3, Amazon SQS, CDK etc to build and deploy the pipelines on CloudFormation." },
    ],
    image: amazon,
  },
  {
    company: "StumagZ",
    year: "May 2021 - August 2023",
    title: "Software Development Engineer",
    results: [
      { title: "I helpeded in building an end-to-end pipeline that analyzes and flags for violative content before publishing." },
      { title: "Automated article approval written by students across various Tier 2 3 colleges in Hyderabad." },
      { title: "Also included building API's to retrieve personalized part time gigs based on user preferences" },
    ],
    image: stumagz,
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
