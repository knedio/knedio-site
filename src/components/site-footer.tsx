import { ArrowUp } from "lucide-react";

import { profile, site } from "@/content/site";

export const SiteFooter = () => {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <p className="label">
          © {site.copyrightYear} {profile.fullName}
        </p>
        <a href="#top" className="link-rule label inline-flex items-center gap-2 text-fg">
          Back to top
          <ArrowUp size={13} strokeWidth={1.75} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
};
