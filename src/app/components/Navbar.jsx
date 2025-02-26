"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-white shadow-md z-50">
      <div className="flex justify-between items-center h-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" onClick={() => setIsOpen(false)}>
          <div className="text-lg font-bold cursor-pointer">
            <h1>ZoeCleaning</h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:items-center md:space-x-6">
          <li>
            <Link
              href="#services"
              className="hover:text-gray-700 transition-colors duration-200"
            >
              Tjänster
            </Link>
          </li>
          <li>
            <Link
              href="#about-us"
              className="hover:text-gray-700 transition-colors duration-200"
            >
              Om oss
            </Link>
          </li>
          <li>
            <Link
              href="#contact-us"
              className="bg-[#66a966] text-white px-4 py-2 rounded-full hover:bg-[#558a55] transition-colors duration-200"
            >
              Kontakt Oss
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
              <FaTimes className="w-6 h-6 text-red-600" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`fixed top-20 left-0 w-full bg-white transform transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col items-center py-6 space-y-6">
            <li>
              <Link
                href="#services"
                className="text-lg hover:text-gray-700 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Tjänster
              </Link>
            </li>
            <li>
              <Link
                href="#about-us"
                className="text-lg hover:text-gray-700 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Om oss
              </Link>
            </li>
            <li>
              <Link
                href="#contact-us"
                className="text-lg bg-[#66a966] text-white px-6 py-2 rounded-full hover:bg-[#558a55] transition-colors duration-200"
                onClick={toggleMenu}
              >
                Kontakt Oss
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
