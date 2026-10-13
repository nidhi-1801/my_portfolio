import Image, { type StaticImageData } from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import pwc from "@/assets/images/pwc.png";

type ExperienceItem = {
  company: string;
  year: string;
  title: string;
  location: string;
  results: { title: string }[];
  image?: StaticImageData;
};

const portfolioProjects: ExperienceItem[] = [
  {
    company: "FedEx",
    year: "June 2025 - Present",
    title: "Supply Chain Analyst II",
    location: "Texas, United States",
    results: [
      { title: "Created a labor-capacity planning model using SQL, Python, and historical shipment-volume data to align staffing with hourly workload patterns, improving labor utilization by 19% and reducing unplanned overtime by ~$780K annually." },
      { title: "Established a network performance scorecard in Power BI and Tableau by consolidating WMS, transportation, and inventory data, cutting weekly business-review preparation by 52% and giving operations managers earlier visibility into service exceptions." },
      { title: "Designed SKU-level inventory planning models with Python, Scikit-learn, and statistical forecasting to anticipate demand variability, improving replenishment accuracy by 17% and reducing excess inventory exposure by 13%." },
      { title: "Reconfigured fast-moving SKU placement using SAP transaction data, order-frequency analysis, and ABC inventory segmentation, decreasing average pick-path length by 15% and increasing orders processed per labor hour by 18%." },
      { title: "Investigated carrier misses and fulfillment exceptions through Snowflake, Excel Power Query, and regression analysis, uncovering recurring scheduling and handoff issues that reduced late-order volume by 28%." },
    ],
  },
  {
    company: "PWC",
    year: "Jan 2023 – Dec 2023",
    title: "Supply Chain Analyst I",
    location: "Hyderabad, India",
    results: [
      { title: "Designed a distribution-center capacity scorecard using SQL, Power BI, and warehouse-management data to compare receiving volumes, backlog levels, and labor productivity across 5 facilities, increasing same-day order completion by 16%." },
      { title: "Built inventory-control metrics using SAP ERP and WMS records to identify cycle-count discrepancies, aging stock, and location errors, improving inventory accuracy from 93% to 97.2% across key customer accounts." },
      { title: "Developed a carrier-performance analysis in Snowflake and Python to evaluate transit variance, missed pickups, and recurring lane-level exceptions, reducing premium-freight usage by 24% and increasing transportation reliability by 12%." },
      { title: "Automated customer operations reporting with SQL-driven datasets and Power BI scorecards covering cost, productivity, fulfillment, and service metrics, eliminating more than 40 hours of manual reporting effort each quarter." },
    ],
    image: pwc,
  },
  {
    company: "Accenture",
    year: "May 2021 – Dec 2022",
    title: "Supply Chain Engineer",
    location: "Hyderabad, India",
    results: [
      { title: "Developed peak-season resource plans using SQL, Python, order-history trends, and workforce-capacity data to estimate warehouse staffing and throughput requirements, reducing capacity-related fulfillment delays by 17% during high-volume periods." },
      { title: "Built a supply-chain control dashboard in Tableau and Power BI by integrating inventory, order, supplier, and transportation datasets, improving exception identification by 35% and reducing recurring manual analysis by 41%." },
      { title: "Reworked order-processing workflows between picking, packing, and dispatch activities, shortening end-to-end processing time by 20%." },
      { title: "Established supplier and carrier performance scorecards using SQL-based metrics for lead-time adherence, fill rate, quality, and delivery reliability, helping sourcing and logistics teams improve underperforming vendor service levels by 13%." },
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="experience" className="pb-16 lg:py-24">
      <div className="container">
          <SectionHeader eyebrow="Real World Results" title="Experience" description="See how I've turned supply chain data into measurable business impact" />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className={project.image ? "lg:grid lg:grid-cols-2 lg:gap-16" : ""}>
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-tr from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">{project.title}</h3>
                  <p className="text-sm text-white/40 mt-1">{project.location}</p>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-xs md:text-sm text-white/50 " key={result.title}>
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {project.image && (
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-md-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
