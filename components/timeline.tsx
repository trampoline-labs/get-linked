"use client";

import { timeline } from "@/lib/data";
import dayjs from "dayjs";
import localizezFormat from "dayjs/plugin/localizedFormat";
import { cn } from "@/lib/utils";

dayjs.extend(localizezFormat);

export default function TimeLine() {
  return (
    <section className="px-6 lg:px-14 py-12 border-b border-b-secondary-100">
      <div className="flex flex-col gap-4">
        <h1 className="font-clash-display text-xl font-bold capitalize text-center">
          timeline
        </h1>
        <p className="text-center">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>

      <div className="grid auto-rows-auto gap-9 mt-5">
        {/* mobile view */}
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
    <article className="flex flex-col gap-2 text-xs relative pl-5">
      <span className="block bg-gradient-to-r from-primary-400 to-primary-200 absolute left-0 inset-y-0">
        &nbsp;
      </span>
      <h1 className="text-primary-200 font-bold">{label}</h1>
      <p className="">{description}</p>
      <h2 className="text-primary-200 font-bold relative">
        <span className="-left-7 absolute text-primary-100 bg-gradient-to-r from-primary-400 to-primary-200 rounded-full w-5 h-5 flex items-center justify-center">
          {itemn}
        </span>
        {dayjs(date).format("LL")}
      </h2>
    </article>
  );
}
