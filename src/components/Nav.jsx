import { Link } from 'react-router-dom';
import React from 'react'
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";


const Nav = () => {
  return (
    <nav className="w-full">
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
          <img
            src="/logo.jpg" 
            alt="M/S GIGA POWER Logo"
            className="h-10"
          />
          <h1 className="text-green-600 text-2xl font-bold">M/S GIGA POWER</h1>
        </div>

        {/* Nav Links */}
        <div className="flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="text-green-500">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/service">SERVICE</Link>
          <Link to="/bussiness">BUSINESS ASSOCIATES</Link>
          <Link to="/contact">CONTACT</Link>
        </div>

        {/* Quote Button */}
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-medium">
          Get A Quote →
        </button>
      </div>
    </nav>
  )
}

export default Nav