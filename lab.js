//! -  PROBLEM 1 - //
// Create a variable called 'lovesCode' and set it equal to true.
let lovesCode = true;

if (lovesCode) {
  console.log("I love to code!");
} else {
  console.log("Coding has it's challengs");
}
// For problems 2-3 use the following lines of code:
var amysAge = 29;
var brittanisAge = 34;
var amysBirthYear = 1991;
var brittanisBirthYear = 1986;

//! -  PROBLEM 2 - //
// Using an if statement and a comparison operator, create code that will check if Amy or Brittani is older, and then console.log '{name} is older'. Hint: Consider what will happen if they are the same age. Handle this situation.
if (amysAge > brittanisAge) {
  console.log(`Amy is older`);
} else if (amysAge < brittanisAge) {
  console.log("Brittany is older");
} else {
  console.log("Amy and Brittany are the same age");
}

//! -  PROBLEM 3 - //
//  Using an if statement and a comparison operator, create code that will check if Amy and Brittani were born in the same year. If they were, console.log 'Amy & Brittani were born in the same year'. If they were not, console.log 'Amy & Brittani were not born in the same year'
if (amysBirthYear !== brittanisBirthYear) {
  console.log(`Amy and Brittani were not born in the same year.`);
} else {
  console.log("Amy and Brittany were born in the same year");
}
// For problems 5-6 use the following lines of code:
var arr = [10, 20, 30, 40, 50, 60];

//! -  PROBLEM 4 - //
// Create a variable named 'firstItem' and set it equal to the first value of the 'arr' array.
let firstItem = arr[0];

//! -  PROBLEM 5 - //
// Remove the last item from the 'arr' array and store it in a variable named 'lastItemRemoved'. Console.log the array to verify you no longer have the last item.
const lastItemRemoved = arr.pop();

//! -  PROBLEM 6 - //

//! -  PROBLEM 7 - //
var family = ["Tyler", "Jordan", "Ryan", "Alice", "Ireland"];
// Loop through the 'family' array and console.log every item.
for (let i = 0; i < family.length; i++) {
  console.log(family[i]);
}

//! -  PROBLEM 8 - //
var nums = [1, 2, 3, 6, 22, 98, 45, 23, 22, 12];
let evensArr = [];
// Use a for-loop to iterate through each number in the 'nums' array, if the number is even, append it to the 'evensArr'.
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    evensArr.push(nums[i]);
  }
}

//! -  PROBLEM 9 - //
var score = 74;
// Determine if the letter grade of the given variable 'score'. If the variable is a 90 or above, console-log an 'A', between 80 and 89, console-log a 'B', between 70 and 79, 'C', between 60 and 69, 'D', and anything below 60 should console-log an 'F'.
if (score >= 90) {
  console.log("A");
} else if (score <= 89 && score >= 80) {
  console.log("B");
} else if (score <= 79 && score >= 70) {
  console.log("C");
} else if (soce <= 69 && score >= 60) {
  console.log("D");
} else {
  console.log("F");
}

//? --- Intermediate Problems --- //

//! -  PROBLEM 10 - //
// Create a variable called 'changeMyMind' and set it equal to true.
let changeMyMind = true;

if (changeMyMind) {
  changeMyMind = false;
} else {
  true;
}

//! -  PROBLEM 11 - //
var myFavoriteNumbers = [4, 8, 12, 16, 20, 24];
// Create a variable named 'problem9' and set it equal to the fifth value of the 'myFavoriteNumbers' array.
let problem9 = myFavoriteNumbers[4];
// Subscripting an array can fail. What happens if you subscript to the 7th element, but there are not 7 elements in the array? Now, use an if statement to help make sure you have the correct amount of elements, and then reset your variable, 'problem9' to the value of the 7th element in the array.
if (myFavoriteNumbers.length === 7) {
  problem9 = myFavoriteNumbers[6];
}

//! -  PROBLEM 12 - //
var listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// Use a for-loop to iterate through 'listOfNumbers', then check to see if the number is divisible by 3. If it is, console.log '{number} is divisible by 3.'
for (let i = 0; i < listOfNumbers.length; i++) {
  if (listOfNumbers % 3 === 0) {
    console.log(listOfNumbers[i]);
  }
}

//! -  PROBLEM 13 - //
var letters = ["A", "B", "C", "D", "E"];
// Loop backwards, starting at the end of the 'letters' array. Console-log every item in the array.
for (let i = 1; i <= letters.length; i++) {
  console.log(letters[letters.length - i]);
}

//? --- Advanced Problems --- //

//! -  PROBLEM 14 - //
// Switch statements can be excellent alternatives to look up a switch statement (I recommend W3 Schools) and try to implement one in the following.
let letterGrade = "B";

switch (letterGrade) {
  case "A":
    console.log("The student is doing excellently.");
  case "B":
    console.log("The student is doing well.");
  case "C":
    console.log("The student is doing alright.");
  case "D":
    console.log("The student is not doing very well.");
  case "F":
    console.log("The student is failing.");
  default:
    console.log("Not an eligible grade.");
}

//! -  PROBLEM 15 - //
/* The famous FizzBuzz, Devmountain style!
  Create a for loop that iterates from 1 to 100. In this for loop, using some conditional logic, if the number your for loop is currently on is divisible by 3, console.log 'Dev'. If the number is divisible by 5, console.log 'mountain'. If the number is divisible by 5 & 3, console.log 'Devmountain'. If the number is not divisible by 5 or 3, console.log the number itself. Hint: Look up the modulo operator.
*/
for (let i = 0; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("DevMountain");
  } else if (i % 3 === 0) {
    console.log("Dev");
  } else if (i % 5 === 0) {
    console.log("Mountain");
  } else {
    console.log(i);
  }
}
