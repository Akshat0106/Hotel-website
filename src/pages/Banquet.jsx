import img2 from "../assets/img-2.jpg"; 
export function Banquet(){
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-center gap-12">
      
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4">Banquet</h2>
        <p className="text-gray-600 mb-4">
          Welcome to our hotel, where luxury meets comfort. We provide an exceptional stay experience with world-class amenities and services tailored for you.
        </p>
        <p className="text-gray-600">
          Whether you're here for business or leisure, our warm hospitality ensures a memorable stay.
        </p>
      </div>

      <div className="md:w-1/2">
        <img 
          src={img2} 
          alt="About Us" 
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

    </div>
  );
  }
  