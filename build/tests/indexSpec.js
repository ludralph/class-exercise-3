"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_1 = __importDefault(require("../utilities/arrays"));
var numbers_1 = __importDefault(require("../utilities/numbers"));
var strings_1 = __importDefault(require("../utilities/strings"));
describe("tests for all functions in utilities folder", function () {
    it("expect addArr([3,4,5,6]) to be 18", function () {
        expect(arrays_1.default.addArr([3, 4, 5, 6])).toBe(18);
    });
    it("expect concatArr([2],[1]) to equal [2,1]", function () {
        expect(arrays_1.default.concatArr([2], [1])).toEqual([2, 1]);
    });
    it("expect cut3([2,3,4,5]) to Be Truthy", function () {
        expect(arrays_1.default.cut3([2, 3, 4, 5])).toBeTruthy();
    });
    it("expect lgNum([27, 9, 15, 200]) not to equal 200 ", function () {
        expect(arrays_1.default.lgNum([27, 9, 15, 200])).not.toEqual(27);
    });
    it("expect sum(4, 2) to be greater than 4", function () {
        expect(numbers_1.default.sum(4, 2)).toBeGreaterThan(4);
    });
    it("expect multiply(6, 5) to be less than 40", function () {
        expect(numbers_1.default.multiply(6, 5)).toBeLessThan(40);
    });
    it("expect capitalize('i am a strong woman') to be a NaN", function () {
        expect(strings_1.default.capitalize('i am a strong woman')).not.toBeNaN();
    });
});
