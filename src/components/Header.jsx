import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-300">
      {/* Main container for contact, logo, and nav */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled ? "bg-black" : "bg-black/50"
        }`}
      >
        {/* Contact Section */}
        <div className="w-full flex justify-between items-center px-8 py-2">
          <div></div> {/* Placeholder for alignment */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <FaPhoneAlt className="hidden md:block text-white bg-gray-500 p-2 rounded-full text-3xl" />
            <div className="hidden text-white font-semibold text-sm md:text-base md:flex flex-col md:flex-row md:space-x-2">
              <span>+91 495 277 XXX7,</span>
              <span>+91 620000000XX</span>
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
            <img
              src="/logo.png"
              alt="Logo"
              className="h-16 cursor-pointer"
              onClick={() => window.location.reload()}
            />

            {/* Navigation Links */}
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
            className={`absolute md:hidden top-34 left-0 w-full shadow-md flex flex-col items-start p-4 space-y-2 transition-all duration-300 
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
