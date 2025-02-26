import BenefitSection from "./BenefitSection";

import { benefits } from "@/data/benefits";

const Benefits: React.FC = () => {
  return (
    <div id="features">
      <h1 className="text-5xl font-bold text-primary text-center md:col-start-2 md:col-end-3">
        התחנות בדרך לעצמאות כלכלית
      </h1>
      {benefits.map((item, index) => {
        return (
          <BenefitSection
            key={index}
            benefit={item}
            imageAtRight={index % 2 !== 0}
          />
        );
      })}
    </div>
  );
};

export default Benefits;
