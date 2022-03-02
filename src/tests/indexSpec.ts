import arrays from "../utilities/arrays";
import numbers from "../utilities/numbers";
import strings from "../utilities/strings"; 

describe("tests for all functions in utilities folder", () => {
    it("expect addArr([3,4,5,6]) to be 18", () => {
        expect(arrays.addArr([3,4,5,6])).toBe(18);
    });

    it("expect concatArr([2],[1]) to equal [2,1]", () => {
        expect(arrays.concatArr([2],[1])).toEqual([2,1]);
    });

    it("expect cut3([2,3,4,5]) to Be Truthy", () => {
        expect(arrays.cut3([2,3,4,5])).toBeTruthy();
    });

    it("expect lgNum([27, 9, 15, 200]) not to equal 200 ", () => {
        expect(arrays.lgNum([27, 9, 15, 200])).not.toEqual(27);
    });

    it("expect sum(4, 2) to be greater than 4", () => {
        expect(numbers.sum(4, 2)).toBeGreaterThan(4);
    });

    it("expect multiply(6, 5) to be less than 40", () => {
        expect(numbers.multiply(6, 5)).toBeLessThan(40);
    });

    it("expect capitalize('i am a strong woman') to be a NaN", () => {
        expect(strings.capitalize('i am a strong woman')).not.toBeNaN();
    });
});