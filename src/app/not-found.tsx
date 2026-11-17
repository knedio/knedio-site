import Link from "next/link";

import { copy, profile } from "@/content/site";

const NotFound = () => {
  return (
    <main id="main" className="shell flex min-h-svh flex-col justify-between py-10">
      <Link href="/" className="text-[0.9375rem] font-medium tracking-tight text-fg">
        {profile.shortName}
      </Link>

      <div>
        <p className="label">404</p>
        <h1 className="mt-6 max-w-[16ch] text-title font-medium">{copy.notFound.heading}</h1>
        <p className="mt-6 max-w-[40ch] text-muted">{copy.notFound.body}</p>
      </div>

      <Link href="/" className="link-rule label self-start text-fg">
        Back to the home page
      </Link>
    </main>
  );
};

export default NotFound;
