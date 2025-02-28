"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { heroDetails } from "@/data/hero";
import ButtonCta from "./ButtonCta";
import Countdown from "./Countdown";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen px-5">
      {/* Background Image with Fade-in & Blur */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src={heroDetails.centerImageSrc}
          layout="fill"
          objectFit="cover"
          quality={100}
          priority={true}
          alt="Background image"
          className="opacity-20 blur-sm"
        />
      </motion.div>

      {/* Decorative Background Overlay */}
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
        <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-20" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center gap-3 flex flex-col justify-center items-center">
        {/* Headings with Smooth Entrance */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto mt-10">
          {heroDetails.heading}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-3xl md:text-5xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">
          {heroDetails.secondHeading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-4 text-foreground text-xl md:text-4xl max-w-lg mx-auto">
          {heroDetails.subheading}
        </motion.p>

        {/* Event Details with Hover Scaling Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-2 max-w-3xl">
          {[
            { label: "תאריך", value: heroDetails.eventDate },
            { label: "שעות", value: heroDetails.eventTime },
            {
              label: "מיקום",
              value: (
                <>
                  {heroDetails.location}
                  <br />
                  {heroDetails.location2}
                </>
              ),
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-primary bg-opacity-60 rounded-lg p-4 shadow-md">
              <p className="text-sm uppercase tracking-wide text-foreground">
                {item.label}
              </p>
              <p className="font-bold text-lg text-foreground">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}>
          <Countdown />
        </motion.div>

        {/* CTA Button with Pulse Effect */}

        <ButtonCta />

        {/* Logo Image with Entrance Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.4 }}>
          <Image
            className="self-center w-[150px]"
            src={"/VIRO.png"}
            alt="logo"
            width={500}
            height={500}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
