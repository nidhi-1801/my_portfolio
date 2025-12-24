import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
const testimonials = [
  {
    name: "AR Image Tracking with Dragon Interaction",
    position: "Augmented Reality/ Virtual Reality",
    text: "Developed an AR Image Tracking project in Unity, featuring dynamic spawning of a 3D dragon upon image recognition. Integrated a fixed joystick interface for intuitive dragon control, enhancing user engagement.◦ Leveraged Unity, ARFoundation and C scripting to deliver immersive AR experiences.",
    avatar: memojiAvatar1,
    link: "https://drive.google.com/file/d/1HSw_AZ37Gt88aZcqpenLqPdcuJxx_ULB/view?usp=sharing",
  },
  {
    name: "Personal Diet Recommendation System with Website",
    position: "Machine Learning",
    text: "As part of the final bachelors project, developed a recommendation system that personalizes the food consumption of the individual. Applied Machine Learning algorithms and concepts such as K-means and Random Forest.",
    avatar: memojiAvatar2,
    link: "https://github.com/TaraniKondoori/Personal-Diet-Recommendation-system-with-website",
  },
  {
    name: "AI Chatbot for Chronic Kidney Diseases",
    position: "Machine Learning",
    text: "As part of the bachelors project, developed a chatbot using a health specific knowledge graph which can help with answers related to kidney specific concerns. Built a crawler which could extract rich information from text and build a knowledge graph using information extraction and natural language processing techniques.",
    avatar: memojiAvatar3,
    link: "https://github.com/TaraniKondoori?tab=repositories",
  },
  {
    name: "Smart India Hackathon",
    position: "Image Recognition",
    text: "Major duties include building an AI technology to recognise vehicle registration numbers from a car image. Used image processing and computer vision techniques to build a machine learning model which could segment text from image and identify the letter/digits.",
    avatar: memojiAvatar4,
    link: "#",
  },
  {
    name: "Personal Portfolio Website",
    position: "Web Development",
    text: "Built a portfolio website to showcase my projects and skills using various technologies like React, Next.js, Tailwind CSS, and TypeScript. Included animations and a responsive design to enhance user experience. User can view my projects, skills, and contact me through the website.",
    avatar: memojiAvatar5,
    link: "https://taranikondoori.github.io/Sai-Tarani-Kondoori-Portfolio/",
  },
];

export const TestimonialsSection = () => {
  return <div id="projects" className="py-16 lg:py-24">
    <div className="container">
      <SectionHeader
        eyebrow="My Learnings"
        title="Projects"
        description="From theory to practice—projects that sharpened my skills and sparked innovation!" />

      <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
        <div className="flex flex-none gap-8 animate-move-left [animation-duration:50s] hover:[animation-play-state:paused]">
          {[...new Array(2)].fill(0).map((_, index) => (
            <Fragment key={index}>
              {testimonials.map(testimonial => (
                <Card key={testimonial.name} className="max-w-xs p-6 md:p-8 md:max-w-md hover:-rotate-3 transition duration-300">
                  <div className="flex gap-4 items-center">
                    <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                      <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full" />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-white/40">{testimonial.position}</div>
                    </div>
                  </div>
                  <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                  <a href={testimonial.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>View in Github</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </Card>
              ))}
            </Fragment>
          ))}

        </div>
      </div>
    </div>
  </div>;
};
