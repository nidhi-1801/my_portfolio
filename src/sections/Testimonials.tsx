import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const testimonials = [
  {
    name: "Q&A RAG with LangChain & Bedrock",
    position: "Generative AI | AWS Bedrock",
    text: "Developed a Retrieval-Augmented Generation (RAG) system using Amazon Bedrock and LangChain. Implemented efficient document chunking and vector embeddings to enable context-aware querying of private datasets.",
    avatar: memojiAvatar1,
    link: "https://github.com/nidhi-1801/Q-A-RAG-with-Langchain-and-Bedrock",
  },
  {
    name: "ANN Churn Prediction",
    position: "Deep Learning | Artificial Neural Networks",
    text: "Engineered a Deep Learning model using Artificial Neural Networks (ANN) to predict customer churn. Focused on feature engineering, data scaling, and dropout regularization to optimize model performance and accuracy.",
    avatar: memojiAvatar2,
    link: "https://github.com/nidhi-1801/ANN_Classification_Churn_Prediction",
  },
  {
    name: "Q&A Chatbot with History",
    position: "NLP | LangChain Memory",
    text: "Built a conversational AI agent capable of maintaining message history for multi-turn dialogues. Utilized LangChain's memory management to ensure the model retains context across extended user interactions.",
    avatar: memojiAvatar3,
    link: "https://github.com/nidhi-1801/Q-A-Chatbot-with-message-history",
  },
];

export const TestimonialsSection = () => {
  return (
    <div id="projects-gallery" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="My Technical Portfolio"
          title="Featured Projects"
          description="A look at my specialized work in Generative AI, Neural Networks, and Natural Language Processing."
        />

        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex flex-none gap-8 animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs p-6 md:p-8 md:max-w-md hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base text-white/70">
                      {testimonial.text}
                    </p>
                    <a
                      href={testimonial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 hover:bg-gray-200 transition">
                        <span>View on GitHub</span>
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
    </div>
  );
};