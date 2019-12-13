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
    expect(stdout).toEqual(
      `Create Files
createFile: ./data/A.txt
createFile: ./data/B.txt
done: ./data/A.txt
done: ./data/B.txt
All files created
`
    );
  });

  it("creates specified files", async () => {
    await runCommand(`${APP_PATH} ./data/A.txt ./data/B.txt`);
    const tree = dirTree("./data");
    const fileList = tree.children.map(file => file.path).join(" ");

    expect(fileList).toEqual('data/A.txt data/B.txt');
  });
});
