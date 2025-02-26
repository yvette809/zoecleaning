import React from "react";
import Image from "next/image";
import Link from "next/link";
import homeCleaning from "../../assets/images/homecleaning.jpg";
import airbnb from "../../assets/images/airbnb.jpg";
import housedecor from "../../assets/images/house-decor.jpg";

const Services = () => {
  return (
    <section className="mt-24 px-4 scroll-mt-[7rem]" id="services">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#66a966]">Tjänster</h1>
        <p className="text-lg text-gray-700 mt-2">
          Vi Erbjuder Alla Tjänster Inom Hemstäd och Airbnb Städ
        </p>
      </div>

      {/* Service Cards */}
      <div className="container mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/** Service 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Hemstäd</h2>
          <Image
            src={homeCleaning}
            alt="Home Cleaning"
            width={300}
            height={200}
            className="rounded-lg mx-auto"
          />
          <p className="text-gray-600 mt-4">
            Vi ser till att du kommer tillbaka hem i en superren och mysig
            miljö.
          </p>
          <Link
            href={"/housecleaning"}
            className="bg-[#66a966] p-3 rounded-md mt-4 block"
          >
            {" "}
            Läs mer
          </Link>
        </div>

        {/** Service 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            AirBnB Städ
          </h2>
          <Image
            src={airbnb}
            alt="airbnbCleaning"
            width={300}
            height={200}
            className="rounded-lg mx-auto"
          />
          <p className="text-gray-600 mt-4">
            Vi tar hand om dina AirBnB-städningar så att du kan fokusera på att
            få fler gäster.
          </p>
        </div>

        {/** Service 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Hus inredning
          </h2>
          <Image
            src={housedecor}
            alt="House Decor"
            width={300}
            height={200}
            className="rounded-lg mx-auto"
          />
          <p className="text-gray-600 mt-4">
            Vi kan hjälpa dig att inreda ditt hus så att det ser vackert ut.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
