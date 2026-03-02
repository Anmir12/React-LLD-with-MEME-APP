import React, { useEffect, useState } from 'react'
import { SLIDER_IMAGES } from '../utils/constants'

const ImageSlider = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [isPaused,setIsPaused] = useState(false);

  const prevImageHandler = () => {
    setActiveImage((prev) => (prev - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length);
  };

  const nextImageHandler = () => {
    setActiveImage((prev) => (prev + 1) % SLIDER_IMAGES.length);
  };
 useEffect(()=>{
   if(isPaused){
    return;
   }
  const i = setInterval(()=>{
    setActiveImage((prev) => (prev + 1) % SLIDER_IMAGES.length);
  },3000)

  return ()=>{
    clearInterval(i)
  }
 },[activeImage,isPaused])
  return (
    <div className="flex items-center justify-center min-h-[500px]" onMouseEnter={()=>setIsPaused(true)} onMouseLeave={()=>setIsPaused(false)}>
      <div className="flex m-10 items-center justify-center bg-gray-50 p-6 rounded-2xl shadow-sm">
        <button
          className="text-8xl text-gray-300 hover:text-blue-500 transition-colors leading-none pb-4"
          onClick={prevImageHandler}
        >
          ‹
        </button>

        <div className="w-[450px] h-[300px] overflow-hidden rounded-xl shadow-lg border-4 border-white mx-10">
          <img
            src={SLIDER_IMAGES[activeImage].url}
            alt={SLIDER_IMAGES[activeImage].title}
            key={activeImage}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
        </div>

        <button
          className="text-8xl text-gray-300 hover:text-blue-500 transition-colors leading-none pb-4"
          onClick={nextImageHandler}
        >
          ›
        </button>
      </div>
      <div className="flex gap-2">
        {SLIDER_IMAGES.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${activeImage === index ? "bg-blue-500 w-6" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;