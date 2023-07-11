import React, { FC } from "react";
import ItemList from "./ItemList";

interface SkillBoxProps {
  soft: string[];
  hard: string[];
}

const SkillBox: FC<SkillBoxProps> = ({ soft, hard }) => {
  return (
    <div className="bg-gradient_orange rounded-custom p-14 flex flex-col justify-between">
      <h2 className="font-outfit text-5xl font-outfit my-3 mb-12">Skills</h2>
      <div className="flex-1  flex flex-col justify-between">
        <ItemList title="Soft" items={soft} />
        <ItemList title="Hard" items={hard} />
      </div>
    </div>
  );
};

export default SkillBox;
