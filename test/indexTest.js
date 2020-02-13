const assert = require("chai").assert;
const app = require("../index.js");

describe("app", () => {
    it("app should return hello", () => {
        assert.equal(app(), "hello");
    });
});
