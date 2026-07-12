import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";
import toIco from "to-ico";

const root = process.cwd();
const logoSvg = readFileSync(join(root, "public/icon-512x512.svg"));
const appDir = join(root, "src/app");

const sizes = [16, 32, 48];
const pngBuffers = await Promise.all(
  sizes.map((size) => sharp(logoSvg).resize(size, size).png().toBuffer()),
);

writeFileSync(join(appDir, "favicon.ico"), await toIco(pngBuffers));

await sharp(logoSvg).resize(180, 180).png().toFile(join(appDir, "apple-icon.png"));

writeFileSync(join(appDir, "icon.svg"), logoSvg);

console.log("Favicons generated from public/icon-512x512.svg");
