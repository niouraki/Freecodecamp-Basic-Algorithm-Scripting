//Return the length of the longest word in the provided sentence.

//Your response should be a number.

//Remember to use Read-Search-Ask if you get stuck. Write your own code.

//First I split the string into arrays then I use reduce on each array
//Recude compares the length and keeps the longer
function findLongestWordLength(str) {
  let myString = str.split(' ');
  let sorted = myString.reduce(
    (a, b) => a.length >= b.length ? a : b
  );

  console.log(sorted);


  return sorted.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
