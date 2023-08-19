import React from "react";
import WorkCard from "./WorkCard";
import { workExperiencie } from "@/data/WorkExperience";

export const WorkBox = (): JSX.Element => {
  return (
    <div className="bg-beta rounded-custom p-5 md:p-14 flex flex-col gap-7">
      <h2 className="text-white text-5xl my-5 drop-shadow-md">
        Experiencia Laboral
      </h2>
      {workExperiencie.map((we, i) => (
        <WorkCard key={i} {...we} />
      ))}
    </div>
  );
};
