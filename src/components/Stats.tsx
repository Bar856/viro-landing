"use client";
import { stats } from "@/data/stats";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-10 lg:py-20">
      {/* Section Title with Scroll Animation */}
      <SectionTitle>
        <motion.h1
          className="mb-10 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }} // Animates only the first time in view
        >
          מטרת הכנס
        </motion.h1>
      </SectionTitle>
      {/* Stats Grid with On-Scroll Animations */}
      <motion.div
        className="grid sm:grid-cols-3 gap-8 mt-8"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.3, // Each stat animates in sequence
              duration: 0.8,
              ease: "easeOut",
            },
          },
        }}
        viewport={{ once: true }}>
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="text-center sm:text-right max-w-md sm:max-w-full mx-auto">
            {/* Icon + Title with Bounce Effect */}
            <motion.h3
              className="mb-5 flex items-center gap-2 text-3xl font-semibold justify-center sm:justify-start"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}>
              {stat.icon}
              {stat.title}
            </motion.h3>

            {/* Description Appears Smoothly */}
            <motion.p
              className="text-foreground-accent text-center md:text-right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}>
              {stat.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;
