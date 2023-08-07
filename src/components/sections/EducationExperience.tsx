import React from "react";
import { EducationBox } from "../EducationBox";
import CoursesBox from "../CoursesBox";

export interface EducationCourse {
  name: string;
  company: string;
}

const EducationExperience = () => {
  const courses: EducationCourse[] = [
    {
      name: "Master en Javascript",
      company: "Udemy",
    },
    {
      name: "React Avanzado",
      company: "LinkedIn",
    },
    {
      name: "PHP MVC Laravel",
      company: "EducacionIT",
    },
    {
      name: "Curso de React.JS",
      company: "EducacionIT",
    },
  ];

  return (
    <section className="grid grid-cols-1 xl:grid-cols-[_1fr_2fr] gap-5">
      <CoursesBox courses={courses} />
      <EducationBox />
    </section>
  );
};

export default EducationExperience;
