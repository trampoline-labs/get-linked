import Link from "next/link";
import {
  TwitterIcon,
  FaceBookIcon,
  LinkedinIcon,
  InstagramIcon,
} from "./icons";
import { Star } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-background-500 text-primary-100 text-xs relative">
      <>
        <Star className="" color="white" />
        <Star
          className="top-[50%] left-[45%] lg:left-[80%] lg:top-[45%]"
          color="gray"
        />
        <Star className="bottom-[20%] right-14" color="gray" />
        <Star
          className="bottom-[15%] right-[45%] lg:bottom-[20%]"
          color="pink"
        />
      </>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-36 lg:justify-center px-11">
        <div className="flex flex-col gap-8 lg:basis-1/3">
          <div className="flex flex-col gap-2">
            <Link href="/">
              <h1 className="text-primary-100 font-clash-display font-bold text-xl lg:text-4xl">
                get<span className="text-primary-200">linked</span>
              </h1>
            </Link>

            <p className="leading-5">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </div>

          <div>
            <ul className="flex divide-x-2 divide-primary-200">
              <li className="pr-2">Terms of Use</li>
              <li className="capitalize pl-2">privacy policy</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:shrink-0">
          <h1 className="capitalize text-sm text-primary-200 font-semibold">
            useful links
          </h1>
          <ul className="capitalize flex flex-col gap-3">
            <Link href="/">
              <li>overview</li>
            </Link>
            <Link href="/">
              <li>timeline</li>
            </Link>
            <Link href="/">
              <li>FAQs</li>
            </Link>
            <Link href="/">
              <li>register</li>
            </Link>
          </ul>

          <div className="flex gap-5 items-center">
            <h1 className="text-primary-200">Follow us</h1>
            <Link href="/">
              <InstagramIcon />
            </Link>
            <Link href="/">
              <TwitterIcon />
            </Link>
            <Link href="/">
              <FaceBookIcon />
            </Link>
            <Link href="/">
              <LinkedinIcon />
            </Link>
          </div>
        </div>

        <div className="lg:shrink-0">
          <h1 className="capitalize text-sm text-primary-200 font-semibold">
            contact us
          </h1>
          <ul className="mt-4 flex flex-col gap-3 px-5">
            <li className="list-image-[url('/icons/phone.svg')]">
              +234 679 81819
            </li>
            <li className="list-image-[url('/icons/location.svg')]">
              27, Alara Street Yaba 100012 Lagos State
            </li>
          </ul>
        </div>
      </div>

      <h1 className="text-center mt-20">
        All rights reserved. &copy; getlinked Ltd.
      </h1>
    </footer>
  );
}
