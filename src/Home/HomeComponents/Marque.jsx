import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const Marque = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  const images = [
    "https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5023.jpg?w=1600&h=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846538&s=b3a59f30ae95b2098230edc2137e02f7",
    "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.49.00.png?w=1600&h=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750859361&s=8df7953c8590164f1507ce725ef56bd7",
  ];

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden py-15 cursor-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Floating Pointer (Teal Button) */}
      <div
        className={`fixed pointer-events-none z-50 transition-opacity duration-300 ease-out`}
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: 'translate(-50%, -50%)',
          opacity: isHovering ? 1 : 0,
          position: 'absolute'
        }}
      >
        <div className="bg-[#99f6e4] text-black px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap shadow-lg">
          Send Us Your Brief ↗
        </div>
      </div>

      <Swiper
        slidesPerView={'auto'}
        spaceBetween={20}
        loop={true}
        speed={9000}
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        className="marquee-swiper flex items-center"
      >
        {/* Repeat images to ensure seamless loop */}
        {[...images, ...images, ...images].map((src, index) => (
          <SwiperSlide key={index} style={{ width: 'auto' }}>
            <div className="flex items-center gap-10">
              <h2 className="text-7xl md:text-8xl leading-1" style={{fontWeight:600}}>
                {index % 2 === 0 ? "Chasing Consumers" : "NotAlgorithms"}
              </h2>
              <img 
                src={src} 
                alt="Rise at Seven" 
                className="h-[150px] w-[150px] md:h-[250px] md:w-[250px] object-cover rounded-2xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style dangerouslySetInnerHTML={{ __html: `
        .marquee-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}} />
    </div>
  );
};

export default Marque;