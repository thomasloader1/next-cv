import React from "react";
import Image from "next/image";
import imageProfile from "../../public/profile.jpg";

export const ImageBox = (): JSX.Element => {
  return (
    <div className="flex items-center mr-2">
      <Image
        src={imageProfile}
        alt="Imagen de perfil"
        className="rounded-custom"
      />
    </div>
  );
};
