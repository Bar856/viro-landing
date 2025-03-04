import Link from "next/link";
import React from "react";
import { FaFingerprint } from "react-icons/fa";
import Image from "next/image";
import { siteDetails } from "@/data/siteDetails";
import { footerDetails } from "@/data/footer";
import { getPlatformIconByName } from "@/utils";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#122853] border-white border-t-2 text-foreground py-10">
      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <FaFingerprint className="min-w-fit w-5 h-5 md:w-7 md:h-7" />
            <h3 className="manrope text-xl font-semibold cursor-pointer">
              {siteDetails.siteName}
            </h3>
          </Link>
          <p className="mt-3.5 text-foreground-accent">
            {footerDetails.subheading}
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">צור קשר</h4>

          {footerDetails.email && (
            <a
              href={`mailto:${footerDetails.email}`}
              className="block text-foreground-accent hover:text-foreground">
              {footerDetails.email}
            </a>
          )}

          {footerDetails.telephone && (
            <a
              href={`tel:${footerDetails.telephone}`}
              dir="ltr"
              className="text-foreground-accent hover:text-foreground">
              {footerDetails.telephone}
            </a>
          )}

          {footerDetails.socials && (
            <div className="mt-5 flex items-center gap-5 flex-wrap">
              {Object.keys(footerDetails.socials).map((platformName) => {
                if (platformName && footerDetails.socials[platformName]) {
                  return (
                    <Link
                      href={footerDetails.socials[platformName]}
                      target="_blank"
                      key={platformName}
                      aria-label={platformName}>
                      {getPlatformIconByName(platformName)}
                    </Link>
                  );
                }
              })}
            </div>
          )}
        </div>
        <div className="mt-8 flex flex-col items-center justify-center text-foreground-accent px-6">
          <Image
            className="self-center w-[150px]"
            src={"/VIRO.png"}
            alt="logo"
            width={500}
            height={500}
          />
          <p>
            {siteDetails.siteName}. כל הזכויות שמורות.
            <br />
            Copyright &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
