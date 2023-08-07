import React from "react";
import Image from "next/image";
import imageProfile from "../../public/profile.jpg";

export const ImageBox = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={imageProfile}
        alt="Imagen de perfil"
        className={`rounded-full 
        h-32 w-32
        `}
      />
    </div>
  );
};
