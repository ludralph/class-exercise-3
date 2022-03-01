"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cutStr = exports.concat = exports.sum = exports.largeNumber = exports.numArr = void 0;
const arrays_1 = require("./utility/arrays");
Object.defineProperty(exports, "numArr", { enumerable: true, get: function () { return arrays_1.numArr; } });
const numbers_1 = require("./utility/numbers");
Object.defineProperty(exports, "largeNumber", { enumerable: true, get: function () { return numbers_1.largeNumber; } });
Object.defineProperty(exports, "sum", { enumerable: true, get: function () { return numbers_1.sum; } });
const strings_1 = require("./utility/strings");
Object.defineProperty(exports, "concat", { enumerable: true, get: function () { return strings_1.concat; } });
Object.defineProperty(exports, "cutStr", { enumerable: true, get: function () { return strings_1.cutStr; } });
const FIND_SUM = (0, numbers_1.sum)(arrays_1.numArr);
const LARGE_NUM = (0, numbers_1.largeNumber)(arrays_1.numArr);
const CONCAT_ARR = (0, strings_1.concat)(['hello'], ['world']);
const CUT = (0, strings_1.cutStr)([1, 2, 3, 4, 5]);
console.log({
    sum: FIND_SUM,
    concat: CONCAT_ARR,
    largeNumber: LARGE_NUM,
    cut3: CUT
});
