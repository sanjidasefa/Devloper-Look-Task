import React, { useState, useEffect } from "react";
import Navbar from "../shared/Navber";

const backgroundImages = [
  "https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=2560&h=1707&q=100&auto=format&fit=crop&dm=1750847623&s=2e6f5684a2dcbdbd148a651a17aafe47",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Emirates-airpline-in-flight.avif?w=1330&h=700&q=100&auto=format&fit=crop&dm=1750948034&s=7fc16049313aefb0ea160470af9ae379",
  "https://rise-atseven.transforms.svdcdn.com/production/images/RedBull-Instagram-Post-45.png?w=1890&h=2363&q=100&auto=format&fit=crop&dm=1753775231&s=60dc0e3c84825da30f8d809caf5fabe1",
  "https://rise-atseven.transforms.svdcdn.com/production/images/unnamed-6.png?w=213&h=278&q=100&auto=format&fit=crop&dm=1750948726&s=0ecee9869674cd309d3170dfd7b29674",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === backgroundImages.length - 1 ? 0 : prev + 1,
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <style>
        {`
          @media (min-width: 1024px) {
            .custom-hero-title {
              font-weight: 600 !important; /* Adjust this for the main title thickness */
            }
            .custom-hero-subtext {
              font-weight: 500 !important; /* Adjust this for the 'on every searchable...' text */
            }
            .custom-award-text {
              font-weight: 700 !important;
              letter-spacing: 0.05em;
            }
          }
        `}
      </style>

      <div className="px-2 pt-2">
        <div
          className={`bg-teal-100 rounded-full text-black text-xs text-center p-2 flex items-center justify-center gap-3 relative z-[70] transition-all duration-300 ${
            isMenuOpen ? "opacity-0 invisible h-0 m-0" : "opacity-100 visible"
          }`}
        >
          <span>
            🚨{" "}
            <a href="#" className="hover:underline font-bold">
              The Category Leaderboard - Live Now
            </a>{" "}
            🚨
          </span>
        </div>
      </div>

      <section className="m-2 rounded-2xl relative h-screen overflow-hidden text-white">
        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src={backgroundImages[currentImageIndex]}
            alt=""
            className="w-full h-full object-cover scale-105 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-black/45 backdrop-blur-[4px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
        </div>

        {/* NAVBAR */}
        <div className="absolute top-0 left-0 w-full z-[60]">
          <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-5">
          {/* AWARD TEXT */}
          <div className="mb-8 flex flex-col items-center">
            <p className="custom-award-text uppercase text-xs md:text-sm tracking-wide">
              #1 Most Recommended
              <br />
              Content Marketing Agency
            </p>

            {/* LOGOS */}
            <div className="flex items-center justify-center gap-6 mt-5 opacity-90">
              <img
                className="w-16 object-contain brightness-0 invert"
                src="https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/global-search-awards.png?w=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847622&s=e8a73a992886da0dda58fc12cfeb588f"
                alt=""
              />
              <img
                className="w-10 object-contain brightness-0 invert"
                src="https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/Mask-group.png?w=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847620&s=3b946ebdec8c5ba9fdba897c87d89fea"
                alt=""
              />
              <img
                className="w-16 object-contain brightness-0 invert"
                src="https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Awards/White/UKSocial-Media-Awards-White.png?w=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847605&s=0f7ae6a0d6ed51370b560f329b0c621c"
                alt=""
              />
            </div>
          </div>

          {/* MAIN TITLE */}
          <h1 className="custom-hero-title tracking-tighter leading-[0.9] text-[58px] lg:text-[120px]">
            <span className="block">We Create</span>
            <span className="flex items-center justify-center gap-3 md:gap-6">
              Category
              <span className="w-16 h-16 md:w-28 md:h-28 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={backgroundImages[currentImageIndex]}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </span>
              Leaders
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="custom-hero-subtext mt-6 text-lg md:text-3xl">
            on every searchable platform
          </p>

          {/* Platform Logos Row - Only Desktop */}
          <div className="hidden lg:flex items-center justify-center gap-10 mt-12 opacity-80 scale-90">
            <img
              className="w-18"
              src="https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/gogle.png?w=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847622&s=466bfd1225fc312cffd02fdf9ae8097c"
              alt=""
            />
            <img
              className="w-18"
              src="https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/chat-gpt.png?w=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847621&s=6926336014e1d4b29ee86ab5a8b8e404"
              alt=""
            />
            <img
              className="w-18"
              src="https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/gemini.png?w=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847619&s=5d704bbc19017194bb093f2c3c267186"
              alt=""
            />
            <img
              className="w-18"
              src="https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/tiktok.png?w=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847623&s=738b9e418fc7109caa0841b552729fb5"
              alt=""
            />
            <img
              className="w-18"
              src="https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/youtube.png?w=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847623&s=f93b16f8e088a7832494361b40d8b091"
              alt=""
            />
            <img
              className="w-18"
              src="https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/pinterest.png?w=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847620&s=51621cf89a075ef62ffdc9a2793e7dac"
              alt=""
            />
            <img
              className="w-18"
              src="https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/giphy.png?w=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847619&s=28c7ffcd417d54d05c0dffe0b2ddf4b5"
              alt=""
            />
          </div>
        </div>

        {/* FOOTER */}
        <div className="absolute bottom-8 w-full z-20 px-6 md:px-10 flex flex-col md:flex-row justify-between items-center md:items-end">
          <div className="hidden md:block text-[10px] uppercase font-bold opacity-70 max-w-xs text-left">
            Organic media planners creating, distributing & optimising content
            for Search, SEO, Social, PR, AI and Marketplace
          </div>
          <div className="text-xs uppercase font-bold opacity-90 text-center md:text-right">
            4 Global Offices serving
            <br />
            UK, USA (New York) & EU
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
