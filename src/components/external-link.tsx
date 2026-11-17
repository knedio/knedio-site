import type { ComponentProps } from "react";

type ExternalLinkProps = ComponentProps<"a">;

/** An outbound link. `target` and `rel` are set here so a call site cannot drop them. */
export const ExternalLink = ({ children, "aria-label": ariaLabel, ...props }: ExternalLinkProps) => {
  return (
    <a {...props} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer">
      {children}
      {ariaLabel ? null : <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
};
