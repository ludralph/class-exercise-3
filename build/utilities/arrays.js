"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
// add the numbers in the array
var addArr = function (num) {
    var sum = 0;
    for (var i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return sum;
};
// concat two arrays
var concatArr = function (arr, arr1) {
    return __spreadArray(__spreadArray([], arr, true), arr1, true);
};
// cut 3rd item from the array
var cut3 = function (array) {
    array.splice(2, 1);
    return array;
};
// find largest number in an array
var lgNum = function (arr) {
    var largestNumber = 0;
    for (var i = 0; i <= largestNumber; i++) {
        if (arr[i] > largestNumber) {
            largestNumber = arr[i];
        }
    }
    return largestNumber;
};
exports.default = {
    addArr: addArr,
    concatArr: concatArr,
    cut3: cut3,
    lgNum: lgNum
};
