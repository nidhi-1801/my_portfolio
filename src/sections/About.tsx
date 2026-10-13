'use client';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  { title: "Python", iconType: JavaScriptIcon },
  { title: "SQL", iconType: HTMLIcon },
  { title: "Power BI", iconType: CssIcon },
  { title: "Tableau", iconType: ReactIcon },
  { title: "Excel", iconType: GithubIcon },
  { title: "SAP", iconType: ChromeIcon },
]

const hobbies = [
  { title: "Supply Chain Analytics", emoji: '📦', left: '5%', top: '5%' },
  { title: "Demand Forecasting", emoji: '📈', left: '50%', top: '5%' },
  { title: "Inventory Planning", emoji: '📊', left: '10%', top: '35%' },
  { title: "Transportation Analytics", emoji: '🚚', left: '35%', top: '40%' },
  { title: "KPI Development", emoji: '🎯', left: '70%', top: '45%' },
  { title: "Process Improvement", emoji: '⚙️', left: '5%', top: '65%' },
  { title: "Data Storytelling", emoji: '💡', left: '45%', top: '70%' },
]

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse into my World"
          description="I'm a supply chain data analyst with 4 years of experience turning operational data into practical decisions — from demand forecasting and inventory planning to transportation analytics and KPI-driven performance improvement across FedEx, PWC, and Accenture." />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My Reads" description="Exploring the books and papers shaping my analytics journey." />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book" />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="The technologies and tools I use to turn data into decisions."
              />
              <ToolboxItems items={toolboxItems} itemsWrapperClassName="animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]" />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s] hover:[animation-play-state:paused]" />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-3">
              <CardHeader title="Beyond the Code" description="The areas of supply chain and analytics that fuel my passion." className="px-6 py-6" />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div key={hobby.title} 
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" 
                  style={{ 
                    left: hobby.left, 
                    top: hobby.top 
                    }}
                    drag
                    dragConstraints={constraintRef}
                    >
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
