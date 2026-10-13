import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { TiltCard } from "@/components/TiltCard";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const githubProjects = [
  {
    name: "Chocolate Shipments Dashboard",
    tags: ["Power BI", "Supply Chain", "Logistics"],
    text: "Interactive Power BI dashboard analyzing chocolate product shipments — time-series trends, team distribution, product performance and profit metrics across teams and time periods. Shipments data, but make it insightful. 🍫",
    link: "https://github.com/nidhi-1801/chocolate-shipments-dashboard",
    gradient: "from-amber-200 to-orange-300",
  },
  {
    name: "Employee Analytics Dashboard",
    tags: ["Power BI", "People Analytics", "Chart.js"],
    text: "Workforce analytics dashboard covering headcount, compensation bands, performance ratings and department trends — built in Power BI with an interactive Chart.js web view. Because people data deserves pretty charts too. 📊",
    link: "https://github.com/nidhi-1801/Employee-Analytics-Dashboard",
    gradient: "from-emerald-300 to-sky-400",
  },
];

export const TestimonialsSection = () => {
  return (
    <div id="projects-gallery" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="From my GitHub"
          title="Projects that ship 📦"
          description="Handpicked builds from my GitHub — real dashboards and analytics work that match my supply chain craft."
        />

        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {githubProjects.map((project) => (
            <TiltCard key={project.name} max={8} className="h-full">
              <Card className="p-6 md:p-8 h-full flex flex-col">
                <div className={`h-28 rounded-xl bg-gradient-to-br ${project.gradient} relative overflow-hidden mb-6`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-5xl">📦</span>
                  </div>
                  <div className="absolute top-3 left-3 flex gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-bold uppercase tracking-wider bg-gray-950/80 text-white px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="font-serif text-xl md:text-2xl font-semibold">
                  {project.name}
                </div>
                <p className="mt-3 text-sm md:text-base text-white/60 flex-1">
                  {project.text}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6"
                >
                  <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:scale-[1.03] hover:bg-emerald-200 transition">
                    <span>View on GitHub</span>
                    <ArrowUpRightIcon className="size-4" />
                  </button>
                </a>
              </Card>
            </TiltCard>
          ))}
        </div>

        <p className="text-center text-white/40 text-sm mt-10">
          + more experiments on my{" "}
          <a
            href="https://github.com/nidhi-1801"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-300 font-semibold hover:underline"
          >
            GitHub profile
          </a>{" "}
          ✨
        </p>
      </div>
    </div>
  );
};
