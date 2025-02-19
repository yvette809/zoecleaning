import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa"; // Importing the checkmark icon
import homeservices from "../../assets/images/home-services.jpg";
import homeaffairs from "../../assets/images/homeaffairs.jpg";
import homecleaning from "../../assets/images/home_cleaning.png";
import Hero from "../components/Hero";

const HouseCleaning = () => {
  return (
    <>
      <Hero
        title="HEMSTÄDNING"
        subtitle="Professionell städning för en fräschare vardag"
        backgroundImage={homecleaning}
      />
      <div className="container mx-auto mt-[8rem] px-4">
        <div className="grid gap-[3rem] md:grid-cols-2 lg:grid-cols-2">
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <Image
              src={homeservices}
              alt="Hemstädning"
              height={1500}
              width={600}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left">
            <p className="text-xl text-[#66a966] inline-block bg-[#a3e4a3] rounded-full px-3 font-bold">
              Vikten av ett Rent Hem
            </p>
            <h1 className="text-3xl font-bold text-gray-800 my-4">
              Fördelar med Regelbunden Hemstädning
            </h1>
            <ul className="list-none space-y-5 text-lg text-gray-700">
              <li className="flex items-center space-x-3">
                <FaCheckCircle className="text-[#66a966] text-2xl" />{" "}
                <span>Hygienisk miljö för dagligt liv</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaCheckCircle className="text-[#66a966] text-2xl" />{" "}
                <span>
                  Minimera mögel eller damm i varmt och fuktigt klimat
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaCheckCircle className="text-[#66a966] text-2xl" />{" "}
                <span>Minska din emotionella och mentala börda</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaCheckCircle className="text-[#66a966] text-2xl" />{" "}
                <span>
                  Koppla av, sitt tillbaka och låt oss ta hand om jobbet
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-[8rem] px-4">
        <div className="grid gap-[3rem] md:grid-cols-2 lg:grid-cols-2">
          {/* Text Section */}
          <div className="text-center md:text-left">
            <p className="text-xl text-[#66a966] inline-block bg-[#a3e4a3] rounded-full px-3 font-bold">
              Arbetsomfattning
            </p>
            <h1 className="text-3xl font-bold text-gray-800 my-4">
              Vad vi gör
            </h1>
            <ul className="list-none space-y-5 text-lg text-gray-700">
              <li className="flex items-center space-x-3">
                <FaCheckCircle className="text-[#66a966] text-2xl" />{" "}
                <span>Våningssängar & Byte av Sängkläder</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaCheckCircle className="text-[#66a966] text-2xl" />{" "}
                <span>
                  Diskning (inklusive in- och urlastning av diskmaskin)
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaCheckCircle className="text-[#66a966] text-2xl" />{" "}
                <span>Tvätt (inklusive strykning)</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaCheckCircle className="text-[#66a966] text-2xl" />{" "}
                <span>Köksstädning</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaCheckCircle className="text-[#66a966] text-2xl" />{" "}
                <span>Städning av badrum</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaCheckCircle className="text-[#66a966] text-2xl" />{" "}
                <span>
                  Dammtorkning av fönster, möbler, sängramar och hyllor
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaCheckCircle className="text-[#66a966] text-2xl" />{" "}
                <span>Våttorkning, fegning och dammsugning</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaCheckCircle className="text-[#66a966] text-2xl" />{" "}
                <span>Städning av skräp</span>
              </li>
            </ul>
          </div>
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <Image
              src={homeaffairs}
              alt="Hemstäda"
              height={1500}
              width={600}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HouseCleaning;
