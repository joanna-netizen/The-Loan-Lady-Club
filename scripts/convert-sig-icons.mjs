#!/usr/bin/env node
import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const imagesDir = join(__dirname, '..', 'public', 'images');

const icons = ['sig-phone', 'sig-email', 'sig-globe', 'sig-location', 'sig-facebook', 'sig-instagram'];

for (const name of icons) {
  const svgPath = join(imagesDir, `${name}.svg`);
  const pngPath = join(imagesDir, `${name}.png`);
  try {
    const svg = readFileSync(svgPath);
    await sharp(svg)
      .resize(name.includes('facebook') || name.includes('instagram') ? 28 : 14)
      .png()
      .toFile(pngPath);
    console.log(`Created ${name}.png`);
  } catch (e) {
    console.error(`Failed ${name}:`, e.message);
  }
}
