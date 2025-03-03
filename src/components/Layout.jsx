import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <div className='w-full flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow pt-[70px]'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;