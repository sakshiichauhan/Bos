// src/components/CommunityTalks/CommunityTalks.tsx
import { useEffect, useRef } from 'react';

import avatar1 from '@/assets/LandingPage/CommunityTalks/Rekha.png';
import avatar2 from '@/assets/LandingPage/CommunityTalks/avatar4.png';
import avatar3 from '@/assets/LandingPage/CommunityTalks/avatar3.png';
// import avatar4 from '@/assets/LandingPage/CommunityTalks/avatar3.png';
// import avatar5 from '@/assets/LandingPage/CommunityTalks/Tempavatar.png';
import quoteIcon from '@/assets/LandingPage/CommunityTalks/Vector2.png';

interface Testimonial {
  name: string;
  location: string;
  text: string;
  avatar: string;
}

const data: Testimonial[] = [
  {
    name: 'Rekha, Parent',
    location: 'Noida,UP',
    text: 'My daughter played kho-kho for the first time. BOS created that platform — I’ll never forget it. ',
    avatar: avatar1,
  },
  {
    name: 'Shubham, Player',
    location: 'Noida, UP',
    text: 'I got to represent my locality in football. No politics, no fees, just pure sport. ',
    avatar: avatar2,
  },
  {
    name: 'Anjali, Volunteer',
    location: 'Delhi',
    text: 'As a volunteer, I felt like I was doing something that really mattered. Can’t wait for the next event.',
    avatar: avatar3,
  },
];

const doubled = [...data, ...data];

const CommunityTalks: React.FC = () => {
  const wrap = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;

    const loop = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      if (scrollLeft + clientWidth >= scrollWidth - 1)
        el.scrollLeft = scrollLeft - scrollWidth / 2;
      if (scrollLeft <= 0) el.scrollLeft = scrollLeft + scrollWidth / 2;
    };

    el.addEventListener('scroll', loop);
    el.scrollLeft = el.scrollWidth / 4;
    return () => el.removeEventListener('scroll', loop);
  }, []);

  const onDown = (e: React.MouseEvent<HTMLDivElement>) => {
    dragging.current = true;
    startX.current = e.pageX - (wrap.current?.offsetLeft ?? 0);
    startScroll.current = wrap.current?.scrollLeft ?? 0;
    wrap.current?.classList.add('cursor-grabbing');
    e.preventDefault();
  };

  const endDrag = () => {
    dragging.current = false;
    wrap.current?.classList.remove('cursor-grabbing');
  };

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    const x = e.pageX - (wrap.current?.offsetLeft ?? 0);
    const walk = (x - startX.current) * 1.5;
    if (wrap.current) wrap.current.scrollLeft = startScroll.current - walk;
    e.preventDefault();
  };

  return (
    <section
      className="
        relative overflow-hidden bg-[#F8F8F8] text-center
        py-[96px] px-[240px]
        max-[1360px]:py-[80px] max-[1360px]:px-[90px]
        max-[1060px]:py-[64px] max-[1060px]:px-[32px]
        max-[764px]:py-[48px]  max-[764px]:px-[16px]
        max-[500px]:py-[16px]  max-[500px]:px-0
      "
    >
      <h2
        className="
          mb-6 font-semibold text-[64px]
          max-[1360px]:text-[56px]
          max-[1060px]:text-[48px]
          max-[764px]:text-[32px]
        "
      >
        Our Community Talks
      </h2>

      <div
        ref={wrap}
        onMouseDown={onDown}
        onMouseLeave={endDrag}
        onMouseUp={endDrag}
        onMouseMove={onMove}
        className="
          select-none cursor-grab
          w-screen overflow-x-auto whitespace-nowrap
          snap-x snap-mandatory px-[24px] scrollbar-hide
        "
      >
        <div className="flex w-max flex-nowrap gap-[24px]">
          {doubled.map((t, i) => (
            <div
              key={i}
              className="
                snap-start flex-none
                w-[500px] rounded-[24px] bg-white px-[32px] pb-[32px] pt-[32px] text-left
                shadow-[0_4px_12px_rgba(0,0,0,0.05)]
                max-[764px]:w-[70vw] max-[764px]:px-[20px] max-[764px]:pb-[42px]
                max-[350px]:pb-[24px]
              "
            >
              <div className="mb-[28px] flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-[48px] w-[48px] rounded-full object-cover max-[764px]:h-[36px] max-[764px]:w-[36px]"
                  />
                  <div>
                    <strong className="block text-[20px] font-semibold max-[764px]:text-[16px] max-[350px]:text-[14px]">
                      {t.name}
                    </strong>
                    <p className="text-[16px] text-gray-500 max-[764px]:text-[12px]">
                      {t.location}
                    </p>
                  </div>
                </div>
                <img
                  src={quoteIcon}
                  alt="quote"
                  className="w-[64px] max-[764px]:w-[48px] max-[530px]:w-[40px] max-[450px]:hidden"
                />
              </div>

              <p className="whitespace-normal break-words text-[20px] leading-[1.5] text-[#374151] max-[764px]:text-[16px] max-[350px]:text-[12px]">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityTalks;