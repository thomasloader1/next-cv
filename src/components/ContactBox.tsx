import React from "react";
import SocialItem from "./SocialItem";
import { items } from "@/data/Social";

export const ContactBox = (): JSX.Element => {
  return (
    <div
      className={`
          bg-gradient_orange rounded-custom p-4 font-poppins 
          flex flex-wrap items-center justify-around
          `}
    >
      {items.map((item, i) => (
        <SocialItem key={i} {...item} />
      ))}
    </div>
  );
};
