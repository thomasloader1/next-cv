import HorizontalPaginator from "@/components/HorinzontalPaginator";
import PersonalData from "@/components/sections/PersonalData";
import WorkingExperience from "@/components/sections/WorkingExperience";
import AnimatedBackground from "@/components/animate/Background";

const slides = [
  <PersonalData key={1} />,
  <WorkingExperience key={2} />,
  <div key={3}>Slide 3</div>,
  // Agrega más diapositivas según tus necesidades
];

export default function Home() {
  return (
    <main className="container mx-auto grid grid-col-1">
      {/* <HorizontalPaginator slides={slides} /> */}
      <PersonalData />
      <WorkingExperience />
      <AnimatedBackground />
    </main>
  );
}
