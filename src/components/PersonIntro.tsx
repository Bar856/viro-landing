"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const containerVariants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1,
    },
  },
};

const imageVariants = {
  offscreen: {
    opacity: 0,
    scale: 0.8,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 1.2,
    },
  },
};

const PersonIntro = () => {
  return (
    <motion.section
      className="w-full flex flex-col md:flex-row items-center justify-center px-6 py-12 md:py-16 gap-8 max-w-5xl mx-auto"
      variants={containerVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}>
      {/* Image */}
      <motion.div
        className="w-80 h-full md:w-96 overflow-hidden"
        variants={imageVariants}>
        <Image
          src="/images/orian-2.png"
          alt="אוריאן אברמוב"
          width={1096}
          height={1270}
          className="object-cover w-full h-full "
        />
      </motion.div>
      {/* Text Content */}
      <motion.div
        className="max-w-lg text-center md:text-right "
        variants={containerVariants}>
        <SectionTitle>
          <motion.h1 className="manrope" variants={containerVariants}>
            מנחת הכנס
          </motion.h1>
        </SectionTitle>
        <h2 className="text-2xl md:text-3xl font-bold text-primary manrope">
          אוריאן אברמוב
        </h2>
        <p className="text-lg font-semibold text-secondary mt-1 manrope">
          יועצת משכנתאות ופיננסים | מומחית לתיקים מורכבים, מסורבים ואיחוד
          הלוואות
        </p>
        <p className="mt-4 text-foreground leading-relaxed">
          אני יועצת משכנתאות ופיננסים עם ניסיון של 5 שנים טיפלתי באלפי משפחות
          שנתקלו בקשיים כלכליים קשים. במהלך השנים עמדתי לצד משפחות שנדחו שוב
          ושוב על ידי הבנקים, ששאפו למצוא פתרון לבעיות החובות ולחזור למסלול של
          יציבות כלכלית. אני מאמינה שאין בעיה פיננסית שאין לה פתרון – רק צריך את
          הכלים והליווי הנכון.
        </p>
        <p className="mt-4 text-foreground leading-relaxed">
          אני נשואה לאלי ואמא לשני ילדים מקסימים, ובמקביל לחיי המשפחה, אני אוהבת
          את העבודה שלי ונושאת את השליחות לעזור לאחרים לשנות את חייהם. הקמתי את
          חברת <span className="font-bold">VIRO</span> בעשר אצבעות מתוך תשוקה
          אמיתית להוביל אנשים לחופש כלכלי ולהעניק להם את הידע הנדרש להתמודדות עם
          אתגרים פיננסיים.
        </p>
        <p className="mt-4 text-foreground leading-relaxed">
          בנוסף, אני מנחה <span className="font-bold">תוכנית רדיו פיננסית</span>{" "}
          בכל יום שלישי בין השעות 11:00-12:00, בה אני חולקת מידע עדכני, טיפים
          וכלים פרקטיים לניהול כלכלי נכון.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default PersonIntro;
