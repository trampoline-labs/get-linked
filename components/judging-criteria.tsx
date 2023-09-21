import Image from "next/image";
import peeps from "@/public/images/image-four.svg";
import { criteria } from "@/lib/data";
import Button from "./button";

export default function JudgingCriteria() {
  return (
    <section className="px-6 lg:px-32 py-12 border-b border-b-secondary-100 lg:grid grid-cols-2 lg:gap-20">
      <div className="lg:self-center">
        <Image src={peeps} alt="Two guys looking" />
      </div>

      <article className="text-center lg:text-left">
        <h1 className="font-clash-display font-bold text-xl lg:text-3-5xl mx-auto lg:mx-0 lg:leading-10">
          Judging Criteria <br />
          <span className="text-primary-200">Key attributes</span>
        </h1>

        <ul className="mt-6 flex flex-col gap-4">
          {criteria.map((rule) => {
            return (
              <Rule highlight={rule.highlight} desc={rule.desc} key={rule.id} />
            );
          })}
        </ul>

        <div className="mt-6 lg:mt-10">
          <Button label="Read more" className="px-8 py-3 text-sm" />
        </div>
      </article>
    </section>
  );
}

interface RuleProps {
  highlight: string;
  desc: string;
}

function Rule({ highlight, desc }: RuleProps) {
  return (
    <li>
      <p className="text-[0.75rem] lg:text-sm leading-6">
        <span className="text-primary-300 font-bold lg:text-base">
          {highlight}:
        </span>{" "}
        {desc}
      </p>
    </li>
  );
}
