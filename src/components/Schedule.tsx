"use client";
import React from "react";
import { scheduleItems } from "@/data/loz";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.9,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

export const childVariants = {
  offscreen: {
    opacity: 0,
    x: -50,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    },
  },
};

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="my-12 px-5">
      <motion.h2
        className="text-5xl font-bold mb-10 text-center"
        variants={childVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}>
        לו״ז הכנס
      </motion.h2>

      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}>
        {scheduleItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-green-200 shadow-xl rounded-md gap-2 flex flex-col md:flex-row md:items-center text-black border-2 border-black mb-4"
            variants={childVariants}>
            <div className="bg-gray-500 text-white m-0 md:m-2 py-2 px-4 rounded-md text-center font-bold">
              {item.time}
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <div className="mt-2 text-sm">
                {typeof item.description === "string" ? (
                  <p>{item.description}</p>
                ) : (
                  item.description
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Schedule;
