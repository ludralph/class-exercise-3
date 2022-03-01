

// add numbers in an array
const sum = (arr: number[]) : number => {
  let total = 0;
  arr.forEach((x) => {
    total += x;
  })
  return total
}

// find the largest number in an array
const largeNumber = (arr: number[]) : number => {
  let largest = 0;
  arr.forEach((x) => {
    if(x > largest){
      largest = x;
    }
  })
  return largest;

}
export {sum, largeNumber}