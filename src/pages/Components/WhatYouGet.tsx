import Icon1 from "@/assets/Components/WhatYouGet/mo1.png";
import Icon2 from "@/assets/Components/WhatYouGet/mo2.png";
import Icon3 from "@/assets/Components/WhatYouGet/mo3.png";
import Icon4 from "@/assets/Components/WhatYouGet/mo4.png";

interface CardData {
  icon: string;
  alt: string;
  lines: string[];
}

const cards: CardData[] = [
  { icon: Icon1, alt: "Certificate Icon", lines: ["Participation Certificate"] },
  { icon: Icon2, alt: "Community Icon", lines: ["Active Community"] },
  { icon: Icon3, alt: "Cultural Pride Icon", lines: ["Cultural Pride"] },
  { icon: Icon4, alt: "Network Icon", lines: ["Access to the", "HSWF.Network"] },
];

const WhatYouGet: React.FC = () => (
    <section
    className="bg-gray-100
               px-4 py-8
               md:px-[80px] md:py-10
               lg:px-[120px] lg:py-12
               xl:px-[193px] xl:py-16
               text-left md:text-center"
  >
  <div className="mt-[40px] mx-auto px-4 max-w-7xl">
    <h2 className="text-center mb-[30px] font-semibold text-[clamp(24px,4vw,64px)]">
      What You Get
    </h2>

    <div className="flex flex-wrap gap-[24px]">
      {cards.map(({ icon, lines, alt }) => {
        const isMultiLine = lines.length > 1;

        return (
          <div
            key={lines.join("-")}
            className={`
  relative flex flex-col box-border bg-white rounded-[8px]
  shadow-[0_0_10px_rgba(0,0,0,0.1)]

  flex-grow basis-full
  min-[769px]:basis-[calc(50%_-_12px)]
  min-[1441px]:basis-[calc(25%_-_18px)]

  pt-[48px] pb-[24px] px-[32px]                /* Reduced padding */
  max-[768px]:pt-[28px] max-[768px]:pb-[16px] max-[768px]:px-[11px]

  text-left items-start
  max-[768px]:text-center max-[768px]:items-center
`}
          >
            {/* Icon */}
            <img
              src={icon}
              alt={alt}
              className={`
                absolute top-[-30px] left-0
                w-[clamp(64px,20vw,128px)]
                max-[768px]:left-1/2 max-[768px]:-translate-x-1/2
                max-[768px]:w-[clamp(64px,30vw,96px)]
              `}
            />

            {/* Text */}
            <div className="mt-[33px]">
              {isMultiLine ? (
                <>
                  {/* Mobile: show as one line */}
                  <p className="font-semibold block max-[768px]:inline text-[clamp(16px,4vw,20px)] sm:hidden">
                    {lines.join(" ")}
                  </p>

                  {/* Tablet/Desktop: stacked lines */}
                  <div className="hidden sm:flex sm:flex-col">
                    {lines.map((line, i) => (
                      <p
                        key={i}
                        className="font-semibold text-[clamp(16px,3vw,24px)]"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </>
              ) : (
                <p className="font-semibold text-[clamp(16px,3vw,24px)]">
                  {lines[0]}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  </div>
  </section>
);

export default WhatYouGet;
