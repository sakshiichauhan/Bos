import { useNavigate } from 'react-router-dom';

import im1 from '../../assets/LandingPage/JoinTheMovement/img1.png';
import im2 from '../../assets/LandingPage/JoinTheMovement/img5.png';
import im3 from '../../assets/LandingPage/JoinTheMovement/img2.png';
import im4 from '../../assets/LandingPage/JoinTheMovement/img3.png';
import im5 from '../../assets/LandingPage/JoinTheMovement/img4.png';

import im1F from '../../assets/LandingPage/JoinTheMovement/im1F.png';
import im2F from '../../assets/LandingPage/JoinTheMovement/im5F.png';
import im3F from '../../assets/LandingPage/JoinTheMovement/im2F.png';
import im4F from '../../assets/LandingPage/JoinTheMovement/im3F.png';
import im5F from '../../assets/LandingPage/JoinTheMovement/im4F.png';

import {Button} from '../../components/ui/button';
import WhatYouGet from '@/Pages/Components/WhatYouGet';

const JoinTheMovement: React.FC = () => {
  const navigate = useNavigate();

  const cardData = [
    {
      label: 'Join as a',
      title: 'Player',
      text: 'Your game. Your ground. Your story.',
      image: { lg: im1, sm: im1F },
      maxWidth: 'max-w-[300px]',
    },
    {
      label: 'Join as a',
      title: 'Content Creator',
      text: 'Capture. Share. Inspire',
      image: { lg: im3, sm: im3F },
      maxWidth: 'max-w-[300px]',
    },
    {
      label: 'Join as a',
      title: 'Volunteer',
      text: 'Support. Coordinate. Make an Impact.',
      image: { lg: im4, sm: im4F },
      maxWidth: 'max-w-[350px]',
    },
    {
      label: 'Join as a',
      title: 'Supporter',
      text: 'Support. Celebrate. Spread',
      image: { lg: im5, sm: im5F },
      maxWidth: 'max-w-[400px]',
    },
  ];

  return (
    <section
      id="joinas"
      className="bg-[#F8F8F8] px-4 sm:px-16 md:px-24 lg:px-[90px] xl:px-[140px] 2xl:px-[240px] py-24"
    >
      <div className="text-center mb-10">
        <h2 className="text-[clamp(28px,5vw,48px)] font-bold mb-2">Join The Movement</h2>
        <p className="text-[clamp(16px,2vw,24px)] text-gray-600">Be part of something bigger than the game.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-4">
        {/* Left Column - Player & Content Creator */}
        <div className="flex flex-col gap-6">
          {cardData.slice(0, 2).map((card, idx) => (
            <div
              key={idx}
              className="relative flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-md p-6 md:p-10 gap-6 md:gap-10"
            >
              <div className={`flex flex-col ${card.maxWidth}`}>
                <p className="text-[clamp(16px,2.5vw,20px)] font-normal bg-gradient-to-r from-red-500 via-yellow-400 to-purple-600 bg-clip-text text-transparent">
                  {card.label}
                </p>
                <h3 className="text-[clamp(24px,4vw,40px)] font-semibold text-gray-900 mb-1">
                  {card.title}
                </h3>
                <p className="text-[clamp(16px,2.5vw,20px)] text-gray-600 mb-3">{card.text}</p>
                <Button text={`Join as a ${card.title}`} onClick={() => navigate('/join')} className="mt-4" />
              </div>
              <picture className="absolute right-0 bottom-0 md:static md:relative">
                <source media="(min-width: 1250px)" srcSet={card.image.lg} />
                <img
                  src={card.image.sm}
                  alt={card.title}
                  className="max-h-[200px] md:max-h-[300px] object-contain"
                />
              </picture>
            </div>
          ))}
        </div>

        {/* Right Column - Organiser (fixed), Volunteer, Supporter */}
        <div className="flex flex-col gap-6">
          {/* Organiser Card - Fixed Layout */}
          <div className="relative flex flex-col md:flex-row items-end bg-white rounded-3xl shadow-md p-6 md:p-10 gap-6 md:gap-10">
            <div className="flex flex-col max-w-[300px]">
              <p className="text-[clamp(16px,2.5vw,20px)] font-normal bg-gradient-to-r from-red-500 via-yellow-400 to-purple-600 bg-clip-text text-transparent">
                Join as a
              </p>
              <h3 className="text-[clamp(24px,4vw,40px)] font-semibold text-gray-900 mb-1">Organiser</h3>
              <p className="text-[clamp(16px,2.5vw,20px)] text-gray-600 mb-3">Host. Connect. Celebrate</p>
              <Button text="Join as a Organiser" onClick={() => navigate('/join')} className="mt-4" />
            </div>

            <picture className="absolute right-0 top-[36px] md:static md:relative">
              <source media="(min-width: 1250px)" srcSet={im2} />
              <img
                src={im2F}
                alt="Organiser"
                className="max-h-[200px] md:max-h-[300px] object-contain"
              />
            </picture>
          </div>

          {/* Volunteer & Supporter */}
          {cardData.slice(2).map((card, idx) => (
            <div
              key={idx}
              className="relative flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-md p-6 md:p-10 gap-6 md:gap-10"
            >
              <div className={`flex flex-col ${card.maxWidth}`}>
                <p className="text-[clamp(16px,2.5vw,20px)] font-normal bg-gradient-to-r from-red-500 via-yellow-400 to-purple-600 bg-clip-text text-transparent">
                  {card.label}
                </p>
                <h3 className="text-[clamp(24px,4vw,40px)] font-semibold text-gray-900 mb-1">
                  {card.title}
                </h3>
                <p className="text-[clamp(16px,2.5vw,20px)] text-gray-600 mb-3">{card.text}</p>
                <Button text={`Join as a ${card.title}`} onClick={() => navigate('/join')} className="mt-4" />
              </div>
              <picture className="absolute right-0 bottom-0 md:static md:relative">
                <source media="(min-width: 1250px)" srcSet={card.image.lg} />
                <img
                  src={card.image.sm}
                  alt={card.title}
                  className="max-h-[200px] md:max-h-[300px] object-contain"
                />
              </picture>
            </div>
          ))}
        </div>
      </div>

      <WhatYouGet />
    </section>
  );
};

export default JoinTheMovement;
