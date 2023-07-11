import React, { FC } from "react";

interface SkillBoxProps {
  soft: string[];
  hard: string[];
}

const SkillBox: FC<SkillBoxProps> = ({ soft, hard }) => {
  return (
    <div className="bg-orange_custom rounded-custom p-3 flex flex-col ">
      <h2 className="text-white font-outfit text-2xl">Skills</h2>

      <h3>Soft</h3>
      <ul>
        {soft.map((s, i) => (
          <li key={`${i}_${s}`}>{s}</li>
        ))}
      </ul>

      <h3>Hard</h3>
      <ul>
        {hard.map((h, i) => (
          <li key={`${i}_${h}`}>{h}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillBox;
