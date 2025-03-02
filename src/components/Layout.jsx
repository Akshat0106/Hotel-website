import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout(){
    return (
      <>
      <div className='w-screen h-screen'>
        <Header/>
        <div className='min-h-[60vh]'>
          <Outlet/>
        </div>
        <div className='min-h-[20vh]'>
          <Footer/>
        </div>
      </div>
      </>
    )
  }

export default Layout