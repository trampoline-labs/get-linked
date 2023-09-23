import Image from 'next/image';
import theBigIdea from '@/public/images/image-two.svg';
import { Star } from './icons';

export default function Introduction() {
  return (
    <section className="py-12 px-6 lg:px-32 grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 gap-8 lg:gap-14 relative">
      <>
        <Star
          className="top-10 left-8 lg:top-[30%] lg:left-28"
          color="pink"
        />
        <Star
          className="top-[50%] right-8 lg:top-[30%] lg:right-28"
          color="purple"
        />
      </>
      <div className="scale-90 relative before:content-[url('/icons/twirl.svg')] before:w-20 before:h-20 before:absolute before:-bottom-16 lg:before:-bottom-5 before:left-[7rem] lg:before:left-[29rem] before:scale-50 lg:before:scale-100">
        <Image
          src={theBigIdea}
          alt="The Bid Idea"
          className="w-full h-auto lg:object-scale-down"
        />
      </div>

      <article className="lg:self-center text-center lg:text-left flex flex-col gap-4">
        <h1 className="font-clash-display font-bold text-xl lg:text-3-5xl mx-auto lg:mx-0 lg:leading-10">
          Introduction to getlinked <br />
          <span className="text-primary-200">tech Hackathon 1.0</span>
        </h1>
        <p className="leading-7 text-sm">
          {`Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!`}
        </p>
      </article>
    </section>
  );
}
