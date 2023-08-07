import Image from "next/image";
import React, { FC } from "react";

interface SocialItemProps {
  src: string;
  alt: string;
  title: string;
}

const SocialItem: FC<SocialItemProps> = ({ src, alt, title }) => {
  return (
    <div className="flex justify-start items-center">
      <Image src={src} alt={alt} className="" />
      <p className="ml-4">{title}</p>
    </div>
  );
};

export default SocialItem;
