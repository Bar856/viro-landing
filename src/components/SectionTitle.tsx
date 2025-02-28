import React from "react";

interface SectionTitleProps {
  children: React.ReactElement<any>;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return React.cloneElement(children, {
    className:
      "md:text-3xl font-bold md:col-start-2 md:col-end-3 lg:text-5xl lg:leading-tight font-bold text-5xl " +
      "bg-gradient-to-r from-blue-800 via-blue-500 to-gray-300 bg-clip-text text-transparent manrope" +
      children.props.className,
  });
};

export default SectionTitle;
