import React from "react";
import Link from "next/link";

const ButtonCta = () => {
  return (
    <Link
      href="https://ashdod.smarticket.co.il/הכנס___מחוב_לחופש_?"
      target="_blank">
      <button
        className="mt-6 px-8 py-3 bg-[#34D399] text-white font-bold rounded hover:bg-[#239068] transition shadow-lg"
        type="button">
        שריינו את מקומכם עכשיו!{" "}
      </button>
    </Link>
  );
};

export default ButtonCta;
