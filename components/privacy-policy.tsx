import HeadText from "./head-text";
import Button from "./button";
import Image from "next/image";
import padlockMan from "../public/images/image-seven.svg";

export default function PrivacyPolicy() {
  return (
    <section className="flex flex-col gap-16 lg:flex-row lg:px-32 lg:py-24">
      <div className="lg:flex lg:flex-col lg:gap-8">
        <div>
          <HeadText label="Privacy Policy and " highlight="Terms">
            <div className="flex flex-col gap-8">
              <p className="text-xs lg:text-sm text-[#FFFFFFBF]">
                Last updated on September 12, 2023
              </p>

              <p className="leading-7 text-xs lg:text-sm">
                Below are our privacy & policy, which outline a lot of goodies.
                it’s our aim to always take of our participant
              </p>
            </div>
          </HeadText>
        </div>

        <div className="border border-primary-200 rounded-lg mt-7 py-10 px-4 lg:px-10 flex flex-col gap-9">
          <p className="text-center lg:text-left text-xs lg:text-sm leading-7 lg:leading-7 ">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>

          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-5">
              <div className="leading-8">
                <h1 className="text-xs lg:text-base text-primary-200 capitalize font-bold">
                  licensing policy
                </h1>
                <p className="font-bold text-xs lg:text-sm">
                  Here are terms of our Standard License:
                </p>
              </div>

              <ul className="text-xs lg:text-sm list-image-[url('/icons/checkbox.svg')] px-9 flex flex-col gap-4">
                <li className="lg:leading-7">
                  <span className="relative -top-2">
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </span>
                </li>
                <li className="lg:leading-7">
                  <span className="relative -top-2">
                    You are licensed to use the item available at any free
                    source sites, for your project developement
                  </span>
                </li>
              </ul>
            </div>

            <div className="w-fit mx-auto">
              <Button
                label="Read More"
                className="px-6 py-3 text-sm lg:px-10 lg:py-4"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:shrink-0 lg:basis-1/2">
        <Image
          src={padlockMan}
          alt="Privacy Policy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
