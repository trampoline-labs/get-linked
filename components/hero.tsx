"use client";

import Image from "next/image";
import Button from "./button";
import matrix from "@/public/images/image-one.png";
import { TypeAnimation } from "react-type-animation";
import chainIcon from "@/public/icons/chain.svg";
import blastIcon from "@/public/icons/blast.svg";
import { ScribbleIcon } from "./icons";

export default function Hero() {
  return (
    <header className="px-6 lg:px-14 pt-8 border-b border-b-secondary-100">
      <p className="italic font-bold text-base lg:text-4xl lg:text-right">
        Igniting a Revolution in{" "}
        <span className="relative inline-block">
          <span className="text-transparent">HR Innovation</span>
          <TypeAnimation
            preRenderFirstString={true}
            sequence={["HR", 1000, "HR Innovation", 1000]}
            speed={50}
            repeat={Infinity}
            cursor={false}
            className="block top-0 left-0 absolute"
          />
          <span className="absolute block right-0">
            <ScribbleIcon />
          </span>
        </span>
      </p>

      <article className="mt-14 grid grid-rows-2 gap-10 lg:gap-0 lg:grid-cols-2 lg:grid-rows-none">
        <div className="self-center">
          <div className="text-center lg:text-left font-clash-display text-3-5xl lg:text-7xl font-bold leading-10 lg:leading-none">
            <h1 className="relative">
              getlinked Te
              <span className="relative">
                c
                <span className="block absolute bottom-7 -right-1 w-5 lg:w-10 lg:-top-8 lg:-right-2">
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
            <h2 className="lg:flex">
              Hackathon <span className="text-primary-200">1.0</span>
              <span className="inline">
                <Image
                  src={chainIcon}
                  alt="chain-icon"
                  className="w-[2rem] h-[2rem] inline lg:w-[4rem] lg:h-[4rem]"
                />
              </span>
              <span className="inline">
                <Image
                  src={blastIcon}
                  alt="chain-icon"
                  className="w-[2rem] h-[2rem] inline lg:w-[4rem] lg:h-[4rem]"
                />
              </span>
            </h2>
          </div>

          <p className="text-sm lg:text-xl text-center lg:text-left w-11/12 mx-auto lg:mx-0 my-3">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>

          <div className="w-fit mx-auto mt-8 lg:mx-0">
            <Button label="register" path="/register" />
          </div>

          <div className="flex gap-5 justify-center lg:justify-normal mt-8 lg:mt-14 font-unica-one text-5xl">
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
