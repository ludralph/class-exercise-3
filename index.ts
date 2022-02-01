
const arrays = require ('./utility/arrays')
const numbers = require('./utility/numbers')
const strings = require('./utility/strings')

const FIND_SUM = numbers.sum(arrays.numArr)
const LARGE_NUM = numbers.largeNumber(arrays.numArr)
const CONCAT_ARR = strings.concat(['hello'], ['world'], [' !'])
const CUT = strings.cutStr([1,2,3,4,5])

console.log({
  sum: FIND_SUM,
  concat: CONCAT_ARR,
  largeNumber: LARGE_NUM,
  cut3: CUT
})


