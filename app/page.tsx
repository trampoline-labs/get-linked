import Hero from "@/components/hero";
import Introduction from "@/components/intro";
import RulesAndGuideLines from "@/components/rules-and-guidelines";
import JudgingCriteria from "@/components/judging-criteria";
import FAQ from "@/components/faqs";
import TimeLine from "@/components/timeline";
import Prizes from "@/components/prizes";
import Partners from "@/components/partners";

export default function Home() {
  return (
    <main className="text-white">
      <Hero />

      <Introduction />

      <RulesAndGuideLines />

      <JudgingCriteria />

      <FAQ />

      <TimeLine />

      <Prizes />

      <Partners />
    </main>
  );
}
