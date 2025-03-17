// // export function Dining({ img1 }) {
// //   return (
// //     <div>
// //       <div className="p-4 mt-2 ">
// //         <div className="text-center text-4xl text-white font-bold  ">
// //           Dining
// //         </div>

// //         <div className="flex flex-row items-center justify-center border-2 mt-4 h-full gap-56">
// //           <div className="relative w-60 h-60">
// //             <img
// //               src={img1}
// //               alt="Hexagon Image"
// //               className="w-full h-full object-cover clip-hexagon"
// //             />
// //           </div>

// //           <div className="relative w-60 h-60">
// //             <img
// //               src={img1}
// //               alt="Hexagon Image"
// //               className="w-full h-full object-cover clip-hexagon"
// //             />
// //           </div>

// //           <div className="relative w-60 h-60">
// //             <img
// //               src={img1}
// //               alt="Hexagon Image"
// //               className="w-full h-full object-cover clip-hexagon"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// export function Dining({ img1 }) {
//   return (
//     <div className="p-4 mt-2">
//       {/* Section Heading */}
//       <div className="text-center text-3xl md:text-4xl text-white font-bold">
//         Dining
//       </div>

//       {/* Image Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6 place-items-center">
//         <div className="relative w-48 h-48 md:w-60 md:h-60 border-gray-500">
//           <img
//             src={img1}
//             alt="Hexagon Image"
//             className="w-full h-full object-cover clip-hexagon"
//           />
//         </div>

//         <div className="relative w-48 h-48 md:w-60 md:h-60 border-gray-500">
//           <img
//             src={img1}
//             alt="Hexagon Image"
//             className="w-full h-full object-cover clip-hexagon"
//           />
//         </div>

//         <div className="relative w-48 h-48 md:w-60 md:h-60">
//           <img
//             src={img1}
//             alt="Hexagon Image"
//             className="w-full h-full object-cover clip-hexagon border-4 border-gray-500"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export function Dining({ img1 }) {
//   return (
//     <div className="p-4 mt-2">
//       {/* Section Heading */}
//       <div className="text-center text-3xl md:text-4xl text-white font-bold">
//         Dining
//       </div>

//       {/* Image Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6 place-items-center">
//         {/* Hexagon with border */}
//         <div className="relative w-48 h-48 md:w-60 md:h-60 hexagon-container">
//           <div className="hexagon-border"></div>
//           <img
//             src={img1}
//             alt="Hexagon Image"
//             className="hexagon-image"
//           />
//         </div>

//         {/* Second Hexagon */}
//         <div className="relative w-48 h-48 md:w-60 md:h-60 hexagon-container">
//           <div className="hexagon-border"></div>
//           <img
//             src={img1}
//             alt="Hexagon Image"
//             className="hexagon-image"
//           />
//         </div>

//         {/* Third Hexagon */}
//         <div className="relative w-48 h-48 md:w-60 md:h-60 hexagon-container">
//           <div className="hexagon-border"></div>
//           <img
//             src={img1}
//             alt="Hexagon Image"
//             className="hexagon-image"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

export function Dining({ img1 }) {
  return (
    <div className="p-4 mt-2">

      {/* Section Heading */}
      <div className="mb-8">
        <div className="text-center text-3xl md:text-4xl text-white font-bold mb-2">
          Dining
        </div>
        <div className="text-center text-xl mb-6 text-white">★★★★★</div>
      </div>


      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6 place-items-center">
        {/* First Hexagon */}
        <div className="hex-wrapper w-60 h-60 md:w-70 md:h-80">
          <div className="hex-border"></div>
          <div className="hex-content">
            <img src={img1} alt="Hexagon Image" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Second Hexagon */}
        <div className="hex-wrapper w-60 h-60 md:w-70 md:h-80">
          <div className="hex-border"></div>
          <div className="hex-content">
            <img src={img1} alt="Hexagon Image" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Third Hexagon */}
        <div className="hex-wrapper w-60 h-60 md:w-70 md:h-80">
          <div className="hex-border"></div>
          <div className="hex-content">
            <img src={img1} alt="Hexagon Image" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

