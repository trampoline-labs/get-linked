"use client";

import { timeline } from "@/lib/data";
import dayjs from "dayjs";
import localizezFormat from "dayjs/plugin/localizedFormat";
import { cn } from "@/lib/utils";

dayjs.extend(localizezFormat);

export default function TimeLine() {
  return (
    <section className="px-6 lg:px-14 py-12 lg:py-20 border-b border-b-secondary-100">
      <div className="flex flex-col gap-4 lg:w-1/3 lg:mx-auto">
        <h1 className="font-clash-display text-xl lg:text-3-5xl font-bold capitalize text-center">
          timeline
        </h1>
        <p className="text-center">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>

      <div className="flex flex-col gap-9 mt-5 lg:mt-44 lg:mx-auto relative before:hidden lg:before:block before:bg-gradient-to-r before:from-primary-200 before:to-primary-400 before:absolute before:w-1 before:h-[110%] before:left-[50.5%] before:-top-28">
        {timeline.map((event, idx) => {
          return (
            <TimeLineEvent
              label={event.label}
              description={event.description}
              date={event.date}
              key={event.id}
              itemn={idx + 1}
            />
          );
        })}
      </div>
    </section>
  );
}

interface TimeLineEventProps {
  label: string;
  description: string;
  date: string;
  itemn: number;
}

function TimeLineEvent({
  label,
  description,
  date,
  itemn,
}: TimeLineEventProps) {
  return (
    <article className="flex flex-col gap-2 lg:gap-4 text-xs relative pl-5 lg:even:flex-row-reverse lg:odd:flex-row lg:justify-around lg:items-center group">
      <span className="block bg-gradient-to-r from-primary-200 to-primary-400 absolute left-0 inset-y-0 lg:hidden">
        &nbsp;
      </span>
      <div className="flex flex-col gap-2 lg:basis-2/5 lg:group-odd:text-right">
        <h1 className="text-primary-200 lg:text-2xl font-bold">{label}</h1>
        <p className="lg:text-base">{description}</p>
      </div>

      <span className="w-12 h-12 hidden lg:flex ring-8 ring-offset-0 ring-background-100 bg-gradient-to-r from-primary-200 to-primary-400 rounded-full items-center justify-center font-bold text-2xl">
        {itemn}
      </span>

      <h2 className="text-primary-200 font-bold relative lg:text-2xl lg:basis-2/5 lg:group-even:text-right">
        <span className="-left-7 absolute text-primary-100 bg-gradient-to-r from-primary-200 to-primary-400 rounded-full w-5 h-5 flex items-center justify-center lg:hidden">
          {itemn}
        </span>
        {dayjs(date).format("LL")}
      </h2>
    </article>
  );
}

function TimeLineEventDesktop() {
  return <div></div>;
}
