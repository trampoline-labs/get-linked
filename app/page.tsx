import Hero from "@/components/hero";
import RulesAndGuideLines from "@/components/rules-and-guidelines";
import TimeLine from "@/components/timeline";

export default function Home() {
  return (
    <main className="text-white">
      <Hero />

      <RulesAndGuideLines />

      <TimeLine />
    </main>
  );
}
