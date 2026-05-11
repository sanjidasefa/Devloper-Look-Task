import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ArrowUpRight, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import {  FiX } from 'react-icons/fi';
import AnimatedButton from "./AnimatedButton";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const navLinks = [
  {
    label: "Services",
    href: "#",
    dropdown: [
      { label: "Search & Growth Strategy", href: "#" },
      { label: "Onsite SEO", href: "#" },
      { label: "Content Experience", href: "#" },
      { label: "B2B Marketing", href: "#" },
      { label: "Digital PR", href: "#" },
      { label: "Social Media & Campaigns", href: "#" },
      { label: "Data & Insights", href: "#" },
      { label: "Social SEO/Search", href: "#" },
    ],
  },
  {
    label: "Industries",
    href: "#",
    dropdown: [{ label: "B2B Marketing", href: "#" }],
  },
  {
    label: "International",
    href: "#",
    dropdown: [
      { label: "US Digital PR", href: "#" },
      { label: "Spain Digital PR", href: "#" },
      { label: "Germany Digital PR", href: "#" },
      { label: "Netherlands Digital PR", href: "#" },
    ],
  },
  {
    label: "About",
    href: "#",
    dropdown: [
      { label: "About Us", href: "#" },
      { label: "Meet The Risers", href: "#" },
      { label: "Culture", href: "#" },
      { label: "Testimonials", href: "#" },
    ],
  },
  { label: "Work", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Blog & Resources", href: "#",
    dropdown: [
      { label: "Blog", href: "#" },
      { label: "CategoryLeaderboard", href: "#" },
      { label: "Multu-Channel Search Report", href: "#" },
    ],
   },
  { label: "Webinar", href: "#" },
];

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const timeoutRef = useRef(null);

  // Body scroll lock using prop
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleMouseEnter = (label) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex-shrink-0 z-[60]">
            <span className={`font-bold text-2xl tracking-tighter  text-white`}>
              Rise at Seven
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div 
                  key={link.label} 
                  className="relative" 
                  onMouseEnter={() => handleMouseEnter(link.label)} 
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-[15px] font-semibold text-white">
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                  </button>
                  {activeDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 bg-white border border-gray-100 rounded-xl shadow-xl py-2 min-w-[240px]">
                      {link.dropdown.map((item) => (
                        <a 
                          key={item.label} 
                          href={item.href} 
                          className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 font-medium"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="px-3 py-2 text-[15px] font-semibold text-white "
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-4">
           
          <AnimatedButton className='hidden md:block w-full bg-black text-white p-2 rounded-full text-md' text="Get In Touch" />
      
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative z-[60] w-10 h-10 flex items-center justify-center transition-all duration-300"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? ( 
                  <motion.span key="x" className="text-white" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <FiX size={28} />
                  </motion.span>
                ) : (
                  <motion.span key="menu" className="text-white" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <HiOutlineMenuAlt4 size={28} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* --- ANIMATED MOBILE MENU --- */}
        <AnimatePresence>
          {isMenuOpen && (   
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 44px) 44px)' }}
              animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 44px) 44px)' }}
              exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 44px) 44px)' }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="fixed inset-0 bg-black/50 rounded-2xl m-2 lg:hidden flex flex-col pt-25 px-4 z-[55]"
              style={{ backdropFilter: 'blur(30px)' }}
            >
              <nav className="flex-1 overflow-y-auto custom-scrollbar">
                <ul>
                  {navLinks.map((link, i) => (
                    <motion.li 
                      key={link.label} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      {link.dropdown ? (
                        <div>
                          <button
                            onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                            className="w-full flex items-center justify-between text-white text-4xl font-semibold tracking-tight text-left"
                          >
                            {link.label}
                            {mobileExpanded === link.label ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded === link.label ? "max-h-[500px] mt-4" : "max-h-0"}`}>
                            <ul className="space-y-1 pl-2">
                              {link.dropdown.map((item) => (
                                <li key={item.label}>
                                  <a href={item.href} className="text-white text-xl font-semibold flex items-center justify-between group">
                                    {item.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <a href={link.href} className="flex items-center justify-between text-white text-4xl font-semibold tracking-tight group">
                          {link.label}
                        </a>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </nav>
             <div className="py-3 flex gap-4 flex-col md:flex-row">
          <AnimatedButton className='w-full bg-white text-black p-2 rounded-full text-md' text="Get In Touch" />
        </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;