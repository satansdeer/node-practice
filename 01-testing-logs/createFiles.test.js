const logger = require("./logger");
jest.mock("./logger");
const dirTree = require("directory-tree");
const createFiles = require("./createFiles");

const mock = require("mock-fs");

describe("createFiles", () => {
  beforeEach(() => {
    mock({
      "./data": {}
    });
  });
  afterEach(() => {
    mock.restore();
    jest.restoreAllMocks();
  });

  it("outputs info about created files", async () => {
    await createFiles(["./data/A.txt", "./data/B.txt"]);
    // expect(logger.mock.calls).toEqual([
    //   ["Create Files\n"],
    //   ["createFile: ./data/A.txt\n"],
    //   ["createFile: ./data/B.txt\n"],
    //   ["done: ./data/A.txt\n"],
    //   ["done: ./data/B.txt\n"],
    //   ["All files created\n"]
    // ]);
    expect(logger.mock.calls).toMatchSnapshot();
  });

  it("creates specified files", async () => {
    await createFiles(["./data/A.txt", "./data/B.txt"]);
    const tree = dirTree("./data");

    expect(tree).toMatchSnapshot();
  });
});
