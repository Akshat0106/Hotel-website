import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
export function Gallery(){
  
    // Sample image URLs - replace with your actual hotel room images
    const roomImages = [
      "/api/placeholder/600/400", 
      "/api/placeholder/600/400", 
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400"
    ];
    
    // State to track slider visibility and current slide
    const [sliderOpen, setSliderOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    // Open slider with specific image
    const openSlider = (index) => {
      setCurrentImageIndex(index);
      setSliderOpen(true);
    };
    
    // Close slider
    const closeSlider = () => {
      setSliderOpen(false);
    };
    
    // Navigate to next slide
    const nextSlide = (e) => {
      e.stopPropagation();
      setCurrentImageIndex((prevIndex) => 
        prevIndex === roomImages.length - 1 ? 0 : prevIndex + 1
      );
    };
    
    // Navigate to previous slide
    const prevSlide = (e) => {
      e.stopPropagation();
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? roomImages.length - 1 : prevIndex - 1
      );
    };
    
    return (
      <div className="p-6 md:p-12 relative">
        {/* Gallery Header */}
        <div className="text-3xl md:text-4xl font-bold text-center border-b-4 border-black pb-4">
          Rooms Gallery
        </div>
        
        {/* Gallery Grid */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
          {roomImages.map((image, index) => (
            <div 
              key={index} 
              className="w-full md:w-64 h-80 rounded-lg shadow-lg overflow-hidden border border-gray-300 cursor-pointer relative group"
              onClick={() => openSlider(index)}
            >
              {/* Room Image */}
              <img 
                src={image} 
                alt={`Room ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Room
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="mt-6 text-center">
          <a
            href="/rooms"
            className="inline-block px-6 py-3 text-lg font-semibold bg-black text-white rounded-lg hover:opacity-80 transition"
          >
            View All Rooms
          </a>
        </div>
        
        {/* Full Screen Slider */}
        {sliderOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={closeSlider}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition"
              onClick={closeSlider}
            >
              <X size={24} />
            </button>
            
            {/* Previous Button */}
            <button 
              className="absolute left-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition"
              onClick={prevSlide}
            >
              <ChevronLeft size={24} />
            </button>
            
            {/* Current Image */}
            <div className="w-full max-w-4xl max-h-screen p-4">
              <img 
                src={roomImages[currentImageIndex]} 
                alt={`Room ${currentImageIndex + 1}`} 
                className="w-full h-full object-contain"
              />
              <div className="text-white text-center mt-2">
                Room {currentImageIndex + 1} of {roomImages.length}
              </div>
            </div>
            
            {/* Next Button */}
            <button 
              className="absolute right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition"
              onClick={nextSlide}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    );
  }