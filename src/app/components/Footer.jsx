import React from "react";

const Footer = () => {
  const todaysYear = new Date().getFullYear();
  return (
    <footer className="bg-[#66a966] text-gray-800 py-8 mt-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Section */}
        <div>
          <h3 className="text-xl font-bold mb-3">Företag</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about-us" className="hover:text-gray-400">
                Om oss
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-400">
                Våra tjänster
              </a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-xl font-bold mb-3">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Kontakt
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Integritetspolicy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Villkor & Bestämmelser
              </a>
            </li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-3">Zoe Cleaning AB</h3>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4 text-sm">
        © {todaysYear} Zoe Cleaning AB . Alla rättigheter förbehållna.
      </div>
    </footer>
  );
};

export default Footer;
