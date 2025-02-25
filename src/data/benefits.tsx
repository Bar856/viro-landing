import {
  FiBarChart2,
  FiBriefcase,
  FiDollarSign,
  FiLock,
  FiPieChart,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUser,
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "יוצאים מהבור",
    author: "אוריאן אברמוב",
    description:
      "סיפור אישי + למה הלוואות חוזרות זה מכת מוות כלכלית, איך אפשר לעבור מסירוב משכנתא לאישור, פתרונות פרקטיים לחובות.",
    bullets: [
      {
        title: "סיפור אישי",
        description: "ניסיון אמיתי מתוך החיים",
        icon: <FiUser size={26} />,
      },
      {
        title: "סירוב משכנתא לאישור",
        description: "איך לעבור את התהליך בהצלחה",
        icon: <FiBarChart2 size={26} />,
      },
      {
        title: "פתרונות פרקטיים",
        description: "צעדים מעשיים לחיסול חובות",
        icon: <FiTrendingUp size={26} />,
      },
    ],
    imageSrc: "/images/orian.jpeg",
  },
  {
    title: "חיים בפלוס",
    author: "שירן פינחסיאן",
    description:
      "אבחון הסיבה למינוס, בניית תקציב משפחתי, חשיבות של חיסכון חודשי קבוע.",
    bullets: [
      {
        title: "אבחון הסיבה למינוס",
        description: "זיהוי וניהול כלכלי נכון",
        icon: <FiBarChart2 size={26} />,
      },
      {
        title: "תקציב משפחתי",
        description: "בניית מערכת פיננסית מאוזנת",
        icon: <FiTarget size={26} />,
      },
      {
        title: "חיסכון חודשי",
        description: "מדוע זה כל כך חשוב",
        icon: <FiTrendingUp size={26} />,
      },
    ],
    imageSrc: "/images/osher.jpeg",
  },
  {
    title: "חיים מ(ע)ושרים",
    author: "ספיר והילל (חברת אושר פיננסים)",
    description:
      "שיטת ריץ׳ לייף ולא לוותר על החיים, זוגיות כלכלית בריאה, תוכנית דירה לכל ילד.",
    bullets: [
      {
        title: "שיטת ריץ׳ לייף",
        description: "איך ליהנות ולחיות נכון",
        icon: <FiTrendingUp size={26} />,
      },
      {
        title: "זוגיות כלכלית בריאה",
        description: "ניהול פיננסי נכון בזוגיות",
        icon: <FiUser size={26} />,
      },
      {
        title: "תוכנית דירה לכל ילד",
        description: "כיצד לבנות עתיד בטוח",
        icon: <FiShield size={26} />,
      },
    ],
    imageSrc: "/images/osher.jpeg",
  },
  {
    title: "חרדה כלכלית והשפעות על החוסן הנפשי",
    author:
      "מרינה שילקו - מייסדת ובעלים של ״בית האור״- מרכז לימודי, טיפולי לטראומה וחרדה.",
    description:
      "איך התת מודע משפיע על ההתנהלות הכלכלית, התמודדות נכונה עם פחדים וחרדות, כלים פרקטיים להגברת החוסן הנפשי.",
    bullets: [
      {
        title: "השפעת התת מודע",
        description: "כיצד הפסיכולוגיה משפיעה על הכלכלה",
        icon: <FiShield size={26} />,
      },
      {
        title: "התמודדות עם פחדים",
        description: "איך לשמור על יציבות נפשית",
        icon: <FiUser size={26} />,
      },
      {
        title: "חוסן נפשי",
        description: "כלים פרקטיים לשיפור ההתמודדות",
        icon: <FiBarChart2 size={26} />,
      },
    ],
    imageSrc: "/images/osher.jpeg",
  },
];
