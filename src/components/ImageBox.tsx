import React from "react";
import Image from "next/image";
import imageProfile from "../../public/profile.jpg";

export const ImageBox = (): JSX.Element => {
  return (
    <div className="hidden lg:flex lg:justify-center lg:items-center">
      <Image
        src={imageProfile}
        alt="Imagen de perfil"
        className={` rounded-full mx-auto `}
      />
    </div>
  );
};
