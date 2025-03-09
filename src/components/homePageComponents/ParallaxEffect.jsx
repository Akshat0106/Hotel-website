// export function ParallaxEffect({ img1,children}) {

//   return (
//     <div className="relative h-96 flex flex-col items-center justify-center bg-cover bg-center bg-fixed">
//       <div
//         className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${img1})`,
//           backgroundAttachment: "fixed",
//         }}
//       />
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="absolute inset-0 flex flex-col items-center justify-center z-10 ">
//       {children}
//       </div>
//     </div>
//   );
// }

// export function ParallaxEffect({ img1, children }) {
//   return (
//     <div className="relative h-80 md:h-96 flex flex-col items-center justify-center bg-cover bg-center">
//       <div
//         className="absolute top-0 left-0 w-full h-full bg-cover bg-center md:bg-fixed"
//         style={{
//           backgroundImage: `url(${img1})`,
//         }}
//       />
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 text-center">
//         {children}
//       </div>
//     </div>
//   );
// }

export function ParallaxEffect({ img1, children }) {
  return (
    <div className="relative min-h-[60vh] md:min-h-[80vh] flex flex-col items-center justify-center bg-cover bg-center bg-fixed md:bg-fixed bg-local">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundAttachment: window.innerWidth > 768 ? "fixed" : "local",
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4 text-center">
        {children}
      </div>
    </div>
  );
}

