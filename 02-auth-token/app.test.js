const chai = require("chai");
const expect = chai.expect;

const app = require("./app");

const http = require("chai-http");
chai.use(http);

describe("App basic tests", () => {
  it("Should exists", () => {
    expect(app).to.be.a("function");
  });

  it("/GET returns 200 and a message", done => {
    chai
      .request(app)
      .get("/")
      .then(res => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.be.equal("Hello!");

        done();
      })
      .catch(err => {
        console.log(err);
      });
  });
});

describe("User registration", () => {
  it("/register returns 201 and confirmation for valid input", done => {
    let user_input = {
      name: "John Wick",
      email: "john@wick.com",
      password: "secret"
    };

    chai
      .request(app)
      .post("/register")
      .send(user_input)
      .then(res => {
        expect(res).to.have.status(201);
        expect(res.body.message).to.be.equal("User registered");
        done();
      })
      .catch(err => {
        console.log(err);
      });
  });

  it("/register returns 401 for invalid input", done => {
    let user_invalid_input = {
      name: "John Wick",
      email: "",
      password: "secret"
    };

    chai
      .request(app)
      .post("/register")
      .send(user_invalid_input)
      .then(res => {
        expect(res).to.have.status(401);
        expect(res.body.errors.length).to.be.equal(1);

        done();
      })
      .catch(err => {
        console.log(err);
      });
  });
});

describe("User login", () => {
  it("returns 200 and token for valid credentials", done => {
    const valid_input = {
      email: "john@wick.com",
      password: "secret"
    };

    chai
      .request(app)
      .post("/login")
      .send(valid_input)
      .then(res => {

        expect(res).to.have.status(200);
        expect(res.body.token).to.exist;
        expect(res.body.message).to.be.equal("Auth OK");
        expect(res.body.errors.length).to.be.equal(0);
        done();
      })
      .catch(err => {
        console.log(err.message);
      });
  });
});
