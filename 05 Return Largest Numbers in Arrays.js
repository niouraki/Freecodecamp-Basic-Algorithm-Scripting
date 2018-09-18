//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

//Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

//Remember to use Read-Search-Ask if you get stuck. Write your own code.

function largestOfFour(arr) {
  let newArray = [];
  // You can do this!

  let firstArray = Math.max.apply(Math, arr[0]);
  let secondArray = Math.max.apply(Math, arr[1]);
  let thirdArray = Math.max.apply(Math, arr[2]);
  let fourthArray = Math.max.apply(Math, arr[3]);

  newArray.push(firstArray, secondArray, thirdArray, fourthArray);
  console.log(newArray);


  return newArray;

}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
