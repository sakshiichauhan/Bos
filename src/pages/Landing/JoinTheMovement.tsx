import { useNavigate } from 'react-router-dom';
import Button from '@/pages/Components/Button';


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
    contentMaxWidth: 'max-w-[780px]',
  },
  {
    id: 'creator',
    label: 'Join as a',
    title: 'Content Creator',
    subtitle: 'Capture. Share. Inspire',
    imgLg: im3,
    imgSm: im3F,
    cta: 'Join as a Creator',
    contentMaxWidth: 'max-w-[780px]',
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
    contentMaxWidth: 'max-w-[780px]',
  },
  {
    id: 'supporter',
    label: 'Join as an',
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
          <p className="text-[16px] sm:text-[18px] md:text-[18px] lg:text-[24px] text-[#000000] font-medium">
            Be part of something bigger than the game.
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

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-[24px] xl:col-span-2">
            {CARDS.slice(3).map((card) => (
              <Card key={card.id} {...card} onClick={() => navigate('/join')} />
            ))}
          </div>
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
      className={`relative bg-white rounded-[24px] shadow-md flex flex-col 
      p-4 sm:p-6 md:p-8 xl:flex-row xl:items-center xl:gap-[24px] 
      xl:px-[24px] xl:pt-[64px] 2xl:px-[32px] 2xl:pt-[74px] 
      ${isOrganiser ? 'xl:items-end' : ''} overflow-hidden`}
    >
      {/* Mobile/Tablet Image */}
      <div className="block xl:hidden mb-4">
        <picture>
          <img
            src={imgSm}
            alt={title}
            className="w-full max-h-[300px] object-contain mx-auto"
          />
        </picture>
      </div>

      {/* Text content */}
      <div className={`flex flex-col ${contentMaxWidth} space-y-2`}>
      <span
  className="text-[16px] sm:text-[18px] xl:text-[20px] font-normal bg-clip-text text-transparent"
  style={{
    backgroundImage:
      'linear-gradient(to right, red 0%, orange 15%, yellow 25%, green 35%, blue 40%, indigo 60%, violet 80%)',
  }}
>
  Join as a
</span>

        <h3 className="text-[24px] sm:text-[28px] xl:text-[32px] font-semibold text-[#111827]">
          {title}
        </h3>
        <p className="text-[14px] sm:text-[16px] xl:text-[18px] text-[#4B4B4B]">
          {subtitle}
        </p>
        <div className="pt-3">
          <Button text={cta} onClick={onClick} className="w-fit text-[16px] px-4 py-2" />
        </div>
      </div>

      {/* Desktop Image */}
      <picture
        className={`pointer-events-none hidden xl:block absolute ${
          isOrganiser ? 'top-[36px] right-0' : 'bottom-0 right-0'
        }`}
      >
        <source media="(min-width:1250px)" srcSet={imgLg} />
        <img
          src={imgSm}
          alt={title}
          className={`object-contain rounded-[18px] ${
            isOrganiser ? 'w-[708px] h-[400px]' : 'max-h-[200px] w-[160px]'
          }`}
        />
      </picture>
    </div>
  );
};