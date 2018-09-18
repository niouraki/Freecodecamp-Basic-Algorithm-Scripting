//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

//Remember to use Read-Search-Ask if you get stuck. Write your own code.
function chunkArrayInGroups(arr, size) {
  var myArray = [];
  for (let i=0; i<arr.length; i=i+size) {
    myArray.push(arr.slice(i,i+size));
    }
  return myArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
