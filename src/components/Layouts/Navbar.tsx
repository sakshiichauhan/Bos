import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '../../assets/LandingPage/Logos/Logo.png';
import Button from '@/Pages/Components/Button';


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkColor = location.pathname === '/' ? 'text-white' : 'text-black';

  return (
    <div className={`fixed top-0 left-0 w-full z-[100000000000] transition-all duration-300 ${scrolled ? 'bg-white/20 backdrop-blur-md py-2' : 'bg-transparent py-4'} px-[clamp(16px,10vw,240px)]`}>
      <div className="flex justify-between items-center flex-wrap">
        <Link to="/" className="flex-shrink-0">
          <img src={Logo} alt="BOS Logo" className={`h-auto w-[clamp(100px,10vw,163px)] ${scrolled ? 'w-[140px]' : ''}`} />
        </Link>

        {/* Nav Links */}
        <nav className={`hidden md:flex gap-6 items-center uppercase text-[clamp(10px,1vw,16px)] ${scrolled ? 'text-black' : 'text-white'}`}>
          <a href="#about" className={linkColor} onClick={() => setIsMenuOpen(false)}>ABOUT</a>
          <a href="#events" className={linkColor} onClick={() => setIsMenuOpen(false)}>EVENTS</a>
          <a href="#joinas" className={linkColor} onClick={() => setIsMenuOpen(false)}>JOIN AS</a>
          <a href="#sponser" className={linkColor} onClick={() => setIsMenuOpen(false)}>SPONSORS</a>
          <a href="#partners" className={linkColor} onClick={() => setIsMenuOpen(false)}>PARTNERS</a>
          <a href="#insta" className={linkColor} onClick={() => setIsMenuOpen(false)}>INSTA TRACK</a>
          <a href="#network" className={linkColor} onClick={() => setIsMenuOpen(false)}>HSWF.NETWORK</a>
        </nav>

        {/* Join Button */}
        <div className="hidden md:block">
          <Button
            className="text-[clamp(14px,1.5vw,24px)] font-medium py-[clamp(6px,1.3vw,12px)] px-[clamp(14px,2vw,32px)] rounded-lg border-2 border-transparent bg-white text-black hover:bg-gray-200 transition-all duration-300"
            text="Join"
            onClick={() => navigate("/join")}
          />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden ml-auto">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white z-[1001]">
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className={`flex flex-col gap-4 mt-4 md:hidden ${scrolled ? 'text-black' : 'text-white'} text-sm uppercase`}>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
          <a href="#events" onClick={() => setIsMenuOpen(false)}>EVENTS</a>
          <a href="#joinas" onClick={() => setIsMenuOpen(false)}>JOIN AS</a>
          <a href="#sponser" onClick={() => setIsMenuOpen(false)}>SPONSORS</a>
          <a href="#partners" onClick={() => setIsMenuOpen(false)}>PARTNERS</a>
          <a href="#insta" onClick={() => setIsMenuOpen(false)}>INSTA TRACK</a>
          <a href="#network" onClick={() => setIsMenuOpen(false)}>HSWF.NETWORK</a>
          <Button
            className="button-rainbow"
            text="Join"
            onClick={() => {
              setIsMenuOpen(false);
              navigate("/join");
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
