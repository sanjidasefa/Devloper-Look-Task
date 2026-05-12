import React from 'react';

const ExtraSection = () => {
  return (
    <section className='hidden lg:block lg:my-32 overflow-hidden'>
      <h1 
        className='text-black leading-[0.8]' 
        style={{
          fontSize: '18rem',          // Image er moto bishal size
          fontWeight: '500',          // Too thin na, Medium weight (image er sathe milbe)
          letterSpacing: '-0.06em',   // Letter gulo ektar upor arekta uthe thakbe
          display: 'inline-block',
          whiteSpace: 'nowrap',
          fontFamily: 'sans-serif'    // Clean look
        }}
      >
        ad yt oRis ea tSe
      </h1>
    </section>
  );
};

export default ExtraSection;