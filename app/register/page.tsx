import Image from 'next/image';
import designer from '@/public/images/image-eight.svg';
import littlePeople from '@/public/icons/little-man-woman.svg';
import Button from '@/components/button';
import Popup from '@/components/ui/popup';
import Flare from '@/components/ui/flare';

const forms = [
  {
    id: 'f1',
    placeholder: 'Enter the name of your group',
    label: "team's name",
    type: 'text',
  },
  {
    id: 'f2',
    placeholder: 'Enter your phone number',
    label: 'phone',
    type: 'number',
  },
  {
    id: 'f3',
    placeholder: 'Enter your email address',
    label: 'email',
    type: 'email',
  },
  {
    id: 'f4',
    placeholder: 'What is your group project topic',
    label: 'project topic',
    type: 'text',
  },
];

const dropdowns = [
  {
    id: 'd1',
    label: 'category',
    name: 'category',
    options: [
      {
        label: 'Select your category',
        value: '',
      },
    ],
  },
  {
    id: 'd2',
    label: 'group size',
    name: 'group-size',
    options: [
      {
        label: 'Select',
        value: '',
      },
    ],
  },
];

export default function RegisterPage() {
  return (
    <>
      {/* <Popup /> */}
      {/* <div>
        <div></div>
        <div></div>
      </div> */}
      {/* md:bg-background-100 md:bg-[url('../public/images/flare-two.png')] md:bg-blend-hard-light md:bg-no-repeat md:bg-contain md:bg-[-1rem_-7rem] */}
      <main className="md:bg-[url('../public/images/star-flare-background-three.png')]">
        {/* Blob */}
        {/* <div className="row-span-full col-span-full grid grid-cols-2">
          <div className="relative md:before:block md:before:absolute md:before:bg-background-100 md:before:bg-[url('../public/images/flare-two.png')] md:before:bg-contain md:before:bg-blend-hard-light md:before:bg-no-repeat md:before:w-[24.75rem] md:before:h-[27.625rem] md:before:-top-[3rem] md:before:left-0">
            &nbsp;
          </div>
          <div className="relative md:before:opacity-50 md:before:block md:before:w-full md:before:h-full md:before:absolute md:before:bg-background-100 md:before:bg-[url('../public/images/flare-two.png')] md:before:bg-blend-hard-light md:before:bg-no-repeat md:before:bg-[9rem_7rem] md:before:bottom-0 md:before:right-0">
            &nbsp;
          </div>
        </div> */}
        {/* Content */}
        <div className="row-span-full col-span-full py-12 px-4 lg:flex lg:flex-row lg:gap-4 lg:px-10 z-10">
          <div className="w-10/12 mx-auto lg:w-auto lg:self-center">
            <Image
              src={designer}
              alt="graphics designer"
            />
          </div>

          <div className="px-7 mt-4 lg:shrink-0 lg:flex-1 lg:basis-[55%] lg:bg-secondary-200 lg:p-20 lg:rounded-md lg:shadow-lg">
            <h1 className="text-primary-200 font-clash-display text-base lg:text-3-5xl capitalize font-bold mb-2">
              register
            </h1>

            <div className="text-primary-100 lg:mt-10">
              <p className="flex gap-3 text-xs lg:text-sm items-baseline lg:w-2/3">
                Be part of this movement{' '}
                <span className="flex justify-center border-b border-dashed border-primary-200 w-1/3">
                  <Image
                    src={littlePeople}
                    alt="movement"
                  />
                </span>
              </p>
              <h1 className="uppercase text-xl tracking-wider mt-2 lg:text-2xl">
                create your account
              </h1>
            </div>

            <form
              action=""
              className="capitalize text-primary-100 text-sm flex flex-col gap-6 mt-4 lg:mt-8 relative"
            >
              {/* <Flare z="z-[-1] right-0 bottom-0" /> */}
              <div className="grid auto-rows-auto gap-6 lg:grid-rows-2 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-6">
                {forms.map((form) => {
                  return (
                    <div
                      className="flex flex-col gap-2"
                      key={form.id}
                    >
                      <label htmlFor={form.id}>{form.label}</label>
                      <input
                        placeholder={form.placeholder}
                        id={form.id}
                        type={form.type}
                        className="bg-transparent rounded-md border-primary-100 placeholder:text-sm"
                      />
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-between gap-4 lg:justify-normal lg:gap-8">
                {dropdowns.map((item) => {
                  return (
                    <div
                      className="flex flex-col gap-2 lg:basis-1/2"
                      key={item.id}
                    >
                      <label htmlFor={item.id}>{item.label}</label>
                      <select
                        name={item.name}
                        id={item.id}
                        className="bg-transparent rounded-md border-primary-100 text-sm lg:text-base"
                      >
                        {item.options.map((opt, idx) => {
                          return (
                            <option
                              value={opt.value}
                              className="capitalize text-xs"
                              key={idx}
                            >
                              {opt.label}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  );
                })}
              </div>

              <p className="text-[10px] lg:text-xs italic text-primary-300">
                Please review your registration details before submitting
              </p>

              <div className="flex gap-3 items-center">
                <div>
                  <input
                    type="checkbox"
                    id="review"
                    className="cursor-pointer rounded-sm bg-transparent border border-primary-100 checked:ring-0 checked:border-none checked:outline-none focus:ring-0 focus:border-none focus:outline-none checked:ring-offset-0"
                  />
                </div>
                <label
                  htmlFor="review"
                  className="text-[10px] lg:text-xs normal-case"
                >
                  I agreed with the event terms and conditions and privacy
                  policy
                </label>
              </div>

              <div className="mx-auto w-fit lg:w-full lg:mx-0">
                <Button
                  label="Submit"
                  className="py-3 lg:w-full lg:text-center"
                />
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
