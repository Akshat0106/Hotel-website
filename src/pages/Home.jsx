// import img1 from "../assets/img-3.jpg";
// import img2 from "../assets/img-1.jpg";
// import { HeroSection } from "../components/homePageComponents/HeroSection";
// import { RoomSection } from "../components/homePageComponents/RoomSection";
// import { ParallaxEffect } from "../components/homePageComponents/ParallaxEffect";
// import { FacilitiesSection } from "../components/homePageComponents/FacilitiesSection";
// import { Dining } from "../components/homePageComponents/Dining";
// import { Testimonial } from "../components/homePageComponents/testimonial";
// export function Home() {
//   return (
//     <div>
//       {/* Hero Section */}

//       <div><HeroSection/></div>

//       {/* Hero Section Ends */}

//     {/* ------------------------------------- */}

//       {/* Rooms section  */}

//       <div className="bg-gray-200"><RoomSection/></div>

//       {/* Rooms Section ends */}

//     {/* ------------------------------------- */}

//       {/* facilities section */}
//       <div>
//         <ParallaxEffect img1={img1} >
//           <FacilitiesSection />
//         </ParallaxEffect>
//       </div>

//       {/* About-us area*/}
//       <div>
//         <div className="grid grid-cols-4 h-full bg-gray-200 py-24 px-56 gap-20">
//           <div className="p-4 col-span-2">
//             <div className="flex flex-col items-start h-full">
//             <h1 className="font-semibold text-3xl">A Perfect Place to Remember</h1>
//             <p className="mt-7"><b>RATEbot Ai…</b> has been into the hospitality and service industry for the past 5 years</p>
//             <div className="mt-6 text-center">
//           <a
//             href="#"
//             className="inline-block px-6 py-3 text-lg font-semibold bg-black text-white rounded-lg hover:opacity-80 transition"
//           >
//             View More
//           </a>
//         </div>
//             </div>
//           </div>
//           <div className="h-96 col-span-2 ">
//             <img src={img2} alt="" className="h-full w-full object-cover clip-design"/>
//           </div>
//         </div>
//       </div>

//       {/* Dining */}
//       <div>
//         <ParallaxEffect img1={img1}>
//           <Dining img1={img2} />
//         </ParallaxEffect>
//       </div>

//       {/* Room Gallery */}
//       {/* <div>
//         <div className="p-12">
//           <div className="font-bold text-4xl border-2 border-black">Rooms Gallery</div>

//           <div className="flex flex-row items-center border-2 border-black h-96 gap-4">
//             <div className="max-w-sm rounded overflow-hidden shadow-lg">
//               <img src={img1} alt="" />
//             </div>

//             <div className="max-w-sm rounded overflow-hidden shadow-lg">
//               <img src={img1} alt="" />
//             </div>

//             <div className="max-w-sm rounded overflow-hidden shadow-lg">
//               <img src={img1} alt="" />
//             </div>
//           </div>

//           <div className="p-4 bg-black text-white">
//             <a href="#">View More</a>
//           </div>

//         </div>
//       </div> */}

//       <div className="p-12">
//         {/* Heading */}
//         <div className="text-4xl font-bold text-center border-b-4 border-black pb-4">
//           Rooms Gallery
//         </div>

//         {/* Image Gallery */}
//         <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
//           {/* Card 1 */}
//           <div className="w-64 h-80 rounded-lg shadow-lg overflow-hidden border border-gray-300">
//             <img src={img1} alt="Room" className="w-full h-full object-cover" />
//           </div>

//           {/* Card 2 */}
//           <div className="w-64 h-80 rounded-lg shadow-lg overflow-hidden border border-gray-300">
//             <img src={img1} alt="Room" className="w-full h-full object-cover" />
//           </div>

//           {/* Card 3 */}
//           <div className="w-64 h-80 rounded-lg shadow-lg overflow-hidden border border-gray-300">
//             <img src={img1} alt="Room" className="w-full h-full object-cover" />
//           </div>
//         </div>

//         {/* View More Button */}
//         <div className="mt-6 text-center">
//           <a
//             href="#"
//             className="inline-block px-6 py-3 text-lg font-semibold bg-black text-white rounded-lg hover:opacity-80 transition"
//           >
//             View More
//           </a>
//         </div>
//       </div>

//       {/* Testimonials */}
//       {/* <div>
//         <div className="p-12">
//           <div>What People Say About Us</div>
//           <div className="">
//             <div className="border-2 border-black p-4 ">
//               <div>
//                 <img src="" alt="image" className="rounded-xl border-0"/>
//               </div>
//               <p>The theme is beautiful and easy to customize. Also technical support are always ready to assist and are quick to reply.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div> */}

//       <div className="p-12">
//         {/* Section Heading */}
//         <div className="text-3xl font-bold text-center mb-8">
//           What People Say About Us
//         </div>

//         {/* Testimonial Card */}
//         {/* <div className="flex flex-row items-center justify-center gap-6">
//           <div className="max-w-2xl mx-auto flex items-center border-2 border-black p-6 rounded-lg shadow-lg "> */}
//             {/* Image on Left */}
//             {/* <div className="w-20 h-20 flex-shrink-0">
//               <img
//                 src={img1}
//                 alt="User Image"
//                 className="w-full h-full rounded-full object-cover border border-gray-300"
//               />
//             </div> */}

//             {/* Text Content on Right */}
//             {/* <div className="ml-6">
//               <p className="text-gray-700 text-lg">
//                 "The theme is beautiful and easy to customize. Also, technical
//                 support is always ready to assist and quick to reply."
//               </p>
//             </div>
//           </div> */}

//           {/* <div className="max-w-2xl mx-auto flex items-center border-2 border-black p-6 rounded-lg shadow-lg"> */}
//             {/* Image on Left */}
//             {/* <div className="w-20 h-20 flex-shrink-0"> */}
//               {/* <img
//                 src={img1}
//                 alt="User Image"
//                 className="w-full h-full rounded-full object-cover border border-gray-300"
//               />
//             </div> */}

//             {/* Text Content on Right */}
//             {/* <div className="ml-6">
//               <p className="text-gray-700 text-lg">
//                 "The theme is beautiful and easy to customize. Also, technical
//                 support is always ready to assist and quick to reply."
//               </p>
//             </div>
//           </div>
//         </div> */}
//         <div>
//         <ParallaxEffect img1={img1}>
//           <Testimonial/>
//         </ParallaxEffect>
//         </div>
//       </div>
//     </div>
//   );
// }

import img1 from "../assets/img-3.jpg";
import img2 from "../assets/img-1.jpg";
import { HeroSection } from "../components/homePageComponents/HeroSection";
import { RoomSection } from "../components/homePageComponents/RoomSection";
import { ParallaxEffect } from "../components/homePageComponents/ParallaxEffect";
import { FacilitiesSection } from "../components/homePageComponents/FacilitiesSection";
import { Dining } from "../components/homePageComponents/Dining";
import { Testimonial } from "../components/homePageComponents/Testimonial";
import { Navigate } from "react-router";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      {/* Rooms Section */}
      <div className="bg-gray-200 pt-2">
        <RoomSection />
      </div>
      {/* Facilities Section */}
      <ParallaxEffect img1={img1}>
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
              <b>RATEbot Ai…</b> has been into the hospitality and service
              industry for the past 5 years
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-block px-6 py-3 text-lg font-semibold bg-black text-white rounded-lg hover:opacity-80 transition"
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

      {/* Dining */}
      <ParallaxEffect img1={img1}>
        <Dining img1={img2} />
      </ParallaxEffect>

      {/* Rooms Gallery */}
      {/* <div className="p-6 md:p-12">
        <div className="text-3xl md:text-4xl font-bold text-center border-b-4 border-black pb-4">
          Rooms Gallery
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
          {[img1, img1, img1].map((image, index) => (
            <div key={index} className="w-full md:w-64 h-80 rounded-lg shadow-lg overflow-hidden border border-gray-300">
              <img src={image} alt="Room" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a
            href="#"
            className="inline-block px-6 py-3 text-lg font-semibold bg-black text-white rounded-lg hover:opacity-80 transition"
          >
            View More
          </a>
        </div>
      </div> */}
      <div className="p-6 md:p-12">
        <div className="text-3xl md:text-4xl font-bold text-center border-b-4 border-black pb-4">
          Rooms Gallery
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
          {[img1, img1, img1].map((image, index) => (
            <div
              key={index}
              className="w-full md:w-64 h-80 rounded-lg shadow-lg overflow-hidden border border-gray-300 relative group cursor-pointer"
              onClick={() => Navigate("/rooms")} // Assuming you're using react-router's useNavigate
            >
              <img
                src={image}
                alt="Room"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="">View Details</a>
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a
            href="/rooms" // Update this with your actual rooms gallery route
            className="inline-block px-6 py-3 text-lg font-semibold bg-black text-white rounded-lg hover:opacity-80 transition"
          >
            View More
          </a>
        </div>
      </div>

      {/* Testimonials */}
      <div>
        <ParallaxEffect img1={img1}>
          <div className="p-52">
            <Testimonial />
          </div>
        </ParallaxEffect>
      </div>
    </div>
  );
}
