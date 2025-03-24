/* eslint-disable no-unused-vars */
  
import { motion } from "framer-motion";

export function FacilitiesSection() {
  return (
    <div className="relative z-10 text-white text-center">
      <div className="mb-11">
        <h2 className="text-white text-4xl font-bold mb-2">Facilities</h2>
        <div className="text-center text-xl mb-6 text-white">★★★★★</div>
      </div>

      <div className="flex justify-center gap-6 flex-wrap">
        {/* Facility Cards */}
        {[
          { icon: "fa-wifi", text: "SECURE WI-FI" },
          { icon: "fa-kitchen-set", text: "ROOM SERVICE" },
          { icon: "fa-bell-concierge", text: "24x7 RECEPTION" },
          { icon: "fa-utensils", text: "RESTAURANT" },
          { icon: "fa-dumbbell", text: "GYM" },
          { icon: "fa-person-swimming", text: "SWIMMING POOL" },
        ].map((facility, index) => (
          <motion.div
            key={index}
            className="bg-white flex flex-col items-center justify-center w-32 h-32 rounded-xl shadow-lg border-4 border-gray-500"
            initial={{ opacity: 0, x: -100 }} // Move further left
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: index * 0.3 }} // Increased duration & delay
          >
            <i className={`fa-solid ${facility.icon} text-4xl text-black`}></i>
            <h1 className="text-sm font-semibold text-black mt-2">{facility.text}</h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
