const arrays = require('../utilities/arrays.js');
const numbers = require('../utilities/numbers.js');
const strings = require('../utilities/strings.js');

const numArr: number[]  = [3,4,5,6];
const wordArr: string[] = ['cat', 'dog', 'rabbit', 'bird'];
const arrSum :number[] = arrays.addArr(numArr);
const mixArr: [number, string] = arrays.concatArr(numArr, wordArr);
const myNum: number = ('15' as unknown) as number % 2;

console.log(arrays.cut3(mixArr));
console.log(numbers.sum(arrSum, myNum));
 console.log(strings.capitalize('the quick brown fox'));
 console.log(numbers.multiply(('5' as unknown) as number, 8));
 console.log(arrays.lgNum(mixArr));
