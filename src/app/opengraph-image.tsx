import { ImageResponse } from "next/og";

import { profile, site } from "@/content/site";

export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const OpengraphImage = () => {
  const host = new URL(site.url).host;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0b0d10",
        color: "#f1f1ef",
        padding: "72px 84px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 22, letterSpacing: 2, textTransform: "uppercase", color: "#969ba5" }}>
        {profile.role}
      </div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 152, lineHeight: 0.88, letterSpacing: -6 }}>
        <div style={{ display: "flex" }}>Karl Naio</div>
        <div style={{ display: "flex", paddingLeft: 190 }}>Edio</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#969ba5" }}>
        <div style={{ display: "flex" }}>{profile.location}</div>
        <div style={{ display: "flex" }}>{host}</div>
      </div>
    </div>,
    { ...size },
  );
};

export default OpengraphImage;
