/*
Description:
Complete the solution so that it reverses all of the words within the string passed in.

Example:

"The greatest victory is that which requires no battle" --> "battle no requires  */

function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}

// const reverseWords = (str) => str.split(" ").reverse().join(" ");