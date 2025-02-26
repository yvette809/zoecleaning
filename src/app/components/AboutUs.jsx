import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section
      className="mt-10 px-4  py-8 container mx-auto scroll-mt-[7rem]"
      id="about-us"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#66a966]">🚀 Om Oss</h1>
        <p className="text-lg text-gray-700 mt-4">
          Vi erbjuder professionella städtjänster för både{" "}
          <strong>privatpersoner och Airbnb ägare</strong>. Just nu är vi ett
          team på två engagerade medarbetare, och vi letar alltid efter pålitlig
          personal som gillar att ta i och verkligen brinner för städning.
        </p>
      </div>

      {/* List of Services */}
      <div className="container mx-auto space-y-6 md:space-y-8">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 rounded-full bg-[#66a966] text-white flex items-center justify-center">
            <span className="text-2xl font-semibold">1</span>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-800">
              Hemstädning & Airbnb Städning
            </h2>
            <p className="text-gray-600 mt-2">
              Vi ser till att ditt hem eller kontor blir{" "}
              <strong>skinande rent</strong>.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 rounded-full bg-[#66a966] text-white flex items-center justify-center">
            <span className="text-2xl font-semibold">2</span>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-800">
              Flexibla Bokningar
            </h2>
            <p className="text-gray-600 mt-2">
              Välj mellan <strong>veckostäd, månadsstäd</strong>, eller boka
              städning vid behov.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 rounded-full bg-[#66a966] text-white flex items-center justify-center">
            <span className="text-2xl font-semibold">3</span>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-800">RUT-avdrag</h2>
            <p className="text-gray-600 mt-2">
              Som privatperson kan du utnyttja{" "}
              <strong>Skatteverkets RUT-avdrag</strong> och få lägre kostnad för
              våra tjänster.
            </p>
            <Link
              href={
                "https://www.skatteverket.se/privat/fastigheterochbostad/rotochrutarbete.4.2e56d4ba1202f95012080002966.html"
              }
            >
              <button className="text-lg text-[#66a966] mt-2">Ser Mer</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
