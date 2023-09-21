import Image from "next/image";
import Button from "../button";
import matrix from "@/public/images/image-one.png";
import chainIcon from "@/public/icons/chain.svg";
import blastIcon from "@/public/icons/blast.svg";
import { ScribbleIcon } from "../icons";

export default function Hero() {
  return (
    <header className="px-6 lg:px-14 py-8 bg-[url('/images/flare-two.png')] bg-center bg-cover lg:bg-no-repeat">
      <p className="italic font-bold text-base">
        Igniting a Revolution in{" "}
        <span className="relative">
          HR Innovation{" "}
          <span className="absolute block right-0">
            <ScribbleIcon />
          </span>
        </span>
      </p>

      <article className="mt-14 grid grid-rows-2 gap-10">
        <div>
          <div className="text-center font-clash-display text-3-5xl font-bold leading-10">
            <h1 className="relative">
              getlinked Te
              <span className="relative">
                c
                <span className="block absolute bottom-7 -right-1 w-5 lg:w-10">
                  <Image
                    src="/icons/bulb.svg"
                    width={10}
                    height={10}
                    className="w-full h-auto"
                    alt="creative"
                  />
                </span>
              </span>
              h{" "}
            </h1>
            <h2 className="">
              Hackathon <span className="text-primary-200">1.0</span>{" "}
              <span>
                <Image
                  src={chainIcon}
                  alt="chain-icon"
                  className="w-[2rem] h-[2rem] inline"
                />
              </span>
              <span>
                <Image
                  src={blastIcon}
                  alt="chain-icon"
                  className="w-[2rem] h-[2rem] inline"
                />
              </span>
            </h2>
          </div>

          <p className="text-sm text-center w-11/12 mx-auto my-3">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>

          <div className="w-fit mx-auto mt-8">
            <Button label="register" />
          </div>

          <div className="flex gap-5 justify-center mt-8 font-unica-one text-5xl">
            <h1>
              00<span className="font-montserrat uppercase text-sm">h</span>
            </h1>
            <h1>
              00<span className="font-montserrat uppercase text-sm">m</span>
            </h1>
            <h1>
              00<span className="font-montserrat uppercase text-sm">s</span>
            </h1>
          </div>
        </div>

        <div className="scale-110 lg:scale-100">
          <Image
            src={matrix}
            alt="matrix"
            sizes="100vw"
            priority
            className="w-full h-auto"
          />
        </div>
      </article>
    </header>
  );
}
