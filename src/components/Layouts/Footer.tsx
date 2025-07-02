
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

import logo from "@/assets/Footer/Logo2.png";
import phone from "@/assets/Footer/phone.png";
import mail from "@/assets/Footer/mail.png";
import location from "@/assets/Footer/location.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-xs sm:text-sm lg:text-base">
      {/* ——— 3 columns ——— */}
      <div className="flex flex-wrap gap-4 md:gap-6 px-4 md:px-16 lg:px-60 py-8 md:py-12">

        {/* Logo */}
        <div className="flex-1 min-w-[240px] bg-[#111] rounded-lg flex items-center justify-center py-8 md:py-12">
          <img
            src={logo}
            alt="Bond Over Sports"
            className="w-40 md:w-44"
            loading="lazy"
          />
        </div>

        {/* Contact & socials */}
        <div className="flex-1 min-w-[240px] bg-[#111] rounded-lg py-8 md:py-12 px-4 flex flex-col items-center">
          <p className="flex items-center gap-2 mb-2">
            <img src={phone} alt="Phone" className="w-4 h-4" /> +91 807 607 0025
          </p>
          <p className="flex items-center gap-2 mb-4">
            <img src={mail} alt="Mail" className="w-4 h-4" /> hello@bondoversports.com
          </p>

          {/* social icons */}
          <div className="flex gap-3 text-xl md:text-2xl">
            <a
              href="https://www.facebook.com/bondoversports"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/bond.oversports"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/bondoversports"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://youtube.com/@bondoversports"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="flex-1 min-w-[240px] bg-[#111] rounded-lg py-8 md:py-12 px-4 text-center">
          <a
            href="https://maps.app.goo.gl/5Mbx4aYvQgkt6ay98"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img src={location} alt="Location" className="w-8 h-auto mx-auto mb-3" />
            <p className="font-semibold">Bond Over Sports</p>
            <p>601, Magnus Tower, Sector 73</p>
            <p>Noida, Uttar Pradesh, India 201307</p>
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[3px] bg-[#333]" />

      {/* Bottom bar */}
      <div className="flex flex-wrap justify-between items-center gap-2 text-center text-[10px] sm:text-xs lg:text-sm px-4 md:px-16 lg:px-60 py-4 text-[#ccc]">
        <span>
          © Bond Over Sports | Powered by{' '}
          <a href="https://hswf.network/" className="hover:text-white" target="_blank" rel="noopener noreferrer">
            HSWF.Network
          </a>
          <span className="block sm:inline">
            {' '}
            - Initiative of{' '}
            <a
              href="https://alpheric.com/"
              className="font-bold hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alpheric
            </a>
          </span>
        </span>

        <div>
          <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
          <span className="mx-1">|</span>
          <Link to="/terms" className="hover:text-white">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
