import React from "react";
import SkillBox from "../SkillBox";
import { WorkBox } from "../WorkBox";

const soft = [
  "Comunicacion y escucha activa",
  "Flexibilidad",
  "Orienteacion a resultados",
  "Planificacion y gestion de tiempo",
];
const hard = [
  "Programación Web",
  "Diseño Grafico",
  "Herramientas de monitoreo",
  "Depurar aplicaciones de manera efectiva",
  "Experiencia en el diseño y desarrollo de APIs RESTful",
];

const WorkingExperience = () => {
  return (
    <section className="grid gap-4 grid-cols-1 xl:grid-cols-[_2fr_1fr] animate-fade-down animate-once animate-delay-1000">
      <WorkBox />
      <SkillBox soft={soft} hard={hard} />
    </section>
  );
};

export default WorkingExperience;
