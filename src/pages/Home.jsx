import img1 from "../assets/img-3.jpg";
import img2 from "../assets/img-1.jpg";
import { HeroSection } from "../components/homePageComponents/HeroSection";
import { RoomSection } from "../components/homePageComponents/RoomSection";
import { ParallaxEffect } from "../components/homePageComponents/ParallaxEffect";
import { FacilitiesSection } from "../components/homePageComponents/FacilitiesSection";
import { Dining } from "../components/homePageComponents/Dining";
import { Testimonial } from "../components/homePageComponents/Testimonial";
import { RoomGallery } from "../components/homePageComponents/RoomGallery";
import { useNavigate } from "react-router-dom";

// import { Navigate } from "react-router";

export function Home() {
  const navigateAbout=useNavigate()

  const handleAboutClick=()=>{
    navigateAbout('/aboutus')
  }
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />


      {/* Rooms Section */}
      <div className="bg-gray-200 w-full overflow-x-hidden">
        <RoomSection />
      </div>

      {/* Facilities Section (Default 100vh) */}
      <ParallaxEffect img1={img1} height="h-[70vh]">
        <FacilitiesSection />
      </ParallaxEffect>

      {/* About Us Section */}
      <div className="bg-gray-200 py-12 px-6 md:px-20 lg:px-56">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="p-4">
            <h1 className="font-semibold text-2xl md:text-3xl">
              A Perfect Place to Remember
            </h1>
            <p className="mt-5 text-gray-700">
              <b>Lorem, ipsum.</b> has been into the hospitality and service
              industry for the past 5 years
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-block px-6 py-3 text-lg font-semibold bg-black text-white rounded-lg hover:opacity-80 transition"
                onClick={handleAboutClick}
              >
                View More
              </a>
            </div>
          </div>
          <div className="h-64 md:h-96">
            <img
              src={img2}
              alt="About Us"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Dining Section (Smaller Height - 60vh) */}
      <ParallaxEffect img1={img1} height="md:h-[70vh]">
        <Dining img1={img2} />
      </ParallaxEffect>

      {/* Rooms Gallery */}

      <div>
        <RoomGallery img1={img1} img2={img2} />
      </div>

      {/* Testimonials Section (Even Smaller - 50vh) */}
      <ParallaxEffect img1={img2} height="h-[60vh]">
        <Testimonial />
      </ParallaxEffect>
    </div>
  );
}
