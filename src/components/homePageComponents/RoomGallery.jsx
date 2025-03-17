// import { Navigate } from "react-router-dom"

// export function RoomGallery({img1}){
//     return (
//         <>
//               <div className="p-6 md:p-12">
//         <div className="text-3xl md:text-4xl font-bold text-center border-b-4 border-black pb-4">
//           Rooms Gallery
//         </div>
//         <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
//           {[img1, img1, img1].map((image, index) => (
//             <div
//               key={index}
//               className="w-full md:w-64 h-80 rounded-lg shadow-lg overflow-hidden border border-gray-300 relative group cursor-pointer"
//               onClick={() => Navigate("/rooms")} // Assuming you're using react-router's useNavigate
//             >
//               <img
//                 src={image}
//                 alt="Room"
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//               {/* Hover overlay effect */}
//               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
//                 <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <a href="">View Details</a>
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="mt-6 text-center">
//           <a
//             href="/rooms" // Update this with your actual rooms gallery route
//             className="inline-block px-6 py-3 text-lg font-semibold bg-black text-white rounded-lg hover:opacity-80 transition"
//           >
//             View More
//           </a>
//         </div>
//       </div>
//         </>
//     )
// }

// import LightGallery from "lightgallery/react";

// // import styles
// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";

// // import plugins if you need
// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/zoom";

// export function RoomGallery({ img1, img2 }) {
//   // const onInit = () => {
//   //     console.log('lightGallery has been initialized');
//   // };
//   return (
//     <div className="App">
//       <div>Rooms Gallery</div>
//       <LightGallery
//         // onInit={onInit}
//         speed={500}
//         plugins={[lgThumbnail, lgZoom]}
//       >
//         <a href={img1}>
//           <img alt="image1" src={img1} />
//         </a>
//         <a href={img2}>
//           <img alt="image2" src={img2} />
//         </a>
//       </LightGallery>
//       <button>View More</button>
//     </div>
//   );
// }

import LightGallery from "lightgallery/react";

// Import LightGallery Styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// Import Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export function RoomGallery({ img1, img2 }) {
  return (
    <div className="flex flex-col items-center bg-[#fefbf6] py-12">
      {/* Title */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">Room Gallery</h2>
      <div className="text-center text-xl mb-6">★★★★★</div>

      {/* LightGallery Container */}
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        className="grid grid-cols-1 md:grid-cols-3"
      >
        <a href={img1} className="rounded-2xl overflow-hidden shadow-lg">
          <img
            alt="image1"
            src={img1}
            className="w-full h-60 object-cover rounded-2xl hover:scale-105 transition-transform duration-200 mb-4"
          />
        </a>
        <a href={img2} className="rounded-2xl overflow-hidden shadow-lg">
          <img
            alt="image2"
            src={img2}
            className="w-full h-60 object-cover rounded-2xl hover:scale-105 transition-transform duration-200"
          />
        </a>
      </LightGallery>

      {/* View More Button */}
      <button className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
        View More
      </button>
    </div>
  );
}

