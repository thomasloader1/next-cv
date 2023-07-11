import React from "react";
import Image from "next/image";
import imageProfile from "../../public/profile.png";

export const ImageBox = (): JSX.Element => {
  return (
    <div className="rectangulo-de-foto p-3">
      <Image src={imageProfile} alt="Imagen de perfil" />
    </div>
  );
};
