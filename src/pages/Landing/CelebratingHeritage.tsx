import React from 'react';
import img1 from '../../assets/LandingPage/CelebratingHeritage/Heritage1.png';
import img2 from '../../assets/LandingPage/CelebratingHeritage/Heritage2.png';
import img3 from '../../assets/LandingPage/CelebratingHeritage/Heritage3.png';
import avatar1 from '../../assets/LandingPage/CelebratingHeritage/Avatar1.png';
import avatar2 from '../../assets/LandingPage/CelebratingHeritage/Avatar2.png';
import vector from '../../assets/LandingPage/CelebratingHeritage/Vector.png';

const HeritageEvents: React.FC = () => {
  const listItems = [
    'From Gully to Ground – Celebrating both informal and organized sports.',
    'Inclusive by Design – Everyone can join — no kits, no labels, just play.',
    'Stories in Motion – Every game has a legacy — BOS helps carry it forward.',
  ];

  return (
    <section
      id="about"
      className="flex flex-wrap justify-center items-center gap-[clamp(24px,3vw,80px)] py-[clamp(40px,5vw,96px)] px-4 lg:px-8 bg-[#F8F8F8]"
    >
      {/* Images Block */}
      <div className="flex justify-center items-end gap-[clamp(16px,2vw,32px)] relative flex-wrap md:flex-nowrap mb-12 md:mb-0">
        <img
          src={img1}
          alt="Event 1"
          className="w-[clamp(100px,22vw,140px)] md:w-[clamp(120px,12vw,180px)] object-cover rounded-[16px] shadow-md relative -bottom-[10px] md:-bottom-[25px]"
        />
        <img
          src={img2}
          alt="Event 2"
          className="w-[clamp(120px,25vw,160px)] md:w-[clamp(140px,14vw,220px)] object-cover object-center rounded-[16px] shadow-lg relative z-20 -translate-y-2 md:-translate-y-5"
        />
        <img
          src={img3}
          alt="Event 3"
          className="w-[clamp(100px,22vw,140px)] md:w-[clamp(120px,12vw,180px)] object-cover rounded-[16px] shadow-md relative -bottom-[10px] md:-bottom-[25px]"
        />

        {/* Avatar Group */}
        <div className="flex items-center gap-[clamp(8px,1.5vw,16px)] absolute bottom-[-35px] md:bottom-[-40px] left-1/2 -translate-x-1/2 justify-center">
          <img
            src={avatar2}
            alt="User 1"
            className="w-[clamp(40px,5vw,54px)] h-[clamp(40px,5vw,54px)] rounded-full border-[3px] border-[#fbbf24] relative left-[clamp(25px,2vw,60px)] md:left-[clamp(40px,2vw,60px)] z-10 bg-white object-cover"
          />
          <img
            src={avatar1}
            alt="User 2"
            className="w-[clamp(40px,5vw,54px)] h-[clamp(40px,5vw,54px)] rounded-full border-[3px] border-[#fb923c] relative left-[clamp(6px,1.5vw,12px)] z-10 bg-white object-cover"
          />
          <div className="w-[clamp(40px,5vw,54px)] h-[clamp(40px,5vw,54px)] flex items-center justify-center text-[clamp(14px,2.5vw,18px)] md:text-[clamp(16px,2vw,22px)] font-bold text-black bg-white border-[3px] border-gray-200 rounded-full relative left-[clamp(-16px,-3vw,-12px)] md:left-[clamp(-20px,-3vw,-12px)] z-30">
            +98
          </div>
        </div>
      </div>

      {/* Content Block */}
      <div className="max-w-[650px] flex flex-col gap-[clamp(16px,2vw,24px)] pt-[clamp(16px,3vw,32px)]">
        <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-[#111] leading-tight mb-[10px]">
          Celebrating Heritage<br />
          <span className="font-semibold">Through Events</span>
        </h2>
        <h4 className="text-[18px] md:text-[clamp(20px,2vw,24px)] font-semibold text-[#222]">
          Urban to Rural Connect
        </h4>
        <p className="text-[14px] md:text-[clamp(16px,1.3vw,20px)] leading-relaxed">
          BOS bridges the gap between generations, geographies, and lifestyles through meaningful play.
        </p>

        <ul className="list-none pl-0">
          {listItems.map((item, index) => (
            <li
              key={index}
              style={{
                backgroundImage: `url(${vector})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left center',
                backgroundSize: '20px 20px',
              }}
              className="pl-[30px] text-[#4B4B4B] font-semibold mb-[clamp(8px,1.5vw,16px)] text-[14px] md:text-[clamp(16px,1.3vw,20px)] leading-relaxed"
            >
              {item}
            </li>
          ))}
        </ul>

        <strong className="block font-bold text-black text-[14px] md:text-[clamp(16px,1.3vw,20px)] leading-relaxed">
          Discover BOS Events Around You
        </strong>
        <p className="text-[14px] md:text-[clamp(16px,1.3vw,20px)] leading-relaxed">
          Explore what’s happening nearby and get involved!
        </p>
      </div>
    </section>
  );
};

export default HeritageEvents;
