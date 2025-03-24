import { useState } from "react";
import img2 from "../assets/img-2.jpg";
import img1 from "../assets/img-1.jpg";

import { EnquiryForm } from "./../components/form/EnquiryForm"; // Import the form component

const roomsData = [
  { id: 1, name: "Suite Room", price: 7499, category: "Suite", src: img2 },
  { id: 2, name: "Deluxe Room", price: 5499, category: "Deluxe", src: img1 },
  {
    id: 3,
    name: "Presidential Room",
    price: 5499,
    category: "Presidential",
    src: img1,
  },
  {
    id: 4,
    name: "Executive Room",
    price: 5499,
    category: "Executive",
    src: img1,
  },
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
    <div className=" bg-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 text-center ">
        <div className="mt-60 mb-10">
          <h1 className="text-center text-4xl font-medium ">Luxury Rooms</h1>
          <div className="text-center text-xl mb-6">★★★★★</div>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex justify-center mb-6">
          <div className="flex gap-4 h-12 overflow-x-auto whitespace-nowrap px-2 md:px-0">
            {["All", "Deluxe", "Suite", "Executive", "Presidential"].map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full border bg-black text-white hover:border-4 hover:border-white ${
                    selectedCategory === category
                      ? "bg-gray-500 text-white"
                      : "border-gray-400"
                  }`}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <div
            className={`gap-8 ${
              filteredRooms.length === 1
                ? "flex flex-col items-center"
                : "grid grid-cols-1 sm:grid-cols-2 justify-items-center"
            }`}
          >
            {filteredRooms.map((room) => (
              <div
                key={room.id}
                className="bg-white shadow-lg rounded-lg p-4 w-[350px] h-[450px] md:h-[400px] mx-auto"
              >
                <img
                  src={room.src}
                  alt={room.name}
                  className="w-[350px] h-[220px] rounded-lg object-cover"
                />
                <h3 className="text-xl font-semibold mt-4">{room.name}</h3>
                <p className="text-gray-600">Rs. {room.price}</p>
                <p className="text-gray-500">
                  Air-conditioned rooms (GST extra)
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <button
                    onClick={() => handleEnquire(room)}
                    className="bg-gray-500 text-white px-4 py-2 rounded w-full"
                  >
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
      </div>

      {isFormOpen && selectedRoom && (
        <EnquiryForm room={selectedRoom} onClose={() => setIsFormOpen(false)} />
      )}
    </div>
  );
}
