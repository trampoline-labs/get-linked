import { faqs } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';
import theMan from '@/public/images/image-five.svg';
import HeadText from './head-text';
import { Star } from './icons';

export default function FAQ() {
  return (
    <section className="px-10 py-16 lg:px-32 flex flex-col lg:flex-row gap-14 relative">
      <>
        <Star
          className="left-10 top-6"
          color="purple"
        />
      </>
      <article className="flex flex-col gap-4 lg:gap-10 lg:self-center lg:flex-1">
        <HeadText
          label="Frequently Asked "
          highlight="Questions"
        >
          <p className="leading-7 text-xs lg:text-sm">
            We got answers to the questions that you might want to ask about
            <span className="font-bold"> getlinked Hackathon 1.0</span>
          </p>
        </HeadText>

        <div>
          <Accordion
            type="single"
            collapsible
            className="w-full"
          >
            {faqs.map((q) => {
              return (
                <AccordionItem
                  value={q.id}
                  key={q.id}
                  className="text-xs lg:text-sm"
                >
                  <AccordionTrigger className="text-left">
                    {q.title}
                  </AccordionTrigger>
                  <AccordionContent>{q.desc}</AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </article>

      <div className="lg:shrink-0 lg:w-1/2">
        <Image
          src={theMan}
          alt="Man with the questions"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
