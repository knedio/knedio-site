type SectionProps = {
  id: string;
  index: string;
  label: string;
  children: React.ReactNode;
  className?: string;
};

/** Editorial two-column section: a quiet sticky label on the left, content on the right. */
export const Section = ({ id, index, label, children, className }: SectionProps) => {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={`shell ${className ?? ""}`}>
      <div className="grid-12 gap-y-6 border-t border-line pt-6 pb-16 sm:pt-8 sm:pb-24 lg:pt-10 lg:pb-32">
        <div className="col-span-12 lg:col-span-3">
          <p className="label flex gap-3 lg:sticky lg:top-24">
            <span className="tabular-nums">{index}</span>
            <span className="text-muted">{label}</span>
          </p>
        </div>
        <div className="col-span-12 lg:col-span-9">{children}</div>
      </div>
    </section>
  );
};
