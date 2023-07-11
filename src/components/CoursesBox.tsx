import React, { FC } from "react";
import CourseList from "./CourseList";
import { EducationCourse } from "./sections/EducationExperience";

interface CoursesBoxProps {
  courses: EducationCourse[];
}

const CoursesBox: FC<CoursesBoxProps> = ({ courses }) => {
  return (
    <div className="bg-gradient_orange rounded-custom p-12 flex flex-col justify-between">
      <h2 className="font-outfit text-5xl font-outfit my-3 mb-12">
        Cursos Realizados
      </h2>
      <div className="flex-1 flex flex-col justify-around">
        <CourseList items={courses} />
      </div>
    </div>
  );
};

export default CoursesBox;
