const assert = require("chai").assert;
const { sayHello, addNumbers } = require("../index.js");
const { dist, triArea, triHypotLen } = require("../math");

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

describe("math", () => {
    describe("distance", () => {
        it("dist between same points (0,0) should be 0", () => {
            assert.equal(dist(0, 0, 0, 0), 0);
        });
        it("dist between same points (1,1) should be 0", () => {
            assert.equal(dist(1, 1, 1, 1), 0);
        });
        it("dist between same points (-1,-1) should be 0", () => {
            assert.equal(dist(-1, -1, -1, -1), 0);
        });
        it("dist between same points (2, 5) should be 0", () => {
            assert.equal(dist(2, 5, 2, 5), 0);
        });

        it("dist between different points should be accurate", () => {
            assert.equal(dist(0, 3, 4, 0), 5);
        });
        it("dist between different points should be accurate", () => {
            assert.equal(dist(3, 0, 0, 4), 5);
        });
        it("dist between different points should be approximately accurate", () => {
            assert.approximately(dist(1, 2, 5, 6), 5.6569, 0.1);
        });
        it("dist between different points should be approximately accurate", () => {
            assert.approximately(dist(4, 5, 2, 1), 4.4721, 0.1);
        });

        it("dist between different points should be NaN for invalid params", () => {
            assert.isNaN(triArea("hello", 1));
        });
        it("dist between different points should be NaN for invalid params", () => {
            assert.isNaN(triArea("0", 1));
        });
        it("dist between different points should be NaN for invalid params", () => {
            assert.isNaN(triArea("0", "1"));
        });
        it("dist between different points should be NaN for invalid params", () => {
            assert.isNaN(triArea(null, 0));
        });
        it("dist between different points should be NaN for invalid params", () => {
            assert.isNaN(triArea("", 1));
        });
    });

    describe("triangle area", () => {
        it("area of triagle should be accurate", () => {
            assert.equal(triArea(4, 5), 10);
        });
        it("area of triagle should be accurate", () => {
            assert.equal(triArea(3, 4), 6);
        });
        it("area of triagle should be accurate", () => {
            assert.equal(triArea(5, 4), 10);
        });
        it("area of triagle should be accurate", () => {
            assert.equal(triArea(4, 3), 6);
        });

        it("area of triagle should be NaN when leg length is negative or 0", () => {
            assert.isNaN(triArea(4, -3));
        });
        it("area of triagle should be NaN when leg length is negative or 0", () => {
            assert.isNaN(triArea(-4, 3));
        });
        it("area of triagle should be NaN when leg length is negative or 0", () => {
            assert.isNaN(triArea(0, 1));
        });
        it("area of triagle should be NaN when leg length is negative or 0", () => {
            assert.isNaN(triArea(1, 0));
        });

        it("area of triagle should be NaN when args are not a number", () => {
            assert.isNaN(triArea("hello", 0));
        });
        it("area of triagle should be NaN when args are not a number", () => {
            assert.isNaN(triArea("1", 0));
        });
    });

    describe("triangle hypotenuse length", () => {
        it("hypotenuse length should be accurate for valid lengths", () => {
            assert.equal(triHypotLen(3, 4), 5);
        });
        it("hypotenuse length should be accurate for valid lengths", () => {
            assert.equal(triHypotLen(4, 3), 5);
        });
        it("hypotenuse length should be accurate for valid lengths", () => {
            assert.equal(triHypotLen(30, 40), 50);
        });
        it("hypotenuse length should be accurate for valid lengths", () => {
            assert.equal(triHypotLen(80, 60), 100);
        });

        it("hypotenuse length should be a number", () => {
            assert.typeOf(triHypotLen(80, 60), "number");
        });

        it("hypotenuse length should be NaN when args are <= 0", () => {
            assert.isNaN(triHypotLen(0, 0));
        });
        it("hypotenuse length should be NaN when args are <= 0", () => {
            assert.isNaN(triHypotLen(0, 1));
        });
        it("hypotenuse length should be NaN when args are <= 0", () => {
            assert.isNaN(triHypotLen(-1, 2));
        });
        it("hypotenuse length should be NaN when args are <= 0", () => {
            assert.isNaN(triHypotLen(-1, -2));
        });

        it("hypotenuse length should be NaN when args are non numbers", () => {
            assert.isNaN(triHypotLen("hello", 1));
        });
        it("hypotenuse length should be NaN when args are non numbers", () => {
            assert.isNaN(triHypotLen("0", 1));
        });
        it("hypotenuse length should be NaN when args are non numbers", () => {
            assert.isNaN(triHypotLen("", 1));
        });
        it("hypotenuse length should be NaN when args are non numbers", () => {
            assert.isNaN(triHypotLen(NaN, 1));
        });
        it("hypotenuse length should be NaN when args are non numbers", () => {
            assert.isNaN(triHypotLen(1, null));
        });
    });
});
