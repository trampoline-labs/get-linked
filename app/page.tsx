import Hero from "@/components/hero";
import Introduction from "@/components/intro";
import TimeLine from "@/components/timeline";

export default function Home() {
  return (
    <main className="text-white">
      <Hero />

      <Introduction />

      <TimeLine />
    </main>
  );
}
