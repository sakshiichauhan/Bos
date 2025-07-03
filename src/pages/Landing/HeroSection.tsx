import stadiumImg from "@/assets/LandingPage/HeroSection/HeroBackground.jpg";
import Button from "@/pages/Components/Button";
import fitLogo from "@/assets/LandingPage/HeroSection/FIT.jpg";
import nitiLogo from "@/assets/LandingPage/HeroSection/NITI.png";
import Navbar from "@/components/Layouts/Navbar";
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const scrollToEvents = () => {
    const el = document.getElementById('events');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="h-screen bg-center bg-cover relative flex flex-col justify-between overflow-hidden"
      style={{ backgroundImage: `url(${stadiumImg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent z-0" />

      <div className="relative z-10 flex flex-col justify-center items-center px-[clamp(16px,10vw,240px)] pt-16 pb-[clamp(16px,5vh,64px)] min-h-screen">
        <Navbar />

        {/* Marquee */}
        <div className="absolute top-[110px] left-0 w-full overflow-hidden whitespace-nowrap z-0">
          <div className="animate-marquee text-[clamp(60px,10vw,205px)] font-black uppercase text-white/10 inline-block">
            <span>BOND OVER SPORTS&nbsp;&nbsp;&nbsp;</span>
            <span>BOND OVER SPORTS&nbsp;&nbsp;&nbsp;</span>
            <span>BOND OVER SPORTS&nbsp;&nbsp;&nbsp;</span>
            <span>BOND OVER SPORTS&nbsp;&nbsp;&nbsp;</span>
          </div>
        </div>

        {/* Content */}
        <div className="z-10 flex flex-col justify-center flex-grow pt-24 w-full max-w-[1300px]">
          <h1 className="text-white text-[clamp(28px,5vw,51px)] font-bold leading-[1.2em]">
            Where Heritage Meets Passion,
          </h1>

          <h2 className="text-white font-semibold text-[clamp(16px,2.5vw,34px)] mt-4">
            Bond Over Sports brings communities together through the games we grew up with
          </h2>

          <p className="text-white text-[clamp(16px,2.5vw,24px)] font-semibold mt-5">
            Play together and grow stronger as a community.
          </p>

          {/* Registered Logos */}
          <div className="bg-black/30 backdrop-blur-sm text-white text-center mt-8 px-3 py-3 rounded-xl w-fit">
            <p className="text-base font-medium mb-1">Registered Under</p>
            <div className="flex bg-white rounded-lg overflow-hidden gap-[1px]">
              <div className="bg-white p-3 flex items-center justify-center">
                <img src={fitLogo} alt="FIT India" className="max-h-[64px] max-w-[72px] object-contain m-[clamp(10px,2vw,26px)]" />
              </div>
              <div className="bg-white p-3 flex items-center justify-center border-l border-gray-200">
                <img src={nitiLogo} alt="NITI Aayog" className="max-h-[64px] max-w-[72px] object-contain m-[clamp(10px,2vw,26px)]" />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-[clamp(20px,3vw,30px)] flex gap-[clamp(12px,2vw,24px)] flex-wrap">
            {/* Primary Button */}
            <Button
              text="Join the movement"
              onClick={() => navigate('/join')}
              className="bg-white text-black font-medium text-[clamp(16px,2vw,24px)] px-[clamp(24px,3vw,48px)] py-[clamp(14px,1.5vw,17px)] rounded-[10px] border-2 border-transparent bg-gradient-to-r from-white to-white bg-clip-padding shadow-lg"
            />

            {/* Secondary Button with rainbow border */}
            <div className="relative">
              {/* Remove or comment out the gradient background div if not needed */}
              {/* <div className="absolute inset-0 rounded-[8px] border-2 border-transparent bg-[linear-gradient(black/50,black/50) bg-origin-padding bg-clip-border pointer-events-none z-0" /> */}
              <Button
                className="relative z-10 text-white font-medium text-[clamp(16px,2vw,24px)] px-[clamp(24px,3vw,48px)] py-[clamp(14px,1.5vw,17px)] rounded-[8px] overflow-hidden  hover:bg-neutral-800 hover:bg-none"
                onClick={scrollToEvents}
                text=" Explore Events"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;