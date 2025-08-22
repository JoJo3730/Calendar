const fs = require('fs');

const pkgPath = './package.json';
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

function bumpPatch(version) {
  const parts = version.split('.').map(Number);
  parts[2] = (parts[2] || 0) + 1;
  return parts.join('.');
}

pkg.version = bumpPatch(pkg.version);
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');

const file = 'index.html';
const version = `Version: v${pkg.version}`;
let html = fs.readFileSync(file, 'utf8');
html = html.replace(/Version: v[0-9.]+/, version);
fs.writeFileSync(file, html);
console.log(`Updated ${file} to ${version}`);
