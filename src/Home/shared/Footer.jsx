import React from 'react';
import { FaFacebook, FaLinkedinIn} from 'react-icons/fa';
import { FaXTwitter,FaYoutube,FaTiktok  } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className=" px-2 py-6 md:px-8 md:py-10">
      {/* Main Black Container */}
      <div className=" bg-black text-white/80 rounded-3xl p-4  md:p-16">
        
        {/* Top Section: Newsletter */}
        <div className="">
          <h2 className="text-2xl mt-8 md:text-3xl font-semibold  ">Stay updated with Rise news</h2>
          <div className="my-3 relative group">
            <input 
              type="email" 
              placeholder="Your Email Address " 
              className="w-full font-bold bg-[#222222] border-none rounded-full py-[0.9rem] px-6 text-white placeholder-white/40 focus:ring-1 focus:ring-gray-400 outline-none transition-all"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-teal-200/80 p-2 rounded-full text-black/80 hover:scale-105 transition-transform">
              <ArrowUpRight size={21} strokeWidth={2.5} />
            </button>
          </div>

          {/* Social Icons */}
        <div className="flex gap-1 mt-2 items-center flex-wrap">
  {[FaFacebook, FaXTwitter, FaLinkedinIn, FaYoutube, FaTiktok, CiInstagram].map((Icon, idx) => (
    <a
      key={idx}
      href="#"
      className=" px-1.5 py-[2px] bg-white/90 
text-black gap-1.5
        rounded-3xl      
        flex items-center justify-center-safe
        hover:rounded-xl     
        transition-all duration-300 ease-in-out
      "
    >
      <Icon size={13} className="font-bold" />
  <ArrowUpRight size={15}></ArrowUpRight>
    </a>
  ))}
</div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
          {/* Column 1 */}
          <div className="grid grid-cols-2 gap-8">
            <ul className="space-y-3 text-lg font-medium">
              <li><a href="#" className="hover:opacity-60 transition-opacity">Services</a></li>
              <li><a href="#" className="hover:opacity-60 transition-opacity">Work</a></li>
              <li><a href="#" className="hover:opacity-60 transition-opacity">About</a></li>
              <li><a href="#" className="hover:opacity-60 transition-opacity">Culture</a></li>
              <li><a href="#" className="hover:opacity-60 transition-opacity">Meet The Risers</a></li>
            </ul>
            <ul className="space-y-3 text-lg font-medium">
              <li><a href="#" className="hover:opacity-60 transition-opacity">Testimonials</a></li>
              <li><a href="#" className="hover:opacity-60 transition-opacity">Blog & Resources</a></li>
              <li><a href="#" className="hover:opacity-60 transition-opacity">Webinars</a></li>
              <li><a href="#" className="hover:opacity-60 transition-opacity">Careers</a></li>
            </ul>
          </div>

          {/* Column 2: Locations */}
          <div className="flex flex-col space-y-3 text-lg font-medium">
            <a href="#" className="hover:opacity-60">Sheffield</a>
            <a href="#" className="hover:opacity-60">Manchester</a>
            <a href="#" className="hover:opacity-60">London</a>
            <a href="#" className="hover:opacity-60">New York</a>
            <a href="#" className="hover:opacity-60">Contact</a>
          </div>
        </div>

        {/* Bottom Section: Brand Logo */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <h1 className="text-[14vw] md:text-[10vw] font-bold leading-none tracking-tighter">
            Rise at Seven<span className="text-[2vw] align-top">®</span>
          </h1>
        </div>

        {/* Footer Meta */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-[11px] text-gray-500 uppercase tracking-wider">
          <div className="space-y-1">
            <p>© 2025 RISE AT SEVEN LTD. ALL RIGHTS RESERVED.</p>
            <p>COMPANY NUMBER 11955187 • VAT REGISTERED GB 322402945</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS & CONDITIONS</a>
          </div>
          <p>WEBSITE MADEBYSHAPE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;