import img1 from '../assets/img-3.jpg'; 
export function Home(){
    return (
      <div>
        <div className="w-full h-[90vh] bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${img1})`}}>
          <div className="h-full flex items-center justify-center">
            <h2 className="text-4xl font-bold text-black bg-white p-7">Welcome to our hotel</h2>
          </div>
        </div>
      </div>
    )
  }