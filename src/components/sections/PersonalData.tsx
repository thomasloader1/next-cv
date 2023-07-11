import React from "react";
import { ImageBox } from "../ImageBox";
import { ContactBox } from "../ContactBox";
import TextBox from "../TextBox";

const PersonalData = () => {
  return (
    <section className="grid gap-4 grid-cols-[_1fr_2fr]">
      <ContactBox />
      <TextBox title={"Gomez Tomas Gonzalo"} text={"Full Stack Developer"} />
    </section>
  );
};

export default PersonalData;
