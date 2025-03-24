/* eslint-disable no-unused-vars */
import img2 from "../assets/img-2.jpg";
import { IoMdPeople } from "react-icons/io";
import { FaBuilding } from "react-icons/fa";
import { ParallaxEffect } from "../components/homePageComponents/ParallaxEffect";
import img1 from "../assets/img-1.jpg";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export function AboutUs() {
  return (
    <div className="w-full mx-auto mt-60">
      {/* About Us Section */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
        About Us
      </h2>
      <div className="text-center text-xl mb-6">★★★★★</div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 p-6 md:p-[80px] mt-10 ">
        <div className="md:w-1/3 text-left">
          <h1 className="mb-6 text-gray-600 md:text-2xl">
            Lorem ipsum dolor sit.
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-4">
            Welcome to our hotel, where luxury meets comfort. We provide an
            exceptional stay experience with world-class amenities and services
            tailored for you.
          </p>
          <p className="text-gray-600 text-lg md:text-xl">
            Whether you're here for business or leisure, our warm hospitality
            ensures a memorable stay.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start slightly below
          animate={{ opacity: 1, y: 0 }} // Move to original position
          transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
          className="md:w-1/3 flex justify-center"
        >
          <img
            src={img2}
            alt="About Us"
            className="w-full h-auto md:max-w-sm lg:max-w-md rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      <ParallaxEffect img1={img1} height="h-[600px]">
        <div className="relative text-center px-4 text-white flex flex-col justify-between h-full py-12">
          {/* Heading Section at the Top */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold md:mb-4">
              Our Milestones
            </h2>
            <div className="text-center text-xl md:mb-6">★★★★★</div>
            <p className="text-lg md:text-xl max-w-2xl mx-auto md:mb-10">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              culpa pariatur similique magni temporibus?
            </p>
          </div>

          <div className="flex-grow flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-auto-fit gap-6 max-w-4xl mx-auto place-items-center">
              {/* Card 1 - Staff Members */}
              <motion.div
                initial={{ opacity: 0, x: -100 }} // Start position (off-screen left)
                animate={{ opacity: 1, x: 0 }} // End position (original)
                transition={{ duration: 1, ease: "easeOut" }} // Animation duration
                className="bg-white bg-opacity-10 w-60 h-40 p-6 rounded-lg text-center border border-white flex flex-col justify-center items-center"
              >
                <div className="text-6xl mb-2 text-black">
                  <IoMdPeople />
                </div>
                <h3 className="text-3xl font-bold text-black">
                  <CountUp start={0} end={150} duration={3} />+
                </h3>
                <p className="text-md text-black">Staff Members</p>
              </motion.div>

              {/* Card 2 - Rooms */}
              <motion.div
                initial={{ opacity: 0, x: -100 }} // Start position (off-screen left)
                animate={{ opacity: 1, x: 0 }} // End position (original)
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }} // Slight delay for staggered effect
                className="bg-white bg-opacity-10 w-60 h-40 p-6 rounded-lg text-center border border-white flex flex-col justify-center items-center"
              >
                <div className="text-4xl mb-2 text-black">
                  <FaBuilding />
                </div>
                <h3 className="text-3xl font-bold text-black">
                  <CountUp start={0} end={69} duration={3} />
                </h3>
                <p className="text-md text-black">Rooms</p>
              </motion.div>
            </div>
          </div>
        </div>
      </ParallaxEffect>
    </div>
  );
}
