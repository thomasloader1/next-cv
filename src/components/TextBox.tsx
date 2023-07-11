import React, { FC } from "react";

interface TextBoxProps {
  title: string;
  text: string;
}

const TextBox: FC<TextBoxProps> = ({ title, text }) => {
  return (
    <div className="bg-grey_custom rounded-custom p-3 flex flex-col ">
      <h1 className="text-white font-outfit text-4xl">{title}</h1>
      <h2 className="text-white font-poppins">{text}</h2>
    </div>
  );
};

export default TextBox;
