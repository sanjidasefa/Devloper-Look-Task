import React, { useEffect, useRef, useState } from 'react';

const cards = [
  {
    id: 1,
    title: "Pioneers",
    content: "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.",
    subContent: "We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
    bg: "#000000", color: "#ffffff", 
    imgUrl: "https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=1600&h=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=fca4e779651c6bbd2dbe236d21673786",
  },
  {
    id: 2,
    title: "Award Winning",
    content: "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
    subContent: "Recognition that fuels our relentless pursuit of excellence.",
    bg: "#a7f3d0", color: "#052e16", 
    imgUrl: "https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG?w=1600&h=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=b1befabf8bc726903f9a84284e5ff609",
  },
  {
    id: 3,
    title: "Innovators",
    content: "We push the boundaries of what's possible in search and content marketing every single day.",
    subContent: "Technology and human insight combined to create magic for the world's biggest brands.",
    bg: "#ffffff", color: "#111111", 
    imgUrl: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.15.19.png?w=1600&h=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=d00aadc5240b895dd5d4b08f7e61eb59",
  },
];

const Legacy = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Mobile-e thakle scroll progress-er initial state set kora
    if (window.innerWidth < 768) {
        setScrollProgress(100 / cards.length);
    }
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const totalHeight = el.offsetHeight - window.innerHeight;
      const progress = Math.max(0, -rect.top / totalHeight) * (cards.length - 1);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const handleMobileScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const currentScroll = scrollLeft / (scrollWidth - clientWidth);
      
      // Prothom card thekei progress bar suru hobe
      const baseSegment = 100 / cards.length;
      const progress = baseSegment + (currentScroll * (100 - baseSegment));
      setScrollProgress(progress);
    }
  };
  const startDragging = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const stopDragging = () => setIsDragging(false);

  const moveDragging = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  if (isMobile) {
    return (
      <div style={{ userSelect: 'none' }}>
        <h3 className='text-gray-800/90' style={{ textAlign: 'center', marginBottom: '15px', fontWeight: 600 }}>Legacy In The Making</h3>
        
        <div 
          ref={scrollRef}
          onScroll={handleMobileScroll}
          onMouseDown={startDragging}
          onMouseLeave={stopDragging}
          onMouseUp={stopDragging}
          onMouseMove={moveDragging}
          style={{
            display: 'flex', overflowX: 'auto', gap: '15px', padding: '0 15px',
            scrollSnapType: isDragging ? 'none' : 'x mandatory', 
            scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch',
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
        >
          {cards.map((card) => (
            <div key={card.id} style={{
              flex: '0 0 100%', backgroundColor: card.bg, color: card.color,
             padding: '20px', scrollSnapAlign: 'center',
              boxShadow: '0 10px 25px rgba(0,0,0,0.06)', pointerEvents: 'none' 
            }} className='text-center rounded-2xl'>
              <img src={card.imgUrl} alt="" style={{ width: '100%', height: '400px', borderRadius: '20px', objectFit: 'cover' }} />
              <h2 style={{ fontSize: '30px', marginTop: '15px', fontWeight: 500 }}>{card.title}</h2>
             <p className='text-sm font-light my-4'>{card.content}</p>
             <p className='text-sm font-light'>{card.subContent}</p>
            </div>
          ))}
        </div>

     
        <div style={{ padding: '0 20px', marginTop: '20px' }}>
          <div style={{ width: '100%', height: '4px', background: '#ffffff', borderRadius: '10px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ 
              position: 'absolute', left: 0, top: 0, height: '100%', 
              width: `${scrollProgress}%`,
              background: '#000', borderRadius: '10px',
              transition: 'width 0.1s ease-out'
            }} />
          </div>
        </div>
      </div>
    );
  }

  // --- DESKTOP DESIGN ---
  return (
    <div ref={containerRef} style={{ height: `${cards.length * 100}vh` }}>
      <div style={{
        position: 'sticky', top: 0, height: '100vh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: '8%', textAlign: 'center', width: '100%', zIndex: 0 }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, margin: 0, color: '#333' }}>Legacy In The Making</h3>   
        </div>
        <div style={{ position: 'relative', width: 'min(480px, 92vw)', height: '580px' }}>
          {cards.map((card, index) => {
            const diff = scrollProgress - index;
            let x = 0, y = 0, scale = 1, opacity = 1;
            let rotate = 5;

            if (diff > 0) {
              x = diff * -250; y = diff * -600; rotate = 5 + (diff * -50);
            } else {
              y = Math.abs(diff) * 10; rotate = 5 + (diff * -5);
              scale = 1 - Math.abs(diff) * 0.04;
              opacity = 1 - Math.abs(diff) * 0.2;
            }

            return (
              <div key={card.id} style={{
                  position: 'absolute', inset: 0, backgroundColor: card.bg, color: card.color,
                  borderRadius: '40px', display: 'flex', flexDirection: 'column',
                  alignItems: 'center', textAlign: 'center', boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
                  zIndex: cards.length - index,
                  transform: `translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${scale})`,
                  transition: 'transform 0.15s ease-out',
                  border: card.bg === '#ffffff' ? '1px solid #eee' : 'none',
                  pointerEvents: diff > 0.5 ? 'none' : 'auto'
                }} className='pt-18 px-10'
              >
                <img src={card.imgUrl} alt="" className='rounded-2xl w-50 h-50' style={{objectFit: 'cover'}}/>
                <h2 className='text-3xl mt-2.5'>{card.title}</h2>
                <p className='text-sm font-light m-4'>{card.content}</p>
                <p className='text-sm font-light'>{card.subContent}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Legacy;