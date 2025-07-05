import { Link } from 'react-router-dom';
import logo from "@/assets/LandingPage/Welfare/WellfareLogo.png";
import Button from "@/pages/Components/Button";

const WelfareFoundation = () => {
  return (
    <section
      id="network"
      className="mx-auto w-full bg-[#F8F8F8] text-center
        px-[240px] pt-24 pb-24
        max-[1360px]:px-[160px] max-[1360px]:pt-20 max-[1360px]:pb-20
        max-[1024px]:px-[34px] max-[1024px]:pt-24 max-[1024px]:pb-24
        max-[764px]:px-4 max-[764px]:py-10"
    >
      {/* Heading */}
      <h3 className="mb-4 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-normal">
        Brought to You by
      </h3>

      <h2 className="mb-6 text-2xl sm:text-4xl lg:text-5xl font-semibold max-[764px]:text-2xl">
        Hardcore Sports Welfare Foundation
      </h2>

      {/* Description */}
      <p className="mx-auto mb-4 max-w-[1350px] text-base sm:text-lg  md:text-xl lg:text-2xl leading-relaxed text-[#4B4B4B] font-normal">
        Hardcore Sports Welfare Foundation&nbsp;
        <span className="font-semibold text-red-500">(HSWF.Network)</span>
        &nbsp;is a not-for-profit initiative committed to making sports more accessible, inclusive, and impactful across India.
      </p>

      <p className="mx-auto mt-10 mb-4 max-w-4xl lg:max-w-[70rem] text-base sm:text-lg lg:text-2xl  leading-relaxed text-[#4B4B4B]">
        From training grassroots coaches and supporting community clubs to organizing events that
        inspire youth participation, HSWF empowers local ecosystems through sports.
      </p>

      <p className="mx-auto mb-4  text-lg sm:text-xl lg:text-2xl font-semibold leading-relaxed text-[#4B4B4B]">
        We believe Sports is not just Play—it’s a pathway to Leadership, Health and Unity.
      </p>

      <p className="mx-auto my-6 max-w-[60rem] text-lg sm:text-xl xl:text-2xl font-semibold text-[#000000] tracking-wide">
        Enabling clubs • Supporting Players • Building Community through Sport.
      </p>

      {/* Cards Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8 items-stretch justify-center">
        
        {/* Logo card */}
        <div className="flex flex-col items-center justify-center bg-white rounded-[12px] p-6 h-full">
          <img
            src={logo}
            alt="HSWF Logo"
            className="h-12 sm:h-16 md:h-20 lg:h-24 max-[910px]:w-[200px] max-[910px]:h-auto max-[350px]:w-[100px] max-[350px]:h-auto mx-auto"
          />
        </div>

        {/* Legal card */}
        <div className="flex flex-col justify-center bg-white rounded-[12px] p-6 h-full text-left text-sm sm:text-base text-gray-600">
          <h4 className="mb-2 text-base sm:text-lg md:text-xl font-semibold">
            Legal &amp; Registration Details
          </h4>
          <p><strong>PAN</strong> – AAGCH5442Q</p>
          <p><strong>Section 12A &amp; 80G</strong> – AAGCH5442QE20221</p>
          <p><strong>CIN</strong> – U92400DL2022NPL406386</p>
          <p><strong>Niti Aayog</strong> – DL/2022/0332632</p>
        </div>

        {/* CTA card */}
        <div className="flex flex-col justify-center bg-white rounded-[12px] p-6 h-full text-center">
          <Link
            to="https://hswf.network/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button

              text="Visit HSWF.Network"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WelfareFoundation;
