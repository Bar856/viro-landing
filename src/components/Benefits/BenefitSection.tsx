"use client";
import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion";

import BenefitBullet from "./BenefitBullet";
import SectionTitle from "../SectionTitle";
import { IBenefit } from "@/types";

interface Props {
  benefit: IBenefit;
  imageAtRight?: boolean;
  index: number;
}

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
    x: -20,
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

const BenefitSection: React.FC<Props> = ({
  benefit,
  imageAtRight,
  index,
}: Props) => {
  const { title, description, imageSrc, bullets, author } = benefit;

  // צבעי הרקע משתנים לפי מספר התחנה
  const colors = ["bg-blue-900", "bg-blue-800", "bg-blue-700", "bg-blue-600"];
  const textColors = [
    "text-blue-200",
    "text-blue-200",
    "text-blue-200",
    "text-blue-200",
  ];

  return (
    <section
      className={`benefit-section m-6 p-8 rounded-lg text-white shadow-lg ${
        colors[index % colors.length]
      }`}>
      <motion.div
        className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 justify-between"
        variants={containerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}>
        <div
          className={`w-14 h-14 flex items-center justify-center rounded-full text-xl font-bold border border-white shadow-md ${
            textColors[index % textColors.length]
          }`}>
          {index + 1}
        </div>
        {/* ✅ תמונת המרצה - מתחלפת צדדים לפי `imageAtRight` */}
        <div
          className={clsx(
            "w-48 h-48 rounded-full overflow-hidden border-4 border-gray-300 shadow-xl flex-shrink-0",
            {
              "lg:order-2": imageAtRight,
              "lg:order-1": !imageAtRight,
            }
          )}>
          <Image
            src={imageSrc}
            alt={title}
            width={192}
            height={192}
            quality={100}
            className="object-cover w-full h-full"
          />
        </div>
        {/* ✅ מספר התחנה */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-right w-full max-w-lg">
          <h3 className="mt-4 text-3xl font-bold">{title}</h3>
          <h4 className="text-lg text-gray-300 mt-1">{author}</h4>
          <p className="mt-4 text-lg leading-relaxed">{description}</p>

          {/* ✅ רשימת הבולטים */}
          <div className="mt-6 w-full flex flex-col gap-3">
            {bullets.map((item, idx) => (
              <BenefitBullet
                key={idx}
                title={item.title}
                icon={item.icon}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BenefitSection;
