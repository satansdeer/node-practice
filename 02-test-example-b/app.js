#!/usr/bin/env node

const fs = require("fs");
const { promisify } = require("util");

const openAsync = promisify(fs.open);
const closeAsync = promisify(fs.close);

async function createFile(filePath) {
  console.log("createFile:", filePath);
  const file = await openAsync(filePath, "w");
  await closeAsync(file);
  // fs.closeSync(fs.openSync(filePath))
  console.log("done:", filePath);
}

async function createFiles(files) {
  console.log("Create Files");
  await Promise.all(files.map(createFile));
  console.log("All files created");
}

const args = process.argv.slice(2);

createFiles(args);
