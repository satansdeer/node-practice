const runCommand = require("./utils");
const fsExtra = require("fs-extra");
const dirTree = require("directory-tree");

const APP_PATH = require.resolve("./app");

describe("app", () => {
  afterEach(() => {
    fsExtra.emptyDirSync("./data");
  });

  it("outputs info about created files", async () => {
    const stdout = await runCommand(`${APP_PATH} ./data/A.txt ./data/B.txt`);
    expect(stdout).toMatchSnapshot();
  });

  it("creates specified files", async () => {
    await runCommand(`${APP_PATH} ./data/A.txt ./data/B.txt`);

    const tree = dirTree("./data");
    expect(tree).toMatchSnapshot();
  });
});
