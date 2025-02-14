// Write a function to find the longest word in a given string.

function longestWord (str){

   let str2 = str.split(" ");
   let biggestWord = "";
  for(let i = 0; i < str2.length; i++){
    if(str2[i].length > biggestWord.length){
      biggestWord = str2[i];
    }
  }
  return biggestWord;
}

console.log(longestWord("I am learning Programming to become a programmer"))