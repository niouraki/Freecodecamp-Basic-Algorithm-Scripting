//Reverse the provided string.

//You may need to turn the string into an array before you can reverse it.

//Your result must be a string.

//Remember to use Read-Search-Ask if you get stuck. Write your own code.

function reverseString(str) {
  let newStr = str.split('').reverse().join('');
  console.log(newStr);
  return newStr;
}

reverseString("hello");
