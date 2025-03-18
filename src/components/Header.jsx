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
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';

// function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     function handleScroll() {
//       setScrolled(window.scrollY > 50);
//     }
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full h-20 z-[100] transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
//     >
//       <div className='container max-w-7xl mx-auto flex justify-between items-center p-4'>
//         <h1 className='text-2xl font-bold text-black'>Logo</h1>

//         <div>
//         <a
//           href='https://github.com/Akshat0106/Hotel-website'
//           className='px-4 py-2 bg-black text-white rounded-md hover:opacity-80 transition hidden md:inline-block'
//         >
//           Github-Link
//         </a>
//         </div>

//         {/* Mobile Menu Icon */}
//         <button
//           className='md:hidden text-2xl text-black focus:outline-none'
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>

//         {/* Navbar Links */}
//         <nav
//           className={`absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-6 md:p-0 ${menuOpen ? 'block' : 'hidden md:flex'}`}
//         >
//           {[
//             { path: '/', label: 'Home' },
//             { path: '/aboutus', label: 'About Us' },
//             { path: '/rooms', label: 'Rooms' },
//             { path: '/dining', label: 'Dining' },
//             { path: '/banquet', label: 'Banquet' },
//             { path: '/otherfacilities', label: 'Other Facilities' },
//             { path: '/gallery', label: 'Gallery' },
//             { path: '/getintouch', label: 'Get In Touch' },
//           ].map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className='text-black hover:underline'
//               onClick={() => setMenuOpen(false)}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;

// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';

// function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     function handleScroll() {
//       setScrolled(window.scrollY > 50);
//     }
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full h-20 z-[100] transition-all duration-300 ${
//         scrolled ? 'bg-white shadow-md' : 'bg-white opacity-90'
//       }`}
//     >
//       <div className='container max-w-7xl mx-auto flex justify-between items-center p-4'>
//         <h1 className='text-2xl font-bold text-black'>Logo</h1>

//         {/* Mobile Menu Icon */}
//         <button
//           className='md:hidden text-2xl text-black focus:outline-none'
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>

//         {/* Navbar Links */}
//         <nav
//           className={`absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 p-6 md:p-0 ${menuOpen ? 'block' : 'hidden md:flex'}`}
//         >
//           {/* GitHub Button - Positioned Above Links */}

//           {/* Navigation Links */}
//           {[
//             { path: '/', label: 'Home' },
//             { path: '/aboutus', label: 'About Us' },
//             { path: '/rooms', label: 'Rooms' },
//             { path: '/dining', label: 'Dining' },
//             { path: '/banquet', label: 'Banquet' },
//             { path: '/otherfacilities', label: 'Other Facilities' },
//             { path: '/gallery', label: 'Gallery' },
//             { path: '/getintouch', label: 'Get In Touch' },
//           ].map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className='text-black hover:underline'
//               onClick={() => setMenuOpen(false)}
//             >
//               {link.label}
//             </Link>
//           ))}
//           <div className="w-full md:w-auto flex justify-center md:justify-start">
//             <a
//               href='https://github.com/Akshat0106/Hotel-website'
//               className='px-4 py-2 bg-black text-white rounded-md hover:opacity-80 transition'
//             >
//               Github-Link
//             </a>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;

// import { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';

// function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation(); // Get current route

//   useEffect(() => {
//     function handleScroll() {
//       setScrolled(window.scrollY > 50);
//     }
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full h-20 z-[100] transition-all duration-300 border-b border-gray-300 ${
//         scrolled ? 'bg-white shadow-md' : 'bg-white opacity-90'
//       }`}
//     >
//       <div className='container max-w-7xl mx-auto flex justify-between items-center px-4 h-full'>
//         <h1 className='text-2xl font-bold text-black'>Logo</h1>

//         {/* Mobile Menu Icon */}
//         <button
//           className='md:hidden text-2xl text-black focus:outline-none'
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>

//         {/* Navbar Links */}
//         <nav
//           className={`absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none flex flex-col md:flex-row items-center p-4 md:p-0 ${
//             menuOpen ? 'block' : 'hidden md:flex'
//           }`}
//         >
//           {/* GitHub Button - Positioned Above Links */}
//           <div className="w-full md:w-auto flex justify-center md:justify-start">
//           </div>

//           {/* Navigation Links with Active & Hover Effects */}
//           {[
//             { path: '/', label: 'Home' },
//             { path: '/aboutus', label: 'About Us' },
//             { path: '/rooms', label: 'Rooms' },
//             { path: '/dining', label: 'Dining' },
//             { path: '/banquet', label: 'Banquet' },
//             { path: '/otherfacilities', label: 'Other Facilities' },
//             { path: '/gallery', label: 'Gallery' },
//             { path: '/getintouch', label: 'Get In Touch' },
//           ].map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className={`px-4 py-2 rounded-md transition ${
//                 location.pathname === link.path
//                   ? 'bg-gray-300 text-black'
//                   : 'hover:bg-gray-300 text-black'
//               }`}
//               onClick={() => setMenuOpen(false)}
//             >
//               {link.label}
//             </Link>
//           ))}
//             <a
//               href='https://github.com/Akshat0106/Hotel-website'
//               className='px-4 py-2 bg-black text-white rounded-md hover:opacity-80 transition'
//             >
//               Github-Link
//             </a>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;

// import { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';

// function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     function handleScroll() {
//       setScrolled(window.scrollY > 50);
//     }
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-300 bg-transparent">
//       {/* Top Section: Contact & Reservation */}
//       <div className="w-full flex justify-between items-center px-8 py-2 bg-transparent">
//         <div></div> {/* Placeholder for alignment */}
//         <div className="flex items-center space-x-4">
//           <FaPhoneAlt className="text-white bg-[#c49251] p-2 rounded-full text-lg" />
//           <span className="text-white font-semibold">+91 495 277 4747, +91 6235996607</span>
//           <button className="bg-[#c49251] text-white px-4 py-2 rounded-md font-semibold">
//             Make a Reservation
//           </button>
//         </div>
//       </div>

//       {/* Navbar Section */}
//       <div
//         className={`w-full border-b border-[#c49251] transition-all duration-300 ${
//           scrolled ? 'bg-white shadow-md' : 'bg-transparent'
//         }`}
//       >
//         <div className="container max-w-7xl mx-auto flex justify-between items-center px-4 h-20">
//           {/* Logo Centered */}
//           <div className="absolute left-1/2 transform -translate-x-1/2">
//             <img src="/logo.png" alt="Logo" className="h-16" /> {/* Replace with actual logo path */}
//           </div>

//           {/* Mobile Menu Icon */}
//           <button
//             className="md:hidden text-2xl text-white focus:outline-none"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>

//           {/* Navbar Links */}
//           <nav
//             className={`absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none flex flex-col md:flex-row items-center md:space-x-6 p-4 md:p-0 ${
//               menuOpen ? 'block' : 'hidden md:flex'
//             }`}
//           >
//             {[
//               { path: '/', label: 'Home' },
//               { path: '/aboutus', label: 'About Us' },
//               { path: '/rooms', label: 'Rooms' },
//               { path: '/dining', label: 'Dining' },
//               { path: '/banquet', label: 'Banquet' },
//               { path: '/otherfacilities', label: 'Other Facilities' },
//               { path: '/gallery', label: 'Gallery' },
//               { path: '/getintouch', label: 'Get In Touch' },
//             ].map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`px-4 py-2 font-semibold transition ${
//                   location.pathname === link.path
//                     ? 'bg-[#c49251] text-white'
//                     : 'text-white hover:bg-[#c49251]'
//                 }`}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

// import { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';

// function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     function handleScroll() {
//       setScrolled(window.scrollY > 50);
//     }
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-300 bg-black">
//       {/* Top Section: Contact & Reservation */}
//       <div
//         className={`w-full flex justify-between items-center px-8 py-2 transition-all duration-300 ${
//           scrolled ? 'bg-black' : 'bg-black'
//         }`}
//       >
//         <div></div> {/* Placeholder for alignment */}
//         <div className="flex items-center space-x-4">
//           <FaPhoneAlt className="text-white bg-gray-500 p-2 rounded-full text-lg" />
//           <span className="text-white font-semibold">+91 495 277 4747, +91 6235996607</span>
//           <button className="bg-gray-500 text-white px-4 py-2 rounded-md font-semibold">
//             Make a Reservation
//           </button>
//         </div>
//       </div>

//       {/* Navbar Section */}
//       <div className="w-full border-b border-gray-500 bg-black">
//         <div className="container max-w-7xl mx-auto flex justify-between items-center px-4 h-20">
//           {/* Logo Left-Aligned */}
//           <div className="flex items-center space-x-8">
//             <img src="/logo.png" alt="Logo" className="h-16" /> {/* Replace with actual logo path */}

//             {/* Navigation Links */}
//             <nav className="hidden md:flex space-x-6">
//               {[
//                 { path: '/', label: 'Home' },
//                 { path: '/aboutus', label: 'About Us' },
//                 { path: '/rooms', label: 'Rooms' },
//                 { path: '/dining', label: 'Dining' },
//                 { path: '/banquet', label: 'Banquet' },
//                 { path: '/otherfacilities', label: 'Other Facilities' },
//                 { path: '/gallery', label: 'Gallery' },
//                 { path: '/getintouch', label: 'Get In Touch' },
//               ].map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={`px-4 py-2 font-semibold transition ${
//                     location.pathname === link.path
//                       ? 'bg-gray-500 text-white'
//                       : 'text-white hover:bg-gray-500'
//                   }`}
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </nav>
//           </div>

//           {/* Mobile Menu Icon */}
//           <button
//             className="md:hidden text-2xl text-white focus:outline-none"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>

//           {/* Mobile Menu */}
//           <nav
//             className={`absolute md:hidden top-20 left-0 w-full bg-black shadow-md flex flex-col items-center p-4 space-y-2 ${
//               menuOpen ? 'block' : 'hidden'
//             }`}
//           >
//             {[
//               { path: '/', label: 'Home' },
//               { path: '/aboutus', label: 'About Us' },
//               { path: '/rooms', label: 'Rooms' },
//               { path: '/dining', label: 'Dining' },
//               { path: '/banquet', label: 'Banquet' },
//               { path: '/otherfacilities', label: 'Other Facilities' },
//               { path: '/gallery', label: 'Gallery' },
//               { path: '/getintouch', label: 'Get In Touch' },
//             ].map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className="text-white py-2 font-semibold hover:bg-gray-500 w-full text-center"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

// import { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';

// function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     function handleScroll() {
//       setScrolled(window.scrollY > 50);
//     }
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-black' : 'bg-black/80'}`}>
//       {/* Top Section: Contact & Reservation */}
//       <div className={`w-full flex justify-between items-center px-8 py-2 transition-all duration-300 ${scrolled ? 'bg-black' : 'bg-black/80'}`}>
//         <div></div> {/* Placeholder for alignment */}
//         <div className="flex items-center space-x-4 md:space-x-6">
//           <FaPhoneAlt className="text-white bg-gray-500 p-4 rounded-full text-3xl" /> {/* Increased size */}
//           <div className="text-white font-semibold text-sm md:text-base flex flex-col md:flex-row md:space-x-2">
//             <span>+91 495 277 4747</span>
//             <span>+91 6235996607</span>
//           </div>
//           <button className="bg-gray-500 text-white px-4 py-2 rounded-md font-semibold">
//             Make a Reservation
//           </button>
//         </div>
//       </div>

//       {/* Navbar Section */}
//       <div className="w-full border-b border-gray-500 bg-black">
//         <div className="container max-w-7xl mx-auto flex justify-between items-center px-4 h-20">
//           {/* Logo */}
//           <img src="/logo.png" alt="Logo" className="h-16" /> {/* Replace with actual logo path */}

//           {/* Navigation Links Left-Aligned */}
//           <nav className="hidden md:flex flex-grow space-x-6 ml-4">
//             {[
//               { path: '/', label: 'Home' },
//               { path: '/aboutus', label: 'About Us' },
//               { path: '/rooms', label: 'Rooms' },
//               { path: '/dining', label: 'Dining' },
//               { path: '/banquet', label: 'Banquet' },
//               { path: '/otherfacilities', label: 'Other Facilities' },
//               { path: '/gallery', label: 'Gallery' },
//               { path: '/getintouch', label: 'Get In Touch' },
//             ].map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`px-4 py-2 font-semibold transition ${
//                   location.pathname === link.path
//                     ? 'bg-gray-500 text-white'
//                     : 'text-white hover:bg-gray-500'
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>

//           {/* Mobile Menu Icon */}
//           <button
//             className="md:hidden text-2xl text-white focus:outline-none"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <nav
//           className={`absolute md:hidden top-20 left-0 w-full bg-black shadow-md flex flex-col items-start p-4 space-y-2 ${
//             menuOpen ? 'block' : 'hidden'
//           }`}
//         >
//           {[
//             { path: '/', label: 'Home' },
//             { path: '/aboutus', label: 'About Us' },
//             { path: '/rooms', label: 'Rooms' },
//             { path: '/dining', label: 'Dining' },
//             { path: '/banquet', label: 'Banquet' },
//             { path: '/otherfacilities', label: 'Other Facilities' },
//             { path: '/gallery', label: 'Gallery' },
//             { path: '/getintouch', label: 'Get In Touch' },
//           ].map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className="text-white py-2 font-semibold hover:bg-gray-500 w-full text-left px-4"
//               onClick={() => setMenuOpen(false)}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;

// import { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';

// function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     function handleScroll() {
//       setScrolled(window.scrollY > 50);
//     }
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-black' : 'bg-black/80'}`}>
//       {/* Top Section: Contact & Reservation */}
//       <div className={`w-full flex justify-between items-center px-8 py-2 transition-all duration-300 ${scrolled ? 'bg-black' : 'bg-black/80'}`}>
//         <div></div> {/* Placeholder for alignment */}
//         <div className="flex items-center space-x-4 md:space-x-6">
//           <FaPhoneAlt className="text-white bg-gray-500 p-4 rounded-full text-3xl" /> {/* Increased size */}
//           <div className="text-white font-semibold text-sm md:text-base flex flex-col md:flex-row md:space-x-2">
//             <span>+91 495 277 4747</span>
//             <span>+91 6235996607</span>
//           </div>
//           <button className="bg-gray-500 text-white px-4 py-2 rounded-md font-semibold">
//             Make a Reservation
//           </button>
//         </div>
//       </div>

//       {/* Navbar Section */}
//       <div className="w-full border-b border-gray-500 bg-black/80">
//         <div className="container max-w-7xl mx-auto flex justify-between items-center px-4 h-20">
//           {/* Logo */}
//           <img src="/logo.png" alt="Logo" className="h-16" /> {/* Replace with actual logo path */}

//           {/* Navigation Links Right-Aligned */}
//           <nav className="hidden md:flex space-x-6 ml-auto">
//             {[
//               { path: '/', label: 'Home' },
//               { path: '/aboutus', label: 'About Us' },
//               { path: '/rooms', label: 'Rooms' },
//               { path: '/dining', label: 'Dining' },
//               { path: '/banquet', label: 'Banquet' },
//               { path: '/otherfacilities', label: 'Other Facilities' },
//               { path: '/gallery', label: 'Gallery' },
//               { path: '/getintouch', label: 'Get In Touch' },
//             ].map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`px-4 py-2 font-semibold transition ${
//                   location.pathname === link.path
//                     ? 'bg-gray-500 text-white'
//                     : 'text-white hover:bg-gray-500'
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>

//           {/* Mobile Menu Icon */}
//           <button
//             className="md:hidden text-2xl text-white focus:outline-none"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <nav
//           className={`absolute md:hidden top-20 left-0 w-full bg-black shadow-md flex flex-col items-start p-4 space-y-2 ${
//             menuOpen ? 'block' : 'hidden'
//           }`}
//         >
//           {[
//             { path: '/', label: 'Home' },
//             { path: '/aboutus', label: 'About Us' },
//             { path: '/rooms', label: 'Rooms' },
//             { path: '/dining', label: 'Dining' },
//             { path: '/banquet', label: 'Banquet' },
//             { path: '/otherfacilities', label: 'Other Facilities' },
//             { path: '/gallery', label: 'Gallery' },
//             { path: '/getintouch', label: 'Get In Touch' },
//           ].map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className="text-white py-2 font-semibold hover:bg-gray-500 w-full text-left px-4"
//               onClick={() => setMenuOpen(false)}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-black' : 'bg-[rgba(0,0,0,0.7)]'}`}>
    //     <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-black' : 'bg-black/70'}`}>
    //     {/* Top Section: Contact & Reservation */}
    //       <div className={`w-full flex justify-between items-center px-8 py-2 transition-all duration-300 ${scrolled ? 'bg-black' : 'bg-black/80'}`}>
    //         <div></div> {/* Placeholder for alignment */}
    //         <div className="flex items-center space-x-4 md:space-x-6">
    //         {/* <FaPhoneAlt className="text-white bg-gray-500 p-4 rounded-full text-3xl" /> Increased size */}
    //         <FaPhoneAlt className="text-white text-xl" />
    //           <div className="text-white font-semibold text-sm md:text-base flex flex-col md:flex-row md:space-x-2">
    //             <span>+91 495 277 4747</span>
    //             <span>+91 6235996607</span>
    //           </div>
    //           <button className="bg-gray-500 text-white px-4 py-2 rounded-md font-semibold">
    //             Make a Reservation
    //           </button>
    //         </div>
    //       </div>

    //       {/* Navbar Section */}
    //       <div className="w-full border-b border-gray-500">
    //         <div className="container max-w-7xl mx-auto flex justify-between items-center px-4 h-20">
    //           {/* Logo */}
    //           <img src="/logo.png" alt="Logo" className="h-16" />

    //           {/* Navigation Links Right-Aligned */}
    //           <nav className="hidden md:flex space-x-4 ml-auto relative top-5">
    //             {[
    //               { path: '/', label: 'Home' },
    //               { path: '/aboutus', label: 'About Us' },
    //               { path: '/rooms', label: 'Rooms' },
    //               { path: '/dining', label: 'Dining' },
    //               { path: '/banquet', label: 'Banquet' },
    //               { path: '/otherfacilities', label: 'Other Facilities' },
    //               { path: '/gallery', label: 'Gallery' },
    //               { path: '/getintouch', label: 'Get In Touch' },
    //             ].map((link) => (
    //               <Link
    //                 key={link.path}
    //                 to={link.path}
    //                 className={`px-4 py-2 font-semibold transition ${
    //                   location.pathname === link.path
    //                     ? 'bg-gray-500 text-white'
    //                     : 'text-white hover:bg-gray-500'
    //                 }`}
    //               >
    //                 {link.label}
    //               </Link>
    //             ))}
    //           </nav>

    //           {/* Mobile Menu Icon */}
    //           <button
    //             className="md:hidden text-2xl text-white focus:outline-none"
    //             onClick={() => setMenuOpen(!menuOpen)}
    //           >
    //             {menuOpen ? <FaTimes /> : <FaBars />}
    //           </button>
    //         </div>

    //         {/* Mobile Menu */}
    //         {/* <nav
    //           className={`absolute md:hidden top-30 left-0 w-full bg-black shadow-md flex flex-col items-start p-4 space-y-2 ${
    //             menuOpen ? 'block' : 'hidden'
    //           }`}
    //         > */}
    //         <nav
    //   className={`absolute md:hidden top-30 left-0 w-full shadow-md flex flex-col items-start p-4 space-y-2 ${
    //     menuOpen ? 'bg-black' : 'bg-black/70 hidden'
    //   }`}
    // >

    //           {[
    //             { path: '/', label: 'Home' },
    //             { path: '/aboutus', label: 'About Us' },
    //             { path: '/rooms', label: 'Rooms' },
    //             { path: '/dining', label: 'Dining' },
    //             { path: '/banquet', label: 'Banquet' },
    //             { path: '/otherfacilities', label: 'Other Facilities' },
    //             { path: '/gallery', label: 'Gallery' },
    //             { path: '/getintouch', label: 'Get In Touch' },
    //           ].map((link) => (
    //             <Link
    //               key={link.path}
    //               to={link.path}
    //               className="text-white py-2 font-semibold hover:bg-gray-500 w-full text-left px-4"
    //               onClick={() => setMenuOpen(false)}
    //             >
    //               {link.label}
    //             </Link>
    //           ))}
    //         </nav>
    //       </div>
    //     </header>
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? "bg-black" : "bg-black/80 bg-opacity-80"
      }`}
    >
      {/* Enclosing Div for Background Opacity Control */}
      <div className="w-full bg-black bg-opacity-80 transition-all duration-300">
        {/* Top Section: Contact & Reservation */}
        <div className="w-full flex justify-between items-center px-8 py-2">
          <div></div> {/* Placeholder for alignment */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <FaPhoneAlt className="text-white bg-gray-500 p-2 rounded-full text-3xl" />
            <div className="text-white font-semibold text-sm md:text-base flex flex-col md:flex-row md:space-x-2">
              <span>+91 495 277 4747,</span>
              <span>+91 6235996607</span>
            </div>
            <button className="bg-gray-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
              Make a Reservation
            </button>
          </div>
        </div>

        {/* Navbar Section */}
        <div className="w-full border-b-2 border-gray-500">
          <div className="container max-w-7xl mx-auto flex justify-between items-center px-4 h-20">
            {/* Logo */}
            {/* <img src="/logo.png" alt="Logo" className="h-16" /> */}
            <img
              src="/logo.png"
              alt="Logo"
              className="h-16 cursor-pointer"
              onClick={() => window.location.reload()}
            />

            {/* Navigation Links Right-Aligned */}
            <nav className="hidden md:flex space-x-4 ml-auto relative top-5">
              {[
                { path: "/", label: "Home" },
                { path: "/aboutus", label: "About Us" },
                { path: "/rooms", label: "Rooms" },
                { path: "/dining", label: "Dining" },
                { path: "/banquet", label: "Banquet" },
                { path: "/otherfacilities", label: "Other Facilities" },
                { path: "/gallery", label: "Gallery" },
                { path: "/getintouch", label: "Get In Touch" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 font-semibold transition ${
                    location.pathname === link.path
                      ? "bg-gray-500 text-white"
                      : "text-white hover:bg-gray-500"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Icon */}
            <button
              className="md:hidden text-2xl text-white focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          <nav
            className={`absolute md:hidden top-30 left-0 w-full shadow-md flex flex-col items-start p-4 space-y-2 transition-all duration-300 
        ${menuOpen ? "bg-black" : "bg-black/80 hidden"}`}
          >
            {[
              { path: "/", label: "Home" },
              { path: "/aboutus", label: "About Us" },
              { path: "/rooms", label: "Rooms" },
              { path: "/dining", label: "Dining" },
              { path: "/banquet", label: "Banquet" },
              { path: "/otherfacilities", label: "Other Facilities" },
              { path: "/gallery", label: "Gallery" },
              { path: "/getintouch", label: "Get In Touch" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-white py-2 font-semibold hover:bg-gray-500 w-full text-left px-4"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
