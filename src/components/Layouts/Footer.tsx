import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

import logo from "@/assets/Footer/Logo2.png";
import phone from "@/assets/Footer/phone.png";
import mail from "@/assets/Footer/mail.png";
import location from "@/assets/Footer/location.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-xs sm:text-sm lg:text-base">
      {/* 3-column Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-4 md:px-16 lg:px-[calc((100vw-3*477px)/2)] py-8 md:py-12">

        
        {/* Logo Block */}
        <div className="bg-[#FEFEFE]/10 rounded-lg flex items-center justify-center py-8 md:py-12 h-full">
          <img
            src={logo}
            alt="Bond Over Sports"
            className="w-40 md:w-44"
            loading="lazy"
          />
        </div>

        {/* Contact & Socials Block */}
        <div className="bg-[#FEFEFE]/10 rounded-lg py-8 md:py-12 px-4 flex flex-col justify-center items-center text-center space-y-3 h-full">
          <p className="flex items-center gap-2">
            <img src={phone} alt="Phone" className="w-4 h-4" /> +91 80760 70025
          </p>
          <p className="flex items-center gap-2">
            <img src={mail} alt="Mail" className="w-4 h-4" /> hello@bondoversports.com
          </p>
          <div className="flex gap-3 text-xl md:text-2xl pt-2">
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

        {/* Address Block */}
        <div className="bg-[#FEFEFE]/10 rounded-lg py-8 md:py-12 px-4 flex flex-col justify-center items-center text-center space-y-1 h-full">
          <a
            href="https://maps.app.goo.gl/5Mbx4aYvQgkt6ay98"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img src={location} alt="Location" className="w-8 h-auto mx-auto mb-3" />
            <p className="font-semibold text-[#F0F0F0]">Bond Over Sports</p>
            <p>601, Magnus Tower, Sector 73</p>
            <p>Noida, Uttar Pradesh, India 201307</p>
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[3px] bg-[#333]" />

      {/* Bottom Bar */}
<div className="flex h-[64px] flex-wrap justify-between items-center gap-2 text-center text-[10px] sm:text-base lg:text-base px-4 md:px-16 lg:px-[64px] py-0 text-[#ccc]">

        <span>
          © Bond Over Sports | Powered by{' '}
          <a
            href="https://hswf.network/"
            className="hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            HSWF.Network
          </a>
          <span className="block sm:inline ">
            {' '} - Initiative of{' '}
            <a
              href="https://alpheric.com/"
              className="font-bold  underline underline-offset-1 hover:text-white"
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
