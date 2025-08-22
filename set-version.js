const fs = require('fs');
const pkg = require('./package.json');

const file = 'index.html';
const version = `Version: v${pkg.version}`;
let html = fs.readFileSync(file, 'utf8');
html = html.replace(/Version: v[0-9.]+/, version);
fs.writeFileSync(file, html);
console.log(`Updated ${file} to ${version}`);
