import Button from '@/components/button';
import Image from 'next/image';
import FBICon from '@/public/icons/facebook.svg';
import XICon from '@/public/icons/ex.svg';
import LinkedInICon from '@/public/icons/linkedin.svg';
import InstaICon from '@/public/icons/instagram.svg';

const ContactPage = () => {
  return (
    <main className="flex flex-col-reverse text-primary-100 p-10">
      <div>
        <h1 className="hidden md:block">Get in touch</h1>
        <div className="hidden md:block">
          <h3>Contact Information</h3>
          <h3>27, Alara Street Yaba 100012</h3>
          <h3>Call us: 07067981819</h3>
          <h3>We are open from Monday-Friday 08:00am - 05:00pm</h3>
        </div>
        <div>
          Share on
          <div>
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
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-primary-200 font-clash-display font-bold text-xl lg:text-4xl">
            Questions or need assistance? <br />
            Let us know about it!
          </h2>
          <p className="text-xs pr-[50px]">
            Email us below to any question related to our event
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="relative w-full">
            <label
              className="absolute"
              htmlFor="team-name"
            >
              Team&apos;s Name
            </label>
            <input
              className="border-[2px] border-primary-100 rounded-[5px] outline-transparent bg-transparent w-full py-2 px-4"
              type="text"
              id="team-name"
            />
          </div>
          <div>
            <label htmlFor="topic">Topic</label>
            <input
              type="text"
              id="topic"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name=""
              id="message"
              cols={30}
              rows={10}
              autoComplete="off"
            ></textarea>
          </div>

          <Button
            className="w-fit font-medium"
            label="Submit"
          />
        </div>
      </form>
    </main>
  );
};

export default ContactPage;
