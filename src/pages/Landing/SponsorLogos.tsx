import React from "react";

import sponsor1 from "@/assets/LandingPage/Logos/lo1.png";
import sponsor2 from "@/assets/LandingPage/Logos/lo2.png";
import sponsor3 from "@/assets/LandingPage/Logos/lo3.png";
import sponsor4 from "@/assets/LandingPage/Logos/lo4.png";
import sponsor5 from "@/assets/LandingPage/Logos/lo5.png";
import sponsor6 from "@/assets/LandingPage/Logos/lo6.png";
import sponsor7 from "@/assets/LandingPage/Logos/lo7.jpg";

type Sponsor = { name: string; logo: string };

const sponsors: Sponsor[] = [
  { name: "Alpheric", logo: sponsor1 },
  { name: "FitVio", logo: sponsor2 },
  { name: "Aimshala", logo: sponsor3 },
  { name: "BigBingo", logo: sponsor4 },
  { name: "EKROCX", logo: sponsor5 },
  { name: "Interior Design", logo: sponsor6 },
  { name: "KHELOGE", logo: sponsor7 },
];

const SponsorLogos: React.FC = () => (
  <section
    className="
      bg-[#fefefe] text-center
      px-4 md:px-[5vw] lg:px-[120px]
      py-[40px] md:py-[64px] lg:py-24"
  >
    <h2
      className="text-[#000000]
   font-normal leading-[1.1]           /* same weight/line-height         */
     mb-0 md:mb-[10px]                  /* 0 px ≤ 764 px, 10 px above       */
     text-[32px]                        /* 32 px  ≤ 764 px ↴                */
    md:text-[clamp(28px,6vw,48px)]     /* 28-48 px 765-1023 px             */
    lg:text-[64px]"
    >
      Driven by Vision
      <br />
      <span className="font-semibold">Backed by Brands</span>
    </h2>

    {/* Sub-headline */}
    <p
      /* 14-20 px clamp up to lg, then fixed 20 px */
      className="
        text-[clamp(14px,2.5vw,20px)] lg:text-[20px]
        text-[#4b5563] leading-[1.6]
        my-6 lg:my-8"
    >
      A shared commitment to&nbsp;preserve culture,&nbsp;promote play and
      inspire change.
    </p>

    {/* ─── infinite marquee ─── */}
    <div className="relative w-[95vw] left-1/2 -translate-x-1/2 overflow-hidden mb-10">
      <div className="flex gap-4 md:gap-6 lg:gap-10 animate-scroll-marquee">
        {[...sponsors, ...sponsors].map(({ name, logo }, i) => (
          <div
            key={i}
            className="
              flex-none bg-gray-50 shadow
              w-[100px]                    /* < 768 px  */
              md:w-[clamp(120px,40vw,180px)]
              lg:w-[182px]
              h-auto md:h-[clamp(60px,10vw,89px)] lg:h-[89px]
              p-4 lg:p-[25px] flex items-center justify-center"
          >
            <img
              src={logo}
              alt={name}
              className="
                max-h-[28px] md:max-h-[30px] lg:max-h-[38px]
                max-w-[132px] object-contain"
            />
            <span className="sr-only">{name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SponsorLogos;
