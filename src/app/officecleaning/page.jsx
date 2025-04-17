"use client";
import { motion, useInView, stagger } from "framer-motion";
import officepic from "@/assets/images/office2.png";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const OfficeCleaning = () => {
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Cleaning wipe animation effect
  const wipeVariants = {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    visible: (i) => ({
      clipPath: "inset(0 0% 0 0)",
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    }),
  };

  // List items data
  const officeServices = [
    "Dammtorkning av alla ytor, inklusive filer, skrivbord, stolar, fönsterbrädor, bord, tavlor, möbler och andra apparater.",
    "Dammsugning av golv och mattor om sådana finns.",
    "Våttorkning av golv om golvet är lämpligt för det.",
    "Tömning av papperskorgar och byte av påsar vid behov.",
  ];

  const toiletServices = [
    "Alla ytor torkas med desinfektionsmedel.",
    "Dammsugning och våttorkning av golv.",
    "Torkning av handduksskåpets lock.",
    "Toaletter och urinoarer rengörs och desinficeras, både in- och utvändigt.",
    "Toalettsitsen rengörs noggrant och omsorgsfullt.",
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="container mx-auto mt-[8rem] px-4"
    >
      <div className="grid gap-[3rem] md:grid-cols-2 lg:grid-cols-2 items-center">
        {/* Image Section with "cleaning" wipe effect */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative overflow-hidden rounded-lg shadow-md"
        >
          <motion.div
            initial={{ scale: 1.1 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 0.77, 0.47, 0.97] }}
            className="relative"
          >
            <Image
              src={officepic}
              alt="Kontorsstädning"
              height={1500}
              width={600}
              className="rounded-lg"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={isInView ? { x: "100%" } : {}}
              transition={{
                delay: 0.4,
                duration: 1.2,
                ease: [0.65, 0, 0.35, 1],
              }}
              className="absolute inset-0 bg-white mix-blend-lighten"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
            />
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          {/* Title with "spray" effect */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl text-[#030803] inline-block bg-[#a3e4a3] rounded-full px-3 font-bold"
          >
            Kontorsstädning
          </motion.p>

          {/* Header with "fade up" effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl font-bold text-gray-800 my-4"
          >
            Vad som ingår i kontorsstädning
          </motion.h1>

          {/* Office services with "wipe in" effect */}
          <motion.ul className="list-none space-y-5 text-lg text-gray-700">
            {officeServices.map((item, i) => (
              <motion.li
                key={`office-${i}`}
                custom={i}
                initial="hidden"
                animate={isInView ? "visible" : {}}
                variants={wipeVariants}
                className="flex items-start space-x-3 relative overflow-hidden"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                  className="inline-block mt-1 flex-shrink-0"
                >
                  <FaCheckCircle className="text-[#66a966] text-2xl" />
                </motion.span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Toilet cleaning section */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-2xl font-bold text-gray-800 my-6"
          >
            Toalettstädning:
          </motion.h2>

          {/* Toilet services with staggered "bounce in" effect */}
          <motion.ul
            initial="hidden"
            animate={isInView ? "visible" : {}}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.9,
                },
              },
            }}
            className="list-none space-y-5 text-lg text-gray-700"
          >
            {toiletServices.map((item, i) => (
              <motion.li
                key={`toilet-${i}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", bounce: 0.4 },
                  },
                }}
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3"
              >
                <motion.span
                  initial={{ rotate: -45, scale: 0.5 }}
                  animate={isInView ? { rotate: 0, scale: 1 } : {}}
                  transition={{ delay: 0.9 + i * 0.1, type: "spring" }}
                  className="inline-block mt-1 flex-shrink-0"
                >
                  <FaCheckCircle className="text-[#66a966] text-2xl" />
                </motion.span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button with "pulse" effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="mt-8"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(102, 169, 102, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 5px 15px rgba(102, 169, 102, 0)",
                  "0 5px 15px rgba(102, 169, 102, 0.4)",
                  "0 5px 15px rgba(102, 169, 102, 0)",
                ],
              }}
              transition={{
                boxShadow: { repeat: Infinity, duration: 2 },
              }}
              className="bg-[#66a966] hover:bg-[#559c55] text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
              onClick={() => router.push("/#contact-us")}
            >
              Boka nu
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default OfficeCleaning;
