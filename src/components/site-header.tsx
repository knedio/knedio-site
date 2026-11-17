"use client";

import { useEffect, useState } from "react";

import { navigation, profile } from "@/content/site";

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-500 ${
        scrolled ? "border-line bg-ink/90" : "border-transparent bg-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between">
        <a href="#top" className="text-[0.9375rem] font-medium tracking-tight text-fg">
          {profile.shortName}
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="link-draw text-sm text-muted hover:text-fg">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:hidden">
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="label cursor-pointer px-1 py-2 text-fg"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            hidden={!menuOpen}
            className="absolute inset-x-0 top-16 border-b border-line bg-ink/95 px-[clamp(1.25rem,4vw,3rem)] py-4"
          >
            <ul className="flex flex-col">
              {navigation.map((item) => (
                <li key={item.href} className="border-t border-line first:border-t-0">
                  <a href={item.href} onClick={() => setMenuOpen(false)} className="block py-4 text-lg text-fg">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
