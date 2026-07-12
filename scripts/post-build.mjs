import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "out");
const enDir = join(outDir, "en");

if (!existsSync(enDir)) {
  console.log("post-build: no out/en directory, skipping English flatten.");
  process.exit(0);
}

for (const entry of readdirSync(enDir)) {
  if (entry === ".DS_Store") continue;

  const source = join(enDir, entry);
  const target = join(outDir, entry);
  cpSync(source, target, { recursive: true, force: true });
}

rmSync(enDir, { recursive: true, force: true });

const redirectHtml = (target) =>
  `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Redirecting…</title><link rel="canonical" href="${target}"><meta http-equiv="refresh" content="0;url=${target}"><script>location.replace("${target}")</script></head><body><p><a href="${target}">Continue</a></p></body></html>`;

const legacyRoutes = [
  { path: "en", target: "/" },
  { path: "en/about", target: "/about/" },
  { path: "en/skills", target: "/skills/" },
  { path: "en/contact", target: "/contact/" },
];

for (const { path, target } of legacyRoutes) {
  const dir = join(outDir, path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), redirectHtml(target));
}

console.log("post-build: English pages flattened to site root.");
