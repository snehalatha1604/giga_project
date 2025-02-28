import React from "react";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Address Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Address</h2>
          <p className="flex items-center">
            <FaMapMarkerAlt className="text-green-400 mr-2" />
            Jayendra Nagar, Godari Gunta, Kakinada - 533003
          </p>
          <p className="flex items-center mt-2">
            <FaPhone className="text-green-400 mr-2" />
            +91 9849370428
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2">
              <a href="/about" className="hover:text-green-400">
                ➤ About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="hover:text-green-400">
                ➤ Contact Us
              </a>
            </li>
            <li>
              <a href="/service" className="hover:text-green-400">
                ➤ Our Services
              </a>
            </li>
          </ul>
        </div>

        {/* Project Gallery */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Project Gallery</h2>
          <div className=" flex flex-wrap gap-2 w-64 ">
            <img
              src="/solarimg1.jpg"
              alt="Project 1"
              className="w-20 h-14 object-cover rounded"
            />
            <img
              src="/solarimg5.jpg"
              alt="Project 2"
              className="w-20 h-14 object-cover rounded"
            />
            <img
              src="/solarimg6.jpg"
              alt="Project 3"
              className="w-20 h-14 object-cover rounded"
            />
            <img
              src="/solarimg10.jpg"
              alt="Project 4"
              className="w-20 h-14 object-cover rounded"
            />
            <img
              src="/solarimg8.jpg"
              alt="Project 5"
              className="w-20 h-14 object-cover rounded"
            />
            <img
              src="/solarimg7.jpg"
              alt="Project 6"
              className="w-20 h-14 object-cover rounded"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-left border-t border-gray-700 pt-4">
        <p>
          © <span className="text-green-400">M/S GIGA POWER</span>, All Rights
          Reserved.
        </p>
      </div>

      {/* Scroll to Top Button */}
      <button
        className="fixed bottom-5 right-5 bg-green-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
