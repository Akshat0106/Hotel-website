import img from '../../assets/img-1.jpg'

export function HeroSection() {
  return (
    <>
      <div className=" relative w-full h-[90vh]  bg-cover bg-center bg-no-repeat">
        <div className='absolute top-0 left-0 w-full h-full z-0'>
            <img className='h-full w-full object-cover' src={img} alt="BG_Image" />
        </div>
        <div className="absolute inset-0 h-full flex items-center justify-center z-10">
          <h2 className="text-4xl font-bold text-black bg-white p-7">
            Welcome to our hotel
          </h2>
        </div>
        <div></div>
      </div>
    </>
  );
}
