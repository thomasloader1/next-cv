import React, { FC } from "react";
import ItemList from "./ItemList";

interface EducationCardProps {
  role: string;
  company: string;
  timeActivity: string;
  items?: string[];
  source?: string;
}

const EducationCard: FC<EducationCardProps> = ({
  role,
  company,
  timeActivity,
  items = [],
  source,
}) => {
  const hasItems = items.length > 0;
  const componentCondition = {
    bodyClass: !hasItems
      ? `bg-transparent rounded-custom flex flex-col drop-shadow-lg`
      : `bg-white rounded-custom flex flex-col drop-shadow-lg`,
  };
  return (
    <div className={componentCondition.bodyClass}>
      <div
        className={`flex items-center  bg-gradient_orange ${
          hasItems ? "rounded-card_education" : "rounded-custom"
        } `}
      >
        <h3 className=" text-xl flex-1 text-white ml-4">
          {role} <span>@</span> {company}
        </h3>

        <div
          className={`text-center bg-dark_custom ${
            hasItems ? "rounded-card_education_pill" : "rounded-custom"
          }  p-1`}
        >
          {timeActivity.split("-").map((text, i) => (
            <p key={i} className="mx-3 text-white">
              {text}
            </p>
          ))}
        </div>
      </div>
      {hasItems && (
        <div className="my-3 px-3 font-poppins font-normal">
          <ItemList
            items={items}
            title={"Programa de la carrera"}
            entityName={company}
          />
        </div>
      )}
    </div>
  );
};

export default EducationCard;
