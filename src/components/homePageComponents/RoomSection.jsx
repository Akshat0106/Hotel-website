import img2 from "../../assets/img-2.jpg";
import img1 from "../../assets/img-1.jpg";

import { useState } from "react";

const roomsData = [
  {
    id: 1,
    name: "Suite room",
    price: 7499,
    category: "Suite",
    src: img2,
  },
  {
    id: 2,
    name: "Deluxe room",
    price: 5499,
    category: "Deluxe",
    src: img1,
  },
];
export function RoomSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter rooms based on selected category
  const filteredRooms =
    selectedCategory === "All"
      ? roomsData
      : roomsData.filter((room) => room.category === selectedCategory);
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-12 text-center bg-green-300">
        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          {["All", "Deluxe", "Suite"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full border ${
                selectedCategory === category
                  ? "bg-gold text-white"
                  : "border-gray-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {filteredRooms.map((room) => (
            <div key={room.id} className="bg-white shadow-lg rounded-lg p-4">
              <img
                src={room.src}
                alt={room.name}
                className="w-full h-64 rounded-lg object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">{room.name}</h3>
              <p className="text-gray-600">Rs.{room.price}</p>
              <p className="text-gray-500">Air conditioned rooms (GST extra)</p>
              <button className="bg-black text-white px-4 py-2 mt-4 rounded">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
