import { useState } from "react";
import dp1 from "../../assets/dp-1.jpg";
import dp2 from "../../assets/dp-2.jpg";

// import {img3} from '../assets/dp-1.jpg';

export function Testimonial() {
  const Testimonial_data = [
    {
      img: dp1,
      context_text:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "John Doe",
      designation: "Advocate",
    },
    {
      img: dp2,
      context_text:
        "1lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Jane Doe",
      designation: "Advocate",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length=Testimonial_data.length

  function previous() {
    setCurrent(current ===0 ? length -1 :current - 1)
  }
  function next() {
    setCurrent(current ===length-1 ? 0 :current + 1)
  }

  return (
    <div>
    <section className="flex h-[100vh] my-auto justify-center items-center">
      <div>
        {Testimonial_data.map(
          (item, index) =>
            index === current && (
              <div key={index}>
                <div className="pb-[40px] items-center">
                  <h2 className="text-3xl font-bold">{item.context_text}</h2>
                </div>
                <div className="flex justify-between items-end">
                <div className="flex gap-4 items-center">
                  <div>
                    <img src={item.img} className="h-40 w-40 rounded-full" />
                  </div>
                  <div className="font-medium">
                    <h6>{item.name}</h6>
                    <span>{item.designation}</span>
                  </div>
                </div>
                  <div className="flex gap-2">
                    <span onClick={previous} className="bg-gray-800 p-4 text-white"><i class="fa-solid fa-arrow-left"></i></span>
                    <span onClick={next} className="bg-gray-800 p-4 text-white"><i class="fa-solid fa-arrow-right"></i></span>
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
