"use client";
import React from "react";
import { ContactBox } from "../ContactBox";
import TextBox from "../TextBox";

const personData = {
  title: "Gomez Tomas Gonzalo",
  text: "Full Stack Developer"
}

const PersonalData = () => {
  return (
    <section
      className={`
              grid gap-4 grid-cols-1 grid-rows-[auto] my-auto w-auto p-4
              animate-fade-down
              `}
    >
      
      <TextBox {...personData} />
    </section>
  );
};

export default PersonalData;
