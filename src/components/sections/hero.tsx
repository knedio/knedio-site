import { ArrowDownRight } from "lucide-react";

import { ExternalLink } from "@/components/external-link";
import { LocalTime } from "@/components/local-time";
import { Reveal } from "@/components/reveal";
import { contact, profile, projects } from "@/content/site";

export const Hero = () => {
  return (
    <section id="top" aria-labelledby="hero-heading" className="shell pt-32 pb-20 md:pt-40 md:pb-28">
      <Reveal className="grid-12 items-baseline gap-y-3">
        <p className="col-span-12 text-fg lg:col-span-7">
          {profile.name}
          <span className="block text-muted">{profile.role}</span>
        </p>
        <p className="label col-span-12 lg:col-span-5 lg:text-right">
          {profile.location} · <LocalTime timeZone={profile.timeZone} /> {profile.timeZoneLabel}
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <h1 id="hero-heading" className="mt-16 max-w-[16ch] text-display font-medium md:mt-24">
          {profile.headline[0]}
          <span className="block text-faint">{profile.headline[1]}</span>
        </h1>
      </Reveal>

      <div className="grid-12 mt-12 gap-y-12 sm:mt-16 lg:mt-20">
        <Reveal delay={0.16} className="col-span-12 lg:col-span-6">
          <p className="text-lead text-muted">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <ExternalLink href={contact.github} className="link-rule text-fg">
              GitHub
            </ExternalLink>
            <ExternalLink href={contact.linkedin} className="link-rule text-fg">
              LinkedIn
            </ExternalLink>
            <ExternalLink href={contact.cv} className="link-rule text-fg">
              Curriculum vitae
            </ExternalLink>
            <a href={`mailto:${contact.email}`} className="link-rule text-fg">
              Email
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.24} className="col-span-12 lg:col-span-5 lg:col-start-8">
          <p className="label">Selected work</p>
          <ul className="mt-4 border-t border-line">
            {projects.map((project, index) => (
              <li key={project.slug} className="border-b border-line">
                <a
                  href={`#${project.slug}`}
                  className="group grid grid-cols-[2.25rem_1fr_auto] items-baseline gap-x-3 py-4 transition-colors duration-300"
                >
                  <span className="label tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block text-fg">{project.name}</span>
                    <span className="block text-sm text-muted">{project.category}</span>
                  </span>
                  <ArrowDownRight
                    size={16}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="text-faint transition-all duration-500 ease-out-quint group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-fg"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};
