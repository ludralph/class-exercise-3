import { numArr } from "./utility/arrays"
import { largeNumber, sum } from "./utility/numbers"
import { concat, cutStr } from "./utility/strings"

const FIND_SUM = sum(numArr)
const LARGE_NUM = largeNumber(numArr)
const CONCAT_ARR = concat(['hello'], ['world'])
const CUT = cutStr([1,2,3,4,5])

console.log({
  sum: FIND_SUM,
  concat: CONCAT_ARR,
  largeNumber: LARGE_NUM,
  cut3: CUT
})

export {numArr, largeNumber, sum, concat, cutStr}
