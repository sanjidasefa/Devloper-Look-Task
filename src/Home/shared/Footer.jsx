import React from "react";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaYoutube, FaTiktok } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" px-2 py-6 md:px-8 md:py-10">
      {/* Main Black Container */}
      <div className=" bg-black text-white/80 rounded-3xl p-4  md:p-16">
        
        {/* Added this wrapper to make it side-by-side on Desktop (lg) */}
        <div className="lg:flex lg:justify-between lg:items-start lg:gap-10">
          
          {/* Top Section: Newsletter */}
          <div className="lg:max-w-sm">
            <h2 className="text-2xl mt-8 md:text-3xl font-semibold  ">
              Stay updated with Rise news
            </h2>
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
              {[
                FaFacebook,
                FaXTwitter,
                FaLinkedinIn,
                FaYoutube,
                FaTiktok,
                CiInstagram,
              ].map((Icon, idx) => (
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
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-15 lg:my-8 lg:flex-1">
            {/* Column 1 */}
            <div className="grid grid-cols-2 gap-8 lg:col-span-2">
              <ul className="border-l border-white/30 pl-3 text-lg font-semibold">
                <li>
                  <a href="#" className="hover:text-teal-200 transition-opacity">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-200 transition-opacity">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-200 transition-opacity">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-200 transition-opacity">
                    Culture
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-200 transition-opacity">
                    Meet The Risers
                  </a>
                </li>
              </ul>
              <ul className="border-l border-white/30 pl-3 text-lg font-semibold">
                <li>
                  <a href="#" className="hover:text-teal-200 transition-opacity">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-200 transition-opacity">
                    Blog & Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-200 transition-opacity">
                    Webinars
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-200 transition-opacity">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Locations */}
            <div className="border-l border-white/30 pl-3  flex flex-col text-lg font-semibold">
              <a href="#" className="hover:text-teal-200">
                Sheffield
              </a>
              <a href="#" className="hover:text-teal-200">
                Manchester
              </a>
              <a href="#" className="hover:text-teal-200">
                London
              </a>
              <a href="#" className="hover:text-teal-200">
                New York
              </a>
              <a href="#" className="hover:text-teal-200">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Brand Logo */}
        <div className="mb-12">
          <h1 className="text-[14vw] md:text-[10vw] font-bold leading-none tracking-tighter">
            Rise at Seven<span className="text-[2vw] align-top">®</span>
          </h1>
        </div>

        {/* Footer Meta */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-1 text-[11px] text-white/70 tracking-wides  mt-10">
          <div className="space-y-1">
            <p>
              © 2025 Rise at Seven Ltd. All rights reserved
              <span className=" text-lg mx-1 ">•</span>
              Company Number 11955187 <span className=" text-lg mx-1 ">•</span>
              VAT Registered GB 322402945  <br /> Privacy Policy<span className=" text-lg m-1 ">•</span>
              Privacy Policy
              <span className=" text-lg mx-1 ">•</span> <br /> Website MadeByShape
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;