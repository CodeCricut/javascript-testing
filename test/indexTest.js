const assert = require("chai").assert;
const { sayHello, addNumbers } = require("../index.js");

describe("app", () => {
    describe("sayHello", () => {
        it("sayHello should return hello", () => {
            assert.equal(sayHello(), "hello");
        });

        it("sayHello should return type string", () => {
            assert.typeOf(sayHello(), "string");
        });
    });
    describe("addNumbers", () => {
        for (let i = -10; i < 10; i++) {
            it(`addNumbers(${i}, ${i + 5}) should return the sum of ${i +
                i +
                5}.`, () => {
                assert.equal(addNumbers(i, 5 + i), i + 5 + i);
            });
        }

        it("addNumbers should return type number", () => {
            assert.typeOf(addNumbers(-2, 5), "number");
        });
    });
});
