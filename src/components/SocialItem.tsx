import { SocialItems } from "@/data/Social";
import Image from "next/image";
import React, { FC } from "react";

const SocialItem: FC<SocialItems> = ({ src, alt, title, link, source, value }) => {

  const mappingLink = source ? `${source}${value}` : link
  const openInTab = !!value ? "" : "_blank"

  return (
    <a href={mappingLink} target={openInTab} className="flex justify-start items-center p-2 rounded-lg hover:bg-white">
      <Image src={src} alt={alt} title={alt} />
      <p className="ml-4 hidden md:block">{title}</p>
    </a>
  );
};

export default SocialItem;
