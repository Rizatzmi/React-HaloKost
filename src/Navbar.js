import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ isHome }) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const homeBg = scrolling ? "bg-sky-800 bg-opacity-50" : "bg-transparent";
  const otherBg = scrolling ? "bg-sky-800 bg-opacity-50" : "bg-sky-800";
  const navbarBg = isHome ? homeBg : otherBg;

  return (
    <nav
      className={`p-4 flex items-center justify-between z-50 sticky top-0 ${navbarBg} -mb-[3.75rem] px-28`}
    >
      <NavLink to="/">
        <h1 className="text-xl text-white font-semibold">HaloKost</h1>
      </NavLink>
      <ul className="flex items-center space-x-4">
        <NavLink to="/" className="text-white">
          Home
        </NavLink>
        <NavLink to="/gallery" className="text-white">
          Gallery
        </NavLink>
        <NavLink to="/contact" className="text-white">
          Contact
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
