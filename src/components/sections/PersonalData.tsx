import React from "react";
import { ImageBox } from "../ImageBox";
import { ContactBox } from "../ContactBox";
import TextBox from "../TextBox";

const PersonalData = () => {
  return (
    <section className="grid gap-5 grid-cols-[200px_250px_minmax(300px,_1fr)]">
      <ImageBox />
      <ContactBox />
      <TextBox title={"Gomez Tomas Gonzalo"} text={"Full Stack Developer"} />
    </section>
  );
};

export default PersonalData;
