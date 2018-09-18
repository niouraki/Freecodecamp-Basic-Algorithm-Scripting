//Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

//Remember to use Read-Search-Ask if you get stuck. Write your own code.
//The ireration starts from 0
function repeatStringNumTimes(str, num) {
  let repeating = '';
  while(num > 0) {
    repeating += str;
    num = num - 1;
  }
  return repeating;
}

repeatStringNumTimes("abc", 3);

//Simpler solution
//function repeatStringNumTimes(str, num) {
  //if(num > 0) {
    //return str.repeat(num);
  //} else if (num < 0) {
    //return str = '';
  //}
//}

//repeatStringNumTimes("abc", 3);
