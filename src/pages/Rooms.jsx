// import img1 from '../assets/img-1.jpg';
// import img2 from '../assets/img-2.jpg';

// export function Rooms(){
//     return (
//       <>
//       <div className="bg-gray-100">
//         <div className="p-40">
//           <div>
//             <h1>Luxury & Comfortable Rooms</h1>
//             <div className="flex justify-center gap-2">
//               <a href="http://">All</a>
//               <a href="http://">Deluxe</a>
//               <a href="http://">Suite</a>
//             </div>

//             {/* crad-section */}
//             <div className="flex justify-center gap-4 m-20">
//               {/* card-1 */}

//               <div class="w-sm bg-black border border-gray-200 rounded-lg shadow-sm">
//                 <a href="#">
//                   <img
//                     class="rounded-t-lg"
//                     src={img2}
//                     alt=""
//                     className="w-full h-60"
//                   />
//                 </a>
//                 <div class="p-5 flex flex-col">
//                   <a href="#">
//                     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                       Suite Room
//                     </h5>
//                   </a>
//                   <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                     Rs.7499 per night
//                   </p>
//                   <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                     Air conditioned rooms (GST extra)
//                   </p>
//                   <span>
//                     <a
//                       href="#"
//                       class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600"
//                     >
//                       Read more
//                       <svg
//                         class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 14 10"
//                       >
//                         <path
//                           stroke="currentColor"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           stroke-width="2"
//                           d="M1 5h12m0 0L9 1m4 4L9 9"
//                         />
//                       </svg>
//                     </a>
//                   </span>
//                 </div>
//               </div>

//               {/* card-2 */}

//               <div class="w-sm bg-black border border-gray-200 rounded-lg shadow-sm">
//                 <a href="#">
//                   <img
//                     class="rounded-t-lg"
//                     src={img1}
//                     alt=""
//                     className="w-full h-60"
//                   />
//                 </a>
//                 <div class="p-5">
//                   <a href="#">
//                     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                       Deluxe room
//                     </h5>
//                   </a>
//                   <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                     Rs.5499 per night
//                   </p>
//                   <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                     Air conditioned Rooms (GST extra)
//                   </p>
//                   <a
//                     href="#"
//                     class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                   >
//                     Read more
//                     <svg
//                       class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 14 10"
//                     >
//                       <path
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M1 5h12m0 0L9 1m4 4L9 9"
//                       />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       </>
//     )
//   }
// import img2 from "../assets/img-2.jpg";
// import img1 from "../assets/img-1.jpg";

// import { useState } from "react";

// const roomsData = [
//   {
//     id: 1,
//     name: "Suite room",
//     price: 7499,
//     category: "Suite",
//     src: img2,
//   },
//   {
//     id: 2,
//     name: "Deluxe room",
//     price: 5499,
//     category: "Deluxe",
//     src: img1,
//   },
//   {
//     id: 3,
//     name: "Presidential room",
//     price: 5499,
//     category: "Presidential",
//     src: img1,
//   },
//   {
//     id: 4,
//     name: "Executive room",
//     price: 5499,
//     category: "Executive",
//     src: img1,
//   },
// ];
// export function Rooms() {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   // Filter rooms based on selected category
//   const filteredRooms =
//     selectedCategory === "All"
//       ? roomsData
//       : roomsData.filter((room) => room.category === selectedCategory);
//   return (
//     <div className="mt-24">
//       <h1 className="text-center text-4xl font-medium">Luxury Rooms</h1>
//       <div className="max-w-7xl mx-auto px-6 py-12 text-center">
//         {/* Category Buttons */}
//         <div className="flex justify-center mb-6">
//         <div className="flex gap-4 h-12 overflow-x-auto whitespace-nowrap px-2 md:px-0">
//           {["All", "Deluxe", "Suite","Executive","Presidential"].map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-6 py-2 rounded-full border bg-black  text-white hover:border-4 hover:border-white ${
//                 selectedCategory === category
//                   ? "bg-gold text-white"
//                   : "border-gray-400"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//         </div>

//         {/* Rooms Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {filteredRooms.map((room) => (
//             <div key={room.id} className="bg-white shadow-lg rounded-lg p-4">
//               <img
//                 src={room.src}
//                 alt={room.name}
//                 className="w-full h-64 rounded-lg object-cover"
//               />
//               <h3 className="text-xl font-semibold mt-4">{room.name}</h3>
//               <p className="text-gray-600">Rs.{room.price}</p>
//               <p className="text-gray-500">Air conditioned rooms (GST extra)</p>
//               <button className="bg-black text-white px-4 py-2 mt-4 rounded">
//                 View Details
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import img2 from "../assets/img-2.jpg";
import img1 from "../assets/img-1.jpg";

const roomsData = [
  { id: 1, name: "Suite Room", price: 7499, category: "Suite", src: img2 },
  { id: 2, name: "Deluxe Room", price: 5499, category: "Deluxe", src: img1 },
  { id: 3, name: "Presidential Room", price: 5499, category: "Presidential", src: img1 },
  { id: 4, name: "Executive Room", price: 5499, category: "Executive", src: img1 },
];

export function Rooms() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  // Filter rooms based on selected category
  const filteredRooms =
    selectedCategory === "All"
      ? roomsData
      : roomsData.filter((room) => room.category === selectedCategory);

  // Open Enquiry Form
  const handleEnquire = (room) => {
    setSelectedRoom(room);
    setIsFormOpen(true);
  };

  return (
    <div className="mt-24">
      <h1 className="text-center text-4xl font-medium">Luxury Rooms</h1>
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        
        {/* Category Filter Buttons */}
        <div className="flex justify-center mb-6">
          <div className="flex gap-4 h-12 overflow-x-auto whitespace-nowrap px-2 md:px-0">
            {["All", "Deluxe", "Suite", "Executive", "Presidential"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border bg-black text-white hover:border-4 hover:border-white ${
                  selectedCategory === category ? "bg-gray-500 text-white" : "border-gray-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredRooms.map((room) => (
            <div key={room.id} className="bg-white shadow-lg rounded-lg p-4">
              <img src={room.src} alt={room.name} className="w-full h-64 rounded-lg object-cover" />
              <h3 className="text-xl font-semibold mt-4">{room.name}</h3>
              <p className="text-gray-600">Rs. {room.price}</p>
              <p className="text-gray-500">Air-conditioned rooms (GST extra)</p>
              <div className="flex gap-4 mt-4">
                <button onClick={() => handleEnquire(room)} className="bg-gray-500 text-white px-4 py-2 rounded w-full">
                  Enquire
                </button>
                <button className="bg-black text-white px-4 py-2 rounded w-full">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enquiry Form Modal with Transparent Background */}
      {isFormOpen && selectedRoom && (
        <div className="fixed inset-0 flex justify-center items-center bg-transparent z-50">
          {/* Overlay to make background slightly dim */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          <div className="bg-white p-6 rounded-lg shadow-lg relative w-96 z-50">
            {/* Close Button */}
            <button 
              onClick={() => setIsFormOpen(false)} 
              className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-black"
            >
              ✖
            </button>

            <h2 className="text-2xl font-semibold mb-4">Enquiry for {selectedRoom.name}</h2>
            <form>
              <input type="text" placeholder="Name" className="w-full p-2 border rounded mb-3" />
              <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-3" />
              <input type="text" placeholder="Phone Number" className="w-full p-2 border rounded mb-3" />
              <textarea placeholder="Message" className="w-full p-2 border rounded mb-3"></textarea>
              
              <button type="submit" className="bg-black text-white px-4 py-2 rounded w-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
