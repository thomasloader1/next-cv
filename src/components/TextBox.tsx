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
              grid gap-12 grid-cols-1 items-center p-5 
              xl:grid-cols-[auto_1fr]  xl:p-16
              `}
    >
      <div className=" flex flex-col justify-center ">
        <h1 className="text-white font-outfit text-4xl mb-6 md:mb-12 sm:text-7xl md:text-7xl lg:text-8xl ">
          {title}
        </h1>

        <h2 className="text-white font-poppins font-normal text-2xl md:text-4xl">
          {text}
        </h2>
      </div>
    </section>
  );
};

export default TextBox;
