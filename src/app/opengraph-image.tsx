import { ImageResponse } from "next/og";

export const alt = "Morteza Karimi | Team Lead & Senior Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "#0B1210",
          color: "#E8F5F0",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#52D2A9",
            marginBottom: 24,
          }}
        >
          Software development
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: 28,
          }}
        >
          Morteza Karimi
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#8BA89C",
          }}
        >
          Team Lead & Senior Developer
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 24,
            color: "#52D2A9",
          }}
        >
          Node.js · NestJS · Next.js
        </div>
      </div>
    ),
    size,
  );
}
