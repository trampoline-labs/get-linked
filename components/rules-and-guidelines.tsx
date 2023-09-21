import Image from "next/image";
import rulesAndGuidelines from "@/public/images/image-three.svg";
import ellipse from "@/public/icons/ellipse.svg";

export default function RulesAndGuideLines() {
  return (
    <section className="px-6 lg:px-32 py-12 border-b border-b-secondary-100 flex flex-col lg:flex-row-reverse lg:items-center lg:gap-14">
      <div className="shrink-0 w-fit max-w-xl relative">
        <span className="absolute hidden lg:block right-24 top-24 z-0">
          <Image src={ellipse} alt="Ellipse" />
        </span>
        <Image
          src={rulesAndGuidelines}
          alt="Rules and Guidelines"
          className="w-full h-auto z-30 relative"
        />
      </div>

      <article className="text-center lg:text-left lg:flex lg:flex-col lg:gap-4">
        <h1 className="font-clash-display font-bold text-xl lg:text-3-5xl w-1/2 mx-auto lg:mx-0 lg:leading-10">
          Rules and <span className="text-primary-200">Guidelines</span>
        </h1>

        <p className="leading-7 text-sm">
          {`Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!`}
        </p>
      </article>
    </section>
  );
}
