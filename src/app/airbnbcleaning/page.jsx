"use client";
import React, { use } from "react";
import airbnbpic from "@/assets/images/airbnb2.png";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div className="container mx-auto mt-20 px-4">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <p className="text-lg sm:text-xl text-[#66a966] inline-block bg-[#a3e4a3] rounded-full px-4 py-1 font-bold">
            AIRBNB CHECKLISTA
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 my-4">
            Vad som ingår i Airbnb-städning
          </h1>

          <ul className="list-none space-y-5 text-base sm:text-lg text-gray-700">
            {[
              "Dammtorkning av alla ytor så högt som städaren når, inklusive bord, lampor och hyllor.",
              "Dammsugning av golv och mattor.",
              "Våttorkning av golv om golvet är lämpligt för det.",
              "Rengöring av speglar och fönster.",
              "Rengöring av ofta rörda ytor som strömbrytare, fjärrkontroller, dörrhandtag och dörrkarmar.",
              "Köksstädning generellt.",
              "Badrumsstädning generellt.",
            ].map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start space-x-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * i, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <FaCheckCircle className="text-[#66a966] text-xl flex-shrink-0 mt-1" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          {/* CTA */}
          <motion.div
            className="mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              className="bg-[#66a966] hover:bg-[#559c55] text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 w-full sm:w-auto"
              onClick={() => router.push("/#contact-us")}
            >
              Boka Airbnb-städning
            </button>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <Image
            src={airbnbpic}
            alt="Airbnb Städning"
            width={600}
            height={600}
            className="rounded-xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default page;
