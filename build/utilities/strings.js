"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// capitalize the sentence
var capitalize = function (string) {
    var splitString = string.toLowerCase().split(' ');
    for (var i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
    }
    return splitString.join(' ');
};
exports.default = {
    capitalize: capitalize
};
