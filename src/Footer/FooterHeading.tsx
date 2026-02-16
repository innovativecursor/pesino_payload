import React from "react";

interface FooterHeadingProps {
  text: string;
  className?: string;
}

export const FooterHeading: React.FC<FooterHeadingProps> = ({ text, className }) => {
  return (
    <h3 className={`text-base font-bold text-black ${className || ""}`}>
      {text}
    </h3>
  );
};
