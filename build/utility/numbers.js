"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.largeNumber = exports.sum = void 0;
// add numbers in an array
const sum = (arr) => {
    let total = 0;
    arr.forEach((x) => {
        total += x;
    });
    return total;
};
exports.sum = sum;
// find the largest number in an array
const largeNumber = (arr) => {
    let largest = 0;
    arr.forEach((x) => {
        if (x > largest) {
            largest = x;
        }
    });
    return largest;
};
exports.largeNumber = largeNumber;
