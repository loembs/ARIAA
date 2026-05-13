import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Copy index.html to dist/client
const srcHtml = path.resolve(__dirname, '../index.html');
const destHtml = path.resolve(__dirname, '../dist/client/index.html');

if (fs.existsSync(srcHtml)) {
  let html = fs.readFileSync(srcHtml, 'utf-8');

  // Find the main JS file
  const assetsDir = path.resolve(__dirname, '../dist/client/assets');
  const files = fs.readdirSync(assetsDir);
  const mainJs = files.find(f => f.startsWith('index-') && f.endsWith('.js') && !f.includes('-C3a-'));

  if (mainJs) {
    html = html.replace(/\/assets\/index-.*\.js/, `/assets/${mainJs}`);
  }

  fs.writeFileSync(destHtml, html);
  console.log('✓ Post-build completed for Vercel');
} else {
  console.log('⚠ index.html not found, skipping post-build');
}
