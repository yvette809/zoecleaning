import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    //<nav className="fixed top-0 left-0 w-full  shadow-md z-50 flex justify-between items-center">
    <nav className="fixed top-0 left-0 w-full h-20 bg-white shadow-md z-50 flex justify-between items-center">
      {/* Logo */}
      <Link href={"/"}>
        {" "}
        <div className="text-lg font-bold">
          <h1>ZoeCleaning</h1>
        </div>
      </Link>

      {/* Navigation Links */}
      <ul className="flex space-x-6 font-bold">
        <li>
          <Link
            href={"#services"}
            className="hover:text-gray-700 transition-colors"
          >
            Tjänster
          </Link>
        </li>
        <li>
          <Link
            href={"#about-us"}
            className="hover:text-gray-700 transition-colors"
          >
            Om oss
          </Link>
        </li>
        <li>
          <Link
            href={"#contact-us"}
            className="bg-[#66a966] p-3 rounded-full mx-3"
          >
            Kontakt Oss
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
