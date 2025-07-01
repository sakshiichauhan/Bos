
import { useNavigate } from 'react-router-dom';

import Button from '@/Pages/Components/Button';
import WhatYouGet from '@/Pages/Components/WhatYouGet';

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
  big?: boolean;
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
  },
  {
    id: 'creator',
    label: 'Join as a',
    title: 'Content Creator',
    subtitle: 'Capture. Share. Inspire',
    imgLg: im3,
    imgSm: im3F,
    cta: 'Join as a Content Creator',
  },
  {
    id: 'organiser',
    label: 'Join as an',
    title: 'Organiser',
    subtitle: 'Host. Connect. Celebrate',
    imgLg: im2,
    imgSm: im2F,
    cta: 'Join as an Organiser',
    big: true,
  },
  {
    id: 'volunteer',
    label: 'Join as a',
    title: 'Volunteer',
    subtitle: 'Support. Coordinate. Make an Impact.',
    imgLg: im4,
    imgSm: im4F,
    cta: 'Join as a Volunteer',
  },
  {
    id: 'supporter',
    label: 'Join as a',
    title: 'Supporter',
    subtitle: 'Support. Celebrate. Spread',
    imgLg: im5,
    imgSm: im5F,
    cta: 'Join as a Supporter',
  },
];

const JoinTheMovement = () => {
  const navigate = useNavigate();

  return (
    <section id="joinas" className="bg-[#F8F8F8] px-4 py-24 md:px-20 lg:px-36 xl:px-60">
      {/* Header */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold md:text-5xl mb-2">Join The Movement</h2>
        <p className="text-lg text-gray-600 md:text-2xl">
          Be part of something bigger than the game.
        </p>
      </div>

      {/* Grid layout */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          {['player', 'creator', 'volunteer'].map((key) => {
            const card = CARDS.find((c) => c.id === key)!;
            return <MovementCard key={card.id} {...card} onClick={navigate} />;
          })}
        </div>
        <div className="flex flex-col gap-6">
          {CARDS.find((c) => c.id === 'organiser') && (
            <MovementCard
              {...CARDS.find((c) => c.id === 'organiser')!}
              className="min-h-[520px]"
              onClick={navigate}
            />
          )}
          {CARDS.find((c) => c.id === 'supporter') && (
            <MovementCard {...CARDS.find((c) => c.id === 'supporter')!} onClick={navigate} />
          )}
        </div>
      </div>

      {/* Additional Section */}
      <WhatYouGet />
    </section>
  );
};

export default JoinTheMovement;

/* ─────────────── Card Component ─────────────── */

interface MovementCardProps extends CardData {
  onClick: (route: string) => void;
  className?: string;
}

const MovementCard = ({
  label,
  title,
  subtitle,
  imgLg,
  imgSm,
  cta,
  big,
  onClick,
  className = '',
}: MovementCardProps) => (
  <div
    className={`relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-md
                p-8 lg:p-10 lg:flex-row ${big ? 'lg:items-end' : 'lg:items-center'} ${className}`}
  >
    {/* Text */}
    <div className={`z-10 flex flex-col space-y-2 ${big ? 'max-w-md' : 'max-w-sm'}`}>
      <span className="text-base font-medium bg-gradient-text md:text-lg">{label}</span>
      <h3 className="text-2xl font-semibold text-gray-900 md:text-3xl">{title}</h3>
      <p className="text-sm text-gray-600 md:text-base">{subtitle}</p>
      <div className="pt-4 md:pt-6">
        <Button
          text={cta}
          onClick={() => onClick('/join')}
          className="px-6 py-3 text-sm md:text-base"
        />
      </div>
    </div>

    {/* Image */}
    <picture
      className={`pointer-events-none select-none lg:absolute ${
        big ? 'right-0 top-9 max-h-[440px]' : 'bottom-0 right-0 max-h-[280px]'
      }`}
    >
      <source media="(min-width:1250px)" srcSet={imgLg} />
      <img
        src={imgSm}
        alt={title}
        className="h-auto w-full max-w-[300px] object-contain"
      />
    </picture>
  </div>
);
