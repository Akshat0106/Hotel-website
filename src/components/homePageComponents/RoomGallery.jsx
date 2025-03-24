import LightGallery from "lightgallery/react";

// Import LightGallery Styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import { useNavigate } from "react-router-dom";

// Import Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export function RoomGallery({ img1, img2 }) {
  const navigateGallery = useNavigate();

  const handleGallery = () => {
    navigateGallery("/gallery");
  };

  return (
    <div className="flex flex-col items-center bg-[#fefbf6] py-12">
      {/* Title */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">Room Gallery</h2>
      <div className="text-center text-xl mb-6">★★★★★</div>

      {/* Responsive Gallery Container */}
      <div className="w-full max-w-4xl px-4">
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="flex flex-col md:flex-row gap-4 justify-center items-center md:items-start"
        >
          {/* Image 1 with Semi-Transparent Overlay */}
          <a href={img1} className="relative rounded-2xl overflow-hidden shadow-lg w-full md:w-auto mb-4 md:mb-0 group">
            <img
              alt="image1"
              src={img1}
              className="w-full md:w-80 h-60 object-cover rounded-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:translate-y-2"
            />
            {/* Semi-transparent Overlay & Floating Plus Icon */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-white text-6xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                +
              </span>
            </div>
          </a>

          {/* Image 2 with Semi-Transparent Overlay */}
          <a href={img2} className="relative rounded-2xl overflow-hidden shadow-lg w-full md:w-auto group">
            <img
              alt="image2"
              src={img2}
              className="w-full md:w-80 h-60 object-cover rounded-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:translate-y-2"
            />
            {/* Semi-transparent Overlay & Floating Plus Icon */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-white text-6xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                +
              </span>
            </div>
          </a>
        </LightGallery>
      </div>

      {/* View More Button */}
      <button
        className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition cursor-pointer"
        onClick={handleGallery}
      >
        View More
      </button>
    </div>
  );
}