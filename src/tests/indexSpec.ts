import { numArr, largeNumber, sum, concat, cutStr } from "../../index";
import { wordArr } from "../../utility/arrays";

describe('expects a collection of simple arithmetic functions', () => { 
  it ('expects sums the number in an array', () =>{
    expect(sum(numArr)).toBeDefined()
  })

  it ('expects to get the largest number in an array', ()=>{
    expect(largeNumber(numArr)).toBeGreaterThan(0)
  })

  it ('expects to merge return a single array', () => {
    expect(concat(['hello'], ['world'])).toEqual(['hello', 'world'])
  })

  it ('expects to remove the 3rd item in an array', () => {
    expect(cutStr(wordArr)).not.toBeFalsy()
  })
 })