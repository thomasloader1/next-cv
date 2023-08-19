import React from "react";
import SkillBox from "../SkillBox";
import { WorkBox } from "../WorkBox";
import { soft, hard } from "@/data/WorkExperience";

const WorkingExperience = () => {
  return (
    <section className="grid gap-4 grid-cols-1 xl:grid-cols-[_2fr_1fr] px-4 animate-fade-down animate-once animate-delay-500">
      <WorkBox />
      <SkillBox soft={soft} hard={hard} />
    </section>
  );
};

export default WorkingExperience;
