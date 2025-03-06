"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ButtonCta = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
      className="relative inline-block mt-4">
      {/* CTA Button with Proper Pointer */}
      <Link
        href="https://ashdod.smarticket.co.il/הכנס___מחוב_לחופש_?"
        target="_blank"
        className="cursor-pointer px-8 py-3 bg-yellow-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300 hover:bg-yellow-700 hover:shadow-xl whitespace-nowrap">
        תפסו את מקומכם עכשיו!
      </Link>

      {/* Pulse Effect - No Pointer Events to Avoid Interference */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-yellow-600 opacity-40 blur-md pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default ButtonCta;
