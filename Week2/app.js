// 1- Write a console.log statement saying "Hello World!" for each language that you know:
const [Kurdish, Arabic, English, Dutch] = ["Silav li cîhanê!", "!مرحبا العالم", "Hello world!", "Hallo wereld"];
console.log(Kurdish);


//2- The following code won't work as intended because, as soon as the browser encounters 
// the first single quote, it will think that the string has finished.
// Becaouse a string has the same kind of quote at the beginning and end.
// Further, it will result in an error because it will be expecting the closing bracket.
// In order to solve this problem we need to use escape character(\) just before the quote.
  console.log('I\'m awesome');


// 3-Declare a variable:
// Variable with the number:
// 1-First, declare your variable x (do not initialize it yet).
let x;
// 2-Add a console.log statement that explains in words what you think the value of x is, like in this example:
console.log(`The value of x will be: ${x}`);
// 3-Add a console.log statement that logs the value of x.
console.log(Number.isInteger(x));
//4-Now initialize your variable x with an integer.
x = 10;
// 5-Next, add a console.log statement that explains what you think the value of x is.
console.log(`The value of x will be: ${x}`);
// 6 Add a console.log statement that logs the value of x.
console.log(Number.isInteger(x));


// 4-Variable with the string:
// 1-Declare a variable y and assign a string to it:
   let y = 'My Stirng';
   console.log(`the value of my string will be: ${y.valueOf()}`);
  //   Now console.log the variable y.
   console.log(y);
  //  Now assign a new string to the variable y.
    y = "Hello World!"
    // Just like what you did before write a console.log 
    //statement that explains in words what you think will be logged to the console.
    console.log(`the value of my string will be: ${y.valueOf()}`);
    // Now console.log y again.
    console.log(y);


//5-How do you round the number 7.25, to the nearest integer (i.e., whole number)?
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
//The Math.round() function returns the value of a number rounded to the nearest integer.

const decimalNumber = 7.25;
console.log(decimalNumber);

const integerNumber = integer => {
    const roundedNum = Math.round(integer);
    return roundedNum;
}

console.log(integerNumber(decimalNumber));

// To find a way to compare the two values and store the highest of the two in a new variable:
//The reduce() method executes a reducer function on each element of the array, 
//resulting in a single output value.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const num1 = integerNumber(decimalNumber);
const num2 = decimalNumber;
const numbers = [num1,  num2];
// 1-The first solution:
const heighstNum1 = numbers.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
});
console.log(heighstNum1);

//2-The second solution:
const heighstNum2 = Math.max(...numbers);
console.log(heighstNum2);



// 6-//Arrays

// 1-Declare an empty array:
  let animals = [];
//2-  Write a console.log statement that explains in words what do you think the value of the array is:
   console.log(`The animals array contains: ${animals.length} item/s`);
//3-console.log your array.
   console.log(animals);
// 4-Create an array that has your favorite animals
   animals = ['cat', 'dog', 'elephant'];
// 5-Log your array:
   console.log(animals);
//6-Add a statement that adds Daan's favorite animal
  // 1-The first solution:
  animals.push('baby pig');
  // 2-Second solution:
  animals.splice(animals.length, 0, 'horse');
// 7-Log your new array!
  console.log(animals);
  

// 7-//More strings
// 1-Add the string to your file and console.log it
  let myString1 = "this is a test";
   console.log(myString1);
  // 2-Find a way to get the length of myString.
    const stringLength = myString1.length;
    console.log(stringLength);
  


//8-Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type:
//-Declare at least four variables and assign them different data types
    const number  = 3;
    const myString2 = "Hello there!";
    const booleanVal = false;
    const undefVal = undefined;
// 2-For each variable write a console.log statement that logs the value
  console.log(`The value of the variab number is ${number}`);
  console.log(`The value of the variab myString2 is ${myString2}`);
  console.log(`The value of the variab booleanVal is ${booleanVal}`);
  console.log(`The value of the variab undefVal is ${undefVal}`);


// -Now write a console.log statement wherein you first eundefValplain in words what you think the type of your variables is.
   console.log("I think the type of variable number is a number");
   console.log("I think the type of variable myString2 is a string");
   console.log("I think the type of variable booleanVal is a boolean");
   console.log("I think the type of variable undefVal is a undefined");

//Now use typeof to log the actual type of your variables.
console.log(`The type of variable number is a ${typeof number}`);
console.log(`The type of variable myString2 is a ${typeof myString2}`);
console.log(`The type of variable booleanVal is a ${typeof booleanVal}`);
console.log(`The type of variable undefVal is a ${typeof undefVal}`);
   
//Now compare the types of your different variables with one another:
// I know it is not DRY at all... But I'll do less than now in the nearest future!
  if (typeof number === typeof myString2) {
       console.log('The variable number and variable myString2 are the same type!');  

  }else if(typeof number === typeof booleanVal){
       console.log('The variable number and variable booleanVal are the same type!');  

  }else if(typeof number === typeof undefVal) {
       console.log('The variable number and variable undefVal are the same type!');

  }else if (typeof myString2 === typeof booleanVal) {
       console.log('The variable myString2 and variable booleanVal are the same type!');

  }else if(typeof myString2 === typeof undefVal) {
       console.log('The variable myString2 and variable undefVal are the same type!');

  }else if(typeof booleanVal === typeof undefVal) {
       console.log('The variable booleanVal and variable undefVal are the same type!');
}else {
     console.log("Are not the same Type!");   
}



// 9-If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
// Add at least 3 console.log statements in which you show that you understand what % does.
// The he remainder operator returns the remainder 
// left over when one operand is divided by a second operand. 
// It always takes the sign of the dividend.

const remainder = (x, y, z ) => {
      const foo1 = x % 3;
      const foo2 = y % 4;
      const foo3 = z % 2;

      console.log(`The value of X is ${foo1}`);
      console.log(`The value of y is ${foo2}`); 
      console.log(`The value of z is ${foo3}`); 
};

remainder(7, 10, 15);

// To show remainder works:

// 7 % 3 = 1 because
console.log(`Math.floor(7 / 3) = ${Math.floor(7 / 3)} (Quotient)`);
console.log(`2 * 3 = ${2 * 3} and 7 - 6 = ${7 - 6} Remainder`);

// More examples how remainder works:

const colors = ["orange", 'yellow', 'blue', 'green'];

function colorFactory(name) {
  const index =  name.length %  colors.length;
  console.log(`Your favourite color is ${colors[index]}`);
}

colorFactory('Shyar');

//Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?
// We can compare infinities by using isFinite() function or by if statement:

if (6/0 === Infinity && 10/0 === Infinity) {
  console.log("Numbers are infinities!");
}else{
   console.log("Numbers are not infinities!");
}


const infinities = (x, y) =>{
  if (isFinite(x) && isFinite(y)) {
    return 'Numbers are NOT infinities.';
  }
  return "Numbers are infinities!";
}

console.log(infinities(6/0, 10/0));
