import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '../../assets/LandingPage/Logos/bosLogo.png';
import { Button } from '../ui/button';

export default function Navbar() {
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
    <div
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${scrolled ? 'bg-white/20 backdrop-blur-md py-2 shadow-md' : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-[1440px] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mx-auto flex justify-between items-center flex-wrap">
        <Link to="/" className="flex items-center">
          <img
            src={Logo}
            alt="BOS Logo"
            className={`transition-all duration-300 ${scrolled ? 'w-[140px]' : 'w-[163px]'
              }`}
          />
        </Link>

        <nav
          className={`hidden md:flex gap-6 items-center transition-colors ${scrolled ? 'text-black' : 'text-white'
            }`}
        >
          {[
            { href: '#about', label: 'ABOUT' },
            { href: '#events', label: 'EVENTS' },
            { href: '#joinas', label: 'JOIN AS' },
            { href: '#sponser', label: 'SPONSERS' },
            { href: '#partners', label: 'PARTNERS' },
            { href: '#insta', label: 'INSTA TRACK' },
            { href: '#network', label: 'HSWF.NETWORK' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`uppercase font-medium text-sm hover:underline ${linkColor}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            className={`px-6 py-2 text-lg md:text-xl font-semibold border rounded-lg transition-all duration-300 ${scrolled
                ? 'text-black border-black'
                : 'text-white border-white hover:bg-white hover:text-black'
              }`}
            onClick={() => navigate('/join')}
          >Join</Button>
        </div>

        <button
          className="md:hidden ml-auto text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-black px-6 py-4 space-y-4">
          {[
            { href: '#about', label: 'ABOUT' },
            { href: '#events', label: 'EVENTS' },
            { href: '#joinas', label: 'JOIN AS' },
            { href: '#sponser', label: 'SPONSERS' },
            { href: '#partners', label: 'PARTNERS' },
            { href: '#insta', label: 'INSTA TRACK' },
            { href: '#network', label: 'HSWF.NETWORK' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-base font-medium uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <Button
            className="w-full mt-4 px-4 py-2 text-white bg-black rounded-lg text-center"
            onClick={() => {
              setIsMenuOpen(false);
              navigate('/join');
            }}
          >Join</Button>
        </div>
      )}
    </div>
  );
}

