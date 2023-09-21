import Hero from "@/components/hero";
import Introduction from "@/components/intro";
import RulesAndGuideLines from "@/components/rules-and-guidelines";
import JudgingCriteria from "@/components/judging-criteria";
import TimeLine from "@/components/timeline";

export default function Home() {
  return (
    <main className="text-white">
      <Hero />

      <Introduction />

      <RulesAndGuideLines />

      <JudgingCriteria />

      <TimeLine />
    </main>
  );
}
