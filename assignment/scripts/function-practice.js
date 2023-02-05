console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  console.log('Hello ' + name);
}
helloName('Ryan!');

//function helloName(name) {
// return ('Hello ', + name);
//console.log('Hello' , + name);
//}
//helloName ('Ryan');// seems forced, not utilizing the function,input, argument correctly

// several bad attempts below

// Remember to call the function to test
// console.log('Hello', name!);


      //  more attempts  //
// let firstName = 'Ryan';
// let lastName = 'Wiser';
// let name = 'firstName' + 'lastName';
// console.log('Hello', name);
// let helloName = greet( 'Hello', firstName);

//const fName = 'Harry';
//const lName = 'Potter';
//greet(fName, lName);

//function helloName(name) {
//let helloName = 'Ryan';
//console.log('Hello', helloName);
//}
//function helloName (name) {
//let firstName = 'Ryan';
//let greeting = `Hello ${firstName}`;
//}
//console.log(`Hello ${firstName}`);




// 3. Function to add two numbers together & return the result
// return firstNumber + secondNumber;

function sum( firstNumber, secondNumber){
  return firstNumber + secondNumber;
}
console.log('Here we added numbers', sum(1, 2));




//function add(firstNumber, secondNumber){
//  let result = firstNumber + secondNumber;
//  return result;
//}
//add(1,2);
//function addNumbers(){
//let result = ('firstNumber' + 'secondNumber'); // expect result to be 3
//}
//addNumbers(1,2, result);

//function addNumbers (firstNumber, secondNumber){
//  console.log('firstNumber' + 'secondNumber');
//}
//addNumbers(1,2);

//let result = addNumbers(1, 2); // expect result to be 3
//console.log('Adding 1 + 2 = ', result);
//function addNumbers(result) {
  //let firstNumber = 1;
  //let secondNumber = 2;
  //result = firstNumber + secondNumber;
//}
//addNumbers();

//console.log('Adding 1 + 2 = ', result);

 
  //let result = addNumbers(1, 2); // expect result to be 3
  //console.log('Adding 1 + 2 = ', result);



// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber){
  return firstNumber * secondNumber * thirdNumber;
}
console.log('multiplied 3 numbers', multiplyThree(2,3,4));

// used this template again
//function additionPractice( firstNumber, secondNumber){
 // return firstNumber + secondNumber;
//}
//console.log('Here we added numbers', additionPractice(4, 5));



// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number >= 0 ){
    return ('true!');}
    else if ( number < 0 ){ 
      return ('false!');// not seeing why it console reads undefined here - dang needed an 'else if'
    }
  }

// used similar logic in our group work this week
//function comparisonPractice(firstNumber, secondNumber){
  //if (firstNumber === secondNumber)
  //  return ('The numbers are the same!')
  //if (firstNumber > secondNumber) {
  //  return firstNumber('The first number was bigger!');
  //} else if (secondNumber > firstNumber){
  //  return ('The second number was bigger!');
  //} 
  //} 
  //console.log(comparisonPractice(9, 9));


// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );// else if got methrowing undefined


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
 //for (let getLast of array){
      //if array === [];
      //return undefined;
      let arry = [2, 4, 6, 8, 10, 12, 14, 16];
      let getLast = arry[arry.length - 1];
}
//console.log(getLast);
      console.log(getLast(2, 4, 6, 8, 10, 12, 14, 16));

 
//}// first attempt below
//console.log('getLast will return last item in array', getLast(['crawl', 'walk', 'run']));
//console.log(getLast.length - 1);
//console.log('getLast will return last item in array', getLast(['crawl', 'walk', 'run']));
  
//pasted notes for ref
//let hobbies = ['going on walks', 'playing guitar', 'shoveling snow'];
  //for (let i=1; i<4; i++) {
  //    console.log(`${i}. ${hobbies[i]}`);
  //}
  //    console.log(hobbies.length);
  
  
  //more notes trying to ref
  //let group = ['r', 'a', 'n', 'd', 'o', 'm'];
  //let guess = [];
  //let guessLength = guess.push('r','a','n','d','o','m'); 
//}
//console.log('guessLength', guessLength); // 5

//console.table(guess);

//console.log('Hello World.');
//let answer = ['w', 'o', 'r', 'l', 'd'];
//let guess = []; // empty array
//let guessLength = guess.push('a', 'r', 'r', 'a', 'y');
//guess.pop(); // remove the last item
//guess.push('y');
//console.log('guessLength', guessLength); // 5
// special console log for arrays
//console.table(guess);




// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  
}
// I must've watched your video on reviewing this questions 3x now, 
// great explanation on thought process and going through each part of the function.
// I somehow still don't have it working correctly but it is getting closer 

/**
 * 
 * @param {String} letter the thing to search for 
 * @param {Array} listOfLetters array of items to search through
 * 
 * @return {Boolean} return true if a match was found, otherwise false
*/
function find(letter, listOfLetters) {
  // value will be 'L'
  // list of letters will be ['H', 'E', 'L', 'L', 'O']
  for(let item of listOfLetters){
    console.log(letter, item); // L H // L E // L L // L L????? // L O?????????? seems like my function stops once first match found, doesn't continue through Array
       if(letter === item) {
        console.log('We have a match!');
        return true  // if I remove this, it runs through entire array but returns false
      } else {
         console.log('Does not match');
         //return true;
       }
  } 
        // if we got here, there were not matches
        return false;
}
console.log(`Find 'L' in ['H', 'E', 'L', 'L', 'O'], expect: true -`, find('L', ['H', 'E', 'L', 'L', 'O']));
console.log(`Find 'T' in ['H', 'E', 'L', 'L', 'O'], expect: false -`, find('T', ['H', 'E', 'L', 'L', 'O']));






// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
