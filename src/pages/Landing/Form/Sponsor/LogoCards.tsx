/* ------------------------------------------------------------------
   LogoCard.tsx  –  one-file Tailwind + TypeScript component
   ------------------------------------------------------------------ */
import React from 'react';

/* ---------- logo assets (adjust paths if necessary) ---------- */
import Alpheric from "@/assets/LandingPage/Logos/LogoCard/Alpheric.png";
import Fitvio   from "@/assets/LandingPage/Logos/LogoCard/Fitvio.png";
import Aimshala from "@/assets/LandingPage/Logos/LogoCard/Aimshala.png";
import HSWF     from"@/assets/LandingPage/Logos/LogoCard/Hswf.png";
import Kheloge  from "@/assets/LandingPage/Logos/LogoCard/Kheloge.jpg";
import Ekrocx   from "@/assets/LandingPage/Logos/LogoCard/Ekrocx.png";

interface Logo {
  id: number;
  src: string;
  alt: string;
}

const logos: Logo[] = [
  { id: 1, src: Alpheric, alt: 'Alpheric' },
  { id: 2, src: Fitvio, alt: 'FitVio Sports' },
  { id: 3, src: Aimshala, alt: 'Aimshala' },
  { id: 4, src: HSWF, alt: 'Hardcore Sports Welfare Foundation' },
  { id: 5, src: Kheloge, alt: 'Kheloge' },
  { id: 6, src: Ekrocx, alt: 'Ekrocx Technologies' },
  { id: 7, src: Alpheric, alt: 'Alpheric' },
  { id: 8, src: Fitvio, alt: 'FitVio Sports' },
  { id: 9, src: Aimshala, alt: 'Aimshala' },
];

const LogoCard: React.FC = () => {
  return (
    <section
      className="
        bg-[#f5f5f5] 
        px-[80px] py-[80px] 
        max-[1024px]:px-[40px] max-[1024px]:py-[60px]
        max-[768px]:px-[24px] max-[768px]:py-[40px]
        max-[500px]:px-[16px] max-[500px]:py-[32px]
      "
    >
      <div
        className="
          max-w-[1920px] mx-auto flex items-center justify-between 
          gap-[80px]
          max-[1520px]:flex-col
        "
      >
        {/* Left: Heading */}
        <div className="flex-1 min-w-[300px]">
          <h2
            className="
              text-[64px] font-semibold text-black leading-[1.2]
              max-[1024px]:text-[48px] max-[1024px]:text-center 
              max-[768px]:text-[36px] 
              max-[500px]:text-[28px]
            "
          >
            Previous Sponsors
            <br />
            & Collaborators
          </h2>
        </div>

        {/* Right: Logo Grid */}
        <div
          className="
            grid grid-cols-3 gap-[24px]
            max-[1024px]:gap-[16px] 
            max-[768px]:gap-[12px] 
            max-[500px]:gap-[8px]
            max-[768px]:grid-cols-3 
            max-[500px]:grid-cols-3
          "
        >
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="
                bg-white rounded-[18px] w-[223.31px] h-[109px] 
                flex items-center justify-center px-[16px]

                max-[1024px]:w-[160px] max-[1024px]:h-[80px] max-[1024px]:rounded-[14px] max-[1024px]:px-[10px]
                max-[768px]:w-full max-[768px]:h-[70px] max-[768px]:rounded-[12px] max-[768px]:px-[8px]
                max-[500px]:w-full max-[500px]:h-[60px] max-[500px]:rounded-[10px] max-[500px]:px-[6px]
              "
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="
                  max-w-[161.71px] max-h-[47.49px]
                  max-[1024px]:max-w-[120px] max-[1024px]:max-h-[36px]
                  max-[768px]:max-w-[100px] max-[768px]:max-h-[32px]
                  max-[500px]:max-w-[80px] max-[500px]:max-h-[28px]
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCard;