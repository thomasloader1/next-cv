import { IconName } from "@/types";

export const soft = [
    "Comunicacion y escucha activa",
    "Flexibilidad",
    "Orienteacion a resultados",
    "Planificacion y gestion de tiempo",
  ];
export const hard = [
    "Programación Web",
    "Diseño Grafico",
    "Herramientas de monitoreo",
    "Depurar aplicaciones de manera efectiva",
    "Experiencia en el diseño y desarrollo de APIs RESTful",
  ];

  export const tech = [
    "Desarrollo Integral",
    "Dominio en Front-end y Back-end avanzado",
    "Gestión de Datos Avanzada",
    "Optimización Estratégica para Rendimiento",
    "Colaboración y Control de Versiones Efectivo",
  ];

 export interface WorkCardProps {
    role: string;
    company: {
      name: string;
      web: string;
    };
    timeActivity: string;
    description: string;
    stack: string[];
  }

  export const workExperiencie = [
    {
      role: "Team Lead",
      company: {
        name:"Océano Medicina",
        web:"https://oceanomedicina.com/"
      },
      timeActivity: "Octubre 2022 - Actual",
      description:
        "Desarrollo y monitoreo de aplicaciones, servicios, plataforma de pagos y automatizaciones en CRM’s y comunicacion entre otras areas teniendo equipo a cargo internos y externos",
        stack: ['PHP', 'Wordpress', 'MySQL', 'SQLite' , 'Laravel', 'Docker', 'Linux', 'ReactJS', 'TypeScript', 'JavaScript', 'Tailwind', 'Bulma', 'Bootstrap', 'jQuery']
    },
    {
      role: "Full Stack Developer",
      company:{
        name:"Anteojos Negros",
        web: "https://www.anteojosnegros.com/"
      },
      timeActivity: "Marzo 2021 - Enero 2022",
      description:
        "Desarrollo integro de e-commerce’s, Landing Pages y Single Page Applications",
        stack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'jQuery']

    },
    {
      role: "Analista de Aplicaciones N2",
      company: {
        name:"Frávega",
      web:"https://www.fravega.com/"
    },
      timeActivity: "Marzo 2020 - Sept. 2019",
      description:
        "Elaboracion de tareas automatizadas, monitoreo de aplicativos y despliegues programados",
        stack: ['PHP', 'Bash', 'JavaScript', 'Bootstrap', 'jQuery', 'MySQL']

    },
    {
      role: "Web Developer",
      company: {
        name:"Aufiero Informática",
        web: "https://www.aufieroinformatica.com/"
      },
      timeActivity: "Sep. 2019 - Marzo 2020",
      description: "Desarrollo de paginas estaticas y dinamicas",
      stack: ['JavaScript', 'Bootstrap', 'jQuery', 'Wordpress']

    },
  ];