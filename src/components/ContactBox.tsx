import Image from "next/image";
import React from "react";
import ghIcon from "../../public/icons/github.svg";
import liIcon from "../../public/icons/linkedin.svg";
import mailIcon from "../../public/icons/mail.svg";
import phoneIcon from "../../public/icons/phone.svg";
export const ContactBox = (): JSX.Element => {
  return (
    <div className="bg-orange_custom rounded-custom p-3 flex flex-col justify-between">
      <div className="flex items-center">
        <Image src={ghIcon} alt="GitHub" />
        <h3 className="ml-2">thomasloader1</h3>
      </div>

      <div className="flex items-center">
        <Image src={liIcon} alt="GitHub" />
        <h3 className="ml-2">gomeztomasgonzalo</h3>
      </div>

      <div className="flex items-center">
        <Image src={mailIcon} alt="GitHub" />
        <h3 className="ml-2">talk.gtg@gmail.com</h3>
      </div>

      <div className="flex items-center">
        <Image src={phoneIcon} alt="GitHub" />
        <h3 className="ml-2">+54 11 5501 1250</h3>
      </div>
    </div>
  );
};
