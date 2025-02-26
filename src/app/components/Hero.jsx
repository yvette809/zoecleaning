/* import React from "react";
import Image from "next/image";
import cleaningpic from "../../assets/images/cleaningpic.jpg";

const Hero = () => {
  return (
    <div className="relative w-full h-[80vh] z-0 mt-20">
      <Image
        src={cleaningpic}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        quality={100}
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
        <h1 className="text-5xl font-bold">Zoe Cleaning AB</h1>
        <p className="text-2xl mt-4">Vi städar så du slipper</p>
      </div>
    </div>
  );
};

export default Hero; */

import React from "react";
import Image from "next/image";

const Hero = ({ title, subtitle, backgroundImage }) => {
  return (
    <div className="relative w-full h-[80vh] z-0 ">
      <Image
        src={backgroundImage}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        quality={100}
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="text-2xl mt-4">{subtitle}</p>
      </div>
    </div>
  );
};

export default Hero;
