/** find the longest string in the sentnce..
 *
 */
// const str = "Hey learning Javascript. it is synchronous.";
//-------------------------------------------------------------------------------
// function findLongestString(str) {
//     if(str.trim().length===0) return false;
//     const words= str.split(' ');
//     let longestWord = words.reduce((longest,currentWord)=>{
//          return currentWord.length>longest.length?currentWord:longest;
//     },'')
//     return longestWord;
// }
// console.log(findLongestString(str));
// ---------------------------------------------------------------------------
// function findLongestString(str){
//     if(str.trim().length===0) return false;
//     const words = str.split(' ');

//     for ( let  i =0;i<words.length;i++){
//         for (let j=i+1; j<words.length;j++){
//             if(words[i].length<words[j].length){
//                 let temp  = words[i];
//                 words[i]=words[j];
//                 words[j]=temp;
//             }
//         }
//         break;
//     }
//     return words[0];
// }
// console.log(findLongestWord(str));
// "My initial approach uses two loops, but because I break the outer loop after its first
//  iteration, the actual time complexity is O(n), not O(n²). However, I'm unnecessarily
// modifying the array by swapping elements. We can optimize the implementation by maintaining
// a reference to the longest word, which keeps the same O(n) time complexity while reducing unnecessary operations."
// ----------------------------------------------------------------------------------------------------------------
// function findLongestWord(str) {
//   if (str.trim().length === 0) return false;
//   const words = str.split(" ");

//   let longestWord = "";
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// }
// -------------------------------------------------------------------------------
// function findLongestWord(str) {
//   if (str.trim().length === 0) return false;
//   const words = str.split(" ").sort((a, b) => b.length - a.length);
//   console.log(words);
//   return words[0];
// }
//===========================================================================================
//## create a function which generate hash tag for given input string . if the length of the string is greater then 280 or it is 0 that string will be neglected. str='my name ramessh lal' output====> '#MyNameIsRamesshLal'
const str = "My name is Ramessh lal i am from katihar.";

// function generateHashString(str) {
//   if (str.length > 280 || str.trim().length === 0) return false;
//   const words = str.split(" ");
//   //   console.log(words);
//   let hashedWord = "#";
//   for (let i = 0; i < words.length; i++) {
//     hashedWord = hashedWord + words[i].at(0).toUpperCase() + words[i].slice(1);
//   }
//   return hashedWord;
// }
console.log(generateHashString(str));

function generateHashString(str) {
  if (str.length > 280 || str.trim().length === 0) return false;
  const words = str
    .split(" ")
    .map((currentWord) =>
      currentWord.replace(currentWord[0], currentWord[0].toUpperCase())
    );
  const hashedString = `#${words.join("")}`;
  console.log(hashedString);
}
