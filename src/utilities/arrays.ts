import numbers from "./numbers";

// add the numbers in the array
const addArr = (num: number[]) => {

    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += num[i];
    }
    return sum;
}

// concat two arrays
const concatArr = (arr: (string | number)[], arr1: (string | number)[]): (string | number)[] => {
    return [...arr, ...arr1];
}

// cut 3rd item from the array
const cut3 = (array: (string | number)[]) => {
    array.splice(2, 1);
    return array;
}

// find largest number in an array
const lgNum = (arr: (string | number)[]): number | string => {
    let largestNumber: (string | number) = 0;
    for(let i = 0; i <= largestNumber; i++) {
        if (arr[i] > largestNumber) {
            largestNumber = arr[i];
        }
    }
    return largestNumber;

}


export default{
    addArr,
    concatArr, 
    cut3,
    lgNum
};
