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
    subtitle: 'Compete in events and represent your community',
    imgLg: im1,
    imgSm: im1F,
    cta: 'Join as a Player',
    contentMaxWidth: 'max-w-[300px]',
  },
  {
    id: 'creator',
    label: 'Join as a',
    title: 'Content Creator',
    subtitle: 'Capture and share stories from the field',
    imgLg: im3,
    imgSm: im3F,
    cta: 'Join as a Creator',
    contentMaxWidth: 'max-w-[300px]',
  },
  {
    id: 'organiser',
    label: 'Join as an',
    title: 'Organiser',
    subtitle: 'Host local events under the BOS banner',
    imgLg: im2,
    imgSm: im2F,
    cta: 'Join as an Organiser',
  },
  {
    id: 'volunteer',
    label: 'Join as a',
    title: 'Volunteer',
    subtitle: 'Help us organize and execute BOS meets',
    imgLg: im4,
    imgSm: im4F,
    cta: 'Join as a Volunteer',
    contentMaxWidth: 'max-w-[350px]',
  },
  {
    id: 'supporter',
    label: 'Join as a',
    title: 'Supporter',
    subtitle: 'Spread the message and help grow the movement',
    imgLg: im5,
    imgSm: im5F,
    cta: 'Join as a Supporter',
    contentMaxWidth: 'max-w-[400px]',
  },
];

const JoinTheMovement = () => {
  const navigate = useNavigate();

  return (
    <section id="joinas" className="bg-[#f8f8f8] px-4 sm:px-6 md:px-10 xl:px-[240px] py-[96px]">
      {/* Header */}
      <div className="text-center mb-10 space-y-2">
        <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-bold leading-tight">
          Join The Movement
        </h2>
        <p className="text-gray-600 text-[16px] sm:text-[18px] md:text-[18px]">
          Be More Than a Spectator. Be Part of the Change
        </p>
        <p className="text-gray-500 text-[14px] sm:text-[16px] md:text-[16px]">
          You can participate as:
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-[24px]">
        <div className="flex flex-col gap-[24px]">
          {CARDS.slice(0, 2).map((card) => (
            <Card key={card.id} {...card} onClick={() => navigate('/join')} />
          ))}
        </div>

        <Card key="organiser" {...CARDS[2]} onClick={() => navigate('/join')} />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[24px] col-span-2">
          {CARDS.slice(3).map((card) => (
            <Card key={card.id} {...card} onClick={() => navigate('/join')} />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <WhatYouGet />
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
      className={`relative flex bg-white rounded-[24px] shadow-md 
        p-[32px] pt-[74px] gap-6 items-center 
        flex-col xl:flex-row ${isOrganiser ? 'xl:items-end' : 'xl:items-center'}`}
    >
      {/* Text */}
      <div className={`flex flex-col space-y-2 ${contentMaxWidth}`}>
        <span
          className="text-[20px] font-bold "
          style={{ background: "linear-gradient(to right, #DF0024 0%, #FC9F0B 16%, #FFCD00 33%, #3BB402 50%, #0085C7 66%, #4F449D 100%) bg-clip-text text-transparent" }}
        >
          {label}
        </span>
        <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-[#111827] leading-snug">
          {title}
        </h3>
        <p className="text-[14px] font-normal sm:text-[16px] md:text-[16px] text-[#4B4B4B] leading-snug">
          {subtitle}
        </p>
        <div className="pt-3">
          <Button
            text={cta}
            onClick={onClick}
            className='leading-tighter'
            // className="px-[16px] py-[10px] border-[1.5px] border-purple-600 text-[20px] sm:text-[15px] md:text-[15px] font-semibold hover:shadow-md transition"
          />
        </div>
      </div>

      {/* Image */}
      <picture
        className={`pointer-events-none select-none absolute ${
          isOrganiser ? 'top-[36.72px] right-0' : 'bottom-0 right-0'
        }`}
      >
        <source media="(min-width:1250px)" srcSet={imgLg} />
        <img
          src={imgSm}
          alt={title}
          className={`${
            isOrganiser
              ? 'w-[637px] h-[446.28px] rounded-[18px] border-[4px] border-transparent '
              : 'max-h-[280px] w-auto'
          } object-contain`}
        />
      </picture>
    </div>
  );
};
