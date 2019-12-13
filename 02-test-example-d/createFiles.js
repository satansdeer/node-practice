const fs = require("fs");
const { promisify } = require("util");
const logger = require("./logger");

const openAsync = promisify(fs.open);
const closeAsync = promisify(fs.close);

async function createFile(filePath) {
  logger(`createFile: ${filePath}` + "\n");
  const file = await openAsync(filePath, "w");
  await closeAsync(file);
  logger(`done: ${filePath}` + "\n");
}

module.exports = async function createFiles(files) {
  logger(`Create Files` + "\n");
  await Promise.all(files.map(createFile));
  logger(`All files created` + "\n");
};
