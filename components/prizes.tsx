import HeadText from "./head-text";
import Image from "next/image";
import medal from "@/public/images/image-six.svg";
import { prizes } from "@/lib/data";

export default function Prizes() {
  return (
    <section className="flex flex-col gap-10">
      <HeadText label="Prizes and " highlight="Rewards">
        <p className="leading-7 text-[0.75rem]  lg:text-sm">
          Highlight of the prizes or rewards for winners and for participants.
        </p>
      </HeadText>

      <div>
        <Image src={medal} alt="The Big Prize" />
      </div>

      <div className="grid grid-cols-3 gap-4 pt-20">
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
    <div className="pb-6 bg-background-300 border border-primary-200 even:bg-background-400 even:border-primary-400 rounded-lg group self-start">
      <div className="relative -top-14 group-even:scale-150">
        <Image src={image} alt={placement} className="w-full h-auto" />
      </div>

      <div className="text-center flex flex-col gap-1 -mt-8 group-even:-mt-4">
        <h1 className="text-xs px-6 font-semibold">{placement}</h1>
        <p className="text-primary-200 group-even:text-primary-400 text-sm font-bold">
          {`N${prize.toLocaleString("en-us")}`}
        </p>
      </div>
    </div>
  );
}
