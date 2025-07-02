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
          className="w-[clamp(100px,22vw,140px)] lg:w-[clamp(120px,12vw,180px)]
            object-cover rounded-[16px] shadow-md relative -bottom-[10px] lg:-bottom-[25px]"
        />
        <img
          src={img2}
          alt="Event 2"
          className="w-[clamp(120px,25vw,160px)] lg:w-[clamp(140px,14vw,220px)]
            object-cover rounded-[16px] shadow-lg relative z-10 -translate-y-[10px] lg:-translate-y-[20px]"
        />
        <img
          src={img3}
          alt="Event 3"
          className="w-[clamp(100px,22vw,140px)] lg:w-[clamp(120px,12vw,180px)]
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
      <div className="max-w-[650px] flex flex-col gap-[clamp(16px,2vw,24px)] pt-[clamp(16px,3vw,32px)]">
        <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-[#111] leading-[1.2] mb-[10px]">
          Celebrating Heritage<br />
          <span className="font-semibold">Through Events</span>
        </h2>
        <h4 className="text-[clamp(18px,2vw,24px)] font-semibold text-[#222]">
          Urban to Rural Connect
        </h4>
        <p className="text-[14px] lg:text-[clamp(16px,1.3vw,20px)] leading-[1.6] text-[#4B4B4B]">
          BOS bridges the gap between generations, geographies, and lifestyles through meaningful play.
        </p>

        {/* Bullet List */}
        <ul className="list-none space-y-[clamp(8px,1.5vw,16px)]">
          {[
            'From Gully to Ground – Celebrating both informal and organized sports.',
            'Inclusive by Design – Everyone can join — no kits, no labels, just play.',
            'Stories in Motion – Every game has a legacy — BOS helps carry it forward.',
          ].map((item, idx) => (
            <li
              key={idx}
              className="flex gap-3 font-semibold text-[#4B4B4B] text-[14px] lg:text-[clamp(16px,1.3vw,20px)]"
              style={{
                backgroundImage: `url(${vector})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left center',
                backgroundSize: '20px 20px',
                paddingLeft: '30px',
              }}
            >
              {item}
            </li>
          ))}
        </ul>

        <strong className="block font-bold text-black text-[14px] lg:text-[clamp(16px,1.3vw,20px)]">
          Discover BOS Events Around You
        </strong>
        <p className="text-[14px] lg:text-[clamp(16px,1.3vw,20px)] text-[#4B4B4B]">
          Explore what’s happening nearby and get involved!
        </p>
      </div>
    </section>
  );
};

export default HeritageEvents;