import img2 from "../../assets/img-2.jpg";
import img1 from "../../assets/img-1.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  {
    id: 3,
    name: "Presidential room",
    price: 5499,
    category: "Presidential",
    src: img1,
  },
  {
    id: 4,
    name: "Executive room",
    price: 5499,
    category: "Executive",
    src: img1,
  },
];
export function RoomSection() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleClick = () => {
    navigate("/rooms");
  };
  // Filter rooms based on selected category
  const filteredRooms =
    selectedCategory === "All"
      ? roomsData
      : roomsData.filter((room) => room.category === selectedCategory);
  return (
    <div className="mt-15">
      <h1 className="text-center text-4xl font-medium mb-2">Luxury Rooms</h1>
      <div className="text-center text-xl mb-6 text-black">★★★★★</div>

      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        {/* Category Buttons */}
        <div className="flex justify-center mb-6">
          <div className="flex gap-4 h-12 overflow-x-auto whitespace-nowrap px-2 md:px-0">
            {["All", "Deluxe", "Suite", "Executive", "Presidential"].map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 cursor-pointer rounded-full border bg-black  text-white hover:border-4 hover:border-white ${
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
                className="bg-white shadow-lg rounded-lg p-4 w-[350px] h-[400px] mx-auto"
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
                <button
                  className="bg-black text-white px-4 py-2 mt-4 rounded cursor-pointer"
                  onClick={handleClick}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
