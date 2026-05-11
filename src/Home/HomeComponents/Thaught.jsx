import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import "swiper/css";
import "swiper/css/free-mode";
import AnimatedButton from "../shared/AnimatedButton";

const BLOG_DATA = [
  {
    id: 1,
    tag: "News", 
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A8137.jpg?w=1600&h=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778062638&s=956fbe55cbc565d2ee1fbf6106ffda9e",
    author: "Ray Saddiq",
    readTime: "3 mins",
    title: "Rise at Seven Appoints Hoile Lovell as Senior Operations Lead",
  },
  {
    id: 2,
    tag: "Strategy",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/WRAS-Manchester-01.png?w=1600&h=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778084605&s=bd3fc001d0b0b301f18e85a5ffb0cc52",
    author: "Ray Saddiq",
    readTime: "2 mins",
    title: "Rise at Seven Exits Sheffield and Triples Manchester as new HQ they go to for global expnsion",
  },
  {
    id: 3,
    tag: "News",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7827.jpg?w=1600&h=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1777514348&s=988a3a3c2ac12f47fd33ff55ab4eb550",
    author: "Carrie Rose",
    readTime: "2 mins",
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
  },
];

export default function Thaught() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const sliderAreaRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleMouseMove = (e) => {
    if (!sliderAreaRef.current) return;
    const rect = sliderAreaRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleSwiperProgress = (swiper) => {
    const progress = swiper.progress;
    const segment = 100 / BLOG_DATA.length;
    setScrollProgress(segment + progress * (100 - segment));
  };

  return (
    <section className="py-8 px-6 ">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-end md:mb-16 md:border-b border-gray-200 pb-12">
          <h1 className="text-[60px] md:text-[90px] font-bold tracking-[-0.04em] leading-none flex items-center gap-4">
            What's
            <span className="inline-block w-14 h-14 md:w-20 md:h-20 bg-blue-600 rounded-2xl overflow-hidden">
              <img
                src="https://rise-atseven.transforms.svdcdn.com/production/images/FOS25-3380.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846499&s=8c1a07d60970e114e350dc38945f6bad"
                alt="deco"
                className="w-full h-full object-cover"
              />
            </span>
            New
          </h1>
          <div className="hidden md:block flex-shrink-0">
            <AnimatedButton
              text="Explore More Thoughts"
              className="px-6 py-3 rounded-full text-sm bg-white/60"
            />
          </div>
        </div>

        <div
          ref={sliderAreaRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setShowCursor(true)}
          onMouseLeave={() => setShowCursor(false)}
          className={`relative ${showCursor ? "cursor-none" : "cursor-default"}`}
        >
          <AnimatePresence>
            {showCursor && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="pointer-events-none absolute z-50 w-24 h-24 bg-[#B7FFD8] rounded-full flex items-center justify-center shadow-xl"
                style={{
                  left: mousePos.x,
                  top: mousePos.y,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                  mass: 0.5,
                }}
              >
                <ArrowUpRight className="text-black w-10 h-10 stroke-[1.5]" />
              </motion.div>
            )}
          </AnimatePresence>

          <Swiper
            modules={[FreeMode, Mousewheel]}
            spaceBetween={20}
            slidesPerView={1.1}
            freeMode={true}
            onProgress={handleSwiperProgress}
            onSwiper={(swiper) => setScrollProgress(100 / BLOG_DATA.length)}
            breakpoints={{
              768: { slidesPerView: 2.2 },
              1200: { slidesPerView: 3 },
            }}
          >
            {BLOG_DATA.map((item, index) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col gap-6 w-full group cursor-pointer">
                  <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-100">
                    <img
                      src={item.image}
                      className="w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:blur-md group-hover:brightness-90"
                      alt={item.title}
                    />
                    
                    {index >1 && (
                      <div className="absolute top-6 left-6 z-20">
                        <span className="bg-black/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase">
                          {item.tag}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 px-1">
                    <div className="flex items-center gap-1 text-[13px] font-medium text-gray-500">
                      <span className="text-gray-500 font-semibold flex gap-1 bg-white px-1.5 py-1 rounded-full items-center">
                        <img
                          src={item.image}
                          className="rounded-full w-5 h-5 object-cover"
                          alt=""
                        />
                        {item.author}
                      </span>
                      <div className="flex items-center gap-1.5 bg-white px-2 font-semibold text-gray-500 py-1 rounded-full items-center">
                        <Clock size={14} />
                        <span>{item.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl w-3/4 font-semibold leading-[1.2] tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="md:hidden" style={{ marginTop: "20px" }}>
            <div
              style={{
                width: "100%",
                height: "4px",
                background: "#ffffff",
                borderRadius: "10px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  height: "100%",
                  width: `${scrollProgress}%`,
                  background: "#000",
                  borderRadius: "10px",
                  transition: "width 0.2s ease-out",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden block my-4">
        <AnimatedButton
          text="Explore More Thoughts"
          className="px-6 py-2 rounded-full text-sm bg-white w-full"
        />
      </div>
    </section>
  );
}