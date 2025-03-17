// // Navbar
// import { useEffect,useState } from 'react'
// import { Link } from 'react-router-dom'
// function Header(){
//   const [scrolled,setScrolled]=useState(false)

//   useEffect(()=>{
//     function handleScroll(){
//       setScrolled(window.scrollY>50)
//     }
//     window.addEventListener("scroll",handleScroll)
//     return ()=>window.removeEventListener("scroll",handleScroll)
//   })
//     return (
//       <>
//       <header className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-300 ${scrolled?"bg-white shadow-md":"bg-transparent"}`}>
//         <div className='container max-w-7xl mx-auto flex flex-wrap justify-between items-center p-4 '>
          
//           <h1 className='text-2xl font-bold text-black'>Logo</h1>
          
//           <a href='https://github.com/Akshat0106/Hotel-website' className='px-4 py-2 bg-black text-white rounded-md hover:opacity-80 transition'>Github-Link</a>
          
//           <nav className='flex space-x-6'>
//           <Link to='/' className='text-black hover:underline'>Home</Link>
//           <Link to='/aboutus' className='text-black hover:underline'>About Us</Link>
//           <Link to='/rooms' className='text-black hover:underline'>Rooms</Link>
//           <Link to='/dining' className='text-black hover:underline'>Dining</Link>
//           <Link to='/banquet' className='text-black hover:underline'>Banquet</Link>
//           <Link to='/otherfacilities' className='text-black hover:underline'>Other Facilities</Link>
//           <Link to='/gallery' className='text-black hover:underline'>Gallery</Link>
//           <Link to='/getintouch' className='text-black hover:underline'>Get In Touch</Link>
//           </nav>
//         </div>
//       </header>
//       </>
//     )
//   }

//   export default Header

// Navbar
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 z-[100] transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
    >
      <div className='container max-w-7xl mx-auto flex justify-between items-center p-4'>
        <h1 className='text-2xl font-bold text-black'>Logo</h1>
        
        <div>
        <a
          href='https://github.com/Akshat0106/Hotel-website'
          className='px-4 py-2 bg-black text-white rounded-md hover:opacity-80 transition hidden md:inline-block'
        >
          Github-Link
        </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className='md:hidden text-2xl text-black focus:outline-none'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navbar Links */}
        <nav
          className={`absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-6 md:p-0 ${menuOpen ? 'block' : 'hidden md:flex'}`}
        >
          {[
            { path: '/', label: 'Home' },
            { path: '/aboutus', label: 'About Us' },
            { path: '/rooms', label: 'Rooms' },
            { path: '/dining', label: 'Dining' },
            { path: '/banquet', label: 'Banquet' },
            { path: '/otherfacilities', label: 'Other Facilities' },
            { path: '/gallery', label: 'Gallery' },
            { path: '/getintouch', label: 'Get In Touch' },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className='text-black hover:underline'
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
