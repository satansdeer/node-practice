const request = require("supertest");

describe("Server", () => {
  beforeEach(() => {
    server = require("./server");
  });

  afterEach(done => {
    server.close(done);
  });

  it("responds 200 to GET method", done => {
    request(server)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  it("responds 404", function testPath(done) {
    server = require("./server");
    request(server)
      .get("/foo/bar")
      .expect(404, done);
  });
});
