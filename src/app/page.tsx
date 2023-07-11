import PersonalData from "@/components/sections/PersonalData";
import WorkingExperience from "@/components/sections/WorkingExperience";

export default function Home() {
  return (
    <main className="p-4 grid gap-4">
      <PersonalData />
      <WorkingExperience />
    </main>
  );
}
