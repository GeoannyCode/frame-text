#!/usr/bin/env node

let frametext = require('../src/index.js');

// const text = 'Hello';

const text = process.argv[2];

console.log(frametext.frameText(text));