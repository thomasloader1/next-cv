import ghIcon from "../../public/icons/github.svg";
import liIcon from "../../public/icons/linkedin.svg";
import mailIcon from "../../public/icons/mail.svg";
import phoneIcon from "../../public/icons/phone.svg";

export interface SocialItems{
    src: string; 
    alt: string; 
    title: string;
    link?: string;
    source?: string;
    value?: string;
}

export const items: Array<SocialItems> = [
  {
    src: ghIcon,
    alt: "GitHub",
    title: "thomasloader1",
    link: "https://github.com/thomasloader1"
  },
  {
    src: liIcon,
    alt: "LinkedIn",
    title: "gomeztomasgonzalo",
    link: "https://www.linkedin.com/in/gomeztomasgonzalo/"

  },
  {
    src: mailIcon,
    alt: "E-Mail",
    title: "talk.gtg@gmail.com",
    source:"mailto:",
    value: "talk.gtg@gmail.com",
  },
  {
    src: phoneIcon,
    alt: "Telefono",
    title: "+54 11 5501 1250",
    source: "tel:",
    value: "1155011250",
  },
];