function sumOfTwoSmallestNums(arr){
    let sortArr = arr.sort((a,b) => a-b)
    let result = sortArr[0] + sortArr[1]
    return result
} 

console.log(sumOfTwoSmallestNums([80, 33, 44,55,1,2,14])); 
// to return 3
console.log(sumOfTwoSmallestNums([12,34,23,12,67])); 
// to return 24 
console.log(sumOfTwoSmallestNums([999,234,567,78,2])); 
    // to return 80 

module.exports = sumOfTwoSmallestNums


