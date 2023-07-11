import React, { FC } from "react";

interface WorkCardProps {
  role: string;
  company: string;
  timeActivity: string;
  description: string;
}

const WorkCard: FC<WorkCardProps> = ({
  role,
  company,
  timeActivity,
  description,
}) => {
  return (
    <div className="bg-white rounded-custom flex flex-col">
      <div className="flex items-center  bg-orange_custom rounded-card_work_pill">
        <div className="bg-dark_custom flex-1 text-white p-4 rounded-card_work">
          {role} <span>@</span> {company}
        </div>

        <div className="text-center">
          {timeActivity.split("-").map((text, i) => (
            <p key={i} className="mx-3 text-white">
              {text}
            </p>
          ))}
        </div>
      </div>
      <div className="my-3 px-3 font-poppins font-normal">{description}</div>
    </div>
  );
};

export default WorkCard;
