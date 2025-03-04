import { FacilitiesSection } from "./FacilitiesSection";

export function ParallaxEffect({ img1 }) {

  return (
    <div className="relative h-96 flex flex-col items-center justify-center bg-cover bg-center bg-fixed">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 ">
      <FacilitiesSection />
      </div>
    </div>
  );
}
