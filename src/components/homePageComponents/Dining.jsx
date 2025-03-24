/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

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
        {/* Hexagon Images with Animation */}
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="hex-wrapper w-60 h-60 md:w-70 md:h-80"
            initial={{ opacity: 0, x: -100 }} // Move from left
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: index * 0.3 }} // Staggered effect
          >
            <div className="hex-border"></div>
            <div className="hex-content">
              <img
                src={img1}
                alt="Hexagon Image"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


