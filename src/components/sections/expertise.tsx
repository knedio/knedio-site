import { capabilities, copy } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

export const Expertise = () => {
  return (
    <Section id="expertise" index="04" label="Expertise">
      <Reveal>
        <h2 id="expertise-heading" className="max-w-[26ch] text-headline font-medium">
          {copy.expertise.heading}
        </h2>
      </Reveal>

      <ul className="mt-12 grid gap-x-12 sm:grid-cols-2">
        {capabilities.map((capability) => (
          <Reveal as="li" key={capability.title} className="border-t border-line pt-5 pb-10">
            <h3 className="font-medium text-fg">{capability.title}</h3>
            <p className="mt-2 max-w-[44ch] text-sm text-muted">{capability.description}</p>
            <p className="mt-4 font-mono text-xs leading-relaxed text-faint">{capability.tools.join("  ·  ")}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
};
