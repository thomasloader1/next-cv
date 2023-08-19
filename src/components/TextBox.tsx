import React, { FC } from "react";
import { ImageBox } from "./ImageBox";

interface TextBoxProps {
  title: string;
  text: string;
}

const TextBox: FC<TextBoxProps> = ({ title, text }) => {
  return (
    <section
      className={`bg-dark_custom rounded-custom 
              grid gap-12 grid-cols-1 p-5 
              lg:grid-cols-[3fr_1fr]
              xl:grid-cols-[3fr_1fr]  
              xl:p-16
              `}
    >
      <div className=" flex flex-col">
        <h1 className="text-white font-outfit text-7xl mb-6 md:mb-12 sm:text-7xl md:text-7xl lg:text-8xl ">
          {title}
        </h1>

        <h2 className="text-white font-outfit font-normal text-3xl md:text-4xl">
          {text}
        </h2>
      </div>
      <ImageBox />
    </section>
  );
};

export default TextBox;
