import Image from 'next/image';
import WinkIcon from '@/public/icons/wink.svg';
import CongratsImg from '@/public/images/image-nine.svg';

const popup = () => {
  return (
    <div className="fixed z-50 top-0 left-0 right-0 bottom-0 w-full h-full bg-background-700 flex justify-center items-center">
      <div className="p-6 md:py-[4rem] md:px-[5rem] md:scale-[.8] flex flex-col gap-6 items-center border-[2px] border-primary-200 rounded-md text-primary-100 w-[80%] max-w-[43.6875rem]">
        {/* Image */}
        <div>
          <Image
            src={CongratsImg}
            alt="congrats"
          />
        </div>
        {/* Text */}
        <div className="text-center flex flex-col gap-4">
          <h1 className="font-semibold md:text-[2rem]">
            Congratulations you have successfully Registered!
          </h1>
          <p className=" flex justify-center text-small text-xs md:gap-[5px] md:leading-[1.8]">
            Yes it was easy and you did it! <br /> check your mail box for the
            next step
            <span className="block w-[.75rem] md:w-auto self-end">
              <Image
                src={WinkIcon}
                alt="Wink"
              />
            </span>
          </p>
        </div>
        <button className="cursor-pointer lg:py-4 lg:hover:scale-110 transition-all duration-200 bg-gradient-to-r from-primary-300 via-primary-200 to-primary-400 rounded-sm w-full px-6 py-2">
          Back
        </button>
      </div>
    </div>
  );
};

export default popup;
