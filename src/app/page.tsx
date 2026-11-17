import { Contact } from "@/components/sections/contact";
import { About } from "@/components/sections/about";
import { Expertise } from "@/components/sections/expertise";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Work } from "@/components/sections/work";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { contact, profile, site } from "@/content/site";

const Home = () => {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    url: site.url,
    email: `mailto:${contact.email}`,
    jobTitle: profile.role,
    description: site.description,
    address: { "@type": "PostalAddress", addressLocality: "Cagayan de Oro", addressCountry: "PH" },
    sameAs: [contact.github, contact.linkedin],
    knowsAbout: ["React", "Next.js", "Angular", "TypeScript", "NestJS", "Laravel", "React Native", "PostgreSQL"],
  };

  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <Work />
        <Experience />
        <Expertise />
        <Contact />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
};

export default Home;
