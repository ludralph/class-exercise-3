const addArr = (arr) => {
    let total = 0
    arr.forEach((x) => {
        total += x;
      })
    return total;
  
  }
  
  // remove the 3rd item from array
  const cut3 = (arr) => {
    arr.splice(2, 1);
    return arr
  }

   // concatenate two arrays
   const concatArr = (arr1, arr2) => {
    return [...arr1, ...arr2]
  }

  const lgNum = (arr) => {
    let largest = 0;
    arr.forEach((x) => {
      if(x > largest){
        largest = x;
      }
    })
    return largest;
  
  }

  module.exports = {
    addArr,
    cut3,
    concatArr,
    lgNum

  }