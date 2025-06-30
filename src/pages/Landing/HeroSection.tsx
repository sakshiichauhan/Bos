import stadiumImg from "../../assets/LandingPage/HeroSection/HeroBackground.jpg";
import {Button} from '../../../src/components/ui/button';
import fitLogo from "../../assets/LandingPage/HeroSection/FIT.jpg";
import nitiLogo from "../../assets/LandingPage/HeroSection/NITI.png";
import Navbar from '../../../src/components/Layouts/Navbar';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      className="h-screen flex flex-col justify-between overflow-hidden bg-center bg-cover"
      style={{ backgroundImage: `url(${stadiumImg})` }}
    >
      <div className="flex flex-1 flex-col justify-center items-center px-[clamp(16px,10vw,240px)] pb-[clamp(16px,5vh,64px)] pt-[clamp(40px,15vw,240px)] bg-gradient-to-br from-black/60 to-transparent relative">
        <Navbar />

        {/* Marquee */}
        <div className="overflow-hidden whitespace-nowrap w-full absolute z-[1] top-[110px] left-0">
          <div className="inline-block font-black uppercase text-[clamp(60px,10vw,205px)] text-white/10 animate-marquee">
            <span>BOND OVER SPORTS&nbsp;&nbsp;&nbsp;</span>
            <span>BOND OVER SPORTS&nbsp;&nbsp;&nbsp;</span>
            <span>BOND OVER SPORTS&nbsp;&nbsp;&nbsp;</span>
            <span>BOND OVER SPORTS&nbsp;&nbsp;&nbsp;</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center flex-grow text-white pt-24">
          <h1 className="font-bold text-[clamp(28px,5vw,51px)] leading-tight">
            Where Heritage Meets Passion,
          </h1>
          <h2 className="text-[clamp(16px,2.5vw,34px)] font-semibold mt-4">
            Bond Over Sports brings communities together through the games we grew up with
          </h2>
          <p className="text-[clamp(16px,2.5vw,24px)] font-semibold mt-5">
            Play together and grow stronger as a community.
          </p>

          {/* Logos */}
          <div className="bg-black/30 rounded-xl px-3 py-2 mt-8 text-center backdrop-blur-sm w-fit">
            <p className="text-base font-medium mb-1">Registered Under</p>
            <div className="flex gap-1 rounded-lg overflow-hidden bg-white">
              <div className="flex-1 flex items-center justify-center p-2 bg-white">
                <img src={fitLogo} alt="FIT India" className="max-h-[64px] max-w-[72px] object-contain m-[26px]" />
              </div>
              <div className="flex-1 flex items-center justify-center p-2 bg-white border-l border-gray-200">
                <img src={nitiLogo} alt="NITI Aayog" className="max-h-[64px] max-w-[72px] object-contain m-[26px]" />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-[clamp(20px,3vw,30px)] flex flex-wrap gap-[clamp(12px,2vw,24px)]">
            <Button
              className="bg-white text-black font-medium text-[clamp(16px,2vw,24px)] py-[clamp(14px,1.5vw,17px)] px-[clamp(24px,3vw,48px)] rounded-lg border-2 border-transparent bg-gradient-to-r from-white via-white to-white hover:from-white hover:to-white"
              text="Join the movement"
              onClick={() => navigate('/join')}
            />
            <div className="relative w-fit h-fit">
              <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-red-500 via-yellow-400 to-violet-600 -z-10 mask-xor pointer-events-none" />
              <button
                className="relative text-white font-medium text-[clamp(16px,2vw,24px)] py-[clamp(14px,1.5vw,17px)] px-[clamp(24px,3vw,48px)] z-10"
                onClick={() => {
                  const el = document.getElementById('events');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
