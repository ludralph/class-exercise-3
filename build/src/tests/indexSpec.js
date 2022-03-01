"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const arrays_1 = require("../../utility/arrays");
describe('expects a collection of simple arithmetic functions', () => {
    it('expects sums the number in an array', () => {
        expect((0, index_1.sum)(index_1.numArr)).toBeDefined();
    });
    it('expects to get the largest number in an array', () => {
        expect((0, index_1.largeNumber)(index_1.numArr)).toBeGreaterThan(0);
    });
    it('expects to merge return a single array', () => {
        expect((0, index_1.concat)(['hello'], ['world'])).toEqual(['hello', 'world']);
    });
    it('expects to remove the 3rd item in an array', () => {
        expect((0, index_1.cutStr)(arrays_1.wordArr)).not.toBeFalsy();
    });
});
