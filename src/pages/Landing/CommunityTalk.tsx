// src/components/CommunityTalks/CommunityTalks.tsx
import { useEffect, useRef } from 'react';

import avatar1 from '@/assets/LandingPage/CommunityTalks/Avatar1.png';
import avatar2 from '@/assets/LandingPage/CommunityTalks/avatar4.png';
import avatar3 from '@/assets/LandingPage/CommunityTalks/avatar2.png';
import avatar4 from '@/assets/LandingPage/CommunityTalks/Avatar2.png';
import avatar5 from '@/assets/LandingPage/CommunityTalks/Tempavatar.png';
import quoteIcon from '@/assets/LandingPage/CommunityTalks/Vector2.png';

interface Testimonial {
  name: string;
  location: string;
  text: string;
  avatar: string;
}

const data: Testimonial[] = [
  {
    name: 'Anita, Mother',
    location: 'Noida',
    text: '“For the first time, I saw my daughter leave her phone and run barefoot playing kho-kho. That one moment was worth everything. We forgot what real fun looked like — Bond Over Sports brought it back.” ',
    avatar: avatar1,
  },
  {
    name: 'Rahul, Younger Brother',
    location: 'Noida',
    text: '“It wasn’t about winning or losing. It was about playing with my elder brother after years. Same game, same fights, but this time… it felt good. We needed this.” ',
    avatar: avatar2,
  },
  {
    name: 'Salma , Grandmother',
    location: 'Delhi',
    text: '“I used to play lagori as a child. Yesterday, I played it again with my grandchildren. Generations apart — but one game brought us together. That’s what matters.”',
    avatar: avatar3,
  },
  {
    name: 'Deepak, Working Professional',
    location: 'Ghaziabad',
    text: '“I spend my week staring at screens. For once, I spent my Sunday chasing a ball with strangers who felt like friends by the end. No competition. Just connection.” ',
    avatar: avatar4,
  },
  {
    name: 'Pooja & Nikhil, Couple',
    location: 'Noida',
    text: '“We joined just to see what’s happening. Ended up playing seven stones with kids and uncles from the colony. No awkwardness, no formality. Just people. Just play. Just happiness.” ',
    avatar: avatar5,
  },
];

const doubled = [...data, ...data];

const CommunityTalks: React.FC = () => {
  const wrap = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  /* ---------- infinite loop ---------- */
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

  /* ---------- drag-to-scroll ---------- */
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

  /* ---------- JSX ---------- */
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
          mb-6 font-extrabold text-[64px]
          max-[1360px]:text-[56px]
          max-[1060px]:text-[48px]
          max-[764px]:text-[32px]
        "
      >
        Our Community Talks
      </h2>

      {/* scroll wrapper */}
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
                w-[500px] rounded-[24px] bg-white px-[32px] pb-[50px] pt-[32px] text-left
                shadow-[0_4px_12px_rgba(0,0,0,0.05)]
                max-[764px]:w-[70vw] max-[764px]:px-[20px] max-[764px]:pb-[42px]
                max-[350px]:pb-[24px]
              "
            >
              {/* header */}
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
                  className="
                    w-[64px]
                    max-[764px]:w-[48px]
                    max-[530px]:w-[40px]
                    max-[450px]:hidden
                  "
                />
              </div>

              <p
                className="
                  whitespace-normal break-words
                  text-[20px] leading-[1.5] text-[#374151]
                  max-[764px]:text-[16px] max-[350px]:text-[12px]
                "
              >
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