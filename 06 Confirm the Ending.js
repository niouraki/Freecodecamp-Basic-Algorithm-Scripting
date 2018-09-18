//Check if a string (first argument, str) ends with the given target string (second argument, target).

//This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

//Remember to use Read-Search-Ask if you get stuck. Write your own code.

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if(str.substr(target.length * -1) === target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");

//Second solution
//function confirmEnding(str, target) {
  //if(str.substr(-target.length) === target) {
    //return true;
  //} else {
    //return false;
  //}
//}

//confirmEnding("Bastian", "n");
