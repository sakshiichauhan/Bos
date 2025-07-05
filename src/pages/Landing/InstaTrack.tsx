import { useRef, useState, type FC, type MouseEvent } from "react";
import { Link } from "react-router-dom";

import videoData from "@/VideoData";
import type { VideoData, ReelPoster } from "@/types/video";
import logo from "@/assets/LandingPage/Logos/InstaIcon.png";
import placeholder from "@/assets/LandingPage/Videos/samplePlaceholder.jpg";

import Reel1 from "@/assets/LandingPage/Videos/reel1.png";
import Reel2 from "@/assets/LandingPage/Videos/reel2.png";
import Reel3 from "@/assets/LandingPage/Videos/reel3.png";
import Reel4 from "@/assets/LandingPage/Videos/reel4.png";
import Reel5 from "@/assets/LandingPage/Videos/reel5.png";
import Reel6 from "@/assets/LandingPage/Videos/reel6.png";

/* -------------------------------------------------------------------------- */

const reelPoster: ReelPoster[] = [
  { id: 1, url: Reel1 },
  { id: 2, url: Reel2 },
  { id: 3, url: Reel3 },
  { id: 4, url: Reel4 },
  { id: 5, url: Reel5 },
  { id: 6, url: Reel6 },
];

/* -------------------------------------------------------------------------- */

const InstaFastTrack: FC = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const drag = useRef({ startX: 0, scrollLeft: 0 });

  /* ------------------------------ helpers ------------------------------- */
  const togglePlay = (id: number) => {
    const current = videoRefs.current[id];
    if (!current) return;

    // pause everything else
    Object.entries(videoRefs.current).forEach(([key, vid]) => {
      if (key !== String(id) && vid && !vid.paused) vid.pause();
    });

    if (current.paused) {
      current.muted = false;
      current.play();
      setPlayingId(id);
    } else {
      current.pause();
      setPlayingId(null);
    }
  };

  const handleEnded = (id: number) =>
    setPlayingId((p) => (p === id ? null : p));

  /* --------------------------- drag-to-scroll --------------------------- */
  const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!scrollerRef.current) return;
    setIsDragging(true);
    drag.current.startX = e.pageX - scrollerRef.current.offsetLeft;
    drag.current.scrollLeft = scrollerRef.current.scrollLeft;
  };

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollerRef.current.offsetLeft;
    const walk = (x - drag.current.startX) * 2;
    scrollerRef.current.scrollLeft = drag.current.scrollLeft - walk;
  };

  const stopDrag = () => setIsDragging(false);

  /* -------------------------------- UI --------------------------------- */
  return (
    <section
      id="insta"
      className="
        mx-auto bg-[#FEFEFE]
        py-[clamp(40px,8vw,84px)]
        px-[clamp(16px,12vw,248px)]
      "
    >
      {/* ----------------------------------------------------------------- */}
      {/*  Header / copy block                                             */}
      {/* ----------------------------------------------------------------- */}
      <div
        className="
          flex flex-wrap items-start
          gap-[160px] max-[1700px]:gap-[34px]
          mb-[clamp(24px,4vw,40px)]
        "
      >
        <div>
          <h2 className="font-semibold text-[clamp(40px,4vw,48px)]">
            BOS Insta Fast Track
          </h2>

          <p
            className="
      mt-[6px] max-[784px]:mt-[4px]
      text-[clamp(20px,2vw,28px)] text-gray-600
    "
          >
            Quick Glimpses. Real Stories.All Heart.
          </p>
        </div>

        <div className="max-w-[585px] text-[clamp(14px,1.5vw,20px)] text-gray-600">
          <p>
            Catch quick moments of joy, grit, and celebration — raw, real, and
            rooted in community. Feel the spirit of BOS in every scroll.
          </p>

          <Link
            to="https://www.instagram.com/bond.oversports/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="
                mt-[12px] inline-flex items-center gap-[8px] font-medium
                rounded-[24px] bg-white
                py-[clamp(6px,1vw,8px)] px-[clamp(16px,2vw,24px)]
                text-[clamp(14px,1.5vw,20px)]
                  border-2 border-solid border-[#DFDFDF] 
                      
                transition-colors duration-200 hover:bg-gray-100
              "
            >
              <img
                src={logo}
                alt="Instagram"
                className="
                  w-[24px] h-[24px]
                  max-[784px]:w-[16px] max-[784px]:h-[16px]
                "
              />
              Follow&nbsp;Us
            </button>
          </Link>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className={`
          flex overflow-x-auto gap-[clamp(16px,3vw,32px)]
          snap-x snap-mandatory pb-[16px]
          ${isDragging ? "cursor-grabbing" : "cursor-grab"}
          no-scrollbar
        `}
        style={{ marginRight: "calc(-1 * clamp(16px,12vw,248px))" }}
        onMouseDown={onMouseDown}
        onMouseLeave={stopDrag}
        onMouseUp={stopDrag}
        onMouseMove={onMouseMove}
      >
        {videoData.map((video: VideoData) => {
          const poster =
            reelPoster.find((r) => r.id === video.id)?.url ?? placeholder;
          const isPlaying = playingId === video.id;

          return (
            <div
              key={video.id}
              className={`
                flex-none relative overflow-hidden
                w-[clamp(134px,18vw,270px)]
                max-[784px]:w-[134px]         
                aspect-[9/16]
                rounded-[12px] snap-start bg-gray-200
                ${isPlaying ? "border-[4px]" : ""}
              `}
              style={
                isPlaying
                  ? {
                      borderImage:
                        "linear-gradient(135deg,#F43F5E 0%,#F97316 25%,#FACC15 50%,#10B981 75%,#3B82F6 100%) 1",
                    }
                  : undefined
              }
            >
              <video
                ref={(el) => {
                  videoRefs.current[video.id] = el;
                }}
                poster={poster}
                muted
                playsInline
                src={video.url}
                width={180}
                height={320}
                className="h-full w-full rounded-[12px] object-cover"
                onClick={() => togglePlay(video.id)}
                onEnded={() => handleEnded(video.id)}
              />

              {/* play overlay ---------------------------------------------- */}
              {(!isPlaying || videoRefs.current[video.id]?.paused) && (
                <div
                  className="
                    pointer-events-none absolute top-1/2 left-1/2
                    -translate-x-1/2 -translate-y-1/2
                  "
                  onClick={() => togglePlay(video.id)}
                >
                  <svg viewBox="0 0 24 24" width="48" height="48">
                    <circle
                      cx="12"
                      cy="12"
                      r="12"
                      fill="rgba(254,254,254,0.40)"
                    />
                    <path d="M9 7v10l8-5z" fill="rgba(254,254,254,0.80)" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default InstaFastTrack;
