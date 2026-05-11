import { useState, useRef, useEffect } from "react";
import AnimatedButton from "../shared/AnimatedButton";
import { FaChartLine } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    brand: "SIXT",
    year: "2023-2025",
    title: "An extra 3m clicks regionally through SEO",
    category: "Car rental",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=b5b3d324e0455061c60fe917b85d106c",
    hoverBg: "bg-purple-300",
  },
  {
    id: 2,
    brand: "Dojo - B2B",
    year: "2021-2025",
    title: "A B2B success story for Dojo card machines",
    category: "Card Machines",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=22e15e8ff19558f300183bc7ebc1b0ff",
    hoverBg: "bg-blue-400",
  },
  {
    id: 3,
    brand: "Magnet",
    year: "2023-2024",
    title: "A full service SEO success story 170%+ increase",
    category: "B2B",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2026-02-07-at-17.01.43.png?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1770483725&s=f1d98712e630df66aaf9b713ce70db2d",
    hoverBg: "bg-[#D1C4E9]",
  },
  {
    id: 4,
    brand: "Leading E Simg brand globally",
    year: "2023-2025",
    title: "Increasing brand and non brand visibility UK/ES",
    category: "Esims",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/eSIM-Europe-p1-what-is-eSIM-2-1.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761234573&s=9ef283005801f5f7607377f62cc54be8",
    hoverBg: "bg-orange-300",
  },
  {
    id: 5,
    brand: "JD Sports",
    year: "2025",
    title: "65% up YoY in clicks for JDSports FR, IT, ES",
    category: "Trainers",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/maxresdefault_2025-10-22-141838_nmnu.jpg?w=800&h=600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761142718&s=12d06985b7017711f29e3ce6aef304f3",
    hoverBg: "bg-blue-300",
  },
  {
    id: 6,
    brand: "Parkdean Resorts",
    year: "2019-2025",
    title: "Dominating Google and AI search",
    category: "Easter Breaks",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/easter-breaks.jpg?w=800&h=600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847715&s=381c81d4a44783a7bda73dd07a3a04ee",
    hoverBg: "bg-[#FFF6DE]",
  },
  {
    id: 7,
    brand: "poody",
    year: "2025",
    title: "Driving demand for Pooky Rechargeable Lights",
    category: "Rechargeable Lights",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=2560&h=1707&q=100&auto=format&fit=crop&dm=1750847623&s=2e6f5684a2dcbdbd148a651a17aafe47",
    hoverBg: "bg-blue-300",
  },
  {
    id: 8,
    brand: "Parkdean Resorts",
    year: "2019-2025",
    title: "Social search and multi channel content to #1",
    category: "UK holidays",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/1.JPG?w=800&h=600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751183703&s=9d42dee239058b476893d2649a608a7d",
    hoverBg: "bg-purple-300",
  },
  {
    id: 9,
    brand: "Revolution Beauty",
    year: "2022-2025",
    title: "Building the UK's leading beauty dupe brand",
    category: "Beauty Dupes",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-10-at-12.13.46.png?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847624&s=66887254ebb0061e76bd4843483830d5",
    hoverBg: "bg-pink-200",
  },
  {
    id: 10,
    brand: "Lloyds Pharmacy",
    year: "2022-23",
    title: "Driving category leadership for STI tests",
    category: "STI tests",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-04-at-12.50.54.png?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751629865&s=ca93939dbf531401a1b3805445611f1c",
    hoverBg: "bg-purple-300",
  },
  {
    id: 11,
    brand: "PrettyLittleThing",
    year: "2019-2025",
    title: 'Driving discovery for everything "outfits" for PLT',
    category: "Outfits",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-14.43.56.png?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=95854cccfcf8440a9dffe2897976126a",
    hoverBg: "bg-pink-200",
  },
];

const ITEM_PX = 85;
const SCROLL_PER_PROJECT = 80;

// Reusable global cursor component
const GlobalCursor = ({ mousePos, showCursor }) => (
  <AnimatePresence>
    {showCursor && (
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        className="pointer-events-none absolute z-[100] w-24 h-24 bg-[#C0FFEB] rounded-full flex items-center justify-center shadow-2xl"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300, mass: 0.5 }}
      >
        <MdOutlineArrowOutward className="w-8 h-8" />
      </motion.div>
    )}
  </AnimatePresence>
);

const FeatureWork = () => {
  const [activeBrand, setActiveBrand] = useState(projects[0].id);
  const cardRefs = useRef({});
  const rightPanel = useRef(null);
  const desktopSectionRef = useRef(null);
  const desktopRightPanel = useRef(null);

  // Shared cursor state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const section = desktopSectionRef.current;
    if (!section) return;
    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const totalScroll = rect.height - window.innerHeight;
      if (totalScroll <= 0) return;
      const progress = Math.min(Math.max(-rect.top / totalScroll, 0), 1);
      const index = Math.min(
        Math.round(progress * (projects.length - 1)),
        projects.length - 1,
      );
      setActiveBrand(projects[index].id);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const panel = rightPanel.current;
    if (!panel) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveBrand(Number(entry.target.dataset.pid));
          }
        });
      },
      { root: null, threshold: 0.5 },
    );
    Object.values(cardRefs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Single onMouseMove — reads from whichever panel is active
  const handleMouseMove = (e, panelRef) => {
    const panel = panelRef.current;
    if (!panel) return;
    const rect = panel.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const activeIndex = projects.findIndex((p) => p.id === activeBrand);

  return (
    <>
      {/* ===== DESKTOP ===== */}
      <div
        ref={desktopSectionRef}
        className="hidden lg:block"
        style={{
          height: `calc(100vh + ${(projects.length - 1) * SCROLL_PER_PROJECT}vh)`,
        }}
      >
        <div className="sticky top-3 h-[calc(100vh-24px)] bg-black rounded-3xl mx-3 flex font-sans overflow-hidden">

          {/* Left Panel - Brand Names */}
          <div className="w-[58%] h-full p-16 flex flex-col justify-between">
            <span className="text-white text-sm font-bold">Featured Work</span>

            <div
              className="overflow-hidden mb-5"
              style={{ height: `${ITEM_PX * 2.2}px` }}
            >
              <div
                className="flex flex-col gap-2 transition-all duration-700 ease-in-out"
                style={{ transform: `translateY(${-activeIndex * ITEM_PX}px)` }}
              >
                {projects.map((p) => {
                  const isActive = activeBrand === p.id;
                  return (
                    <div
                      key={p.id}
                      className="flex items-start gap-4 transition-all duration-700 ease-in-out cursor-pointer"
                      style={{
                        opacity: isActive ? 1 : 0.15,
                        transform: isActive ? "translateX(20px)" : "translateX(0px)",
                      }}
                      onMouseEnter={() => setActiveBrand(p.id)}
                    >
                      <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9]">
                        {p.brand}
                      </h2>
                      <span className="text-[10px] text-white mt-3 font-mono opacity-80 whitespace-nowrap">
                        [{p.year}]
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div />
          </div>

          {/* Right Panel — global cursor lives here */}
          <div
            ref={desktopRightPanel}
            className={`w-[42%] h-full relative ${showCursor ? "cursor-none" : ""}`}
            onMouseMove={(e) => handleMouseMove(e, desktopRightPanel)}
            onMouseEnter={() => setShowCursor(true)}
            onMouseLeave={() => setShowCursor(false)}
          >
            <GlobalCursor mousePos={mousePos} showCursor={showCursor} />

            {projects.map((project) => {
              const isActive = activeBrand === project.id;
              return (
                <div
                  key={project.id}
                  className={`absolute inset-0 p-12 transition-all duration-700 ease-in-out ${
                    isActive
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <div className="relative group w-full h-full rounded-2xl overflow-hidden">
                    {/* Base image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />

                    {/* Tag (hides on hover) */}
                    <div className="absolute top-6 right-6 z-10 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-xl py-2 px-6 rounded-full text-white">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8" />
                          <line x1="23" y1="23" x2="17" y2="17" />
                        </svg>
                        <span className="text-sm font-semibold tracking-tight">{project.category}</span>
                        <FaChartLine />
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <div
                      className={`absolute inset-0 ${project.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-end p-12 z-20`}
                    >
                      <h3 className="absolute top-5 text-black text-5xl font-semibold tracking-tighter leading-[0.88] pointer-events-none mb-6 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                        {project.title}
                      </h3>

                      <div className="absolute bottom-6 right-6 z-10 transition-all duration-300">
                        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-xl py-2 px-6 rounded-full text-black">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="23" y1="23" x2="17" y2="17" />
                          </svg>
                          <span className="text-sm font-semibold tracking-tight">{project.category}</span>
                          <FaChartLine />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* ===== MOBILE ===== */}
      <div
        className={`lg:hidden bg-black rounded-3xl m-3 min-h-screen flex flex-col font-sans relative ${showCursor ? "cursor-none" : ""}`}
        ref={rightPanel}
        onMouseMove={(e) => handleMouseMove(e, rightPanel)}
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
      >
        <GlobalCursor mousePos={mousePos} showCursor={showCursor} />

        <div className="w-full px-4 pt-6 flex flex-col gap-5 lg:gap-16">
          <div>
            <span className="md:hidden text-white text-[15px] font-bold">
              Featured Work
            </span>
          </div>

          {projects.map((project) => (
            <a
              key={project.id}
              href={project.href}
              ref={(el) => (cardRefs.current[project.id] = el)}
              data-pid={project.id}
              onMouseEnter={() => setActiveBrand(project.id)}
              className="relative group w-full aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden block"
            >
              {/* Base image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />

              {/* Tag (hides on hover) */}
              <div className="absolute top-6 right-6 z-10 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-xl py-2 px-6 rounded-full text-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="23" y1="23" x2="17" y2="17" />
                  </svg>
                  <span className="text-sm font-semibold tracking-tight">{project.category}</span>
                  <FaChartLine />
                </div>
              </div>

              {/* Brand label default (slides out on hover) */}
              <div className="absolute bottom-4 left-5 z-10 flex flex-col items-start transition-all duration-500 group-hover:opacity-0 group-hover:translate-x-4">
                <span className="md:hidden text-white text-sm mb-2">[{project.year}]</span>
                <span className="text-white text-3xl md:hidden font-semibold tracking-tighter leading-none">
                  {project.brand}
                </span>
              </div>

              {/* Hover overlay */}
              <div
                className={`absolute inset-0 ${project.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-end p-8 lg:p-12 z-20`}
              >
                <h3 className="absolute top-5 text-black text-3xl lg:text-5xl font-semibold tracking-tighter leading-[0.88] pointer-events-none mb-6 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  {project.title}
                </h3>

                <div className="absolute bottom-6 right-6 z-10 transition-all duration-300">
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-xl py-2 px-6 rounded-full text-black">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="23" y1="23" x2="17" y2="17" />
                    </svg>
                    <span className="text-sm font-semibold tracking-tight">{project.category}</span>
                    <FaChartLine />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="px-4 md:flex md:items-center md:justify-center md:mt-4">
        <AnimatedButton
          className="w-full md:w-fit p-2 rounded-full text-md bg-white/60"
          text="Explore Our Work"
        />
      </div>
    </>
  );
};

export default FeatureWork;