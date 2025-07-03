import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import Logo from "@/assets/LandingPage/Logos/Logo.png";
import Button from "@/pages/Components/Button";



const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = isHome && !scrolled ? 'text-white' : 'text-black';

  const navLinks = [
    { href: '#about', label: 'ABOUT' },
    { href: '#events', label: 'EVENTS' },
    { href: '#joinas', label: 'JOIN AS' },
    { href: '#sponser', label: 'SPONSERS' },
    { href: '#partners', label: 'PARTNERS' },
    { href: '#insta', label: 'INSTA TRACK' },
    { href: '#network', label: 'HSWF.NETWORK' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[10000] transition-all duration-300 ${
        scrolled
          ? 'bg-white/10 backdrop-blur-xl shadow-sm py-[6px]'
          : 'bg-transparent py-[clamp(12px,2vw,16px)]'
      } px-[clamp(16px,10vw,240px)] md:px-[clamp(40px,15vw,240px)]`}
    >
      <div className="flex justify-between items-center flex-wrap w-full">

        <Link to="/" className="">
          <img
            src={Logo}
            alt="Logo"
            className={` w-[clamp(100px,10vw,163px)] ${
              scrolled ? 'w-[clamp(90px,9vw,140px)]' : ''
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 flex-wrap">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`uppercase font-normal text-[clamp(10px,1vw,18px)] transition-colors duration-300 ${textColor}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Join Button (Visible on all screens) */}
        <div className="block">
          <Button
            className={`transition-all bg-white duration-300 font-medium border-2 border-transparent rounded-lg cursor-pointer z-10 overflow-hidden ${
              scrolled
                ? 'text-black text-[14px] sm:text-[16px] md:text-[18px] px-4 py-2'
                : 'text-gray-900 text-[clamp(14px,1.5vw,24px)] px-[clamp(14px,2vw,32px)] py-[clamp(6px,1.3vw,12px)]'
            }`}
            text="Join"
            onClick={() => navigate('/join')}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;