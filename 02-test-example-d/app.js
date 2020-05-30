#!/usr/bin/env node

const createFiles = require("./createFiles");

const args = process.argv.slice(2);

createFiles(args);
