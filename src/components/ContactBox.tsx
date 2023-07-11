import Image from "next/image";
import React from "react";
import ghIcon from "../../public/icons/github.svg";
import liIcon from "../../public/icons/linkedin.svg";
import mailIcon from "../../public/icons/mail.svg";
import phoneIcon from "../../public/icons/phone.svg";
import { ImageBox } from "./ImageBox";
export const ContactBox = (): JSX.Element => {
  return (
    <div className="bg-gradient_orange rounded-custom p-4 gap-1 grid grid-cols-[_150px_50px_1fr] grid-rows-[150px]">
      <ImageBox />

      <div className="flex flex-col justify-around items-center">
        <Image src={ghIcon} alt="GitHub" />
        <Image src={liIcon} alt="GitHub" />
        <Image src={mailIcon} alt="GitHub" />
        <Image src={phoneIcon} alt="GitHub" />
      </div>

      <div className="flex flex-col justify-around ">
        <h3 className="ml-2">thomasloader1</h3>
        <h3 className="ml-2">gomeztomasgonzalo</h3>
        <h3 className="ml-2">talk.gtg@gmail.com</h3>
        <h3 className="ml-2">+54 11 5501 1250</h3>
      </div>
    </div>
  );
};
