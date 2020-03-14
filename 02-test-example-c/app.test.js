const runCommand = require("./utils");
const dirTree = require("directory-tree");

const mock = require("mock-fs");

const APP_PATH = require.resolve("./app");

describe("app", () => {
  (() => {
    mock({
      "./data": {}
    });
  });
  afterEach(mock.restore);

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
