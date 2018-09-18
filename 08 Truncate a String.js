//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

//Remember to use Read-Search-Ask if you get stuck. Write your own code.

function truncateString(str, num) {
  if(str.length > num) {
  let truncatedString = str.substring(0, num)
  return truncatedString + '...';
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
