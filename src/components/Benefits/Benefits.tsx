import SectionTitle from "../SectionTitle";
import BenefitSection from "./BenefitSection";

import { benefits } from "@/data/benefits";

const Benefits: React.FC = () => {
  return (
    <div id="features">
      <SectionTitle>
        <h1 className="text-primary text-center">התחנות בדרך לעצמאות כלכלית</h1>
      </SectionTitle>
      {benefits.map((item, index) => {
        return (
          <BenefitSection
            key={index}
            index={index}
            benefit={item}
            imageAtRight={index % 2 !== 0}
          />
        );
      })}
    </div>
  );
};

export default Benefits;
