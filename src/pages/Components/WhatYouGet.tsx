import Icon1 from "@/assets/Components/WhatYouGet/mo1.png";
import Icon2 from "@/assets/Components/WhatYouGet/mo2.png";
import Icon3 from "@/assets/Components/WhatYouGet/mo3.png";
import Icon4 from "@/assets/Components/WhatYouGet/mo4.png";

interface CardData {
  icon: string;
  lines: string[];
}

const cards: CardData[] = [
  { icon: Icon1, lines: ["Participation Certificate"] },
  { icon: Icon2, lines: ["Active Community"] },
  { icon: Icon3, lines: ["Cultural Pride"] },
  { icon: Icon4, lines: ["Access to the", "HSWF.Network"] },
];

const WhatYouGet: React.FC = () => (
  <div className="mx-auto mt-[40px]">
    {/* Heading */}
    <h2 className="mb-[30px] text-center font-bold text-[clamp(24px,4vw,40px)]">
      What You Get
    </h2>

    {/* Card grid */}
    <div className="flex flex-wrap gap-[24px]">
      {cards.map(({ icon, lines }) => {
        const isMultiLine = lines.length > 1;

        return (
          <div
            key={lines.join("-")}
            className="
              relative box-border flex flex-col rounded-lg
              bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]

              /* === width rules === */
              flex-grow basis-full                                /* < 768 px  */
              min-[769px]:basis-[calc(50%_-_20px)]                /* 769 – 1440 */
              min-[1441px]:basis-[calc(25%_-_20px)]               /* > 1440    */

              /* === padding & alignment === */
              pt-[28px] pb-[16px] px-[11px] text-center           /* phones */
              min-[769px]:pt-[64px] min-[769px]:pb-[32px]
              min-[769px]:px-[32px] min-[769px]:text-left         /* tablet+ */
              mb-[16px] min-[769px]:mb-0
              items-center min-[769px]:items-start
            "
          >
            {/* Icon */}
            <img
              src={icon}
              alt=""
              className="
                absolute -top-[30px]
                left-1/2 -translate-x-1/2                      /* phones */
                min-[769px]:left-0 min-[769px]:translate-x-0   /* tablet+ */
                w-[clamp(64px,30vw,96px)]                      /* phones+tablets */
                min-[769px]:w-[clamp(64px,20vw,128px)]         /* tablet+ */
              "
            />

            {/* Text lines */}
            {isMultiLine ? (
              <>
                {/* Single-line version — phones & tablets */}
                <p
                  className="
                    font-semibold
                    text-[clamp(16px,4vw,20px)] min-[769px]:text-[clamp(16px,3vw,24px)]
                    whitespace-nowrap block
                    min-[1441px]:hidden
                  "
                >
                  {lines.join(" ")} {/* “Access to the HSWF.Network” */}
                </p>

                {/* Two-line version — desktops (≥ 1441 px) */}
                <div className="hidden min-[1441px]:flex min-[1441px]:flex-col">
                  {lines.map((txt, i) => (
                    <p
                      key={i}
                      className="
                        font-semibold
                        text-[clamp(16px,4vw,20px)] min-[769px]:text-[clamp(16px,3vw,24px)]
                        inline-block
                      "
                    >
                      {txt}
                    </p>
                  ))}
                </div>
              </>
            ) : (
              lines.map((txt, i) => (
                <p
                  key={i}
                  className="
                    font-semibold
                    text-[clamp(16px,4vw,20px)] min-[769px]:text-[clamp(16px,3vw,24px)]
                    inline-block
                  "
                >
                  {txt}
                </p>
              ))
            )}
          </div>
        );
      })}
    </div>
  </div>
);

export default WhatYouGet;
