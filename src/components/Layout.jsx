import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout(){
    return (
      <>
      <div className='w-screen h-screen flex flex-col'>
        <Header/>
        <main className='flex-grow min-h-[60vh] p-4'>
          <Outlet/>
        </main>
          <Footer/>
      </div>
      </>
    )
  }

export default Layout