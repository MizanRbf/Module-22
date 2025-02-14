// Write a function to count the number of vowels in a string.

function countVowels(str){
let count = 0;
let vowels = "aeiouAEIOU";
for(let i = 0; i < str.length; i++){
  if(vowels.includes(str[i])){
    count++;
  }
}
return count;
}
console.log(countVowels("I am a student. And You Are a Teacher"))