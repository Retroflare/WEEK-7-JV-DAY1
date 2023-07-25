// 1.Write a function that takes a string and an array of strings ( in this example dog_names) and 
// checks if one of the list members (dog names) is in the string . Return an array of the dog names found in the array


function findDogNamesInString(str, dogNames) {
    const foundDogNames = dogNames.filter(name => str.toLowerCase().includes(name.toLowerCase()))
    return foundDogNames;
  }
  
  // Test the function
  const sentence = "I have a dog named Max and a cat named Whiskers."
  const dog_names = ["Max", "Buddy", "Lucy", "Whiskers", "Daisy"]
  
  const foundNames = findDogNamesInString(sentence, dog_names)
  console.log(foundNames); // Output: ["Max", "Whiskers"]
  

//   2.Write a function using map to convert an array of numbers from inches to feet.


var heightsInInches = [66, 64, 60, 52, 72, 80, 51]

function inchesToFeet(inches) {
  return inches / 12;
}

var heightsInFeet = heightsInInches.map(inchesToFeet)
console.log(heightsInFeet);



// Question #3

// Using the Ternary Operator and Map, create an array that adds ‘is eating pizza’ to every name from the array ‘tmnt’ that ends with ‘o’ and add ‘is being rude’ to any other name
var tmnt = ["Leonardo", "Raphael", "Donatello", "Michelangelo"]

const modifiedNames = tmnt.map(name => (name.endsWith('o') ? `${name} is eating pizza` : `${name} is being rude`))

console.log(modifiedNames);


// Question #4

// Write an arrow function to find the max number in a list. Do not use the Math.max function. The list will be all positive numbers.
// var findAMax=[123,5436,45784,1234,34,65,234125,645,3452,13216,49]
// Expects
// 234125

const getMaxNumber = (numbers) => numbers.reduce((max, num) => 
(num > max ? num : max));

const maxNumber = getMaxNumber(findAMax);
console.log(maxNumber); 
// Output: 234125


// Question #5

// At the end of the third iteration ( the third time the loop has ran ) of this ‘For Loop’ define the state of all the variables used in this code block


// var bingo = "B-I-N-G-O"
// var ognib = ""
// for(let i=bingo.length-1; i>=0; i--){
// ognib+=(bingo[i])
// //define state from this line on the third iteration
// }

// At the end of the third iteration:
// bingo: B-I-N-G-O
// ognib: OB-
// i: 2


// 8kyu quest 
// https://www.codewars.com/kata/5625618b1fe21ab49f00001f/train/javascript
function sayHello(name) {
    return `Hello, ${name}`;
  }
  console.log(sayHello("Mr. Spock"));


//   https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b/train/javascript
  function reverseList(list) {
    return list.reverse();
  }
  
