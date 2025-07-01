import React from "react";

import Sponsorship1 from "@/assets/Form/Sponsor/SponsorShips/Sponsorship1.png";
import Sponsorship2 from "@/assets/Form/Sponsor/SponsorShips/Sponsorship2.png";
import Sponsorship3 from "@/assets/Form/Sponsor/SponsorShips/Sponsorship3.png";
import Sponsorship4 from "@/assets/Form/Sponsor/SponsorShips/Sponsorship4.png";
import Sponsorship5 from "@/assets/Form/Sponsor/SponsorShips/Sponsorship5.png";

import StarHands from "@/assets/Icons/Sponsorship/StarHands.png";
import Target from "@/assets/Icons/Sponsorship/Target.png";
import Digital from "@/assets/Icons/Sponsorship/Digital.png";
import Eye from "@/assets/Icons/Sponsorship/Eye.png";
import Shirt from "@/assets/Icons/Sponsorship/Shirt.png";

interface CardProps {
  title: string;
  description: string;
  image: string;
  icon: string;
  layout: "top" | "bottom";
}

const Card: React.FC<CardProps> = ({ title, description, image, icon, layout }) => {
  const isTop = layout === "top";

  const contentClasses = isTop
    ? "flex flex-col md:flex-row items-start w-full h-full bg-white rounded-[22px] pl-[32px] pr-[40px] pt-[36px]"
    : "flex flex-col h-full bg-white rounded-[22px] pl-[32px] pr-[40px] pt-[32px]";

  return (
    <div
      className="relative w-full max-w-full border-2 border-transparent rounded-[24px] p-[1px]"
      style={{
        background:
          "linear-gradient(#fff, #fff) padding-box, linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet) border-box",
      }}
    >
      <div className={contentClasses}>
        {/* Text Section */}
        <div
          className={`text-left ${isTop ? "max-w-full md:max-w-[50%]" : "w-full"} ${
            !isTop ? "mb-auto" : ""
          }`}
        >
          <h3 className="text-[32px] font-semibold text-black m-0">{title}</h3>
          <p className="mt-2 text-[24px] font-normal leading-[1.2] text-[#787878]">{description}</p>
        </div>

        {/* Spacer (for bottom layout only) */}
        {!isTop && <div className="flex-grow" />}

        {/* Image Section */}
        <div
          className={`relative mt-4 ${
            isTop
              ? "md:mt-[16px] md:flex-[0_0_50%]"
              : "w-full mt-[16px]"
          }`}
        >
          <img
            src={image}
            alt={title}
            className={`w-full object-cover ${
              isTop ? "h-[194px] md:h-[308px]" : "h-[194px]"
            } rounded-t-[16px]`}
          />
          <div className="absolute -top-[20px] -right-[20px] w-[84px] h-[84px] bg-white shadow-md flex items-center justify-center rounded-[10px]">
            <img src={icon} alt={`${title} Icon`} className="w-[61.44px] h-[61.44px] object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};
const SponsorshipCards: React.FC = () => {
  return (
    <div className="bg-[#f8f8f8] text-center py-[64px] px-[16px] md:px-[100px] xl:px-[193px]">
      <h2 className="text-[40px] md:text-[52px] xl:text-[64px] font-semibold text-black mb-[42px]">
        Sponsorship Opportunities
      </h2>

      {/* Top Row */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-[24px] mb-[32px]">
        <Card
          title="Title Sponsor"
          description="Your name becomes part of every BOS event and campaign"
          image={Sponsorship1}
          icon={StarHands}
          layout="top"
        />
        <Card
          title="Zone Sponsor"
          description="Sponsor zones like Women’s Arena, Youth Pavilion, Heritage Zone, etc."
          image={Sponsorship2}
          icon={Target}
          layout="top"
        />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px]">
        <Card
          title="Digital Sponsor"
          description="Branding on event promotions, reels, influencer content & website"
          image={Sponsorship3}
          icon={Digital}
          layout="bottom"
        />
        <Card
          title="Cause Sponsor"
          description="Back specific initiatives (e.g., girls’ sports, school tournaments, special needs events)"
          image={Sponsorship4}
          icon={Eye}
          layout="bottom"
        />
        <Card
          title="Kit & Merchandise Sponsor"
          description="BOS T-shirts, medals, lanyards, certificates – all co-branded"
          image={Sponsorship5}
          icon={Shirt}
          layout="bottom"
        />
      </div>
    </div>
  );
};

export default SponsorshipCards;