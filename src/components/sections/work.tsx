import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { ExternalLink } from "@/components/external-link";
import { Reveal } from "@/components/reveal";
import { copy, projects, type Project } from "@/content/site";

export const Work = () => {
  return (
    <section id="work" aria-labelledby="work-heading" className="shell">
      <div className="grid-12 gap-y-8 border-t border-line pt-8 md:pt-10">
        <p className="label col-span-12 flex gap-3 lg:col-span-3">
          <span className="tabular-nums">02</span>
          <span className="text-muted">Selected work</span>
        </p>
        <Reveal className="col-span-12 lg:col-span-9">
          <h2 id="work-heading" className="max-w-[24ch] text-headline font-medium">
            {copy.work.heading}
          </h2>
        </Reveal>
      </div>

      <div className="pt-16 pb-24 md:pt-24 md:pb-32">
        {projects.map((project, index) => (
          <ProjectCase key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

const hostOf = (url: string) => new URL(url).host.replace(/^www\./, "");

const ProjectCase = ({ project, index }: { project: Project; index: number }) => {
  const number = String(index + 1).padStart(2, "0");
  const host = hostOf(project.url);

  return (
    <article id={project.slug} aria-labelledby={`${project.slug}-title`} className="mt-24 first:mt-0 md:mt-36">
      <Reveal className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
        <div>
          <p className="label tabular-nums">
            {number} <span className="mx-1.5 text-line-strong">/</span> {project.category}{" "}
            <span className="mx-1.5 text-line-strong">/</span> {project.year}
          </p>
          <h3 id={`${project.slug}-title`} className="mt-3 text-title font-medium">
            {project.name}
          </h3>
        </div>
        <ExternalLink
          href={project.url}
          className="group inline-flex items-center gap-2 text-sm text-muted transition-colors duration-300 hover:text-fg"
        >
          <span className="link-draw">{host}</span>
          <ArrowUpRight
            size={15}
            strokeWidth={1.5}
            aria-hidden="true"
            className="transition-transform duration-500 ease-out-quint group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </ExternalLink>
      </Reveal>

      <Reveal className="mt-8 md:mt-10">
        <ExternalLink
          href={project.url}
          aria-label={`Visit ${project.name} live, opens in a new tab`}
          className="group block rounded-md bg-surface p-[clamp(0.75rem,3.5vw,3.5rem)] transition-colors duration-700 hover:bg-raised"
        >
          <div className="overflow-hidden rounded-[4px] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)] ring-1 ring-white/[0.06]">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              sizes="(min-width: 1312px) 1180px, 92vw"
              placeholder="blur"
              className="h-auto w-full transition-transform duration-[1.4s] ease-out-quint group-hover:scale-[1.015]"
            />
          </div>
        </ExternalLink>
      </Reveal>

      {project.screens && (
        <Reveal className="mt-3 md:mt-4">
          <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto rounded-md bg-surface p-3 sm:grid sm:grid-cols-3 sm:gap-[clamp(0.75rem,2.5vw,2.5rem)] sm:overflow-visible sm:p-[clamp(0.75rem,3.5vw,3.5rem)]">
            {project.screens.map((screen) => (
              <figure
                key={screen.alt}
                className="w-[72%] shrink-0 snap-center overflow-hidden rounded-[clamp(0.75rem,1.6vw,1.5rem)] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)] ring-1 ring-white/[0.06] sm:w-auto"
              >
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  sizes="(min-width: 640px) 30vw, 72vw"
                  placeholder="blur"
                  className="h-auto w-full"
                />
              </figure>
            ))}
          </div>
        </Reveal>
      )}

      <div className="grid-12 mt-10 gap-y-10 md:mt-14">
        <Reveal className="col-span-12 lg:col-span-6">
          <p className="max-w-[34ch] text-lead text-fg">{project.summary}</p>
          <p className="mt-5 max-w-[56ch] text-muted">{project.description}</p>
        </Reveal>

        <Reveal className="col-span-12 sm:col-span-6 lg:col-span-3">
          <h4 className="label">Role</h4>
          <p className="mt-3 text-sm text-fg">{project.role}</p>
          <h4 className="label mt-8">Stack</h4>
          <p className="mt-3 text-sm text-muted">{project.stack.join(", ")}</p>
        </Reveal>

        <Reveal className="col-span-12 sm:col-span-6 lg:col-span-3">
          <h4 className="label">What I built</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {project.contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </article>
  );
};
