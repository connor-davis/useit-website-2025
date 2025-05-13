import { Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  // Check window width for the navbar visibility
  const checkWindowWidth = () => {
    if (window.innerWidth > 1000) {
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
      <nav className="flex items-center justify-between flex-wrap p-6 bg-transparent">
        <div className="flex items-center flex-shrink-0 text-white space-x-3">
          <img src="/assets/logo.png" width="32" height="32" />
          <span className="font-semibold text-xl tracking-tight">Use-IT</span>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-green-100 border-green-400 hover:text-white hover:border-white"
            id="navbar-btn"
            onClick={() => toggleNavbar()}
          >
            <svg
              className="fill-current h-3 w-3"
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
            className="w-full block flex-grow lg:flex lg:items-center lg:w-auto "
            id="navbar"
          >
            <div className="text-sm lg:flex-grow  text-center lg:text-right">
              <Link
                to="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-green-100 hover:text-white mr-4 text-lg"
              >
                Home
              </Link>
              <Link
                to="/story"
                className="block mt-4 lg:inline-block lg:mt-0 text-green-100 hover:text-white mr-4 text-lg"
              >
                Our Story
              </Link>
              <Link
                to="/projects"
                className="block mt-4 lg:inline-block lg:mt-0 text-green-100 hover:text-white mr-4 text-lg"
              >
                Our Projects
              </Link>
              <Link
                to="/media"
                className="block mt-4 lg:inline-block lg:mt-0 text-green-100 hover:text-white mr-4 text-lg"
              >
                Media
              </Link>
              <Link
                to="/contact-us"
                className="block mt-4 lg:inline-block lg:mt-0 text-green-100 hover:text-white mr-4 text-lg"
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
