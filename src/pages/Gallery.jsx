import img2 from "../assets/img-2.jpg";
import LightGallery from "lightgallery/react";

// Import LightGallery Styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// Import Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
export function Gallery(){
  
    // Sample image URLs - replace with your actual hotel room images
  const imageArray = [
    { src: img2, alt: "Image 1" },
    { src: img2, alt: "Image 2" },
    { src: img2, alt: "Image 3" },
    { src: img2, alt: "Image 4" },
    { src: img2, alt: "Image 5" },
    { src: img2, alt: "Image 6" },
    { src: img2, alt: "Image 7" },
  ];
    
    return (
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center justify-center gap-12 mt-40">
      <div>
        <h2 className="text-4xl font-bold text-center">Room Gallery</h2>
        <div className="text-center text-xl mt-2">★★★★★</div>
      </div>
        
        {/* Gallery Grid */}

        <div className="w-full">
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {imageArray.map((image, index) => (
            <a
              key={index}
              href={image.src}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                alt={image.alt}
                src={image.src}
                className="w-full h-60 object-cover rounded-2xl hover:scale-105 transition-transform duration-200"
              />
            </a>
          ))}
        </LightGallery>
      </div>
        
        
      </div>
    );
  }