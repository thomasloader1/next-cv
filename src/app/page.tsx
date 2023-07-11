import EducationExperience from "@/components/sections/EducationExperience";
import PersonalData from "@/components/sections/PersonalData";
import StackTech from "@/components/sections/StackTech";
import WorkingExperience from "@/components/sections/WorkingExperience";

export default function Home() {
  return (
    <main className="container mx-auto p-4 grid gap-4">
      <PersonalData />
      <WorkingExperience />
      <StackTech />
      <EducationExperience />
    </main>
  );
}
