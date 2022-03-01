"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cutStr = exports.concat = void 0;
// concatenate two arrays
const concat = (arr1, arr2) => {
    return [...arr1, ...arr2];
};
exports.concat = concat;
// remove the 3rd item from array
const cutStr = (arr) => {
    arr.splice(2, 1);
    return arr;
};
exports.cutStr = cutStr;
