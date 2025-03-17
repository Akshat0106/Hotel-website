// import img from '../../assets/img-1.jpg'

// export function HeroSection() {
//   return (
//     <>
//       <div className=" relative w-full h-[90vh]  bg-cover bg-center bg-no-repeat">
//         <div className='absolute top-0 left-0 w-full h-full z-0'>
//             <img className='h-full w-full object-cover' src={img} alt="BG_Image" />
//         </div>
//         <div className="absolute inset-0 h-full flex items-center justify-center z-10">
//           <h2 className="text-4xl font-bold text-black bg-white p-7">
//             Welcome to our hotel
//           </h2>
//         </div>
//         <div></div>
//       </div>
//     </>
//   );
// }

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";


// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import img from "../../assets/img-1.jpg";

// import "../../index.css";

// // import required modules

// export function HeroSection() {
//   const pagination = {
//     clickable: true,
//     renderBullet: function (index, className) {
//       return `<span class=" ${className} custom-pagination"> ${index + 1}</span>`;
//     },
//   };

//   return (
//     <>

// <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
//       {/* ✅ Each SwiperSlide contains an image and a heading */}
//       {[...Array(5)].map((_, index) => (
//         <SwiperSlide key={index}>
//           <div className="relative w-full h-[90vh] md:h-screen bg-cover bg-center bg-no-repeat">
//             {/* Background Image */}
//             <img
//               className="absolute top-0 left-0 w-full h-full object-cover"
//               src={img}
//               alt={`Slide ${index + 1}`}
//             />
            
//             {/* Overlay Heading */}
//             <div className="absolute inset-0 flex items-center justify-center z-10 px-4 text-center">
//               <h2 className="text-2xl md:text-4xl font-bold text-black bg-white p-5 md:p-7">
//                 Welcome to our hotel
//               </h2>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>

//     </>
//   );
// }

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "../../index.css";

// // Import images
// import img1 from "../../assets/img-1.jpg";
// import img2 from "../../assets/img-2.jpg";
// import img3 from "../../assets/img-3.jpg";

// export function HeroSection() {
//   const images = [img1, img2, img3]; // ✅ Array of images

//   const pagination = {
//     clickable: true,
//     renderBullet: function (index, className) {
//       return `<span class=" ${className} custom-pagination"> ${index + 1}</span>`;
//     },
//   };

//   return (
//     <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
//       {/* ✅ Dynamically generate slides from the images array */}
//       {images.map((image, index) => (
//         <SwiperSlide key={index}>
//           <div className="relative w-full h-[90vh] md:h-screen bg-cover bg-center bg-no-repeat">
//             {/* Background Image */}
//             <img
//               className="absolute top-0 left-0 w-full h-full object-cover"
//               src={image}
//               alt={`Slide ${index + 1}`}
//             />

//             {/* Overlay Heading */}
//             <div className="absolute inset-0 flex items-center justify-center z-10 px-4 text-center">
//               <h2 className="text-2xl md:text-4xl font-bold text-black bg-white p-5 md:p-7">
//                 Welcome to our hotel
//               </h2>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import { useState, useRef } from "react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "../../index.css";

// // Import images
// import img1 from "../../assets/img-1.jpg";
// import img2 from "../../assets/img-2.jpg";
// import img3 from "../../assets/img-3.jpg";
// // import img4 from "../../assets/img-4.jpg";
// // import img5 from "../../assets/img-5.jpg";

// export function HeroSection() {
//   const images = [img1, img2, img3]; // ✅ Array of images
//   const [activeIndex, setActiveIndex] = useState(0); // ✅ Track active slide
//   const swiperRef = useRef(null); // ✅ Reference to Swiper instance

//   return (
//     <div className="relative w-full">
//       {/* ✅ Swiper Slider */}
//       <Swiper
//         onSwiper={(swiper) => (swiperRef.current = swiper)} // ✅ Store Swiper instance
//         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // ✅ Update active index
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         modules={[Pagination, Autoplay]}
//         className="mySwiper"
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full h-[90vh] md:h-screen bg-cover bg-center bg-no-repeat">
//               {/* Background Image */}
//               <img
//                 className="absolute top-0 left-0 w-full h-full object-cover"
//                 src={image}
//                 alt={`Slide ${index + 1}`}
//               />

//               {/* Overlay Heading */}
//               <div className="absolute inset-0 flex items-center justify-center z-10 px-4 text-center">
//                 <h2 className="text-2xl md:text-4xl font-bold text-black bg-white p-5 md:p-7">
//                   Welcome to our hotel
//                 </h2>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* ✅ Custom Pagination Buttons */}
//       <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className={`px-4 py-2 rounded-lg text-white font-bold transition ${
//               activeIndex === index ? "bg-blue-600" : "bg-gray-400 hover:bg-gray-500"
//             }`}
//             onClick={() => swiperRef.current?.slideTo(index)}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import { useState, useRef } from "react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/autoplay";

// import "../../index.css";

// // Import images
// import img1 from "../../assets/img-1.jpg";
// import img2 from "../../assets/img-2.jpg";
// import img3 from "../../assets/img-3.jpg";
// // import img4 from "../../assets/img-4.jpg";
// // import img5 from "../../assets/img-5.jpg";

// export function HeroSection() {
//   const images = [img1, img2, img3]; // ✅ Images array
//   const [activeIndex, setActiveIndex] = useState(0); // ✅ Track active slide
//   const swiperRef = useRef(null); // ✅ Store Swiper instance

//   return (
//     <div className="relative w-full h-[90vh] md:h-screen">
//       {/* ✅ Swiper Slider */}
//       <Swiper
//         onSwiper={(swiper) => (swiperRef.current = swiper)} // ✅ Store Swiper instance
//         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // ✅ Update active index
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         modules={[Autoplay]}
//         className="w-full h-full"
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full h-full">
//               {/* Background Image */}
//               <img className="w-full h-full object-cover" src={image} alt={`Slide ${index + 1}`} />

//               {/* Overlay Heading */}
//               <div className="absolute inset-0 flex items-center justify-center bg-black/40">
//                 <h2 className="text-2xl md:text-4xl font-bold text-white bg-black/50 p-5 md:p-7 rounded-lg">
//                   Welcome to our hotel
//                 </h2>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* ✅ Custom Pagination Buttons (Numbers) */}
//       <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className={`custom-pagination ${
//               activeIndex === index ? "active-pagination" : ""
//             }`}
//             onClick={() => swiperRef.current?.slideTo(index)}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import { useState, useRef } from "react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "../../index.css";

// // Import images
// import img1 from "../../assets/img-1.jpg";
// import img2 from "../../assets/img-2.jpg";
// import img3 from "../../assets/img-3.jpg";

// export function HeroSection() {
//   const images = [img1, img2, img3]; // ✅ Array of images
//   const [activeIndex, setActiveIndex] = useState(0); // ✅ Track active slide
//   const swiperRef = useRef(null); // ✅ Reference to Swiper instance

//   return (
//     <div className="relative w-full">
//       {/* ✅ Swiper Slider */}
//       <Swiper
//         onSwiper={(swiper) => (swiperRef.current = swiper)} // ✅ Store Swiper instance
//         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // ✅ Update active index
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         modules={[Pagination, Autoplay]}
//         className="mySwiper"
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full h-[90vh] md:h-screen">
//               {/* ✅ Background Image (No Overlay) */}
//               <img
//                 className="absolute top-0 left-0 w-full h-full object-cover"
//                 src={image}
//                 alt={`Slide ${index + 1}`}
//               />

//               {/* ✅ Centered Hotel Title */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <h2 className="bg-white text-black px-6 py-3 rounded-lg shadow-md text-2xl md:text-4xl font-bold">
//                   Welcome to our hotel
//                 </h2>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* ✅ Custom Pagination Buttons */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-50">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold transition-all duration-300 ${
//               activeIndex === index
//                 ? "bg-blue-600 scale-110 shadow-lg"
//                 : "bg-gray-500 hover:bg-gray-600"
//             }`}
//             onClick={() => swiperRef.current?.slideTo(index)}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useState, useRef } from "react";

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
  const images = [img1, img2, img3]; // ✅ Array of images
  const [activeIndex, setActiveIndex] = useState(0); // ✅ Track active slide
  const swiperRef = useRef(null); // ✅ Reference to Swiper instance

  return (
    <div className="relative w-full">
      {/* ✅ Swiper Slider */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // ✅ Store Swiper instance
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // ✅ Update active index
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[90vh] md:h-screen">
              {/* ✅ Background Image (No Overlay) */}
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={image}
                alt={`Slide ${index + 1}`}
              />

              {/* ✅ Centered Hotel Title */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="bg-white text-black px-8 py-4 rounded-lg shadow-md text-3xl md:text-5xl font-bold">
                  Welcome to our hotel
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Custom Pagination Buttons */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-8 h-5 flex items-center justify-center rounded-full text-white text-lg font-bold transition-all duration-300 border-2 ${
              activeIndex === index
                ? "bg-blue-600 scale-110 shadow-lg border-white"
                : "bg-gray-500 hover:bg-gray-600 border-transparent"
            }`}
            onClick={() => swiperRef.current?.slideTo(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}








