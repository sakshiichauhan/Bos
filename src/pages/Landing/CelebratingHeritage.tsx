import React from 'react';
import img1 from "@/assets/LandingPage/CelebratingHeritage/Heritage1.png";
import img2 from "@/assets/LandingPage/CelebratingHeritage/Heritage2.png";
import img3 from "@/assets/LandingPage/CelebratingHeritage/Heritage3.png";
import avatar1 from "@/assets/LandingPage/CelebratingHeritage/Avatar1.png";
import avatar2 from"@/assets/LandingPage/CelebratingHeritage/Avatar2.png";
import vector from "@/assets/LandingPage/CelebratingHeritage/Vector.png";

const HeritageEvents: React.FC = () => {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row justify-center items-center bg-[#F8F8F8]
        px-4 md:px-[clamp(12px,5vw,20px)] lg:px-0 
        py-[clamp(40px,8vw,70px)] lg:py-[clamp(40px,5vw,96px)] 
        gap-[clamp(16px,4vw,32px)] lg:gap-[clamp(24px,3vw,80px)]"
    >
      {/* Image Section */}
      <div
        className="relative flex justify-center items-end 
        flex-row gap-[clamp(10px,3vw,20px)] 
        mb-[clamp(24px,6vw,40px)] lg:mb-0"
      >
        <img
          src={img1}
          alt="Event 1"
          className="w-[clamp(100px,22vw,140px)] lg:w-[clamp(120px,12vw,258px)]
            object-cover rounded-[16px] shadow-md relative -bottom-[10px] lg:-bottom-[25px]"
        />
        <img
          src={img2}
          alt="Event 2"
          className="w-[clamp(120px,25vw,160px)] lg:w-[clamp(140px,14vw,258px)]
            object-cover rounded-[16px] shadow-lg relative z-10 -translate-y-[10px] lg:-translate-y-[20px]"
        />
        <img
          src={img3}
          alt="Event 3"
          className="w-[clamp(100px,22vw,140px)] lg:w-[clamp(120px,12vw,258px)]
            object-cover rounded-[16px] shadow-md relative -bottom-[10px] lg:-bottom-[25px]"
        />

        {/* Avatar Group */}
        <div
          className="absolute bottom-[-35px] lg:bottom-[-40px] left-1/2 -translate-x-1/2 flex items-center 
          gap-[clamp(8px,1.5vw,16px)]"
        >
          <img
            src={avatar2}
            alt="Avatar 1"
            className="w-[clamp(40px,5vw,54px)] h-[clamp(40px,5vw,54px)] rounded-full 
              object-cover bg-white border-[3px] border-yellow-400
              relative z-10 left-[clamp(25px,2vw,45px)] lg:left-[clamp(40px,2vw,60px)]"
          />
          <img
            src={avatar1}
            alt="Avatar 2"
            className="w-[clamp(40px,5vw,54px)] h-[clamp(40px,5vw,54px)] rounded-full 
              object-cover bg-white border-[3px] border-orange-400
              relative z-20 left-[clamp(6px,1.5vw,12px)]"
          />
          <div
            className="w-[clamp(40px,5vw,54px)] h-[clamp(40px,5vw,54px)] rounded-full bg-white text-black
              text-[clamp(14px,2.5vw,18px)] lg:text-[clamp(16px,2vw,22px)] font-bold 
              border-[3px] border-gray-200 flex items-center justify-center 
              relative z-30 left-[clamp(-16px,-3vw,-12px)] lg:left-[clamp(-20px,-3vw,-12px)]"
          >
            +98
          </div>
        </div>
      </div>

      {/* Content Section */}
   <div className="max-w-[600px] flex flex-col gap-0 pt-4 md:pt-6">
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-[#000000] leading-[1.2] mb-4">
          Celebrating Heritage<br />
          <span className="font-medium mt-1">Through Sports</span>
        </h2>

        <h4 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold text-[#000000] mb-2">
          Urban to Rural Connect
        </h4>

        <p className="text-[14px] md:text-[16px] lg:text-[20px] text-[#4B4B4B] font-normal mb-4 leading-[1.5]">
          BOS bridges the gap between generations, geographies, and lifestyles through meaningful play.
        </p>

        <ul className="list-none space-y-2 md:space-y-4">
  {[
    {
      title: "From Gully to Ground",
      desc: "Celebrating both informal and organized sports.",
    },
    {
      title: "Inclusive by Design",
      desc: "Everyone can join — no kits, no labels, just play.",
    },
    {
      title: "Stories in Motion",
      desc: "Every game has a legacy — BOS helps carry it forward.",
    },
  ].map((item, idx) => (
    <li key={idx} className="pl-[30px] relative">
      <span
        className="absolute left-0 top-1.5 w-[18px] h-[18px] bg-no-repeat bg-contain"
        style={{ backgroundImage: `url(${vector})` }}
      />
      <p className="text-[#4B4B4B] text-[14px] md:text-[16px] lg:text-[20px] font-semibold">
        {item.title}
      </p>
      <p className="text-[#4B4B4B] mt-1 md:mt-0.5 text-[14px] md:text-[15px] lg:text-[20px] font-normal leading-snug">
        {item.desc}
      </p>
    </li>
  ))}
</ul>

      </div>
    </section>
  );
};

export default HeritageEvents;
