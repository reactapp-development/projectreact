import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="flex justify-between items-center h-16 md:h-[10vh] fixed top-0 z-50 left-0 right-0 bg-[#08111f]/35 backdrop-blur-md border-b border-white/10 px-4 md:px-8 shadow-2xl">

        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
          Traverlly
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          <Link className="text-white hover:text-blue-300 transition" to="/">
            Home
          </Link>

          <Link className="text-white hover:text-blue-300 transition" to="/destination">
            Destination
          </Link>

          <Link className="text-white hover:text-blue-300 transition" to="/about">
            About
          </Link>

          <Link className="text-white hover:text-blue-300 transition" to="/Contact">
            Contact
          </Link>

          <Link className="text-white hover:text-blue-300 transition" to="/Login">
            Login
          </Link>
        </div>


        {/* Mobile Menu */}
        {open && (
          <div className=" absolute top-16 left-0 w-full bg-[#08111f] flex flex-col items-center gap-5 py-6 md:hidden
          ">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/destination" onClick={() => setOpen(false)}>Destination</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            <Link to="/Contact" onClick={() => setOpen(false)}>Contact</Link>
            <Link to="/Login" onClick={() => setOpen(false)}>Login</Link>
          </div>
        )}


        {/* Hamburger */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          <RxHamburgerMenu />
        </button>

      </nav>
    </div>
  );
};

export default Navbar;