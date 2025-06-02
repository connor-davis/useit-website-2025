import { Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  // Check window width for the navbar visibility
  const checkWindowWidth = () => {
    if (window.innerWidth >= 1024) {
      setIsNavbarVisible(true);
    } else {
      setIsNavbarVisible(false);
    }
  };

  // Effect to handle initial setup
  useEffect(() => {
    checkWindowWidth();
    window.addEventListener('resize', checkWindowWidth);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('resize', checkWindowWidth);
    };
  }, []);

  // Toggle navbar visibility on button click
  const toggleNavbar = () => {
    setIsNavbarVisible((prev) => !prev);
  };

  return (
    <div id="navbar-background" className="bg-primary">
      <nav className="flex items-center justify-between flex-wrap px-4 py-3 sm:px-6 lg:px-8 lg:py-4 bg-transparent">
        <div className="flex items-center flex-shrink-0 text-white space-x-2 sm:space-x-3">
          <img
            src="/assets/logo.png"
            alt="Use-IT Logo"
            width="32"
            height="32"
            className="w-7 h-7 sm:w-8 sm:h-8"
          />
          <span className="font-semibold text-base sm:text-lg lg:text-xl tracking-tight">
            Use-IT
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-green-100 border-green-400 hover:text-white hover:border-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            id="navbar-btn"
            onClick={() => toggleNavbar()}
            aria-label="Toggle navigation menu"
            aria-expanded={isNavbarVisible}
          >
            <svg
              className="fill-current h-4 w-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        {isNavbarVisible && (
          <div
            className="w-full block flex-grow lg:flex lg:items-center lg:w-auto mt-3 lg:mt-0"
            id="navbar"
          >
            <div className="text-sm lg:flex-grow text-left lg:text-right space-y-3 lg:space-y-0">
              <Link
                to="/"
                className="block lg:inline-block text-green-100 hover:text-white lg:mr-6 text-sm sm:text-base lg:text-lg py-2 lg:py-0 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/story"
                className="block lg:inline-block text-green-100 hover:text-white lg:mr-6 text-sm sm:text-base lg:text-lg py-2 lg:py-0 transition-colors"
              >
                Our Story
              </Link>
              <Link
                to="/projects"
                className="block lg:inline-block text-green-100 hover:text-white lg:mr-6 text-sm sm:text-base lg:text-lg py-2 lg:py-0 transition-colors"
              >
                Our Projects
              </Link>
              <Link
                to="/media"
                className="block lg:inline-block text-green-100 hover:text-white lg:mr-6 text-sm sm:text-base lg:text-lg py-2 lg:py-0 transition-colors"
              >
                Media
              </Link>
              <Link
                to="/contact-us"
                className="block lg:inline-block text-green-100 hover:text-white text-sm sm:text-base lg:text-lg py-2 lg:py-0 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
