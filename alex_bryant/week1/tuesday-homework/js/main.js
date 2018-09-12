// The Calculator
// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
console.log("The Calculator:");

const squareNumber = function (num) {
  const square = num**2;
  console.log(`The result of squaring the number ${num} is ${square}.`);
  return square;
};

const halfNumber = function (num) {
  const half = num / 2;
  console.log(`Half of ${num} is ${half}.`);
  return half;
};

const percentOf = function (num1, num2) {
  let percent = num1 / num2;
  percent = (100*percent).toFixed(2);
  console.log(`${num1} is ${percent}% of ${num2}.`);
  return percent;
};

const areaOfCircle = function (r) {
  const area = Math.PI * r**2;
  console.log(`The area for a circle with radius ${r} is ${area}.`);
  return area;
};

// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const sq = squareNumber(halfNumber(6));
percentOf(sq,areaOfCircle(sq));

console.log("--------");

// Strings
// These exercises will test your knowledge of string function and conditionals. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// Some of these are challenging and require extra research or a good memory of the pre-work. Don't despair if you get stuck!
//

// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
console.log("DrEvil:");

const drEvil = function (amt) {
  const str = `${amt} dollars`;
  if (amt === 1e6) {
    return `${str} (pinky)`;
  }
  return str;
};

console.log(drEvil(10));
console.log(drEvil(1000000));

console.log("--------");
// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
console.log("MixUp:");

const mixUp = function (str1, str2) {
  const start1 = str1.slice(0, 2);
  const start2 = str2.slice(0, 2);
  const end1 = str1.slice(2);
  const end2 = str2.slice(2);
  return `${start2}${end1} ${start1}${end2}`;
  // Less readable one liner
  // return `${str2.slice(0, 2)}${str1.slice(2)} ${str1.slice(0, 2)}${str2.slice(2)}`;
};

console.log(mixUp("mix", "pod"));
console.log(mixUp("dog", "dinner"));

console.log("--------");
// FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'
console.log("FixStart:");

const fixStart = function (word) {
  const letterToRpl = word[0];
  let remainingStr = word.substring(1);
  //Can you use a regex like this?
  //remainingStr = remainingStr.replace(/{$letterToRpl}/g, "*");
  while (remainingStr.includes(letterToRpl)) {
    remainingStr = remainingStr.replace(letterToRpl, "*");
  }
  return `${letterToRpl}${remainingStr}`;
};

console.log(fixStart("babble"));
console.log(fixStart("trotter"));

console.log("--------");
// Verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
console.log("Verbing:");

const verbing = function (word) {
  if (word.length >= 3) {
    if (!word.endsWith("ing")) {
      return `${word}ing`;
    } else {
      return `${word}ly`;
    }
  }
  return word;
};

console.log(verbing('swim'));
console.log(verbing('swimming'));
console.log(verbing('go'));

console.log("--------");
// Not Bad
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
console.log("Not Bad:");

const notBad = function (str) {
  if (str.includes("not")) {
    if (str.includes("bad")) {
      if (str.indexOf("bad") > str.indexOf("not")) {
        const notToBad = str.substring(str.indexOf("not"), str.indexOf("bad") + 3);
        return str.replace(notToBad, "good");
      }
    }
  }
  return str;
};

console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));

console.log("--------");
