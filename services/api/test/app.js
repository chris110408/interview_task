const request = require("supertest");
const app = require("../app");
var assert = require("assert");

describe("Test Call API", () => {
  it("/api/events should work", done => {
    request(app)
      .get("/api/customers")
      .expect(200)
      .end(function(err, res) {
        done();
      });
  });
});
