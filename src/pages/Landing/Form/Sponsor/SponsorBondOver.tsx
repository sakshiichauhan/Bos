

import React, { useEffect } from 'react';
import Appbar from "@/components/Layouts/Navbar";


import Logo from "@/pages/Landing/Form/Sponsor/LogoCards"

import SponsorshipCards from "@/pages/Landing/Form/Sponsor/Sponsorship";
import SponsorForm from "@/pages/Landing/Form/Sponsor/SponsorForm";
import LetsTalk from "@/pages/Landing/Form/Sponsor/LetsTalk";
import eduIcon from "@/assets/Form/Sponsor/SponsorFlag.png";
import cultureIcon from "@/assets/Form/Sponsor/SponsorAuthentic.png";
import govIcon from "@/assets/Form/Sponsor/SponsorCsr.png";
import nonprofitIcon from "@/assets/Form/Sponsor/SponsorContent.png";

const partners = [
  {
    title: 'Nationwide Recognition',
    icon: eduIcon,
    desc: 'Showcase your brand across India at community events, cultural festivals, and sports tournaments.',
  },
  {
    title: 'Authentic Engagement',
    icon: cultureIcon,
    desc: 'Reach students, families, youth leaders, and communities through meaningful on-ground and digital experiences.',
  },
  {
    title: 'CSR Alignment',
    icon: govIcon,
    desc: 'Support causes like youth development, gender inclusion in sports, rural engagement, and cultural revival.',
  },
  {
    title: 'Content That Converts',
    icon: nonprofitIcon,
    desc: 'Your brand will feature in reels, stories, posters, kits, and campaigns with long shelf life and high shareability.',
  },
];



const Sponsor: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Appbar />

      {/* ─── HERO ─── */}
      <section
        className="bg-gray-100
                   px-4 py-8
                   md:px-[80px] md:py-10
                   lg:px-[120px] lg:py-12
                   xl:px-[193px] xl:py-16
                   text-left md:text-center"
      >
        <div className="max-w-[1920px] mt-10 md:mt-16 lg:mt-20 mx-auto">
          <h1 className="font-semibold text-[32px] md:text-[40px] lg:text-[48px] xl:text-[64px] mb-4">
            Sponsor Bond&nbsp;Over&nbsp;Sports
          </h1>
          <h2 className="font-semibold text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] mb-6">
            Back the Movement. Boost Your Brand. Build Impact.
          </h2>
          <p
            className="mx-auto
                       text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px]
                       leading-[1.4] md:leading-[1.5] xl:leading-[1.2]
                       text-gray-700
                       max-w-[1138px]
                       md:text-center"
          >
            Bond Over Sports is more than events — it&apos;s a grassroots movement
            uniting people through heritage, sports, and storytelling. By sponsoring
            BOS, you&apos;re not just getting visibility — you&apos;re becoming a
            catalyst for change.
          </p>
        </div>
      </section>

      {/* ─── WHY SPONSOR GRID ─── */}
      <section className="bg-gray-100 px-4 md:px-[80px] lg:px-[120px] xl:px-[193px] py-16">
        <h2 className="text-[32px] lg:text-[48px] 2xl:text-[64px] font-semibold text-center mb-[42px]">
          Why Sponsor BOS?
        </h2>

        <div className="flex flex-wrap justify-center gap-[32px] md:gap-[20px] 2xl:gap-[32px]">
          {partners.map(({ title, icon, desc }) => (
            <div
              key={title}
              style={{
                background:
                  'linear-gradient(#DF0024,#FC9F0B,#FFCD00,#3BB402,#FFFFFF)',
                padding: '2px',
                borderRadius: '16px',
              }}
              className="
                relative w-full
                lg:max-w-[45%]                 /* tablet 2-up */
                xl:max-w-[calc(25%-32px)]      /* desktop 4-up */
                min-h-[250px] xl:min-h-[357px]
                transition-transform duration-200 hover:-translate-y-1"
            >
              {/* inner white card */}
              <div className="relative flex flex-col bg-white rounded-[14px] h-full p-5 md:p-6 pb-8 text-left">
                {/* ─── ICON BOX (only part changed) ─── */}
                <div
                  className="
                    absolute
                    -top-[30px] left-1/2 -translate-x-1/2   /* mobile & tablet: centered */
                    lg:-top-[36px]                           /* tablet adjust height */
                    xl:-top-[40px] xl:left-6 xl:translate-x-0 /* ≥1280 px: left-aligned 24px */
                    bg-white p-[10px] lg:p-[14px]
                    rounded-[9px] border-[2.22px] border-[#dfdfdf] shadow"
                >
                  <img
                    src={icon}
                    alt={title}
                    className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] object-contain"
                  />
                </div>

                {/* title */}
                <h3
                  className="
                    font-semibold text-[#111827]
                    mt-[24px] lg:mt-[28px] 2xl:mt-[32px]
                    mb-[16px] lg:mb-[10px] 2xl:mb-[12px]
                    text-[20px] lg:text-[24px] 2xl:text-[32px]
                    leading-[1.4] lg:leading-[1.3] 2xl:leading-[1.2]"
                >
                  {title}
                </h3>

                {/* description */}
                <p
                  className="
                    text-[#4D4D4D]
                    text-[16px] lg:text-[15px] 2xl:text-[22px]
                    leading-[1.4] lg:leading-[1.3] 2xl:leading-[1.2] flex-grow"
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <SponsorshipCards />
      <SponsorForm />
      <Logo />
      <LetsTalk />


    </>
  );
};

export default Sponsor;
