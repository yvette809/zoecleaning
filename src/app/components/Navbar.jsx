"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import imageLogo from "../../assets/images/logo1.png";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 left-0 w-full h-20 bg-white shadow-md z-[100]">
      <div className="flex justify-between items-center h-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" onClick={() => setIsOpen(false)}>
          <div className="group flex items-center cursor-pointer">
            <Image
              src={imageLogo}
              width={120}
              height={40}
              alt="Zoe Cleaning Logo"
              className="transition-all duration-300"
            />

            {/* Optional underline effect */}
            <span className="block h-1 w-0 bg-[#66a966] group-hover:w-full transition-all duration-500 ease-out"></span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:items-center md:space-x-6">
          <li>
            <Link
              href="#services"
              className="relative text-gray-700 px-3 py-2 font-medium overflow-hidden group hover:text-gray-900 transition-colors duration-300"
            >
              <span className="relative z-10">Tjänster</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#66a966] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            </Link>
          </li>
          <li>
            <Link
              href="#about-us"
              className="relative text-gray-700 px-3 py-2 font-medium overflow-hidden group hover:text-gray-900 transition-colors duration-300"
            >
              <span className="relative z-10">Om oss</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#66a966] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            </Link>
          </li>
          <li>
            <Link
              href="#contact-us"
              className="relative bg-[#66a966] text-white px-4 py-2 rounded-full font-medium overflow-hidden group hover:bg-[#558a55] transition-colors duration-300"
            >
              <span className="relative z-10">Kontakt Oss</span>
              <span className="absolute inset-0 bg-[#558a55] opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 ease-out origin-center rounded-full"></span>
            </Link>
          </li>
        </ul>

        {/* Hamburger/X Icon (Mobile Only) */}
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes
                className="w-6 h-6 text-red-600 z-[200] hover:text-red-800 transition-colors duration-200"
                aria-hidden="true"
              />
            ) : (
              <FaBars
                className="w-6 h-6 text-gray-800 z-[200] hover:text-gray-600 transition-colors duration-200"
                aria-hidden="true"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40 transition-opacity duration-300"
          onClick={toggleMenu}
        >
          <div
            className="fixed top-20 left-0 w-full bg-white transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col items-center py-6 space-y-6">
              <li>
                <Link
                  href="#services"
                  className="relative text-lg text-gray-700 px-4 py-2 font-medium overflow-hidden group hover:text-gray-900 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  <span className="relative z-10">Tjänster</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#66a966] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#about-us"
                  className="relative text-lg text-gray-700 px-4 py-2 font-medium overflow-hidden group hover:text-gray-900 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  <span className="relative z-10">Om oss</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#66a966] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#contact-us"
                  className="relative text-lg bg-[#66a966] text-white px-6 py-2 rounded-full font-medium overflow-hidden group hover:bg-[#558a55] transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  <span className="relative z-10">Kontakt Oss</span>
                  <span className="absolute inset-0 bg-[#558a55] opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 ease-out origin-center rounded-full"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
