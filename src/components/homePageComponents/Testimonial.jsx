import { useState } from "react";

export function Testimonial() {
  const Testimonial_data = [
    {
      // img: dp1,
      context_text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "John Doe",
      designation: "Advocate",
    },
    {
      // img: dp2,
      context_text:
        "1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Jane Doe",
      designation: "Advocate",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = Testimonial_data.length;

  function previous() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }
  function next() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  return (
    <div>
      <div className="mb-6">
      <h1 className="text-3xl font-bold mb-2 text-white md:text-4xl">What people say about us</h1>
      <div className="text-center text-xl text-white">★★★★★</div>
      </div>

      <section className="flex h-56 w-screen lg:w-full p-6 md:p-8 justify-center items-center bg-white">
        <div className="max-w-2xl w-full">
          {Testimonial_data.map(
            (item, index) =>
              index === current && (
                <div key={index}>
                  {/* Testimonial Text */}
                  <div className="pb-6 md:pb-10 text-start md:text-left">
                    <h2 className="text-sm md:text-2xl lg:text-3xl font-bold">
                      {item.context_text}
                    </h2>
                  </div>

                  {/* User Info & Buttons */}
                  <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
                    {/* Image & User Info */}
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                      {/* <img
                        src={item.img}
                        className="h-28 w-28 md:h-40 md:w-40 rounded-full"
                        alt="User"
                      /> */}
                      <div className="text-center md:text-left font-medium">
                        <h6 className="text-xl">{item.name}</h6>
                        <span className="text-gray-600">{item.designation}</span>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4">
                      <button
                        onClick={previous}
                        className="bg-gray-500 p-3 md:p-4 text-white rounded-md hover:bg-gray-700 transition"
                      >
                        ◀
                      </button>
                      <button
                        onClick={next}
                        className="bg-gray-500 p-3 md:p-4 text-white rounded-md hover:bg-gray-700 transition"
                      >
                        ▶
                      </button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </section>
    </div>
  );
}
