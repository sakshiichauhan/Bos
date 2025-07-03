// LetsTalk.tsx
import React from 'react';

/* ---------- local images ---------- */
/* Adjust the paths below to match your folder structure */
import phone    from "@/assets/Form/Sponsor/LetsTalk/call.png";
import message  from "@/assets/Form/Sponsor/LetsTalk/Message.png";
import leftImg  from "@/assets/Form/Sponsor/LetsTalk/left.png";
import rightImg from "@/assets/Form/Sponsor/LetsTalk/right.png";


const LetsTalk: React.FC = () => (
  <section className="relative text-center py-4">
    {/* ============ central block ============ */}
    <div
      className="
        flex flex-col items-center gap-4
        px-4 py-4                                /*  16 × 16 — <= 764 px  */
        min-[764px]:px-[32px] min-[764px]:py-[30px]   /*  32 × 30 — 765-1159 */
        min-[1300px]:px-[250px] min-[1300px]:py-[60px]/* 250×60 — 1300-1549 */
        min-[1550px]:px-[300px] min-[1550px]:py-[60px]/* 300×60 — 1550-1799 */
        min-[1800px]:px-[338px] min-[1800px]:py-[99px]/* 338×99 — ≥ 1800 px */
      "
    >
      {/* heading */}
      <h2
        className="
          font-bold
          text-[40px]                    /* <= 764 px */
          min-[1160px]:text-[48px]       /* 1160-1549 */
          min-[1550px]:text-[52px]       /* 1550-1799 */
          min-[1800px]:text-[64px]       /* ≥ 1800 px */
        "
      >
        Let’s Talk!
      </h2>

      {/* paragraph */}
      <p
        className="
          max-w-[656px]
          text-[14px]                    /* <= 630 px */
          min-[764px]:text-[16px]        /* 764-1159 */
          min-[1160px]:text-[18px]       /* 1160-1549 */
          min-[1550px]:text-[20px]       /* 1550-1799 */
          min-[1800px]:text-[24px]       /* ≥ 1800 px */
        "
      >
        For detailed sponsorship decks, customised packages or CSR partnership
        discussions:
      </p>

      {/* --- phone & e-mail chips --- */}
      <div
        className="
          flex flex-col min-[630px]:flex-row items-center
          gap-4 min-[630px]:gap-6
        "
      >
        {/* phone */}
        <span
          className="
            flex items-center gap-2 border rounded-full
            px-6 py-3
            text-[14px]                     /* <= 630 px */
            min-[764px]:text-[16px]         /* 764-1159 */
            min-[1160px]:text-[18px]        /* 1160-1549 */
            min-[1550px]:text-[20px]        /* 1550-1799 */
            min-[1800px]:text-[24px]        /* ≥ 1800 px */
            border-[#3C3C434A]
          "
        >
          <img src={phone} alt="phone" className="w-[18px] h-[18px]" />
          +91 9805 2345 23
        </span>

        {/* vertical divider (hidden < 630 px) */}
        <div
          className="
            hidden min-[630px]:block
            w-px
            h-[24px] min-[1160px]:h-[24px] min-[1550px]:h-[38px]
            bg-[#3C3C434A]
          "
        />

        {/* e-mail */}
        <span
          className="
            flex items-center gap-2 border rounded-full
            px-6 py-3
            text-[14px]                     /* <= 630 px */
            min-[764px]:text-[16px]         /* 764-1159 */
            min-[1160px]:text-[18px]        /* 1160-1549 */
            min-[1550px]:text-[20px]        /* 1550-1799 */
            min-[1800px]:text-[24px]        /* ≥ 1800 px */
            border-[#3C3C434A]
          "
        >
          <img src={message} alt="message" className="w-[21px] h-[17px]" />
          neeraj@bondoversports.com
        </span>
      </div>
    </div>

    {/* ============ floating side graphics ============ */}
    {/* LEFT */}
    <img
      src={leftImg}
      alt=""
      className="
        pointer-events-none select-none
        absolute left-0
        top-[5%]  -translate-y-[5%]   w-[40px]   /* base */
        min-[630px]:w-[70px]
        min-[764px]:top-[15%]  min-[764px]:-translate-y-[15%] min-[764px]:w-[130px]
        min-[900px]:w-[150px]
        min-[1160px]:top-[20%] min-[1160px]:-translate-y-[20%] min-[1160px]:w-[200px]
        min-[1300px]:w-[250px]
        min-[1550px]:top-[50%] min-[1550px]:-translate-y-1/2  min-[1550px]:w-[300px]
        h-auto
      "
    />

    {/* RIGHT */}
    <img
      src={rightImg}
      alt=""
      className="
        pointer-events-none select-none
        absolute right-0
        top-[5%]  -translate-y-[5%]   w-[40px]   /* base */
        min-[630px]:w-[70px]
        min-[764px]:top-[15%]  min-[764px]:-translate-y-[15%] min-[764px]:w-[130px]
        min-[900px]:w-[150px]
        min-[1160px]:top-[20%] min-[1160px]:-translate-y-[20%] min-[1160px]:w-[200px]
        min-[1300px]:w-[250px]
        min-[1550px]:top-[50%] min-[1550px]:-translate-y-1/2  min-[1550px]:w-[300px]
        h-auto
      "
    />
  </section>
);

export default LetsTalk;