import { useNavigate } from 'react-router-dom';
import Button from '@/pages/Components/Button';
import WhatYouGet from '@/pages/Components/WhatYouGet';

import im1 from '@/assets/LandingPage/JoinTheMovement/img1.png';
import im2 from '@/assets/LandingPage/JoinTheMovement/img5.png';
import im3 from '@/assets/LandingPage/JoinTheMovement/img2.png';
import im4 from '@/assets/LandingPage/JoinTheMovement/img3.png';
import im5 from '@/assets/LandingPage/JoinTheMovement/img4.png';
import im1F from '@/assets/LandingPage/JoinTheMovement/im1F.png';
import im2F from '@/assets/LandingPage/JoinTheMovement/im5F.png';
import im3F from '@/assets/LandingPage/JoinTheMovement/im2F.png';
import im4F from '@/assets/LandingPage/JoinTheMovement/im3F.png';
import im5F from '@/assets/LandingPage/JoinTheMovement/im4F.png';

interface CardData {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  imgLg: string;
  imgSm: string;
  cta: string;
  contentMaxWidth?: string;
}

const CARDS: CardData[] = [
  {
    id: 'player',
    label: 'Join as a',
    title: 'Player',
    subtitle: 'Your game. Your ground. Your story.',
    imgLg: im1,
    imgSm: im1F,
    cta: 'Join as a Player',
    contentMaxWidth: 'max-w-[300px]',
  },
  {
    id: 'creator',
    label: 'Join as a',
    title: 'Content Creator',
    subtitle: 'Capture. Share. Inspire',
    imgLg: im3,
    imgSm: im3F,
    cta: 'Join as a Creator',
    contentMaxWidth: 'max-w-[300px]',
  },
  {
    id: 'organiser',
    label: 'Join as a',
    title: 'Organiser',
    subtitle: 'Host. Connect. Celebrate',
    imgLg: im2,
    imgSm: im2F,
    cta: 'Join as an Organiser',
    contentMaxWidth: 'max-w-[300px]',
  },
  {
    id: 'volunteer',
    label: 'Join as a',
    title: 'Volunteer',
    subtitle: 'Support. Coordinate. Make an Impact.',
    imgLg: im4,
    imgSm: im4F,
    cta: 'Join as a Volunteer',
    contentMaxWidth: 'max-w-[300px]',
  },
  {
    id: 'supporter',
    label: 'Join as a',
    title: 'Supporter',
    subtitle: 'Support. Celebrate. Spread',
    imgLg: im5,
    imgSm: im5F,
    cta: 'Join as a Supporter',
    contentMaxWidth: 'max-w-[300px]',
  },
];

const JoinTheMovement = () => {
  const navigate = useNavigate();

  return (
    <section id="joinas" className="w-full flex justify-center bg-[#f8f8f8]">
      <div className="w-full max-w-[1920px] px-4 sm:px-6 md:px-[100px] lg:px-[140px] xl:px-[240px] py-[96px]">
        {/* Header */}
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] xl:text-[48px] font-bold leading-tight">
            Join The Movement
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[18px] text-gray-600">
            Be part of something bigger than the game.
          </p>
          <p className="text-[14px] sm:text-[16px] md:text-[16px] text-gray-500">
            You can participate as:
          </p>
        </div>

        {/* Grid */}
        <div className="grid xl:grid-cols-2 gap-[24px]">
          <div className="flex flex-col gap-[24px]">
            {CARDS.slice(0, 2).map((card) => (
              <Card key={card.id} {...card} onClick={() => navigate('/join')} />
            ))}
          </div>

          <Card key="organiser" {...CARDS[2]} onClick={() => navigate('/join')} />

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-[24px] xl:col-span-2">
            {CARDS.slice(3).map((card) => (
              <Card key={card.id} {...card} onClick={() => navigate('/join')} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <WhatYouGet />
        </div>
      </div>
    </section>
  );
};

export default JoinTheMovement;

interface CardProps extends CardData {
  onClick: () => void;
}

const Card = ({
  id,
  label,
  title,
  subtitle,
  imgLg,
  imgSm,
  cta,
  onClick,
  contentMaxWidth = '',
}: CardProps) => {
  const isOrganiser = id === 'organiser';

  return (
    <div
      className={`relative flex flex-col bg-white rounded-[24px] shadow-md 
        p-4 sm:p-6 md:p-[24px] 
        xl:flex-row xl:gap-6 xl:items-center xl:pt-[64px] xl:px-[24px]
        2xl:pt-[74px] 2xl:px-[32px]
        ${isOrganiser ? 'xl:items-end' : ''} text-left xl:text-left`}
    >
      {/* Text */}
      <div className={`flex flex-col space-y-2 ${contentMaxWidth}`}>
        <span className="text-[16px] sm:text-[18px] xl:text-[20px] font-bold bg-gradient-to-r from-red-600 via-orange-300 via-yellow-300 via-green-500 via-blue-700 via-indigo-800 to-violet-900 bg-clip-text text-transparent">
          {label}
        </span>
        <h3 className="text-[24px] sm:text-[28px] md:text-[32px] xl:text-[32px] font-semibold text-[#111827] leading-snug">
          {title}
        </h3>
        <p className="text-[14px] sm:text-[16px] md:text-[16px] xl:text-[18px] text-[#4B4B4B] leading-snug">
          {subtitle}
        </p>
        <div className="pt-3">
          <Button text={cta} onClick={onClick} className="leading-tight" />
        </div>
      </div>

      {/* Desktop Image */}
      <picture
        className={`pointer-events-none select-none hidden xl:block absolute ${
          isOrganiser ? 'top-[36px] right-0' : 'bottom-0 right-0'
        }`}
      >
        <source media="(min-width:1250px)" srcSet={imgLg} />
        <img
          src={imgSm}
          alt={title}
          className={`object-contain rounded-[18px] ${
            isOrganiser
              ? 'w-[637px] h-[446px]'
              : 'max-h-[260px] w-[300px]'
          }`}
        />
      </picture>

      {/* Mobile/Tablet Image */}
      <picture className="block xl:hidden mt-4 w-full">
        <img
          src={imgSm}
          alt={title}
          className="mx-auto max-w-full max-h-[300px] object-contain"
        />
      </picture>
    </div>
  );
};
