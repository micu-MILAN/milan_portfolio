import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Handle scroll event to toggle the sticky class
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true); // Make navbar sticky when scrolled more than 10px
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`py-4 w-full m-auto shadow-lg font-Signika sticky top-0 z-50 transition-all duration-300 ${
        isSticky ? "backdrop-blur-sm bg-black/60" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between mx-4 md:mx-24 py-4 items-center">
        <Link to="hero" smooth={true}>
          <div className="font-bold text-3xl text-white cursor-pointer">
            MILAN
          </div>
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl focus:outline-none"
          >
            {isMenuOpen ? "X" : "☰"}
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row md:items-center gap-6 md:gap-9 py-3 list-none ${
            isMenuOpen ? "overflow-y-auto max-h-[70vh]" : ""
          } md:overflow-visible md:max-h-none`}
        >
          <Link to="hero" smooth={true}>
            <li className="text-white cursor-pointer hover:text-orange-400">
              Home
            </li>
          </Link>

          <Link to="about" smooth={true}>
            <li className="text-white cursor-pointer hover:text-orange-400">
              About
            </li>
          </Link>

          <Link to="resume" smooth={true}>
            <li className="text-white cursor-pointer hover:text-orange-400">
              Resume
            </li>
          </Link>

          <Link to="services" smooth={true}>
            <li className="text-white cursor-pointer hover:text-orange-400">
              Services
            </li>
          </Link>

          <Link to="skills" smooth={true}>
            <li className="text-white cursor-pointer hover:text-orange-400">
              Skills
            </li>
          </Link>

          <li className="text-white cursor-pointer">Project</li>
          <li className="text-white cursor-pointer">My Blog</li>

          <Link to="contact" smooth={true}>
            <li className="text-white cursor-pointer hover:text-orange-400">
              Contact
            </li>
          </Link>
        </div>
      </div>
    </nav>
  );
}
