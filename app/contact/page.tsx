'use client';

import Button from '@/components/button';
import Image from 'next/image';
import FBICon from '@/public/icons/facebook.svg';
import XICon from '@/public/icons/ex.svg';
import LinkedInICon from '@/public/icons/linkedin.svg';
import InstaICon from '@/public/icons/instagram.svg';

import { useMediaQuery } from 'usehooks-ts';

const ContactPage = () => {
  const matches = useMediaQuery('(max-width: 768px)');

  const messageRows = matches ? 7 : 5;

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className=" grid">
      <div className=" col-span-full row-span-full w-full h-full bg-[-8rem_-20rem] md:bg-[left_-100%] bg-no-repeat bg-[url('../public/images/star-flare-background-three.png')] blur-md">
        &nbsp;
      </div>
      <main className=" z-20 col-span-full row-span-full flex flex-col-reverse items-center text-primary-100 p-10 lg:flex-row lg:justify-between lg:py-32 lg:px-[7vw] lg:gap-[3vw]">
        <div className="flex flex-col gap-2 pt-10 max-w-md md:gap-4 lg:self-start">
          <h1 className="hidden font-clash-display md:block text-primary-200 font-semibold lg:text-4xl ">
            Get in touch
          </h1>
          <div className="hidden md:flex flex-col gap-3 lg:font-medium">
            <h3>
              Contact <br /> Information
            </h3>
            <h3>
              27, Alara Street <br /> Yaba 100012 <br />
              Lagos State
            </h3>
            <h3>Call us: 07067981819</h3>
            <h3 className="lg:pr-[7rem]">
              We are open from Monday-Friday 08:00am - 05:00pm
            </h3>
          </div>
          <div className="flex flex-col gap-1 items-center text-primary-200 text-center text-xs font-semibold md:text-base md:self-start md:text-left lg:gap-3">
            <span className="w-full">Share on</span>
            <div className="flex gap-4 items-center">
              <a href="#">
                <Image
                  src={InstaICon}
                  alt="Instagram"
                />
              </a>
              <a href="#">
                <Image
                  src={XICon}
                  alt="Twitter"
                />
              </a>
              <a href="#">
                <Image
                  src={FBICon}
                  alt="Facebook"
                />
              </a>
              <a href="#">
                <Image
                  src={LinkedInICon}
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
        </div>
        <form
          onSubmit={(e) => formSubmitHandler(e)}
          className="flex flex-col gap-8 max-w-[750px] lg:max-w-[39rem] lg:bg-secondary-200 lg:rounded-[.75rem] lg:p-[5rem] lg:shadow-lg "
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-primary-200 font-clash-display font-bold text-xl lg:font-semibold">
              Questions or need assistance? <br />
              Let us know about it!
            </h2>
            <p className="text-xs pr-[50px] lg:text-base">
              Email us below to any question related to our event
            </p>
          </div>
          <div className="flex flex-col gap-10 items-center lg:">
            <div className="relative w-full">
              <input
                className="border-[2px] border-primary-100 rounded-[7px] outline-transparent bg-transparent w-full py-3 px-5 peer"
                type="text"
                id="team-name"
                required
              />
              <label
                className="absolute left-0 translate-y-3.5 translate-x-4 peer-focus:text-sm peer-focus:translate-x-0 peer-focus:-translate-y-6 transition"
                htmlFor="team-name"
              >
                Team&apos;s Name
              </label>
            </div>
            <div className="relative w-full">
              <input
                className="border-[2px] border-primary-100 rounded-[7px] outline-transparent bg-transparent w-full py-3 px-5 peer"
                type="text"
                id="topic"
                required
              />
              <label
                className="absolute left-0 translate-y-3.5 translate-x-4 peer-focus:text-sm peer-focus:translate-x-0 peer-focus:-translate-y-6 transition"
                htmlFor="topic"
              >
                Topic
              </label>
            </div>
            <div className="relative w-full">
              <input
                className="border-[2px] border-primary-100 rounded-[7px] outline-transparent bg-transparent w-full py-3 px-5 peer"
                type="text"
                id="email"
                required
              />
              <label
                className="absolute left-0 translate-y-3.5 translate-x-4 peer-focus:text-sm peer-focus:translate-x-0 peer-focus:-translate-y-6 transition"
                htmlFor="email"
              >
                Email
              </label>
            </div>
            <div className="relative w-full">
              <textarea
                className="border-[2px] border-primary-100 rounded-[7px] outline-transparent bg-transparent w-full py-3 px-5 peer"
                name=""
                id="message"
                cols={30}
                rows={messageRows}
                autoComplete="off"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-0 translate-y-3.5 translate-x-4 peer-focus:text-sm peer-focus:translate-x-0 peer-focus:-translate-y-6 transition"
              >
                Message
              </label>
            </div>

            <Button
              className="w-fit font-medium"
              label="Submit"
            />
          </div>
        </form>
      </main>
    </div>
  );
};

export default ContactPage;
