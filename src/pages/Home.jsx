import img1 from "../assets/img-3.jpg";
import img2 from "../assets/img-1.jpg";
import  {HeroSection}  from "../components/homePageComponents/HeroSection";
export function Home() {
  return (
    <div>
      {/* Hero Section */}

      <div><HeroSection/></div>

      {/* Hero Section Ends */}

      {/* Rooms section  */}
      <div className="bg-gray-100">
        <div className="p-40">
          <div>
            <h1>Luxury & Comfortable Rooms</h1>
            <div className="flex justify-center gap-2">
              <a href="http://">All</a>
              <a href="http://">Deluxe</a>
              <a href="http://">Suite</a>
            </div>

            {/* crad-section */}
            <div className="flex justify-center gap-4 m-20">
              {/* card-1 */}

              <div class="w-sm bg-black border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src={img1}
                    alt=""
                    className="w-full h-60"
                  />
                </a>
                <div class="p-5 flex flex-col">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Suite Room
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Rs.7499 per night
                  </p>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Air conditioned rooms (GST extra)
                  </p>
                  <span>
                    <a
                      href="#"
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600"
                    >
                      Read more
                      <svg
                        class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>

              {/* card-2 */}

              <div class="w-sm bg-black border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src={img2}
                    alt=""
                    className="w-full h-60"
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Deluxe room
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Rs.5499 per night
                  </p>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Air conditioned Rooms (GST extra)
                  </p>
                  <a
                    href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* facilities section */}
      <div className="relative h-96 flex flex-col items-center justify-center bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${img1})` }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
        
          {/* Content */}
      <div className="relative z-10 text-white text-center">
        <h2 className="text-white text-4xl font-bold mb-11">Facilities</h2>
        <div className="flex justify-center gap-6">
          {/* Facility Card */}
          {[
            { icon: "fa-wifi", text: "SECURE WI-FI" },
            { icon: "fa-kitchen-set", text: "ROOM SERVICE" },
            { icon: "fa-bell-concierge", text: "24x7 RECEPTION" },
            { icon: "fa-utensils", text: "RESTAURANT" },
            { icon: "fa-dumbbell", text: "GYM" },
            { icon: "fa-person-swimming", text: "SWIMMING POOL" },
          ].map((facility, index) => (
            <div
              key={index}
              className="bg-white flex flex-col items-center justify-center w-32 h-32 rounded-xl shadow-lg border-4 border-gray-500"
            >
              <i
                className={`fa-solid ${facility.icon} text-4xl text-black`}
              ></i>
              <h1 className="text-sm font-semibold text-black mt-2">
                {facility.text}
              </h1>
            </div>
          ))}
        </div>
        </div>
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
