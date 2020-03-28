const request = require("supertest");
const app = require("./app");

describe("Root path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

// describe("Test the root path", () => {
//   test("It should response the GET method", async () => {
//     const response = await request(app).get("/");
//     expect(response.statusCode).toBe(200);
//   });
// });

// describe("Test the root path", () => {
//   test("It should response the GET method", () => {
//     return request(app)
//       .get("/")
//       .then(response => {
//         expect(response.statusCode).toBe(200);
//       });
//   });
// });