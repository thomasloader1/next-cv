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
    <div className="bg-white rounded-custom flex flex-col drop-shadow-lg">
      <div className="flex items-center  bg-gradient_orange rounded-card_work_pill">
        <h2 className="text-2xl bg-dark_custom flex-1 text-white p-4 rounded-card_work">
          {role} <span className="font-outfit">@</span> {company}
        </h2>

        <div className="text-center">
          {timeActivity.split("-").map((text, i) => (
            <p key={i} className="mx-3 text-white">
              {text}
            </p>
          ))}
        </div>
      </div>
      <div className="my-3 px-5 font-poppins font-normal text-md">
        {description}
      </div>
    </div>
  );
};

export default WorkCard;
