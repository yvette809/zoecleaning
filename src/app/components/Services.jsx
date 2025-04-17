"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import homeCleaning from "../../assets/images/homecleaning.jpg";
import airbnb from "../../assets/images/airbnb.jpg";
import office from "../../assets/images/office.png";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3, // Stagger the cards one by one
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9, rotate: -4 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
  hover: {
    scale: 1.03,
    rotate: 1,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const Services = () => {
  const services = [
    {
      title: "Hemstäd",
      image: homeCleaning,
      description:
        "Vi ser till att du kommer tillbaka hem i en superren och mysig miljö.",
      link: "/housecleaning",
    },
    {
      title: "AirBnB Städ",
      image: airbnb,
      description:
        "Vi tar hand om dina AirBnB-städningar så att du kan fokusera på att få fler gäster.",
      link: "/airbnbcleaning",
    },
    {
      title: "Kontorsstäd",
      image: office,
      description:
        "Vi erbjuder professionell kontorsstädning för en ren, trivsam och produktiv arbetsmiljö.",
      link: "/officecleaning",
    },
  ];

  return (
    <section className="mt-24 px-4 scroll-mt-[7rem]" id="services">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold text-[#66a966]">Tjänster</h1>
        <p className="text-lg text-gray-700 mt-2">
          Vi Erbjuder Alla Tjänster Inom Hemstäd, kontorsstädning och Airbnb
          Städ
        </p>
      </motion.div>

      {/* Animated Cards Container */}
      <motion.div
        className="container mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="bg-white shadow-md rounded-lg p-6 text-center cursor-pointer"
            variants={cardVariants}
            whileHover="hover"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              {service.title}
            </h2>
            <Image
              src={service.image}
              alt={service.title}
              width={300}
              height={200}
              className="rounded-lg mx-auto"
            />
            <p className="text-gray-600 mt-4">{service.description}</p>
            <Link
              href={service.link}
              className="bg-[#66a966] text-white p-3 rounded-md mt-4 inline-block hover:bg-green-700 transition"
            >
              Läs mer
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
