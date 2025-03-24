/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../index.css";

// Import images
import img1 from "../../assets/img-1.jpg";
import img2 from "../../assets/img-2.jpg";
import img3 from "../../assets/img-3.jpg";

export function HeroSection() {
  const images = [img1, img2, img3];
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  
  // Preload images on component mount
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  return (
    <div className="relative w-full">
      {/* Hidden preloader */}
      <div className="hidden">
        {images.map((src, index) => (
          <img key={`preload-${index}`} src={src} alt="" />
        ))}
      </div>
      
      {/* Swiper with simplified autoplay */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        autoplay={{
          delay: 5000, // 5 seconds per slide to allow animation to complete
          disableOnInteraction: false,
        }}
        speed={0} // No transition animation between slides
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        preloadImages={true}
        loop={true} // Enable loop for continuous sliding
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[90vh] md:h-screen overflow-hidden">
              {/* Background container */}
              <div className="absolute inset-0 bg-gray-900">
                {/* Only render active slide content */}
                {activeIndex === index && (
                  <div className="absolute inset-0 w-full h-full">
                    {/* Background Image with animation */}
                    <motion.div
                      className="absolute inset-0 w-full h-full"
                      style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      initial={{ 
                        opacity: 0.7, 
                        scale: 1.1, 
                        x: index % 2 === 0 ? 30 : -30 
                      }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1.0, 
                        x: 0,
                        transition: { 
                          duration: 3.5,
                          ease: "easeOut" 
                        }
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Hotel Title */}
              {activeIndex === index && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center z-10"
                  initial={{ opacity: 0, scale: 0.9, y: 40 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.8, 
                      ease: "easeOut", 
                      delay: 0.4 
                    } 
                  }}
                >
                  <h2 className="bg-white bg-opacity-90 text-black px-8 py-4 rounded-lg shadow-md text-3xl md:text-5xl font-bold">
                    Welcome to our hotel
                  </h2>
                </motion.div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Buttons */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-10">
        {images.map((_, index) => (
          <motion.button
            key={index}
            className={`w-8 h-5 flex items-center justify-center rounded-full text-white text-lg font-bold transition-all duration-300 border-2 ${
              activeIndex === index
                ? "bg-blue-600 scale-110 shadow-lg border-white"
                : "bg-gray-500 hover:bg-gray-600 border-transparent"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slideTo(index);
              }
            }}
          >
            {index + 1}
          </motion.button>
        ))}
      </div>
    </div>
  );
}