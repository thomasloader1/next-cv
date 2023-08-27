import { getReactIconItem } from "@/lib/getReactIconItem";
import Link from "next/link";
import React, { FC } from "react";

interface WorkCardProps {
  role: string;
  company: {
    name: string;
    web: string;
  };
  timeActivity: string;
  description: string;
  stack: string[];
}

const WorkCard: FC<WorkCardProps> = ({
  role,
  company,
  timeActivity,
  description,
  stack
}) => {

  const renderStack = (items: string[]) => {
    const stackElementClasses = "ml-2 my-1 px-3 py-2 bg-dark_custom font-poppins font-normal text-sm rounded-lg"
    return items.map((s: string, i: number) => (<span key={`${s}_${i}`} className={stackElementClasses} title={s}>{getReactIconItem(s,{color:'white', size:25})}</span>))
  } 

  return (
    <div className="bg-white rounded-custom flex flex-col drop-shadow-lg">
      <div className="flex items-center  bg-gradient_orange rounded-card_work_pill">
        <h2 className="text-2xl font-outfit bg-dark_custom flex-1 text-white p-4 rounded-card_work">
          <span>{role}</span> 
          <span className="font-outfit text-orange_custom mx-1">@</span> 
          <Link href={company.web} target="_blank">{company.name}</Link>
        </h2>

        <div className="text-center">
          {timeActivity.split("-").map((text, i) => (
            <p key={i} className="mx-3 text-white">
              {text}
            </p>
          ))}
        </div>
      </div>
      <div className="my-5 px-5 font-poppins font-normal text-md">
        {description}
      </div>
      <div className="px-3 mb-4 flex flex-wrap text-white ">
       {renderStack(stack)}
      </div>
    </div>
  );
};

export default WorkCard;
