import React, { FC } from "react";
import { EducationCourse } from "./sections/EducationExperience";

interface CourseListProps {
  items: Array<EducationCourse>;
}

const CourseList: FC<CourseListProps> = ({ items }) => {
  return items.map((course, i) => (
    <h2 key={`${i}_${course.name}`} className="text-2xl mb-5">
      {course.name} @ {course.company}
    </h2>
  ));
};

export default CourseList;
