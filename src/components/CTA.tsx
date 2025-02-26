import { ctaDetails } from "@/data/cta";
import Link from "next/link";
import ButtonCta from "./ButtonCta";

const CTA: React.FC = () => {
  return (
    <section id="cta" className="mt-10 mb-5 lg:my-20">
      <div className="relative rounded-3xl h-full w-full z-10 mx-auto py-12 sm:py-20">
        <div className="h-full w-full">
          <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#E5E7EB] bg-[size:6rem_4rem]">
            <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0"></div>
          </div>

          <div className="h-full flex flex-col items-center justify-center text-black text-center px-5">
            <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">
              {ctaDetails.heading}
            </h2>

            <p className="mx-auto max-w-xl md:px-5">{ctaDetails.subheading}</p>

            <div className="mt-4 flex flex-col sm:flex-row items-center sm:gap-4">
              <ButtonCta />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
