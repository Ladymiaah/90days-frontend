 // change everything below to the newer Javascript!

//let + const
const a = 'test';
let b = true;
let c = 789;
a = test;

// Destructuring
const  obj = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const {firstName, lastName, age, eyeColor} = obj;

// Object properties
const a = 'test';
const b = true;
const c = 789;

var okObj = { 
   a,
   b,
   c
};

// Template strings
const firstName = "John"
const city = "Lagos"
const message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

// default arguments
// default age to 10;
function isValidAge(age = 30) {
    return `Hello ${firstName} have I met you before? I think we met in ${city} 
    last summer no??? you seem to be ${age-10} Have a nice day!;`
}

// Symbol
// Create a symbol: "This is my first Symbol"
let sym1 = symbol();
let sym2 = symbol('old');
let sym3 = symbol('old')

// Arrow functions
// Arrow functions
const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!":
   }
}