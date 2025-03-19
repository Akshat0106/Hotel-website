import img2 from "../assets/img-2.jpg";
import LightGallery from "lightgallery/react";

// Import LightGallery Styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// Import Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
export function Dining() {
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
        <h2 className="text-4xl font-bold text-center">Dining</h2>
        <div className="text-center text-xl mt-2">★★★★★</div>
      </div>

      {/* Text Section */}
      <div className="md:w-3/4 text-left">
        <p className="text-gray-600 mb-4">
          Welcome to our hotel, where luxury meets comfort. We provide an
          exceptional stay experience with world-class amenities and services
          tailored for you.
        </p>
        <p className="text-gray-600">
          Whether you're here for business or leisure, our warm hospitality
          ensures a memorable stay.
        </p>
        <br />
        <h3 className="text-gray-600">WE SERVE: (BUFFET/A LA CARTE)</h3>
        <ol className="text-gray-600">
          <li>1. Continental</li>
          <li>2. English/Irish</li>
          <li>3. Vegetarian </li>
          <li>4. Halal </li>
          <li>5. Asian </li>
          <li>6. American</li>
          <li>7. Jain </li>
          <li>8. Arabic </li>
          <li>9. Chinese </li>
        </ol>
      </div>

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
