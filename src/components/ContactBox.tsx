import React from "react";
import SocialItem from "./SocialItem";
import { items } from "@/data/Social";
import {MdSimCardDownload} from 'react-icons/md'

export const ContactBox = (): JSX.Element => {
  return (
    <header className="container mx-auto relative h-24 flex items-center justify-center">
    <nav
      className={`
          bg-gradient_orange rounded-custom p-4 font-poppins 
          fixed w-full max-w-[1000px] z-10
          flex flex-wrap items-center justify-around shadow-lg
          `}
    >
      {/* <MdSimCardDownload size={30} className="hover:bg-white rounded-lg" /> */}
      {items.map((item, i) => (
        <SocialItem key={i} {...item} />
      ))}
    </nav>
    </header>
  );
};
