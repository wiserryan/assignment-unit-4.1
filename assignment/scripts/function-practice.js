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
  if ( number > 0 ){
    return;
  }
    return;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {

}

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  
}

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
