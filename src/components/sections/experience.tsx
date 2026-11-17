import { copy, experience } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

export const Experience = () => {
  return (
    <Section id="experience" index="03" label="Experience">
      <Reveal>
        <h2 id="experience-heading" className="max-w-[28ch] text-headline font-medium">
          {copy.experience.heading}
        </h2>
      </Reveal>

      <ol className="mt-12 border-b border-line">
        {experience.map((role) => (
          <Reveal
            as="li"
            key={`${role.company}-${role.start}`}
            className="grid gap-x-8 gap-y-2 border-t border-line py-6 lg:grid-cols-[9.5rem_minmax(0,1fr)_minmax(0,1.5fr)] lg:py-7"
          >
            <p className="label pt-1 tabular-nums">
              {role.start} – {role.end}
            </p>
            <div>
              <h3 className="font-medium text-fg">{role.company}</h3>
              <p className="text-sm text-muted">{role.title}</p>
            </div>
            <div className="text-sm text-muted">
              <p>{role.summary}</p>
              {role.highlights.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {role.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[0.7em] h-px w-2.5 shrink-0 bg-line-strong" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
};
