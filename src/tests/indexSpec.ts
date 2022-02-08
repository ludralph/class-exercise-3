const array = require("../../utilities/arrays.js");
const number = require("../../utilities/numbers.js");
const string = require("../../utilities/strings.js")



describe('test all functions', () => {
    it("expects add arry to equal a number", () =>{
        expect(array.addArr([10,10])).toEqual(20)
    })
    it("expects cut3 to equal to be a non zero value", () =>{
        expect(array.cut3([1,2,3,4,5])).toBeTruthy()
    })
    it("expects concatArr to not be falsy", () =>{
        expect(array.concatArr([1,2,3,4,5], [0,9,8,7,6])).not.toBeFalsy()
    })
    it("expects lgNum to be greater than an expected number", () =>{
        expect(array.lgNum([20,10])).toBeGreaterThan(10)
    })
    it("expects sum to be less than an expected number", () =>{
        expect(number.sum(1,2)).toBeLessThan(5)
    })
    it("expects sum to be greater then or equal to an expected number", () =>{
        expect(number.multiply(5,5)).toBeGreaterThanOrEqual(25)
    })
    it("expects capitalize to be  expected string", () =>{
        expect(string.capitalize("Hello")).toBe("HELLO")
    })
    
})