import React from "react";
import Image from "next/image";
import imageLogo from "../../assets/images/logo1.png";

const Footer = () => {
  const todaysYear = new Date().getFullYear();
  return (
    <footer className="bg-[#0b130b] text-white mt-16 py-6">
      <div className="container mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between md:items-center ">
        {/* Bottom Section */}
        <div className="text-center md:text-right text-2xl mt-4 md:mt-0 border-t border-gray-700 pt-4 md:border-t-0 md:pt-0">
          © {todaysYear} Zoe Cleaning AB . Alla rättigheter förbehållna.
        </div>
        {/* Logo Section */}
        <div className="mb-6 md:mb-0">
          <Image
            src={imageLogo}
            width={120}
            height={60}
            alt="Zoe Cleaning Logo"
            className="transition-all duration-300"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
