import { Link } from "react-router-dom";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Nav = ({ active }) => {
  return (
    <nav className="w-full ">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white flex justify-between px-6 py-2 text-sm">
        <div className="flex items-center">
          <IoLocationSharp className="text-green-400 mr-1" />
          <span>Godari Gunta, Kakinada</span>
        </div>
        <div className="flex items-center">
          <FaPhone className="text-green-400 mr-1" />
          <span>+91 9849370428</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <img src="/logo.jpg" alt="M/S GIGA POWER Logo" className="h-10" />
          <h1 className="text-green-600 text-2xl font-bold">M/S GIGA POWER</h1>
        </div>

        {/* Nav Links */}
        <div className="flex space-x-6 text-gray-700 items-center font-medium">
          <Link
            className={`hover:text-green-600 ${
              active == "home" && "text-green-600"
            } `}
            to="/"
          >
            HOME
          </Link>
          <Link
            className={`hover:text-green-600 ${
              active == "About" && "text-green-600"
            } `}
            to="/about"
          >
            ABOUT
          </Link>
          <Link
            className={`hover:text-green-600 ${
              active == "Service" && "text-green-600"
            } `}
            to="/service"
          >
            SERVICE
          </Link>
          <Link
            className={`hover:text-green-600 ${
              active == "Bussinessacc" && "text-green-600"
            } `}
            to="/bussiness"
          >
            BUSINESS ASSOCIATES
          </Link>
          <Link
            className={`hover:text-green-600 ${
              active == "Contact" && "text-green-600"
            } `}
            to="/contact"
          >
            CONTACT
          </Link>
          <a
            className="bg-green-500 text-white px-6 py-2 rounded-lg font-medium"
            href="/#getquote"
          >
            Get A Quote→
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
