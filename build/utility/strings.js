"use strict";
// concatenate two arrays
const concat = (arr1, arr2) => {
    return [...arr1, ...arr2];
};
// remove the 3rd item from array
const cutStr = (arr) => {
    arr.splice(2, 1);
    return arr;
};
module.exports = { concat, cutStr };
