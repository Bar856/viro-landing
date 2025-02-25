import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import React from "react";

export const stats = [
  {
    title: "מחוב לחופש",
    icon: <BsBarChartFill size={34} className="text-blue-500" />,
    description:
      "שינוי מנטלי וכלכלי - תגלו כיצד לצאת ממעגל החובות ולתכנן נכון את עתידכם הפיננסי.",
  },
  {
    title: "מה תקבלו?",
    icon: <BsFillStarFill size={34} className="text-yellow-500" />,
    description:
      "תלמדו איך לתכנן כלכלית נכון, להימנע מהלוואות מיותרות וליצור חוסן פיננסי.",
  },
  {
    title: "למה עכשיו?",
    icon: <PiGlobeFill size={34} className="text-green-600" />,
    description:
      "מצב המשק, עליית הריביות והנטייה להיכנס לחובות הופכים את האירוע לרלוונטי ודחוף במיוחד.",
  },
];
