import HeadText from './head-text';
import Image from 'next/image';
import medal from '@/public/images/image-six.svg';
import { prizes } from '@/lib/data';
import { Star } from './icons';

export default function Prizes() {
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
      <div className="row-span-full col-span-full px-6 flex flex-col lg:grid grid-rows-2 grid-cols-2 gap-10 relative py-14">
        <>
          <Star
            className="left-9 lg:left-32 lg:top-32"
            color="pink"
          />
          <Star
            className="right-20 top-[10%] lg:right-[40%]"
            color="pink"
          />
          <Star
            className="top-[50%]"
            color="white"
          />
          <Star
            className="right-9 top-[60%] lg:right-[50%] lg:top-[40%]"
            color="white"
          />
          <Star
            className="bottom-4 right-20"
            color="gray"
          />
        </>
        <div className="lg:col-start-2 lg:justify-self-center lg:self-center">
          <HeadText
            label="Prizes and "
            highlight="Rewards"
          >
            <p className="leading-7 text-xs lg:text-sm lg:w-11/12">
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </HeadText>
        </div>

        <div className="lg:row-start-1 lg:row-end-3 lg:self-center">
          <Image
            src={medal}
            alt="The Big Prize"
          />
        </div>

        <div className="grid grid-cols-3 gap-4 lg:gap-8 pt-20 lg:-ml-16 lg:justify-self-start lg:w-[97%]">
          {prizes.map((item) => {
            return (
              <Prize
                image={item.img}
                placement={item.placement}
                prize={item.prize}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface PrizeProps {
  image: string;
  placement: string;
  prize: number;
}

function Prize({ image, placement, prize }: PrizeProps) {
  return (
    <div className="pb-6 lg:pb-8 lg:px-3 bg-background-300 border border-primary-200 even:bg-background-400 even:border-primary-400 rounded-lg group self-start w-fit">
      <div className="relative -top-14 lg:-top-28 group-even:scale-150">
        <Image
          src={image}
          alt={placement}
          className="w-full h-auto"
        />
      </div>

      <div className="text-center flex flex-col gap-1 lg:gap-3 -mt-8 lg:-mt-20 group-even:-mt-4 lg:group-even:-mt-10 ">
        <h1 className="text-xs px-6 font-semibold lg:font-bold lg:text-4xl even:lg:text-[2.5rem] lg:leading-7">
          {placement}{' '}
          <span className="capitalize lg:text-2xl lg:font-semibold">
            runner
          </span>
        </h1>
        <p className="text-primary-200 group-even:text-primary-400 text-sm font-bold lg:text-3-5xl">
          {`N${prize.toLocaleString('en-us')}`}
        </p>
      </div>
    </div>
  );
}
