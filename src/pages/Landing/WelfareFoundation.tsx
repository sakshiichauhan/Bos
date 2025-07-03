import { Link } from 'react-router-dom';

import logo from "@/assets/LandingPage/Welfare/WellfareLogo.png";
import Button from "@/pages/Components/Button";

const WelfareFoundation = () => {
  return (
    <section
      id="network"
      className="
        mx-auto w-full bg-[#F8F8F8] text-center
        px-[240px] pt-[clamp(40px,7vw,96px)] pb-[clamp(40px,7vw,96px)]
        max-[1360px]:px-[clamp(16px,8vw,160px)]
        max-[1360px]:pt-[clamp(40px,6vw,80px)]
        max-[1360px]:pb-[clamp(40px,6vw,80px)]
        max-[1024px]:px-[34px]
        max-[1024px]:pt-[clamp(40px,6vw,96px)]
        max-[1024px]:pb-[clamp(40px,6vw,96px)]
        max-[764px]:px-[16px] max-[764px]:py-[40px]"
    >
      <h3 className="mb-[clamp(10px,2vw,20px)] text-[clamp(20px,3vw,40px)] font-normal">
        Brought to You by
      </h3>

      <h2 className="mb-[clamp(16px,3vw,32px)] text-[clamp(32px,4vw,64px)] font-extrabold max-[764px]:text-[32px]">
        Hardcore Sports Welfare Foundation
      </h2>

      <p className="mx-auto mb-[clamp(8px,2vw,16px)] max-w-[52rem] lg:max-w-[60rem] text-[clamp(13px,1.8vw,22px)] lg:text-lg xl:text-xl leading-relaxed lg:leading-[1.6] text-gray-600">
        Hardcore&nbsp;Sports&nbsp;Welfare&nbsp;Foundation&nbsp;
        <span className="font-semibold text-red-500">(HSWF.Network)</span> is a not-for-profit
        initiative committed to making sports more accessible, inclusive, and impactful across India.
      </p>

      <p className="mx-auto mt-[clamp(24px,5vw,48px)] mb-[clamp(8px,2vw,16px)] max-w-[52rem] lg:max-w-[60rem] text-[clamp(13px,1.8vw,22px)] lg:text-lg xl:text-xl leading-relaxed lg:leading-[1.6] text-gray-600">
        From training grassroots coaches and supporting community clubs to organizing events that
        inspire youth participation,&nbsp;HSWF empowers local ecosystems through sports.
      </p>

      <p className="mx-auto mb-[clamp(8px,2vw,16px)] max-w-[52rem] lg:max-w-none text-[clamp(15px,2vw,24px)] lg:text-xl xl:text-2xl font-semibold leading-relaxed lg:leading-[1.5] text-gray-600 lg:whitespace-nowrap">
        We believe sports is not just play—it’s a pathway to leadership, health, and unity.
      </p>

      <p className="mx-auto my-[clamp(12px,4vw,32px)] max-w-[52rem] lg:max-w-[60rem] text-[clamp(15px,2vw,24px)] lg:text-xl xl:text-2xl font-semibold text-[#111827] tracking-wide">
        Enabling clubs • Supporting players • Building community through sport.
      </p>

      <div className="mt-10 flex flex-wrap items-stretch justify-center gap-4">
        {/* Logo box */}
        <div className="flex flex-1 min-w-[340px] max-w-[400px] flex-col items-center justify-center rounded-[12px] bg-white p-6 max-[1550px]:min-w-[240px] max-[1550px]:flex-[1_1_100px]">
          <img
            src={logo}
            alt="HSWF Logo"
            className="h-[clamp(48px,6vw,96px)] max-[1360px]:h-[clamp(44px,5vw,80px)] max-[1024px]:h-[72px] max-[910px]:w-[200px] max-[910px]:h-auto max-[350px]:w-[100px] max-[350px]:h-auto mx-auto"
          />
        </div>

        {/* Legal box */}
        <div className="flex flex-1 min-w-[340px] max-w-[400px] flex-col rounded-[12px] bg-white p-6 text-left max-[1550px]:min-w-[240px] max-[1550px]:flex-[1_1_100px] text-[16px] text-gray-600 max-[1650px]:text-[14px]">
          <h4 className="mb-[clamp(4px,1vw,8px)] text-[clamp(14px,3vw,20px)] font-semibold">
            Legal &amp; Registration Details
          </h4>
          <p><strong>PAN</strong> – AAGCH5442Q</p>
          <p><strong>Section&nbsp;12A&nbsp;&amp;&nbsp;80G</strong> – AAGCH5442QE20221</p>
          <p><strong>CIN</strong> – U92400DL2022NPL406386</p>
          <p><strong>Niti&nbsp;Aayog</strong> – DL/2022/0332632</p>
        </div>

        {/* CTA box */}
        <div className="flex flex-1 min-w-[340px] max-w-[400px] flex-col items-center justify-center rounded-[12px] p-6 max-[1550px]:min-w-[240px] max-[1550px]:flex-[1_1_100px]">
          <Link
            to="https://hswf.network/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button
              className="w-full box-border px-[clamp(20px,6vw,32px)] py-[clamp(12px,3vw,16px)] text-[clamp(16px,3vw,24px)] font-semibold shadow-[0_3px_4px_rgba(0,0,0,0.4)] max-[1650px]:px-[24px] max-[1650px]:py-[14px] max-[1650px]:text-[18px] max-[1550px]:px-[24px] max-[1550px]:py-[12px] max-[1550px]:text-[16px] max-[1024px]:px-[24px] max-[1024px]:py-[8px]  max-[1024px]:text-[14px] max-[910px]:px-[32px] max-[910px]:py-[12px] max-[910px]:text-[18px] max-[764px]:mx-auto max-[764px]:w-fit max-[764px]:px-[16px] max-[764px]:py-[12px] max-[350px]:px-[20px] max-[350px]:py-[6px]  max-[350px]:text-[12px]"
              text="Visit HSWF.Network"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WelfareFoundation;
