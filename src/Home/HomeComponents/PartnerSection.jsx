import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import partner from "../../assets/partner.webp";
import AnimatedButton from "../shared/AnimatedButton";

const partners = [
  { name: "Red Bull", logo: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/Untitled-design.png?w=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1752040111&s=d640ebc07886e3a6f111ee7f727546f8" },
  { name: "JD Sports", logo: "http://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/red-bull-logo-black.png?w=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1754645714&s=39b7d8eebd324629145e1265bbed70eb" },
  { name: "Kroger", logo: "https://rise-atseven.transforms.svdcdn.com/production/images/SN.webp?w=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5338&fp-y=0.5169&dm=1777373493&s=bb03a8f6ccc46401ed5f940ae7aa6d6f" },
  { name: "Moneysupermarket", logo: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/01J76SW385WN4X1CBJWJV7QSAP.png?w=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847605&s=219fe3d56daebbf3aaf3218054fd2e51" },
];

const PartnerSection = () => {
  return (
    <div className="px-1 py-10 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-20">
          <div className="flex-shrink-0">
            <p className="text-xs tracking-wide text-black">
              The agency behind
            </p>
          </div>

          {/* Swiper Slider Container with Blur/Fade Mask */}
          <div 
            className="flex-1 w-full overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
            }}
          >
            <Swiper
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={2}
              loop={true}
              speed={6000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
              }}
              className="partner-swiper !ease-linear !transition-timing-function-linear"
            >
              {partners.map((partner, index) => (
                <SwiperSlide key={index} className="flex items-center justify-center">
                  <div className="h-10 w-15 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className=" mx-auto px-4 mt-15 grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
        <div className="md:order-2">
          <h2 className="tracking-tighter text-5xl md:text-6xl leading-[1.1] flex flex-wrap items-center gap-x-4">
            <span style={{fontWeight:600}}>Driving Demand &</span>
            <span  style={{fontWeight:600}} className="flex items-center gap-4">
              Discovery
              <span className="inline-block w-14 h-14 md:w-20 md:h-20 rounded-2xl overflow-hidden shadow-xl transform translate-y-1">
                <img src={partner} alt="Discovery" className="w-full h-full object-cover" />
              </span>
            </span>
          </h2>
        </div>
        <div className="md:order-1 w-2/3">
          <p  style={{fontWeight:600}} className="text-lg md:text-xl  leading-snug text-gray-900">
            A global team of search-first content marketers engineering semantic
            relevancy & category signals for both the internet and people
          </p>
        </div>
        <div className="md:order-3 flex gap-1 flex-col md:flex-row md:col-start-2">
          <AnimatedButton className='w-full md:w-fit p-2 rounded-full text-md bg-white/60 border border-gray-100' text="Our Story" />
          <AnimatedButton className='w-full md:w-fit p-2 rounded-full text-md' text="Our Services" />
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;