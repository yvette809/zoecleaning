"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { FaBroom, FaSprayCan } from "react-icons/fa";
import { useEffect, useRef } from "react";
import Link from "next/link";

import homeservices from "../../assets/images/home-services.jpg";
import homeaffairs from "../../assets/images/homeaffairs.jpg";
import homecleaning from "../../assets/images/home_hero.png";
import Hero from "../components/Hero";

const HouseCleaning = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const isInView1 = useInView(section1Ref, { once: true, amount: 0.1 });
  const isInView2 = useInView(section2Ref, { once: true, amount: 0.1 });

  // Cleaning tool animations
  const cleaningTools = [FaBroom, FaSprayCan];

  useEffect(() => {
    // Animate cleaning tools across the first image
    if (isInView1) {
      cleaningTools.forEach((_, index) => {
        // Keeping the tool animation as it’s not part of the list items
      });
    }
  }, [isInView1]);

  // List items data
  const benefits = [
    "Hygienisk miljö för dagligt liv",
    "Minimera mögel eller damm i varmt och fuktigt klimat",
    "Minska din emotionella och mentala börda",
    "Koppla av, sitt tillbaka och låt oss ta hand om jobbet",
  ];

  const includedServices = [
    "Vi dammtorkar alla ytor så högt som städaren når.",
    "Vi dammsuger golv och mattor om sådana finns.",
    "Vi våttorkar golvet om golvytan är lämplig för det.",
    "Vi rengör dörrhandtag och dörrkarmar.",
    "Vi putsar speglar (ej fönster).",
    "Vi tömmer sopor om kunden visar var sopkärlen finns.",
    "I köket: diskhon, spisen, inuti mikrovågsugn, utsidan av ugnen samt avtorkning av apparater som mixer, brödrost och kaffebryggare.",
    "Vi sätter in disk i diskmaskinen vid behov.",
    "I sovrum: vi dammtorkar, dammsuger, våttorkar vid behov, bäddar och byter sängkläder om kunden önskar det.",
  ];

  const specialRequests = ["Rengöring inuti kylskåpet (60 min extra)."];

  const excludedServices = [
    "Rengöring av väggar eller dammtorkning av tavlor.",
    "Ytor som kräver stege eller särskild utrustning för att nås.",
    "Borttagning av svåra fläckar.",
    "Rengöring av ventilationsventiler eller galler.",
    "Flytt av tunga möbler eller vitvaror.",
    "Städning efter renovering.",
    "Rengöring av möbelklädsel.",
  ];

  // Custom animation variants for list items
  const wipeVariants = {
    hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
    visible: (i) => ({
      clipPath: "inset(0 0% 0 0)",
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    }),
  };

  // Variants for other elements in section 2
  const floatVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    },
  };

  return (
    <>
      <Hero
        title="HEMSTÄDNING"
        subtitle="Professionell städning för en fräschare vardag"
        backgroundImage={homecleaning}
      />

      {/* First Section - Enhanced with cleaning tools animation */}
      <motion.div
        ref={section1Ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto mt-[8rem] px-4 relative"
      >
        {/* Animated cleaning tools */}
        {isInView1 &&
          cleaningTools.map((Icon, index) => (
            <motion.div
              key={`tool-${index}`}
              className={`cleaning-tool-${
                index + 1
              } absolute z-10 text-3xl text-[#66a966]`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: index * 2,
              }}
            >
              <Icon />
            </motion.div>
          ))}

        <div className="grid gap-[3rem] md:grid-cols-2 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView1 ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center items-center relative overflow-hidden"
          >
            {/* Image wipe effect */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={isInView1 ? { x: "100%" } : {}}
              transition={{
                delay: 0.4,
                duration: 1.5,
                ease: [0.65, 0, 0.35, 1],
              }}
              className="absolute inset-0 bg-white mix-blend-lighten z-10"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
            />
            <Image
              src={homeservices}
              alt="Hemstädning"
              height={1500}
              width={600}
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </motion.div>

          <div className="text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-xl text-[#66a966] inline-block bg-[#a3e4a3] rounded-full px-3 font-bold"
            >
              Vikten av ett Rent Hem
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-3xl font-bold text-gray-800 my-4"
            >
              Fördelar med <span className="text-[#66a966]">Regelbunden</span>{" "}
              Hemstädning
            </motion.h1>

            <ul className="list-none">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  variants={wipeVariants}
                  initial="hidden"
                  animate={isInView1 ? "visible" : "hidden"}
                  custom={index}
                  className="text-lg text-gray-700 mb-2"
                >
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Second Section - Service Details */}
      <motion.div
        ref={section2Ref}
        className="container mx-auto px-4 py-16 bg-gray-100"
        initial={{ opacity: 0 }}
        animate={isInView2 ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl font-semibold text-center"
        >
          Vad ingår i en Hemstädning?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] my-8">
          <div>
            <motion.h3
              initial="hidden"
              animate={isInView2 ? "visible" : "hidden"}
              variants={floatVariants}
              className="text-xl font-semibold text-[#66a966]"
            >
              Tjänster som ingår:
            </motion.h3>
            <ul className="list-disc pl-5 text-lg">
              {includedServices.map((service, index) => (
                <li key={index} className="mb-2">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <motion.h3
              initial="hidden"
              animate={isInView2 ? "visible" : "hidden"}
              variants={floatVariants}
              className="text-xl font-semibold text-[#66a966]"
            >
              Extra Tjänster (mot extra kostnad):
            </motion.h3>
            <ul className="list-disc pl-5 text-lg">
              {specialRequests.map((request, index) => (
                <li key={index} className="mb-2">
                  {request}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <motion.h3
          initial="hidden"
          animate={isInView2 ? "visible" : "hidden"}
          variants={floatVariants}
          className="text-xl font-semibold text-center mt-8"
        >
          Exkluderade Tjänster:
        </motion.h3>
        <ul className="list-disc pl-5 text-lg">
          {excludedServices.map((service, index) => (
            <li key={index} className="mb-2">
              {service}
            </li>
          ))}
        </ul>

        {/* Boka Nu Button */}
        <div className="text-center mt-8">
          <Link
            href="/#contact-us"
            scroll={false}
            className="inline-block px-6 py-3 bg-[#66a966] text-white text-lg font-semibold rounded-lg hover:bg-[#558e56] transition-all"
          >
            Boka Nu
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default HouseCleaning;
