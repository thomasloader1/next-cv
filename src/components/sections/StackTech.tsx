import Image from "next/image";
import React from "react";

import pyIcon from "../../../public/icons/python.svg";
import nodeIcon from "../../../public/icons/nodejs.svg";
import twIcon from "../../../public/icons/tailwindcss.svg";
import htmlIcon from "../../../public/icons/html5.svg";
import sassIcon from "../../../public/icons/sass.svg";
import jsIcon from "../../../public/icons/javascript.svg";
import phpIcon from "../../../public/icons/php.svg";

import wpIcon from "../../../public/icons/wordpress.svg";
import laravelIcon from "../../../public/icons/laravel.svg";
import reactIcon from "../../../public/icons/react.svg";
import dockerIcon from "../../../public/icons/docker.svg";
import mysqlIcon from "../../../public/icons/mysql.svg";
import tsIcon from "../../../public/icons/typescript.svg";

const StackTech = () => {
  return (
    <section className="bg-beta p-14 rounded-custom text-white">
      <h2 className="font-outfit text-5xl mb-10 drop-shadow-md">
        Stack Tecnológico
      </h2>

      <div className="flex justify-evenly my-14 drop-shadow-md">
        <Image src={pyIcon} alt="Python" title="Python" />
        <Image src={nodeIcon} alt="Node.js" title="Node.js" />
        <Image src={twIcon} alt="" />
        <Image src={htmlIcon} alt="" />
        <Image src={sassIcon} alt="" />
        <Image src={jsIcon} alt="" />
        <Image src={phpIcon} alt="" />
      </div>
      <div className="flex justify-evenly my-5 drop-shadow-lg">
        <Image src={wpIcon} alt="" />
        <Image src={laravelIcon} alt="" />
        <Image src={reactIcon} alt="" />
        <Image src={dockerIcon} alt="" />
        <Image src={mysqlIcon} alt="" />
        <Image src={tsIcon} alt="" />
      </div>
    </section>
  );
};

export default StackTech;
