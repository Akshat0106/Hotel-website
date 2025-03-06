export function Dining({ img1 }) {
  return (
    <div>
      <div className="p-4 mt-2 ">
        <div className="text-center text-4xl text-white font-bold  ">
          Dining
        </div>

        <div className="flex flex-row items-center justify-center border-2 mt-4 h-full gap-56">
          <div className="relative w-60 h-60">
            <img
              src={img1}
              alt="Hexagon Image"
              className="w-full h-full object-cover clip-hexagon"
            />
          </div>

          <div className="relative w-60 h-60">
            <img
              src={img1}
              alt="Hexagon Image"
              className="w-full h-full object-cover clip-hexagon"
            />
          </div>

          <div className="relative w-60 h-60">
            <img
              src={img1}
              alt="Hexagon Image"
              className="w-full h-full object-cover clip-hexagon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
