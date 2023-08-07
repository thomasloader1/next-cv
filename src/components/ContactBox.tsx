import React from "react";
import ghIcon from "../../public/icons/github.svg";
import liIcon from "../../public/icons/linkedin.svg";
import mailIcon from "../../public/icons/mail.svg";
import phoneIcon from "../../public/icons/phone.svg";
import SocialItem from "./SocialItem";

const items: Array<{ src: string; alt: string; title: string }> = [
  {
    src: ghIcon,
    alt: "GitHub",
    title: "thomasloader1",
  },
  {
    src: liIcon,
    alt: "LinkedIn",
    title: "gomeztomasgonzalo",
  },
  {
    src: mailIcon,
    alt: "E-Mail",
    title: "talk.gtg@gmail.com",
  },
  {
    src: phoneIcon,
    alt: "Telefono",
    title: "+54 11 5501 1250",
  },
];

export const ContactBox = (): JSX.Element => {
  return (
    <div
      className={`
          bg-gradient_orange rounded-custom p-4 font-poppins font-normal
          
          gap-5 grid grid-cols-1 
          
          lg:grid-rows-auto 
          lg:text-2xl 
          `}
    >
      {items.map((item, i) => (
        <SocialItem key={i} {...item} />
      ))}
    </div>
  );
};
