export interface SocialItems{
    alt: string; 
    title: string;
    link?: string;
    source?: string;
    value?: string;
}

export const items: Array<SocialItems> = [
  {
    alt: "GitHub",
    title: "thomasloader1",
    link: "https://github.com/thomasloader1"
  },
  {
    alt: "LinkedIn",
    title: "gomeztomasgonzalo",
    link: "https://www.linkedin.com/in/gomeztomasgonzalo/"

  },
  {
    alt: "E-Mail",
    title: "talk.gtg@gmail.com",
    source:"mailto:",
    value: "talk.gtg@gmail.com",
  },
  {
    alt: "Telefono",
    title: "+54 11 5501 1250",
    source: "tel:",
    value: "1155011250",
  },
];

