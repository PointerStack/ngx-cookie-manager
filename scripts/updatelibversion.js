#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const rootPkg = require('./../package.json');
const libPkg = require('./../projects/pointerstack/ngx-cookie-storage/package.json');
libPkg.version = rootPkg.version;
const destLibPkg = path.resolve(__dirname, './../projects/pointerstack/ngx-cookie-storage/package.json');
console.log(JSON.stringify(libPkg));
fs.writeFileSync(destLibPkg, JSON.stringify(libPkg, null, 2), 'utf-8');
console.log(`[INFO] Package version succesfully updated ${destLibPkg}`);
