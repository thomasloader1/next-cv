import React, { FC } from "react";

interface TextBoxProps {
  title: string;
  text: string;
}

const TextBox: FC<TextBoxProps> = ({ title, text }) => {
  return (
    <div className="bg-beta rounded-custom p-5 flex flex-col justify-center ">
      <h1 className="text-white font-outfit text-5xl mb-4 drop-shadow-md">
        {title}
      </h1>
      <h2 className="text-white font-poppins font-normal text-4xl drop-shadow-md">
        {text}
      </h2>
    </div>
  );
};

export default TextBox;
