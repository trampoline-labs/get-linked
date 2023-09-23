"use client";

import Image from "next/image";
import designer from "@/public/images/image-eight.svg";
import littlePeople from "@/public/icons/little-man-woman.svg";
import Button from "@/components/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Popup from "@/components/ui/popup";
import { useForm, type SubmitHandler } from "react-hook-form";
import { cn } from "@/lib/utils";
import { API_ENDPOINT } from "@/lib/data";
import Btn from "@/components/ui/Btn";
import Flare from "@/components/ui/flare";

const forms = [
  {
    id: "f1",
    placeholder: "Enter the name of your group",
    label: "team's name",
    type: "text",
    field: "team_name",
  },
  {
    id: "f2",
    placeholder: "Enter your phone number",
    label: "phone",
    type: "number",
    field: "phone_number",
  },
  {
    id: "f3",
    placeholder: "Enter your email address",
    label: "email",
    type: "email",
    field: "email",
  },
  {
    id: "f4",
    placeholder: "What is your group project topic",
    label: "project topic",
    type: "text",
    field: "project_topic",
  },
];

const dropdowns = [
  {
    id: "d1",
    label: "category",
    name: "category",
    options: [
      {
        label: "Mobile",
        value: 1,
      },
      {
        label: "Web",
        value: 2,
      },
      {
        label: "Backend",
        value: 3,
      },
    ],
  },
  {
    id: "d2",
    label: "group size",
    name: "group_size",
    options: [
      {
        label: "2",
        value: 2,
      },
      {
        label: "4",
        value: 4,
      },
      {
        label: "6",
        value: 6,
      },
    ],
  },
];

const schema = z
  .object({
    team_name: z.string().nonempty("This field is required"),
    email: z
      .string()
      .nonempty("This field is required")
      .email("Email format is not valid"),
    phone_number: z.number({
      required_error: "Phone Number is required",
      invalid_type_error: "Enter a valid Number",
    }),
    project_topic: z.string().nonempty("This field is required"),
    category: z.enum(["web", "backend", "mobile"]),
    group_size: z.enum(["2", "4", "6"]),
  })
  .required();

type FormData = z.infer<typeof schema>;

export default function RegisterPage() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      team_name: "",
      email: "",
      phone_number: undefined,
      project_topic: "",
    },
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = form;

  console.log(errors);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (isValid) {
      try {
        const res = (
          await fetch(`${API_ENDPOINT}/registration`, {
            method: "post",
            body: JSON.stringify({ privacy_policy_accepted: true, ...data }),
          })
        ).json();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    console.log(data);
  };

  return (
    <>
      <main className="md:bg-[url('../public/images/star-flare-background-three.png')]">
        {/* Content */}
        <div className="row-span-full col-span-full py-12 px-4 lg:flex lg:flex-row lg:gap-4 lg:px-10 z-10">
          <div className="w-10/12 mx-auto lg:w-auto lg:self-center">
            <Image src={designer} alt="graphics designer" />
          </div>

          <div className="px-7 mt-4 lg:shrink-0 lg:flex-1 lg:basis-[55%] lg:bg-secondary-200 lg:p-20 lg:rounded-md lg:shadow-lg">
            <h1 className="text-primary-200 font-clash-display text-base lg:text-3-5xl capitalize font-bold mb-2">
              register
            </h1>

            <div className="text-primary-100 lg:mt-10">
              <p className="flex gap-3 text-xs lg:text-sm items-baseline lg:w-2/3">
                Be part of this movement{" "}
                <span className="flex justify-center border-b border-dashed border-primary-200 w-1/3">
                  <Image src={littlePeople} alt="movement" />
                </span>
              </p>
              <h1 className="uppercase text-xl tracking-wider mt-2 lg:text-2xl">
                create your account
              </h1>
            </div>

            <form
              action=""
              className="capitalize text-primary-100 text-sm flex flex-col gap-6 mt-4 lg:mt-8 relative"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* <Flare z="z-[-1] right-0 bottom-0" /> */}
              <div className="grid auto-rows-auto gap-6 lg:grid-rows-2 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-6">
                {forms.map((form) => {
                  return (
                    <div className="flex flex-col gap-2" key={form.id}>
                      <label htmlFor={form.id}>{form.label}</label>
                      <input
                        placeholder={form.placeholder}
                        id={form.id}
                        type={form.type}
                        className={cn(
                          "bg-transparent rounded-md border-primary-100 placeholder:text-sm",
                          errors[form.field as keyof FormData] &&
                            "border border-red-500"
                        )}
                        {...register(form.field as keyof FormData)}
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
                        id={item.id}
                        className="bg-transparent rounded-md border-primary-100 text-sm lg:text-base"
                        {...register(item.name as keyof FormData)}
                      >
                        {item.options.map((opt, idx) => {
                          return (
                            <option
                              value={opt.value}
                              className="capitalize text-xs text-black"
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

              <Btn text="Submit" />
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
