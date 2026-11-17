import { ArrowUpRight } from "lucide-react";

import { ExternalLink } from "@/components/external-link";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { contact, copy } from "@/content/site";

/** "https://www.linkedin.com/in/knedio/" -> "linkedin.com/in/knedio" */
const displayUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const links = [
  { label: "GitHub", value: displayUrl(contact.github), href: contact.github },
  { label: "LinkedIn", value: displayUrl(contact.linkedin), href: contact.linkedin },
  { label: "Curriculum vitae", value: "View PDF", href: contact.cv },
];

export const Contact = () => {
  return (
    <Section id="contact" index="05" label="Contact">
      <Reveal>
        <h2 id="contact-heading" className="max-w-[16ch] text-title font-medium">
          {copy.contact.heading}
        </h2>
        <p className="mt-6 max-w-[46ch] text-muted">{copy.contact.body}</p>
      </Reveal>

      <Reveal delay={0.08} className="mt-12">
        <a
          href={`mailto:${contact.email}`}
          className="group inline-flex items-center gap-3 text-[clamp(1.5rem,3.4vw,2.5rem)] leading-tight font-medium tracking-[-0.03em] text-fg"
        >
          <span className="link-rule [overflow-wrap:anywhere]">{contact.email}</span>
          <ArrowUpRight
            aria-hidden="true"
            strokeWidth={1.25}
            className="size-[0.8em] shrink-0 text-faint transition-all duration-500 ease-out-quint group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-fg"
          />
        </a>

        <ul className="mt-12 grid gap-x-12 xl:grid-cols-3">
          {links.map((link) => (
            <li key={link.label}>
              <ExternalLink
                href={link.href}
                className="group flex items-center justify-between border-t border-line py-4 text-sm text-fg"
              >
                <span className="label">{link.label}</span>
                <span className="flex items-center gap-2">
                  <span className="link-draw">{link.value}</span>
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="text-faint transition-all duration-500 ease-out-quint group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg"
                  />
                </span>
              </ExternalLink>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
};
