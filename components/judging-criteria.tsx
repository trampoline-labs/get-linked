import Image from "next/image";
import { criteria } from "@/lib/data";
import Button from "./button";
import peeps from "@/public/images/image-four.svg";
import ellipse from "@/public/icons/ellipse.svg";
import { Star } from "./icons";

export default function JudgingCriteria() {
  return (
    <section className="lg:px-32 lg:grid grid-cols-2 lg:gap-20 lg:py-28 relative">
      <>
        <Star
          className="top-2 left-[40%] lg:top-24 lg:left-[30%]"
          color="purple"
        />
        <Star className="top-[20%] left-[55%] lg:left-[45%]" color="white" />
        <Star
          className="bottom-8 right-10 lg:bottom-[20%] lg:right-[65%]"
          color="white"
        />
      </>
      <div className="lg:self-center relative">
        <span className="absolute hidden lg:block left-14 -top-14 z-0">
          <Image src={ellipse} alt="Ellipse" />
        </span>
        <Image src={peeps} alt="Two guys looking" className="relative z-30" />
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
      <p className="text-xs lg:text-sm leading-6">
        <span className="text-primary-300 font-bold lg:text-base">
          {highlight}:
        </span>{" "}
        {desc}
      </p>
    </li>
  );
}
