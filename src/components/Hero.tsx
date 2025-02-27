import React from "react";
import Image from "next/image";

import { heroDetails } from "@/data/hero";
import Link from "next/link";
import ButtonCta from "./ButtonCta";
import Countdown from "./Countdown";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center h-screen px-5">
      {/* תמונת רקע עם פילטרים */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src={heroDetails.centerImageSrc}
          layout="fill"
          objectFit="cover"
          quality={100}
          priority={true}
          alt="Background image"
          className="opacity-20 blur-sm"
        />
      </div>

      {/* רקע דקורטיבי נוסף */}
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
        <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-20" />
      </div>

      <div className="text-center flex flex-col justify-center items-center">
        {/* כותרת ראשית ותת-כותרת */}
        <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">
          {heroDetails.heading}
        </h1>
        <h2 className="text-3xl md:text-5xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">
          {heroDetails.secondHeading}
        </h2>
        <p className="mt-4 text-foreground text-xl md:text-4xl max-w-lg mx-auto">
          {heroDetails.subheading}
        </p>

        {/* פרטי האירוע וכפתור ההרשמה */}
        <div className="mt-8 flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            <div className="bg-primary bg-opacity-60 rounded-lg p-4 shadow-md">
              <p className="text-sm uppercase tracking-wide text-foreground">
                תאריך
              </p>
              <p className="font-bold text-lg text-foreground">
                {heroDetails.eventDate}
              </p>
            </div>
            <div className="bg-primary bg-opacity-60 rounded-lg p-4 shadow-md">
              <p className="text-sm uppercase tracking-wide text-foreground">
                שעות
              </p>
              <p className="font-bold text-lg text-foreground">
                {heroDetails.eventTime}
              </p>
            </div>
            <div className="bg-primary bg-opacity-60 rounded-lg p-4 shadow-md">
              <p className="text-sm uppercase tracking-wide text-foreground">
                מיקום
              </p>
              <p className="font-bold text-lg text-foreground">
                {heroDetails.location}
              </p>
              <p className="font-bold text-sm text-foreground">
                {heroDetails.location2}
              </p>
            </div>
            <Countdown />
            <ButtonCta />
          </div>
          <Image
            className="self-center w-[150px]"
            src={"/VIRO.png"}
            alt="logo"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
