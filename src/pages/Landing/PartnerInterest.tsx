

import { useNavigate } from 'react-router-dom';

import eduIcon from '@/assets/Icons/PartnerInterest/ic1.png';
import cultureIcon from '@/assets/Icons/PartnerInterest/ic2.png';
import sportsIcon from '@/assets/Icons/PartnerInterest/ic3.png';
import govIcon from '@/assets/Icons/PartnerInterest/ic4.png';
import nonprofitIcon from '@/assets/Icons/PartnerInterest/ic5.png';
import Button from '../Components/Button';

type PartnerColor = 'red' | 'orange' | 'green' | 'blue' | 'purple';

interface Partner {
  title: string;
  icon: string;
  color: PartnerColor;
}

const partners: Partner[] = [
  { title: 'Educational Institutions', icon: eduIcon, color: 'red' },
  { title: 'Cultural & Heritage Foundations', icon: cultureIcon, color: 'orange' },
  { title: 'Sports Federations', icon: sportsIcon, color: 'green' },
  { title: 'Government Bodies', icon: govIcon, color: 'blue' },
  { title: 'Non-Profits & Youth Clubs', icon: nonprofitIcon, color: 'purple' },
];

const gradients: Record<PartnerColor, string> = {
  red: 'linear-gradient(#fff,#fff) padding-box,linear-gradient(to bottom,#f87171,#ffffff) border-box',
  orange: 'linear-gradient(#fff,#fff) padding-box,linear-gradient(to bottom,#fbbf24,#ffffff) border-box',
  green: 'linear-gradient(#fff,#fff) padding-box,linear-gradient(to bottom,#34d399,#ffffff) border-box',
  blue: 'linear-gradient(#fff,#fff) padding-box,linear-gradient(to bottom,#60a5fa,#ffffff) border-box',
  purple: 'linear-gradient(#fff,#fff) padding-box,linear-gradient(to bottom,#a78bfa,#ffffff) border-box',
};

const PartnersSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="partners"
      className="bg-[#F8F8F8] text-center px-[190px] py-[64px] max-[1360px]:px-[120px] max-[1360px]:py-[48px] max-[1024px]:px-[80px] max-[1024px]:py-[60px] max-[768px]:px-[16px] max-[768px]:py-[40px]"
    >
      <h2 className="mb-4 font-extrabold text-[54px] max-[1360px]:text-[38px] max-[768px]:text-[32px]">
        Our Partners
      </h2>

      <p className="mb-[72px] text-[25px] max-[1360px]:text-[20px] max-[1360px]:mb-[56px] max-[768px]:text-[14px] max-[768px]:mb-[48px]">
        We proudly collaborate with:
      </p>

      <div className="mb-[32px] flex flex-wrap justify-center gap-[24px] max-[1024px]:gap-[20px] max-[768px]:flex-col max-[768px]:gap-[34px]">
        {partners.map(({ title, icon, color }) => (
          <div
            key={title}
            style={{ background: gradients[color] }}
            className="relative flex flex-col justify-start w-[283px] min-h-[232px] px-[24px] pt-[56px] pb-[32px] border-[2px] border-transparent rounded-[16px] font-semibold text-[16px] text-left transition-transform duration-200 hover:-translate-y-1 max-[1360px]:w-[250px] max-[1360px]:pt-[48px] max-[1360px]:pb-[28px] max-[1360px]:text-[15px] max-[1024px]:w-[45%] max-[768px]:w-full max-[768px]:px-[16px] max-[768px]:pt-[40px] max-[768px]:pb-[24px] max-[768px]:text-center"
          >
            <span className="absolute -top-[40px] left-[24px] bg-white p-[14px] rounded-[9px] border border-[#DFDFDF] shadow-md max-[1360px]:-top-[36px] max-[1360px]:p-[12px] max-[1050px]:left-1/2 max-[1050px]:-translate-x-1/2 max-[1050px]:transform max-[1050px]:top-[-40px] max-[768px]:top-[-30px]">
              <img
                src={icon}
                alt={title}
                className="w-[50px] h-[50px] object-contain max-[1360px]:w-[44px] max-[1360px]:h-[44px] max-[768px]:w-[40px] max-[768px]:h-[40px]"
              />
            </span>
            <p className="text-[28px] leading-snug w-[85%] max-[1360px]:text-[24px] max-[1360px]:w-[90%] max-[768px]:text-[20px] max-[768px]:w-full max-[768px]:mt-[24px] max-[768px]:mb-[24px]">
              {title}
            </p>
          </div>
        ))}
      </div>

      <p className="mb-[32px] text-[20px] text-gray-500 max-[1360px]:text-[18px] max-[1360px]:mb-[28px] max-[768px]:text-[14px] max-[768px]:mb-[24px] max-[768px]:px-[16px]">
        Let’s work together to create impact where it matters most—on the ground.
      </p>

      <Button
        className="px-[clamp(16px,4vw,32px)] py-[clamp(10px,2vw,16px)] text-[clamp(16px,3vw,24px)] font-semibold shadow-[0_3px_4px_rgba(0,0,0,0.4)] max-[764px]:text-[clamp(14px,3vw,18px)] max-[500px]:text-[clamp(12px,3vw,16px)] max-[500px]:px-[clamp(10px,3vw,16px)] max-[500px]:py-[clamp(6px,1.5vw,10px)]"
        text="Become a Partner"
        onClick={() => navigate('/partners')}
      />
    </section>
  );
};

export default PartnersSection;
