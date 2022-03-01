
// concatenate two arrays
const concat = (arr1: string[], arr2: string[]) : string[] => {
  return [...arr1, ...arr2]
}


// remove the 3rd item from array
const cutStr = (arr: number[] | string[]) : number[] | string[] => {
  arr.splice(2, 1);
  return arr
}

export {concat, cutStr}