"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest(".menu-container")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-white shadow-md z-50 flex justify-between items-center px-4 sm:px-6 lg:px-8">
      {/* Logo */}
      <Link href={"/"}>
        <div className="text-lg font-bold">
          <h1>ZoeCleaning</h1>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 text-lg">
        <li>
          <Link href={"#services"} className="hover:text-gray-700">
            Tjänster
          </Link>
        </li>
        <li>
          <Link href={"#about-us"} className="hover:text-gray-700">
            Om oss
          </Link>
        </li>
        <li>
          <Link
            href={"#contact-us"}
            className="bg-[#66a966] text-white px-6 py-2 rounded-full hover:bg-[#5a905a]"
          >
            Kontakt Oss
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div
        className="md:hidden cursor-pointer z-50"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <FaTimes className="w-6 h-6" />
        ) : (
          <FaBars className="w-6 h-6" />
        )}
      </div>

      {/* Fullscreen Overlay Menu (Mobile) */}
      <div
        className={`fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6 text-xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } md:hidden menu-container`}
      >
        <ul>
          <li>
            <Link
              href={"#services"}
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-700"
            >
              Tjänster
            </Link>
          </li>
          <li>
            <Link
              href={"#about-us"}
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-700"
            >
              Om oss
            </Link>
          </li>
          <li>
            <Link
              href={"#contact-us"}
              onClick={() => setIsOpen(false)}
              className="bg-[#66a966] text-white px-6 py-3 rounded-full hover:bg-[#5a905a]"
            >
              Kontakt Oss
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
