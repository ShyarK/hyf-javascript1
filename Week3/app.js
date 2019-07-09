// 1. Strings!
// 1.1 Add the string to your file and log it.
let myString = "hello,this,is,a,difficult,to,read,sentence";
//console.log(myString);

// 1.2 Log the length of myString.
console.log(myString.length);

// 1.3 The commas make that the sentence is quite hard to read. 
// Find a way to remove the commas from the string and replace them with spaces.
// 1.4Log myString to see if you succeeded.

//-First solution:
const removeComma1 = (str1, regex) => newStr = str1.replace(regex, ' ');
console.log(removeComma1(myString, /[,]/g));

// -Second solution
// str.split([separator[, limit]]): I used split method which is string method to split a string into an array,
// use regular expression as a separator, so when the regEx is found, will be removed from the string and the substrings are returned in an array.
// Here I used regular expression as a separator.
// Then I used a join method to return an array to a string by concatenating all of the elements in an array.

const removeWords2 = myString.split(/[,]/).join(' ');

console.log(removeWords2);



// 2. Arrays!
// 2.1 Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.
const favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
      favoriteAnimals.push("turtle");

// 2.2 Log your new array!

console.log(favoriteAnimals);


// 2.3 Now add Jim's favorite animal to the array, it's 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.
// array.splice(start: number, deleteCount: number, item1, item2, ...)
// start: The index at which to start changing the array in this case I want to insert 'meerkat' after blowfish.
// 'blowfish' is at index 0, so the method will leave the blowfish and start changing from index 1
//deleteCount: Is an integer indicating the number of elements in the array to remove from start.
// If deleteCount is 0 or negative, no elements are removed. Because I don't want to remove only inserting a new strign
//item, item2: The elements to add to the array. 
favoriteAnimals.splice(1, 0, 'meerkat');


// 2.4 Write a console.log statement that explains in words you think the new value of the array is.
console.log(`The new value of the array is a ${favoriteAnimals[1]}`);

//2.5 Log your new array!
console.log(favoriteAnimals);


// 2.6 Log the length of the array, add a message: 
// 'The array has a length of: ' (here you should show the length of the array).

console.log(`The length of the array is: ${favoriteAnimals.length}`);

// 2.7 Jason does not like 'giraffe', delete this animal from the array.

const newFavoriteAnimals = favoriteAnimals.filter(animal => animal !== 'giraffe');


// 2.8 Again log your new array.
console.log(newFavoriteAnimals);


// 2.9 Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array, but you don't 
// know the position or the index of the item in the array, how can you find it?

const findIndexOfItem = newfavoriteAnimals.indexOf('meerkat');

//2.10 Log the index of 'meerkat'. Add a message so it says: 
//'The item you are looking for is at index: ' (here you should show the index of the item).

console.log(`The item that your are looking for is at index ${findIndexOfItem}`);





// More JavaScript:
// 1.Create a function that takes 3 arguments and returns the sum of the these arguments.

function sumOfNumbers(){
   return [...arguments].reduce((acc, curr) => acc + curr);
  }

  console.log(sumOfNumbers(1, 2, 4));

//2.Create a function named colorCar that receives a color, and prints out, 'a red car' for example.

const colorCar = color => `A ${color} car`;
console.log(colorCar('red'));

//3.Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
const person = {
    name: 'Bob',
    age: 32,
    gender: 'male',
    interests: ['music', ' swimming'],
};

const getKeyAndValues = obj => Object.keys(obj).map((item, i) => `${i+1}-${item}: ${obj[item]}\n\n`).join('');
console.log(getKeyAndValues(person));



// 4.Create a function named vehicleType that receives a color, and a code, 1 for car, 
// 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2).

//First solution:
const vehicleType1 = (color, code) => {
    if (code === 1) {
        return `A ${color} car`;
    }else if (code === 2) {
        return `A ${color} motorbike`;
    }
    return "We don't have such a vehicle!"
};


console.log(vehicleType1("blue", 1));

//Second solution:

const vehicleType2 = (color, code) => {
    return code === 1 ? `A ${color} car` : 
           (code === 2) ? `A ${color} motorbike` :
          "We don't have such a vehicle!"
};

//console.log(vehicleType1("gray", 2));


// 5.Can you write the following without the if statement, but with just as a single line with console.log(...);?

if (3 === 3) {
  console.log("yes");
} else {
  console.log("no");
}

console.log(3 === 3 ? "Yes" : "No");


// 6.Create a function called vehicle, like before, 
//but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'
// first solution:
// const vehicle1 = (color, code, age) => {
//     return code === 1 && age > 0 ? `A ${color} used car` : 
//            code === 2 && age > 0 ? `A ${color} used motorbike` :
//            code === 1 && age === 0 ? `A ${color} new car` :
//            code === 2 && age === 0 ? `A ${color} new motorbike` :
//           "We don't have such a vehicle!"
// };

// second solution:
const vehicle1 = (color, code, age) => {
  let type;
  const condition = age > 0 ? 'used' : 'new';
  if (code === 1) {
    type = 'car';
    return `A ${color} ${condition} ${type}`;
  } else if (code === 2) {
    type = 'motorbike';
    return `A ${color} ${condition} ${type}`;
  } else {
    return "We don't have such a vehicle!";
  }
};

console.log(vehicle1('gray', 1, 1));

console.log(vehicle1("red", 2, 0));


// 7.Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.

 const vehicles = ["motorbike", "caravan", "bike", "truk", "car"];

// // 8.How do you get the third element from that list?

// console.log(vehicles[2]);

// //9.Change the function vehicle to use the list of question 
// //7. So that vehicle("green", 3, 1) prints "a green new bike".


const vehicle2 = (color, code, age) => {
    return vehicles.indexOf(vehicles[code - 1]) === code - 1 && age === 1 ? 
        `A ${color} new ${vehicles[code - 1]}.` :
         "We don't have such a vehicle!";
    };
console.log(vehicle2('green', 5, 1));


// 10.Use the list of vehicles to write an advertisement. So that it prints something like: 
// "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
//arr.slice([begin[, end]])

const writeAdvertisement = array => {
    const newArr = array.slice(0, -1).join('s, ');
    return `Amazing Joe's Garage, we service ${newArr}s and ${array[array.length -1]}s.`; 
};

// 11.What if you add one more vehicle to the list, 
// can you have that added to the advertisement without changing the code for question 10?

vehicles.push('cab');

console.log(writeAdvertisement(vehicles));



// 12.Create an empty object.

const emptyObj = {};

// 13.Create an object that contains the teachers that you have had so far for the different modules.

function Teachers (name, className) {
   this.name = name;
   this.className = className;
};

const philippBeau = new Teachers('Philipp Beau', 'Class 22'); 
const igor = new Teachers('Igor', 'Class 22'); 
const robVanKruijsdijk = new Teachers('Rob van Kruijsdijk', 'Class 22'); 
const nickBarth = new Teachers('Nick Barth', 'Class 22'); 
const bonanZhao = new Teachers('Bonan Zhao', 'Class 22'); 

// 14.Add a property to the object you just created that contains the languages that they have taught you.
nickBarth.modulas = ['Intro JavaScript', 'Git', 'Github'];
igor.modulas = ['CLI'];
bonanZhao.modulas = ['CLI', 'Git'];
robVanKruijsdijk.modulas = ['HTML', 'CSS'];
philippBeau.modulas = ['HTML', 'CSS'];
console.log(philippBeau);


// 15.Write some code to test two arrays for equality using == and ===. Test the following:

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

const checkForEquality = (arrX, arrY, arrZ) => {
  return `    The result for equality of x == y is ${arrX == arrY}\n
    The result for equality of x === y is ${arrX === arrY}\n
    The result for equality of z == y is ${arrZ == arrY}\n
    The result for equality of z == x is ${arrZ == arrX}\n`;
};

console.log(checkForEquality(x, y, z));


//What do you think will happen with x == y, x === y? Prove it!
// The Answer: 
// Javascript arrays are objects and we can't simply use the equality operator (== ) (===) 
// to check if the contents or the values of those arrays or objects are the same. 
//Even though the values of array X and Y are completely identical, but when we compare two objects, 
//the way that JavaScript looks at them is, it takes the object as a whole and ignores the values. 
//So when it comes to equivalence, JavaScript simply looks at the array X 
//and have it stored in one spot in memory with the variable name of X 
//and the array Y in different place in memory with a different variable name.
//So they are completely different objects and that's why the comparison outputs false. 

// In order to check if the values of two arrays are identical, we can do the following: 


const checkValue = (arr1, arr2) => {
    const newArr = arr1.concat(arr2);
      return newArr.every((val, i, arr) => arr.slice(i+1).indexOf(val) === -1 
      && arr.slice(0, i).indexOf(val) === -1 ? false : true);
};

console.log(checkValue(x, y));


//and z == y and z == x?
// let z = y;

console.log(z == y);// outputs true 
// So here we have an array Y, which is a reference type object, 
// that stored on the HEAP which is a different kind of place in memory
//where elements are not stored on top of each other, and it is managed randomly. 
// Therefore, each element has its own address. When we create a new array and assign it to the variable Y 
//the actual array is stored on the HEAP, and we have a pointer on the STACK(another type of memory ) 
//which stores the reference or the address to this array. 
//And the variable Y simply stores the pointer and doesn't know the address. 
//When we created a new variable Z and we assign the array Y as a value, this creates a new pointer on the STACK 
//and the pointer points to the same place in or address of Y array in memory. 
// When comparing two arrays Z and Y we are pointing to the same location in the memory.
// Therefore, outputs true.
console.log(z == x); //outputs false
// When comparing Z to X we are pointing to the different location in memory.
// So we have two different objects in two different location.
// Therefore, outputs false.


// 16.Take a look at the following code:

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

// Show that changing o2 changes o3 (or not)? 
// Reference type: As objects are reference type, when we assign o2 object to o3 object
// we don't create a new location in memory we point to the same location of o2
// When changing o2 we change the location, therefore, we change all references to that location.  
console.log(o3); // outputs { foo: "bar" }
o2.foo = 'cake';
console.log(o3); // outputs {foo: "cake"}

// and changing o1 changes o3(or not).
o1.foo = 'orange';
console.log(o3); // outputs {foo: "cake"}

// Changing o1 doesn't change o3, we have two different object and two different location.
// and o3 is not reference to the location of o1 object.

// Does the order that you assign (o3 = o2 or o2 = o3) matter?

// It does matter, when using let, variable with the same name can only be declared once.

// let o2 = o3; // SyntaxError: Identifier 'o2' has already been declared.
// let o3 = o2 we declare a new variable and assign object o2 as a value of that variable, won't output error!


// 17.What does the following code return? (And why?)

let bar = 42;
console.log(typeof typeof bar); // output string
// First if we check typeof bar will output 'number'.
// If we check typeof typeof bar will get string, because the typeof operator returns a string indicating the type of the unevaluated operand. 





