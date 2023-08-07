"use client";
import React from "react";
import { motion } from "framer-motion";
import { ContactBox } from "../ContactBox";
import TextBox from "../TextBox";

const PersonalData = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`
              grid gap-4 grid-cols-1 grid-rows-[auto] my-auto font-outfit font-bold w-auto p-4

              md:grid-cols-[_300px_1fr]
              lg:grid-cols-[_400px_1fr]
              xl:grid-cols-[_400px_1fr] 
              
              `}
    >
      <ContactBox />
      <TextBox title={"Gomez Tomas Gonzalo"} text={"Full Stack Developer"} />
    </motion.section>
  );
};

export default PersonalData;
