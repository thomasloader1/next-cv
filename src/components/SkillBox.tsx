import React, { FC } from "react";
import ItemList from "./ItemList";
import { tech } from "@/data/WorkExperience";

interface SkillBoxProps {
  soft: string[];
  hard: string[];
}

const SkillBox: FC<SkillBoxProps> = ({ soft, hard }) => {
  return (
    <div className="bg-gradient_orange rounded-custom p-14 flex flex-col">
      <h2 className="font-outfit text-5xl font-outfit my-3 mb-12">Skills</h2>
      <div className="grid grid-cols-1  xl:grid-cols-1 xl:gap-16 place-items-start">
        <ItemList title="Soft" items={soft} />
        <ItemList title="Hard" items={hard} />
        <ItemList title="Tecnico" items={tech} />
      </div>
    </div>
  );
};

export default SkillBox;
