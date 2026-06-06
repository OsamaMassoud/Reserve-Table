import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-gray-300 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4"> 

        {/* Top Section */}

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">

          {/* 1. Logo  */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <img
              src="home/public/littel-lemon-logo.png"
              alt="Little Lemon"
              className="w-12 h-12 object-cover rounded-full"
            />
            <h2 className="text-2xl font-bold whitespace-nowrap">
              Little Lemon
            </h2>
          </div>

          {/* 2. Links */}
          <div className="flex gap-6 justify-center text-center">
            <Link to="/home" className="hover:text-green-400 duration-300 font-medium">
              Home
            </Link>

            <Link to="/Reservations" className="hover:text-green-400 duration-300 font-medium">
              Reservations
            </Link>

            <Link to="/contact" className="hover:text-green-400 duration-300 font-medium">
              Contact
            </Link>

          </div>

          {/* 3. Social Media  */}
          <div className="flex gap-5 justify-center md:justify-end">
            <a href="#" className="hover:text-green-400 duration-300 text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-green-400 duration-300 text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-green-400 duration-300 text-xl">
              <FaXTwitter />
            </a>
            <a href="#" className="hover:text-green-400 duration-300 text-xl">
              <FaYoutube />
            </a>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-6 pt-4 text-center text-gray-300 text-sm">
          © 2026 Little Lemon. All rights reserved.
        </div>

      </div>
    </footer>
  );
}