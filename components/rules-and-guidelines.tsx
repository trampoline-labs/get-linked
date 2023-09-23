import Image from "next/image";
import rulesAndGuidelines from "@/public/images/image-three.svg";
import ellipse from "@/public/icons/ellipse.svg";
import HeadText from "./head-text";
import { Star } from "./icons";
import SlideIn from "./animate";

export default function RulesAndGuideLines() {
  return (
    <section className="lg:px-32 flex flex-col lg:flex-row-reverse lg:items-center lg:gap-14 relative">
      <>
        <Star className="left-10 top-[35%]" color="gray" />
        <Star
          className="right-9 top-[45%] lg:top-10 lg:right-[90%]"
          color="purple"
        />
        <Star
          className="bottom-4 left-20 lg:left-[50%] lg:bottom-28"
          color="white"
        />
      </>
      <div className="shrink-0 w-fit max-w-xl relative">
        <span className="absolute hidden lg:block right-24 top-24 z-0">
          <Image src={ellipse} alt="Ellipse" />
        </span>
        <Image
          src={rulesAndGuidelines}
          alt="Rules and Guidelines"
          className="z-30 relative"
        />
      </div>

      <SlideIn fromDirection="left">
        <HeadText label="Rules and " highlight="Guidelines">
          <p className="leading-7 text-sm">{`Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!`}</p>
        </HeadText>
      </SlideIn>
    </section>
  );
}
