//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

//For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

//Remember to use Read-Search-Ask if you get stuck. Write your own code.

function titleCase(str) {
  return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

titleCase("I'm a little tea pot");
