"use client";

import { useEffect, useState } from "react";

const format = (timeZone: string) =>
  new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date());

/** Current time in the given zone, rendered after mount so server and client markup agree. */
export const LocalTime = ({ timeZone }: { timeZone: string }) => {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(format(timeZone));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return <span className="tabular-nums">{time ?? "--:--"}</span>;
};
