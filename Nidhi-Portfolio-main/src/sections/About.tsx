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
  {
    title: "Python",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "AWS",
    iconType: ReactIcon,
  },
  {
    title: "Java",
    iconType: ChromeIcon,
  },
  {
    title: "Next.js",
    iconType: GithubIcon,
  },
]

const hobbies = [
  {
    title: "Machine Learning",
    emoji: '🤖',
    left: '30%',
    top: '5%',
  },
  {
    title: "Data-Pipelines",
    emoji: '🔄',
    left: '2%',
    top: '5%',
  },
  {
    title: "Web Development",
    emoji: '🌐',
    left: '60%',
    top: '0%',
  },
  {
    title: "Leadership",
    emoji: '👥',
    left: '75%',
    top: '28%',
  },
  {
    title: "Team-Management",
    emoji: '🧑‍🤝‍🧑',
    left: '4%',
    top: '30%',
  },
  {
    title: "Operating Systems",
    emoji: '💻',
    left: '2%',
    top: '55%',
  },
  {
    title: "System Design",
    emoji: '👨‍💻',
    left: '65%',
    top: '55%',
  },
  {
    title: "Database Management",
    emoji: '🍳',
    left: '35%',
    top: '73%',
  },
  {
    title: "Product Management",
    emoji: '👔',
    left: '34%',
    top: '30%',
  },

]
export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A little Glimpse into my world"
          description="I'm a software engineer with a passion for building scalable and efficient systems." />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My Reads" description="Explore the books shaping my perspectives" />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book" />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the Technologies and Tools that I am proficient in"
                className=""
              />
              <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:20s] hover:[animation-play-state:paused]" />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:20s] hover:[animation-play-state:paused]" />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-3">
              <CardHeader title="Beyond the Code" description="Explore my interests and discover the technologies that fuel my passion." className="px-6 py-6" />
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
            {/* <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={mapImage} alt="Map" className="w-full h-full object-cover object-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={smileMemoji} alt="Smiling memoji" className="size-20" />
              </div>
            </Card> */}
          </div>
        </div>
      </div>
    </div>
  );
};
