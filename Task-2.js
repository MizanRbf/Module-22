// You are given an array of numbers. Count how many unique numbers are there in the array.

// function unique(numbers1){

//   let unique = [];
//   for(let num of numbers1){
//     if(!unique.includes(num)){
//      unique.push(num);
//     }
//   }
//   return unique.length;
// }
// let result = unique([5, 6, 11, 12, 12, 44, 46, 46]);
// console.log(result);

// You are given an array of numbers. Count how many times a number is repeated in the array.

function countOccurrences(numbers, find){
  let count = 0;
  // for (let num of numbers){
  //   if(num === find)
  //   count++;
  // }
  for(let i = 0; i < numbers.length; i++){
    let num = numbers[i];
    if(num === find){
      count++;
    }
  }
  return count;
}
let numbers = [5, 6, 11, 11, 12, 98, 5];
console.log(countOccurrences(numbers, 11));