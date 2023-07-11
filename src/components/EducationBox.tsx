import React from "react";
import EducationCard from "./EducationCard";

const educationExperiencie = [
  {
    role: "Tecnico en Desarrollo de Apps Web",
    company: "UNLaM",
    timeActivity: "Enero 2017 - Actualidad",
    source: "",
    items: [
      "Habilidad para resolver problemas utilizando tecnologías acordes con las tendencias internacionales y adecuadas al medio local",
      "Conocimientos teóricos y prácticos para el diseño, configuración y mantenimiento de aplicaciones Web",
      "Idoneidad para aplicar atributos de seguridad, calidad y accesibilidad a los desarrollos realizados",
      "Practicas llevadas con Java 8 / 11 con SpringBoot y JUnit 3",
      "Capacidad para la interacción grupal",
    ],
  },
  {
    role: "Bachiller",
    company: "E.E.M Nº 19",
    timeActivity: "Enero 2007 - Diciembre 2013",
  },
];

export const EducationBox = (): JSX.Element => {
  return (
    <div className="bg-beta rounded-custom p-14 flex flex-col gap-5">
      <h2 className="text-white text-5xl my-5 drop-shadow-md">
        Formación profesional
      </h2>
      {educationExperiencie.map((ee, i) => (
        <EducationCard key={i} {...ee} />
      ))}
    </div>
  );
};
