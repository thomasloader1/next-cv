import { SocialItems } from "@/data/Social";
import { getReactIconItem } from "@/lib/getReactIconItem";

import React, { FC } from "react";

const SocialItem: FC<SocialItems> = ({alt, title, link, source, value }) => {

  const mappingLink = source ? `${source}${value}` : link
  const openInTab = !!value ? "" : "_blank"

  return (
    <a href={mappingLink} target={openInTab} className="flex justify-start items-center p-2 rounded-lg hover:bg-white" title={alt}>
       {getReactIconItem(alt)}
      <p className="ml-4 hidden md:block">{title}</p>
    </a>
  );
};

export default SocialItem;
