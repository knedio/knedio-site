import Image from "next/image";

import { about } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

export const About = () => {
  const [lead, ...rest] = about.paragraphs;

  return (
    <Section id="about" index="01" label="About">
      <div className="grid items-start gap-x-12 gap-y-8 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)]">
        <Reveal>
          <figure className="mx-auto w-full max-w-[15rem] overflow-hidden rounded-sm bg-surface sm:max-w-xs lg:mx-0 lg:max-w-none">
            <Image
              src={about.portrait.src}
              alt={about.portrait.alt}
              sizes="(min-width: 1024px) 16rem, (min-width: 640px) 20rem, 100vw"
              placeholder="blur"
              className="h-auto w-full grayscale-[25%]"
            />
          </figure>
        </Reveal>

        <div>
          <Reveal>
            <h2 id="about-heading" className="max-w-[20ch] text-headline font-medium">
              {about.heading}
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-8 max-w-[62ch] text-lead text-fg">{lead}</p>
          </Reveal>
          <div className="mt-6 max-w-[62ch] space-y-5">
            {rest.map((paragraph) => (
              <Reveal key={paragraph.slice(0, 24)}>
                <p className="text-muted">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Reveal className="mt-16">
        <dl className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
          {about.facts.map((fact) => (
            <div
              key={fact.label}
              className="flex flex-col gap-2 border-t border-line py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <dt className="label shrink-0">{fact.label}</dt>
              <dd className="text-sm text-fg sm:text-right">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
};
