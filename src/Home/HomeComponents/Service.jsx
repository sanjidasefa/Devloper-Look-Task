import React, { useState } from 'react';
import serviceImg from '../../assets/service.webp';
import AnimatedButton from '../shared/AnimatedButton';

const services = [
  { id: 1, name: "Digital PR",               imgUrl: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-22.39.35.png?w=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=5b5b62407763a7393413c17b27f3356f" },
  { id: 2, name: "Organic Social & Content",  imgUrl: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-01-at-20.31.18.png?w=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751398338&s=2509b8081ae256068e6bfb560741ef41" },
  { id: 3, name: "Search & Growth Strategy",  imgUrl: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.37.50.png?w=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750858763&s=a037ab96aea7e654e66eabf89344e2d9" },
  { id: 4, name: "Content Experience",         imgUrl: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7499.jpg?w=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846496&s=095f32052393b7408187e6009f1e87c6" },
  { id: 5, name: "Data & Insights",            imgUrl: "https://rise-atseven.transforms.svdcdn.com/production/images/e34acc13-be9a-4862-a3bd-95aa2738aeb3.JPG?w=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751398487&s=5c87f0f674d7e8755aa74c38755ad8cc" },
  { id: 6, name: "Onsite SEO",                 imgUrl: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-24-at-00.20.47.png?w=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847627&s=bccdca4e3218f3153fac5e3b7801b549" },
];

const EASE = 'cubic-bezier(0.4, 0, 0.2, 1)';

const Service = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      className="py-12 px-4 md:px-16"
      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
    >
      <div className="max-w-[1400px] mx-auto">

        {/* ── HEADER ── */}
        <div
          className="pb-6 mb-0 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
          style={{ borderBottom: '1.5px solid #d1d5db' }}
        >
          <h2
            className="font-semibold leading-none tracking-tighter flex flex-wrap items-center gap-x-4"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)' }}
          >
            Our
            <img
              src={serviceImg}
              alt="Service"
              className="inline-block rounded-2xl object-cover"
              style={{ width: 'clamp(3.5rem, 7vw, 5.5rem)', height: 'clamp(3.5rem, 7vw, 5.5rem)' }}
            />
            Services
          </h2>
          <div className="hidden md:block flex-shrink-0">
            <AnimatedButton
              text="View All Services"
              className="px-6 py-3 rounded-full text-sm bg-white/60"
            />
          </div>
        </div>

        {/* ── SERVICES GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {services.map((item) => {
            const isHov = hoveredId === item.id;

            return (
         
              <div
                key={item.id}
                className="cursor-pointer"
                style={{ borderBottom: '1.5px solid #e5e7eb', padding: '10px 0' }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* INNER = pill container */}
                <div className="relative overflow-hidden rounded-full">

                  {/* ── Pill background: image + dark overlay ── */}
                  <div
                    className="absolute inset-0 overflow-hidden rounded-full"
                    style={{
                      opacity:         isHov ? 1 : 0,
                      transform:       isHov ? 'scaleX(1)' : 'scaleX(0.9)',
                      transformOrigin: 'left center',
                      transition:      `opacity 0.42s ${EASE}, transform 0.42s ${EASE}`,
                    }}
                  >
                    <img
                      src={item.imgUrl}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                  </div>

                  {/* ── Content: arrow + text ── */}
                  <div
                    className="relative z-10 flex items-center"
                    style={{ padding: '14px 20px', gap: '14px' }}
                  >
                    {/* Arrow icon */}
                    <span
                      className="flex items-center justify-center rounded-full border border-white/60 text-white flex-shrink-0"
                      style={{
                        width:      '2.4rem',
                        height:     '2.4rem',
                        fontSize:   '1.1rem',
                        opacity:    isHov ? 1 : 0,
                        transform:  isHov
                          ? 'translateX(0) scale(1)'
                          : 'translateX(-22px) scale(0.4)',
                        transition: `opacity 0.3s ${EASE} 0.07s, transform 0.3s ${EASE} 0.07s`,
                      }}
                    >
                      ↗
                    </span>

                    {/* Service name */}
                    <h3
                      className="font-semibold tracking-tight leading-none"
                      style={{
                        fontSize:   'clamp(2rem, 3.2vw, 3rem)',
                        color:      isHov ? '#ffffff' : '#0f0f0f',
                        transform:  isHov ? 'translateX(0)' : 'translateX(-3rem)',
                        transition: `color 0.28s ease, transform 0.38s ${EASE}`,
                      }}
                    >
                      {item.name}
                    </h3>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* ── Mobile button ── */}
        <div className="mt-6 md:hidden">
          <AnimatedButton
            text="View All Services"
            className="w-full py-3 rounded-full text-sm bg-white/60"
          />
        </div>

      </div>
    </section>
  );
};

export default Service;