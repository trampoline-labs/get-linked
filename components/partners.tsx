import Image from 'next/image';
import partners from '../public/images/partners-and-sponsors.png';

export default function Partners() {
  return (
    <section className="grid relative z-10">
      <div className="row-span-full col-span-full grid md:grid-cols-2">
        <div className="bg-background-100 bg-[url('../public/images/flare-two.png')] bg-blend-hard-light bg-contain bg-no-repeat bg-[0_-7rem]">
          &nbsp;
        </div>
        <div className="bg-background-100 bg-[url('../public/images/flare-two.png')] bg-blend-hard-light bg-no-repeat bg-[10rem_10rem] md:bg-cover">
          &nbsp;
        </div>
      </div>

      <div className="row-span-full col-span-full px-6 flex flex-col gap-10 lg:gap-14 py-20">
        <div className="flex flex-col gap-4 lg:gap-6 lg:w-1/3 lg:mx-auto">
          <h1 className="font-clash-display text-xl lg:text-3-5xl font-bold capitalize text-center">
            Partners and Sponsors
          </h1>
          <p className="text-center text-xs lg:text-sm">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>

        <div className="border border-primary-200 rounded-lg relative p-4 lg:w-[80%] lg:h-[380px] lg:mx-auto lg:py-10">
          <Image
            src={partners}
            alt="partners and sponsors"
            quality={100}
            className="w-full h-full object-scale-down"
          />
        </div>
      </div>
    </section>
  );
}
