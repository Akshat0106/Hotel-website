import img1 from "../assets/img-3.jpg";
import img2 from "../assets/img-1.jpg";
import { HeroSection } from "../components/homePageComponents/HeroSection";
import { RoomSection } from "../components/homePageComponents/RoomSection";
import { ParallaxEffect } from "../components/homePageComponents/ParallaxEffect";
import { FacilitiesSection } from "../components/homePageComponents/FacilitiesSection";
export function Home() {
  return (
    <div>
      {/* Hero Section */}

      <div><HeroSection/></div>

      {/* Hero Section Ends */}
      
    {/* ------------------------------------- */}

      {/* Rooms section  */}

      <div className="bg-gray-200"><RoomSection/></div>

      {/* Rooms Section ends */}

    {/* ------------------------------------- */}


      {/* facilities section */}
      <div>
        <ParallaxEffect img1={img1} />
      </div>


      {/* About-us area*/}
      <div>
        <div className="flex flex-row items-center border-2 border-black h-96">
          <div className="p-4 border-2 border-black w-1/2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            omnis voluptates adipisci fuga rem in, unde facilis itaque officia
            maiores quasi necessitatibus ex ratione, laboriosam a vero
            recusandae maxime similique? Sint delectus officia, quos rerum
            possimus illo maxime, sequi animi quibusdam ducimus doloremque at
            voluptates totam architecto omnis dignissimos molestias.
          </div>
          <div className="h-full w-1/2">
            <img src={img2} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>

      {/* Dining */}
      <div>
        <div className="p-12 border-2 border-black">
          <div className="text-center text-4xl font-bold border-2 border-black">
            Dining
          </div>

          <div className="flex flex-row items-center justify-center border-2 border-black h-96 gap-4">
            <div className="relative w-40 h-40">
              <img
                src={img1}
                alt="Hexagon Image"
                className="w-full h-full object-cover clip-hexagon"
              />
            </div>

            <div className="relative w-40 h-40">
              <img
                src={img1}
                alt="Hexagon Image"
                className="w-full h-full object-cover clip-hexagon"
              />
            </div>

            <div className="relative w-40 h-40">
              <img
                src={img1}
                alt="Hexagon Image"
                className="w-full h-full object-cover clip-hexagon"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Room Gallery */}
      {/* <div>
        <div className="p-12">
          <div className="font-bold text-4xl border-2 border-black">Rooms Gallery</div>

          <div className="flex flex-row items-center border-2 border-black h-96 gap-4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img src={img1} alt="" />
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img src={img1} alt="" />
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img src={img1} alt="" />
            </div>
          </div>

          <div className="p-4 bg-black text-white">
            <a href="#">View More</a>
          </div>

        </div>
      </div> */}

      <div className="p-12">
        {/* Heading */}
        <div className="text-4xl font-bold text-center border-b-4 border-black pb-4">
          Rooms Gallery
        </div>

        {/* Image Gallery */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
          {/* Card 1 */}
          <div className="w-64 h-80 rounded-lg shadow-lg overflow-hidden border border-gray-300">
            <img src={img1} alt="Room" className="w-full h-full object-cover" />
          </div>

          {/* Card 2 */}
          <div className="w-64 h-80 rounded-lg shadow-lg overflow-hidden border border-gray-300">
            <img src={img1} alt="Room" className="w-full h-full object-cover" />
          </div>

          {/* Card 3 */}
          <div className="w-64 h-80 rounded-lg shadow-lg overflow-hidden border border-gray-300">
            <img src={img1} alt="Room" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* View More Button */}
        <div className="mt-6 text-center">
          <a
            href="#"
            className="inline-block px-6 py-3 text-lg font-semibold bg-black text-white rounded-lg hover:opacity-80 transition"
          >
            View More
          </a>
        </div>
      </div>

      {/* Testimonials */}
      {/* <div>
        <div className="p-12">
          <div>What People Say About Us</div>
          <div className="">
            <div className="border-2 border-black p-4 ">
              <div>
                <img src="" alt="image" className="rounded-xl border-0"/>
              </div>
              <p>The theme is beautiful and easy to customize. Also technical support are always ready to assist and are quick to reply.</p>
            </div>
          </div>
        </div>
      </div>
    </div> */}

      <div className="p-12">
        {/* Section Heading */}
        <div className="text-3xl font-bold text-center mb-8">
          What People Say About Us
        </div>

        {/* Testimonial Card */}
        <div className="flex flex-row items-center justify-center gap-6">
          <div className="max-w-2xl mx-auto flex items-center border-2 border-black p-6 rounded-lg shadow-lg ">
            {/* Image on Left */}
            <div className="w-20 h-20 flex-shrink-0">
              <img
                src={img1}
                alt="User Image"
                className="w-full h-full rounded-full object-cover border border-gray-300"
              />
            </div>

            {/* Text Content on Right */}
            <div className="ml-6">
              <p className="text-gray-700 text-lg">
                "The theme is beautiful and easy to customize. Also, technical
                support is always ready to assist and quick to reply."
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto flex items-center border-2 border-black p-6 rounded-lg shadow-lg">
            {/* Image on Left */}
            <div className="w-20 h-20 flex-shrink-0">
              <img
                src={img1}
                alt="User Image"
                className="w-full h-full rounded-full object-cover border border-gray-300"
              />
            </div>

            {/* Text Content on Right */}
            <div className="ml-6">
              <p className="text-gray-700 text-lg">
                "The theme is beautiful and easy to customize. Also, technical
                support is always ready to assist and quick to reply."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
