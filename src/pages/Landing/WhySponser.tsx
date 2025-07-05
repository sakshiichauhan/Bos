import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import sportImg from '@/assets/LandingPage/SponsorBos/Sponserwhy.png';
import vector from '@/assets/LandingPage/CelebratingHeritage/Vector.png';
import Button from '@/pages/Components/Button';

interface Benefit {
  title: string;
}

const benefits: Benefit[] = [
  { title: 'Meaningful Visibility' },
  { title: 'Grassroots Engagement' },
  { title: 'Authentic CSR Impact' },
];

const WhySponsor: FC = () => {
  const navigate = useNavigate();

  return (
    <section
      id="sponser"
      className="flex justify-center bg-[#FEFEFE] px-[clamp(16px,12vw,240px)] py-[clamp(24px,4vw,48px)]"
    >
      <div className="w-full rounded-[20px] p-[1px] bg-gradient-to-r from-red-500 via-green-500 to-violet-600">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between bg-white rounded-[18px] px-[clamp(16px,6vw,10px)] py-[clamp(24px,4vw,4px)]">
          <div className="w-full lg:w-[45%] mb-[clamp(16px,2vw,24px)]">
            <img
              src={sportImg}
              alt="BOS Athletes"
              className="w-full max-w-full h-auto object-contain"
            />
          </div>

          <div className="w-full lg:w-[55%] text-start">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-5 md:mb-6">
  Why Sponsor BOS?
</h2>

<p className=" md:text-base sm:text-sm lg:text-xl text-[#4B4B4B] font-normal mb-4 sm:mb-5 md:mb-6">
  Join a movement where sports meet culture and community creates impact.
</p>

<p className="md:text-base sm:text-sm lg:text-xl text-[#4B4B4B] font-normal mb-4 sm:mb-5 md:mb-6">
  Partnering with Bond Over Sports means your brand becomes part of something meaningful and lasting.
</p>

            <p className="md:text-base sm:text-sm lg:text-2xl text-[#000000]  font-medium mb-2 sm:mb-4 md:mb-6">
  BOS gives your brand:
</p>


            <div className="flex flex-wrap gap-[clamp(6px,2vw,1px)] justify-start sm:justify-center mb-[clamp(12px,2vw,24px)]">
              {benefits.map(({ title }, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-[8px] flex flex-col items-center justify-center text-center px-[clamp(8px,1.5vw,12px)] py-[clamp(12px,2vw,16px)] text-[clamp(10px,2vw,14px)] sm:text-[clamp(14px,2vw,18px)] w-[calc(33.333%-8px)]  lg:min-w-[150px] lg:max-w-[264px] lg:min-h-[113px] transition-shadow hover:shadow-md"
                >
                  <img
                    src={vector}
                    alt="benefit-icon"
                    className="w-[clamp(14px,3vw,20px)] h-[clamp(14px,3vw,20px)] mb-[clamp(6px,1vw,10px)]"
                  />
                  <p className="font-medium text-[#000000] leading-tight w-[clamp(80px,10vw,120px)]">
                    {title}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-[clamp(10px,2vw,14px)] sm:text-[clamp(14px,2vw,20px)] text-[#4B4B4B] mb-[clamp(12px,2vw,16px)]">
              Partner with purpose. Power the play.
            </p>

            <Button
              className="font-semibold text-[clamp(12px,3vw,18px)] sm:text-[clamp(16px,3vw,24px)] shadow-[0_3px_4px_rgba(0,0,0,0.4)] px-[clamp(10px,3vw,16px)] py-[clamp(6px,1.5vw,10px)] sm:px-[clamp(16px,4vw,32px)] sm:py-[clamp(10px,2vw,16px)] w-fit"
              text="Become a Sponsor"
              onClick={() => navigate('/sponsers')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySponsor;
