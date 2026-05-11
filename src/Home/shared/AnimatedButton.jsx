import React from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";

const AnimatedButton = ({ text, className }) => {
  return (
    <button className={`group relative overflow-hidden transition-all duration-300 ${className}`}> 
      <div className="relative flex flex-col justify-center items-center h-7 overflow-hidden px-4">
        <span className="flex items-center gap-2 transition-all duration-500 ease-out transform group-hover:-translate-y-10">
          {text} <MdOutlineArrowOutward className="text-lg" />
        </span>
        <span className="absolute flex items-center gap-2 transition-all duration-500 ease-out transform translate-y-10 group-hover:translate-y-0">
          {text} <MdOutlineArrowOutward className="text-lg" />
        </span>    
      </div>
    </button>
  );
};

export default AnimatedButton;