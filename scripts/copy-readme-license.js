#!/usr/bin/env node
const path = require('path');
const fs = require('fs-extra');
const source = path.resolve(`${__dirname}/../`);
const dest = path.resolve(`${__dirname}/../dist/pointerstack/ngx-cookie-storage/`);
const readmeFileSrc = path.resolve(`${source}/README.md`);
const licenseFileSrc = path.resolve(`${source}/LICENSE`);
console.log(`[INFO] Copying README.md...`);
console.log(readmeFileSrc);
console.log(dest);
// process.exit();
fs.copySync(readmeFileSrc, path.resolve(dest, 'README.md'));
console.log(`[INFO] Copied README.md`);
console.log(`[INFO] Copying LICENSE...`);
fs.copySync(licenseFileSrc, path.resolve(dest, 'LICENSE'));
console.log(`[INFO] Copied LICENSE`);
console.log(`[INFO] Copying files is done.`);
