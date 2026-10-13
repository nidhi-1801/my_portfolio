import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Transportation Network Optimization & Freight Cost Analytics",
    position: "Supply Chain Analytics | SQL · Python · Power BI",
    text: "Cleaned and analyzed ~200K shipment records across 20+ carriers and 100+ lanes, finding the top 10 lanes drove ~35% of freight cost. Built a Power BI dashboard with 12+ DAX measures, trained a Gradient Boosting model (~75% accuracy, ~0.78 AUC) to predict late deliveries, and ran what-if scenarios estimating a 3-5% freight cost reduction.",
    avatar: memojiAvatar1,
  },
  {
    name: "Demand Forecasting & Inventory Replenishment Optimization",
    position: "Forecasting | Python · Scikit-learn · Power BI",
    text: "Modeled ~3 years of daily sales across ~3,000 SKU-store series (M5 dataset) with engineered lag, rolling-average, price, and holiday features. Built LightGBM forecasts cutting MAPE by 12-15% vs. baseline, simulated reorder-point policies estimating 10-15% fewer stockouts, and tracked accuracy in a Power BI dashboard.",
    avatar: memojiAvatar2,
  },
];

export const TestimonialsSection = () => {
  return (
    <div id="projects-gallery" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="My Technical Portfolio"
          title="Featured Projects"
          description="A look at my applied analytics work across transportation networks and demand planning."
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
