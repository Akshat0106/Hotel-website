import img1 from '../assets/img-1.jpg';
import img2 from '../assets/img-2.jpg';

export function Rooms(){
    return (
      <>
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
                    src={img2}
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
                    src={img1}
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
      </>
    )
  }