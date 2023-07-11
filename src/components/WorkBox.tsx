import React from "react";
import WorkCard from "./WorkCard";

const workExperiencie = [
  {
    role: "Team Lead",
    company: "Océano Medicina",
    timeActivity: "Octubre 2022 - Actual",
    description:
      "Desarrollo y monitoreo de aplicaciones, servicios, plataforma de pagos y automatizaciones en CRM’s y comunicacion entre otras areas teniendo equipo a cargo internos y externos",
  },
  {
    role: "Full Stack Developer",
    company: "Anteojos Negros",
    timeActivity: "Marzo 2021 - Enero 2022",
    description:
      "Desarrollo integro de e-commerce’s, Landing Pages y Single Page Applications",
  },
  {
    role: "Analista de Aplicaciones N2",
    company: "Frávega",
    timeActivity: "Marzo 2020 - Sept. 2019",
    description:
      "Elaboracion de tareas automatizadas, monitoreo de aplicativos y despliegues programados",
  },
  {
    role: "Web Developer",
    company: "Aufiero Informática",
    timeActivity: "Sep. 2019 - Marzo 2020",
    description: "Desarrollo de paginas estaticas y dinamicas",
  },
];

export const WorkBox = (): JSX.Element => {
  return (
    <div className="bg-grey_custom rounded-custom p-3 flex flex-col gap-5">
      <h2 className="text-white text-5xl my-5">Experiencia Laboral</h2>
      {workExperiencie.map((we, i) => (
        <WorkCard key={i} {...we} />
      ))}
    </div>
  );
};
