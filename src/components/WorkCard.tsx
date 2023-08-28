'use client'
import { WorkCardProps } from "@/data/WorkExperience";
import { getReactIconItem } from "@/lib/getReactIconItem";
import { IconName } from "@/types";
import Link from "next/link";
import React, { FC, useState, useEffect } from "react";

const WorkCard: FC<WorkCardProps> = ({
  role,
  company,
  timeActivity,
  description,
  stack
}) => {

  const renderStack = (items: IconName[]) => {
    const stackElementClasses = "ml-2 my-1 px-3 py-2 bg-dark_custom font-poppins font-normal text-sm rounded-lg animate-fade-right"
    const iconOptions = {color:'white', size:25, hideText: false};
    const allIcons = items.map((s: IconName, i: number) => (
      <span key={`${s}_${i}`} className={stackElementClasses} title={s}>
        { getReactIconItem(s, iconOptions) }
      </span>
      ));
    
    return allIcons;
  } 
  const [iconsLength, setIconsLength] = useState<number>(4)
  const [iconsExpand, setIconsExpand] = useState<boolean>(false)
  const [icons, setIcons] = useState(renderStack(stack).filter((v,i) => i < iconsLength))

  const handleResetStack = () => {
    setIconsExpand(false)
    setIcons(renderStack(stack).filter((v,i) => i < 4))
  }

  const handleExpandStack = (length: number) => {
    if(!iconsExpand){
      setIconsExpand(prevState => !prevState)
      setIcons(renderStack(stack).filter((v,i) => i < length))
    }else{
      handleResetStack()
    }
  }

  useEffect(() => {
    
    setIcons(renderStack(stack).filter((v,i) => i < iconsLength))
  
    return () => {
      handleResetStack()
    }
  }, [iconsLength])
  

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
       {icons}
       {stack.length > 4 && (
       <button 
        onClick={() =>{ handleExpandStack(stack.length)}} 
        className=" ml-2 my-1 px-4 py-2 bg-orange_custom text-dark_custom font-poppins font-bold  rounded-lg"
        >
        {!iconsExpand ? '+' : '-'}
        </button>
       )}
      </div>
    </div>
  );
};

export default WorkCard;
