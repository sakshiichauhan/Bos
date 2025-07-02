// WhySponser.tsx
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import sportImg from '@/assets/LandingPage/SponsorBos/Sponserwhy.png';
import vector   from '@/assets/LandingPage/CelebratingHeritage/Vector.png';
import Button from '../Components/Button';

interface Benefit { title: string }
const benefits: Benefit[] = [
  { title: 'Meaningful Visibility' },
  { title: 'Grassroots Engagement' },
  { title: 'Authentic CSR Impact' },
];

const WhySponser: FC = () => {
  const navigate = useNavigate();

  return (
    <section
      id="sponser"
      className="
        flex justify-center bg-[#FEFEFE]
        px-[clamp(16px,12vw,240px)]
        py-[clamp(24px,4vw,48px)]
        max-[1750px]:px-[clamp(16px,3vw,32px)]
      "
    >
      {/* ---- gradient border (2 px) ---------------------------------- */}
      <div
        className="
          w-full rounded-[20px] p-[2px]
          bg-[linear-gradient(to_right,red,orange,green,blue,violet)]
          [transform:scale(1)] [transform-origin:top_center]
          max-[1370px]:[transform:scale(0.9)]
          max-[1200px]:[transform:scale(0.8)]
          max-[500px]:[transform:scale(1)]
        "
      >
        {/* ---- white panel ------------------------------------------ */}
        <div
          className="
            flex flex-wrap rounded-[18px] bg-white
            px-[clamp(16px,6vw,48px)] py-[clamp(24px,4vw,48px)]
            max-[1750px]:px-[clamp(16px,3vw,32px)]
            max-[1750px]:text-center max-[1750px]:items-center max-[1750px]:justify-center
          "
        >
          {/* ---------- image ---------------------------------------- */}
          <div
            className="
              mb-[clamp(16px,2vw,24px)]
              flex-[1_1_clamp(200px,40vw,500px)]
              max-[1750px]:mb-[clamp(12px,2vw,20px)]
              max-[1370px]:w-[90%] max-[1370px]:flex-none
            "
          >
            <img src={sportImg} alt="BOS Athletes" className="block w-full h-auto" />
          </div>

          {/* ---------- content -------------------------------------- */}
          <div
            className="
              flex-[1_1_clamp(300px,50vw,600px)]
              md:pl-[clamp(0px,4vw,40px)]
              max-[1750px]:pl-[clamp(8px,2vw,24px)]
              text-start md:text-left
            "
          >
            <h2 className="mb-[clamp(12px,2vw,24px)] text-[clamp(28px,4vw,64px)] font-extrabold">
              Why Sponsor BOS?
            </h2>

            <p className="mb-[clamp(16px,2vw,24px)] text-[clamp(16px,2vw,20px)] text-gray-600">
              Join a movement where sports meet culture and community creates impact.
            </p>
            <p className="mb-[clamp(16px,2vw,24px)] text-[clamp(16px,2vw,20px)] text-gray-600">
              Partnering with Bond Over Sports means your brand becomes part of something meaningful
              and lasting.
            </p>

            <p className="text-[clamp(18px,2.5vw,24px)] font-medium">BOS gives your brand:</p>

            {/* ---------- cards -------------------------------------- */}
            <div
              className="
                mt-[clamp(8px,2vw,16px)]
                flex flex-wrap justify-start gap-[clamp(8px,2vw,16px)]
                max-[1750px]:justify-center max-[764px]:gap-[clamp(6px,1vw,12px)]
              "
            >
              {benefits.map(({ title }) => (
                <div
                  key={title}
                  className="
                    flex flex-col items-center text-center flex-shrink-0
                    rounded-lg border-2 border-gray-200 bg-white
                    transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]
                    w-[clamp(120px,25vw,200px)] py-[clamp(16px,2vw,34px)]
                    px-[clamp(8px,2vw,12px)] text-[clamp(16px,2.5vw,20px)]
                    gap-[clamp(6px,1vw,10px)]
                    max-[1370px]:w-[clamp(100px,28vw,180px)]
                    max-[1200px]:w-[clamp(100px,28vw,200px)]
                    max-[764px]:w-[clamp(100px,30vw,120px)]
                    max-[764px]:py-[clamp(12px,2vw,16px)] max-[764px]:px-0
                    max-[764px]:text-[clamp(12px,2vw,14px)]
                    max-[500px]:w-[calc(33.333%-8px)]
                    max-[500px]:py-[clamp(8px,1.5vw,12px)] max-[500px]:px-0
                    max-[500px]:text-[clamp(10px,2vw,14px)]
                  "
                >
                  <img
                    src={vector}
                    alt=""
                    className="
                      h-[clamp(16px,3vw,32px)] w-[clamp(16px,3vw,32px)]
                      max-[764px]:h-[clamp(10px,2vw,16px)] max-[764px]:w-[clamp(10px,2vw,16px)]
                      max-[500px]:h-[clamp(14px,3vw,20px)] max-[500px]:w-[clamp(14px,3vw,20px)]
                    "
                  />
                  <p
                    className="
                      font-semibold text-gray-900
                      w-[clamp(100px,10vw,120px)]
                      text-[clamp(14px,2vw,20px)]
                      max-[764px]:text-[clamp(12px,2vw,14px)]
                      max-[500px]:text-[clamp(9px,2vw,12px)]
                    "
                  >
                    {title}
                  </p>
                </div>
              ))}
            </div>

            <p className="my-[clamp(12px,2vw,16px)] text-[clamp(14px,2vw,20px)] text-gray-500 max-[500px]:text-[clamp(10px,2vw,12px)]">
              Partner with purpose. Power the play.
            </p>

            <Button
              className="
                px-[clamp(16px,4vw,32px)] py-[clamp(10px,2vw,16px)]
                text-[clamp(16px,3vw,24px)] font-semibold
                shadow-[0_3px_4px_rgba(0,0,0,0.4)]
                max-[764px]:text-[clamp(14px,3vw,18px)]
                max-[500px]:text-[clamp(12px,3vw,16px)]
                max-[500px]:px-[clamp(10px,3vw,16px)]
                max-[500px]:py-[clamp(6px,1.5vw,10px)]
              "
              text="Become a Sponsor"
              onClick={() => navigate('/sponsers')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySponser;
