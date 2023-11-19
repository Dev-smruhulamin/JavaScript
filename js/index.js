//  From Here...... JavaScrit


// Question1:-Solve the problem with Javascript  to find the maximum between two numbers. (Hint: take 2 variables and find the maximum number between them

// Ans: 

// function maxvalue(num1, num2) {
//     return Math.max(num1, num2)
// };
// let num1 = 20;
// let num2 = 25;
// let MaximumValue = maxvalue(num1, num2);
// console.log("The Maximum Value is :", MaximumValue);

// Question2:-Solve the problem with Javascript  to check whether a number is negative, positive or zero.

// Answer:-

// function checkNumber(number){
//     if (number > 0) {
//         console.log(`${number} is a positive number`) //Backtick
//     } else if (number < 0){
//         console.log(`${number} is a negative number`);
//     } else {
//         console.log(`${number} is zero.`);
//     }
// }
// let result = checkNumber(-1)

// Question3:-Solve the problem with Javascript  to check whether a number is divisible by 10 or not. (take single variable and check using if esle condition)

// Answer:-


// function checkDivisibilityByTen(number) {
//     if (number % 10 === 0) {
//         console.log(`${number} is divisible by 10`);
//     }
//     else {
//         console.log(`${number} is not divisible by 10`);
//     }

// }
// let num = 30;
// let result = checkDivisibilityByTen(num);


// Question4:-Solve the problem with Javascript  to check whether a number is even or odd.
// Answer:-

// function checkEvenorOdd(number){
//     if (number % 2 ===0){
//         console.log(`${number} is an even number`);
//     } else{
//         console.log(`${number} is an odd number`);
//     }
// }

// let num =1000;
// let result = checkEvenorOdd(num);


// Question5:-Solve the problem with Javascript  to check whether a character is in the alphabet or not.

// Answer:-

// function checkAlphabet(character){
//     if((character >='a' && character <='z')|| (character >= 'A'&& character <= 'Z')){
//         console.log(`${character} is a character in the alphabet.`);
//     } else{
//         console.log(`${character} is not a character in the alphabet.`);
//     }
// }

// let char = "25";

// let result = checkAlphabet(char);

// Question6:-Solve the problem with Javascript  to check whether the temperature is hot, cold or normal. (30 <=  is hot, 25 >= is cold , anyother value is normal)

// Answer:-

// function checkTemperature(temperature) {

//     console.log(temperature);

//     if (temperature >= 30) { // Greater then Equal
//         return "Hot";
//     } else if (temperature <= 25) {
//         return "Cold";
//     } else {
//         return "Normal";
//     }

// }

// let temperature1 = 32;
// let temperature2 = 20;
// let temperature3 = 28;

// let result = checkTemperature(17);
// console.log(result);

// Question7:-Solve the problem with Javascript  to find a maximum between three numbers. (Hint: take 3 variables and find the maximum number between them use logical and operator for that)

// Answer:-

// function findMaximum(num1, num2, num3) {
//     if (num1 >= num2 && num1 >= num3) {
//         return num1;
//     }
//     else if (num2 >= num1 && num2 >= num3) {
//         return num2;
//     }
//     else {
//         return num3;
//     }
// }

// let num1 = 10;
// let num2 = 25;
// let num3 = 15;

// console.log("Maximum number is:", findMaximum(num1, num2, num3));



// Question8:-Write a JavaScript expression using the ternary operator that checks if a number x is even or odd. Store the result in a variable and print “Even Number” or “Odd Number”.

// Answer:-

// let x = 7; 

// let result = (x % 2 === 0) ? "Even Number" : "Odd Number";

// console.log(result);
// --------------------------------------------------------------------------------------
// Question:-Use the logical AND operator to determine if two variables, numOne and numTwo, are both greater than 30. Print a message to the console reflecting the result

// Answer:-

// let numOne = 35;
// let numTwo = 40; 

// if (numOne > 30 && numTwo > 30) {
//     console.log("Both numOne and numTwo are greater than 30");
// } else {
//     console.log("At least one of numOne or numTwo is not greater than 30");
// }

// Question9:-Write a JavaScript program that uses if-else statements combined with logical operators. The program should check if a person’s age is between 13 and 19. If so, print “Teenager”. Otherwise, print “Not a teenager”.

// Answer:-

// let age = 16;

// if (age >= 13 && age <= 19) {
//     console.log("Teenager");
// } else {
//     console.log("Not a teenager");
// }


