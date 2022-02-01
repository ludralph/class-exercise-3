// add numbers in an array
const sum = (arr, num) => {
    let total = 0;
    arr.forEach((x) => {
      total += x;
    })
    return total + num
  }
  
  const multiply = (a, b) =>{
      return a*b
  }
 
  

  module.exports = {
      sum,
      multiply,
  }