/**
 * JAVASCRIPT MASTERY: BEGINNER TO PRO
 * ===================================
 * 
 * Welcome to your comprehensive guide to JavaScript. 
 * This file is structured to take you from the very basics to advanced concepts.
 * Read through the comments and code examples carefully.
 * 
 * TABLE OF CONTENTS:
 * 1. Variables & Data Types
 * 2. Operators
 * 3. Control Flow (If/Else, Switch, Loops)
 * 4. Functions (Basics to Arrow Functions)
 * 5. Arrays & Array Methods
 * 6. Objects & The 'this' Keyword
 * 7. ES6+ Features (Destructuring, Spread/Rest, Modules)
 * 8. Asynchronous JavaScript (Callbacks, Promises, Async/Await)
 * 9. DOM Manipulation (Basics)
 * 10. Advanced Concepts (Closures, Prototypes, Classes)
 */

// ==========================================
// 1. VARIABLES & DATA TYPES
// ==========================================
console.group("1. Variables & Data Types");

// 'let' allows you to reassign values later.
let firstName = "John";
firstName = "Jane"; // Valid

// 'const' is for values that should not change (constant).
const pi = 3.14159;
// pi = 3.14; // Error: Assignment to constant variable.

// 'var' is the old way of declaring variables. Avoid using it in modern JS due to scoping issues.
var legacyVar = "I am old";

// Data Types
const stringType = "Hello World"; // String
const numberType = 42;            // Number
const booleanType = true;         // Boolean
const nullType = null;            // Null (intentional absence of value)
const undefinedType = undefined;  // Undefined (variable declared but not assigned)
const objectType = { key: "value" }; // Object
const arrayType = [1, 2, 3];      // Array (also an object type)

console.log("Types:", { stringType, numberType, booleanType });
console.groupEnd();


// ==========================================
// 2. OPERATORS
// ==========================================
console.group("2. Operators");

const x = 10;
const y = 5;

// Arithmetic
console.log("Addition:", x + y);
console.log("Subtraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division:", x / y);
console.log("Modulus (Remainder):", x % y);

// Comparison
console.log("Equal value (==):", x == "10"); // true (type conversion happens)
console.log("Strict Equal (===):", x === "10"); // false (checks value AND type) - ALWAYS PREFER THIS
console.log("Not Equal (!=):", x != 5);

// Logical
const isAdult = true;
const hasLicense = false;
console.log("Can drive?", isAdult && hasLicense); // AND
console.log("Is adult or has license?", isAdult || hasLicense); // OR

console.groupEnd();


// ==========================================
// 3. CONTROL FLOW
// ==========================================
console.group("3. Control Flow");

const age = 20;

// If-Else
if (age >= 18) {
    console.log("You are an adult.");
} else if (age >= 13) {
    console.log("You are a teenager.");
} else {
    console.log("You are a child.");
}

// Ternary Operator (Shorthand If-Else)
const status = age >= 18 ? "Adult" : "Minor";
console.log("Status:", status);

// Switch Statement
const day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the work week!");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    default:
        console.log("Just another day.");
}




let toggle = "dark"
switch (toggle) {
    case "light":
        console.log("Turning on the light.");
        break;
    case "dark":
        console.log("Turning off the light.");
        break;
    default:
        console.log("Invalid toggle value.");
}



// Loops
console.log("For Loop:");
for (let i = 0; i < 3; i++) {
    console.log(`Iteration ${i}`);
}

console.groupEnd();

let Hello = 5 ;
for(let i=0 ;i<=Hello;i++){
    console.log(`Hello World ${i}`);
}


// ==========================================
// 4. FUNCTIONS
// ==========================================
console.group("4. Functions");

// Function Declaration (Hoisted - can be called before definition)
function greet(name) {
    return `Hello, ${name}!`;
}

// Function Expression (Not hoisted)
const add = function (a, b) {
    return a + b;
};

// Arrow Function (Modern ES6 syntax, concise)
const multiply = (a, b) => a * b;

// Arrow function with implicit return (for single expressions)
const square = n => n * n;

console.log(greet("Alice"));
console.log("Add:", add(2, 3));
console.log("Multiply:", multiply(4, 5));

console.groupEnd();


// ==========================================
// 5. ARRAYS & METHODS
// ==========================================
console.group("5. Arrays & Methods");

const fruits = ["Apple", "Banana", "Cherry"];

// Adding/Removing elements
fruits.push("Date"); // Add to end
fruits.pop();        // Remove from end
fruits.unshift("Apricot"); // Add to start
fruits.shift();      // Remove from start

// High-Order Array Methods (Very Important!)

// forEach: Execute a function for each element
fruits.forEach((fruit, index) => console.log(`${index}: ${fruit}`));

// map: Create a NEW array by transforming every element
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);


const triplet = numbers.map(num => num * 3);
console.log("Triplet:", triplet);

// filter: Create a NEW array with elements that pass a test
const evens = numbers.filter(num => num % 2 === 0);
console.log("Evens:", evens);

// reduce: Accumulate a value by iterating through the array
const sum = numbers.reduce((total, current) => total + current, 0);
console.log("Sum:", sum);

console.groupEnd();


// ==========================================
// 6. OBJECTS
// ==========================================
console.group("6. Objects");

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["coding", "reading"],
    address: {
        city: "New York",
        zip: 10001
    },
    // Method inside object
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.firstName);      // Dot notation
console.log(person["lastName"]);    // Bracket notation
console.log(person.getFullName());

// Object Destructuring
const { firstName: fName, age: personAge } = person;
console.log(`Destructured: ${fName}, ${personAge}`);

console.groupEnd();


// ==========================================
// 7. ES6+ FEATURES
// ==========================================
console.group("7. ES6+ Features");

// Template Literals
const greeting = `Hello, my name is ${fName}`;

// Spread Operator (...)
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
console.log("Spread Array:", arr2);

const arr3 = [...arr1,...arr2, 5, 6]; // [1, 2, 3, 4, 5, 6]
console.log("Spread Array:", arr3);

const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }
console.log("Spread Object:", obj2);

// Rest Parameter (Collects arguments into an array)
function sumAll(...args) {
    return args.reduce((a, b) => a + b, 0);
}
console.log("Sum All:", sumAll(1, 2, 3, 4, 5));

console.groupEnd();


// ==========================================
// 8. ASYNCHRONOUS JAVASCRIPT
// ==========================================
console.group("8. Asynchronous JavaScript");

// Using Promises
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) resolve("Data fetched successfully!");
        else reject("Error fetching data.");
    }, 1000);
});

fetchData
    .then(data => console.log("Promise:", data))
    .catch(error => console.error("Promise Error:", error));


// Async / Await (The modern standard)
async function getData() {
    try {
        // Simulating an API call
        const response = await fetchData;
        console.log("Async/Await:", response);
    } catch (error) {
        console.error("Async Error:", error);
    }
}
getData();

console.groupEnd();


// ==========================================
// 9. DOM MANIPULATION (See Mini Projects for more)
// ==========================================
// Typically you would select elements here:
// const btn = document.querySelector("#myBtn");
// btn.addEventListener("click", () => { ... });


// ==========================================
// 10. ADVANCED CONCEPTS
// ==========================================
console.group("10. Advanced Concepts");

// Closures: A function having access to the parent scope, even after the parent function has closed.
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log("Closure Count:", count);
    };
}
const counter = outer();
counter(); // 1
counter(); // 2

// Classes (ES6) - Syntactic sugar over prototypes
class Car {
    constructor(brand) {
        this.brand = brand;
    }
    present() {
        return `I have a ${this.brand}`;
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return `${this.present()}, it is a ${this.model}`;
    }
}

const myCar = new Model("Ford", "Mustang");
console.log(myCar.show());

console.groupEnd();

console.log("%c Congratulations! You've reviewed the core concepts.", "color: green; font-weight: bold; font-size: 14px;");

// ==========================================
// 11. EXECUTION CONTEXT & CALL STACK
// ==========================================
console.group("11. Execution Context & Call Stack");

/*
 * Execution Context (EC): Environment where JS code is executed.
 * 1. Global Execution Context (GEC): Created when script starts.
 * 2. Function Execution Context (FEC): Created when a function is called.
 * 
 * Call Stack: LIFO (Last In, First Out) structure that stores ECs.
 */

function first() {
    console.log("First function start");
    second();
    console.log("First function end");
}

function second() {
    console.log("Second function executing");
}

console.log("Start Call Stack Demo");
first(); // GEC -> first() calls second() -> second() pops -> first() pops -> GEC
console.log("End Call Stack Demo");

console.groupEnd();


// ==========================================
// 12. HOISTING
// ==========================================
console.group("12. Hoisting");

// Var: Hoisted and initialized with 'undefined'
console.log("Var before decl:", hoistedVar);
var hoistedVar = "I am var";

// Let/Const: Hoisted but NOT initialized (Temporal Dead Zone - TDZ)
try {
    console.log(hoistedLet);
} catch (e) {
    console.log("Let before decl error:", e.message);
}
let hoistedLet = "I am let";

// Function Declarations: Fully hoisted
console.log("Func decl before def:", hoistedFunc());
function hoistedFunc() { return "I work!"; }

// Function Expressions (var): Hoisted as undefined
try {
    notHoisted();
} catch (e) {
    console.log("Func expr error:", e.message); // notHoisted is not a function
}
var notHoisted = function () { return "No work"; };

console.groupEnd();


// ==========================================
// 13. SCOPE & CLOSURES
// ==========================================
console.group("13. Scope & Closures");

// Scopes: Global, Function, Block (let/const)

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        // Accesses outerVariable from parent scope (Closure)
        console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
    };
}

const newFunction = outerFunction("outside");
newFunction("inside"); // Closure remembers "outside"

console.groupEnd();


// ==========================================
// 14. PROTOTYPES & INHERITANCE
// ==========================================
console.group("14. Prototypes & Inheritance");

// Every JavaScript object has a prototype.
// The prototype is also an object.
// All JavaScript objects inherit their properties and methods from their prototype.

function Animal(name) {
    this.name = name;
}

// Adding method to prototype (efficient memory usage)
Animal.prototype.speak = function () {
    console.log(`${this.name} makes a noise.`);
};

const dog = new Animal("Rex");
dog.speak();

// Class syntax is just sugar over this
console.log("dog.__proto__ === Animal.prototype:", dog.__proto__ === Animal.prototype);

console.groupEnd();


// ==========================================
// 15. THE EVENT LOOP
// ==========================================
console.group("15. The Event Loop");

/*
 * JS is single-threaded.
 * 1. Call Stack extracts synchronous code.
 * 2. Asynchronous operations (setTimeout, fetch) go to Web APIs.
 * 3. When done, they move to Queues:
 *    - Microtask Queue: Promises, queueMicrotask (Higher Priority)
 *    - Macrotask Queue: setTimeout, setInterval
 * 4. Event Loop pushes tasks from queues to Stack when Stack is empty.
 */

console.log("1. Start");

setTimeout(() => {
    console.log("4. Macrotask (setTimeout) - Runs last");
}, 0);

Promise.resolve().then(() => {
    console.log("3. Microtask (Promise) - Runs before Macrotask");
});

console.log("2. End");

console.groupEnd();


// ==========================================
// 16. THE 'THIS' KEYWORD
// ==========================================
console.group("16. 'this' Keyword");

const user = {
    name: "Alice",
    greet() { console.log("Implicit:", this.name); }, // 'this' is user object
    greetArrow: () => { console.log("Arrow:", this.name); } // 'this' is window/global
};

user.greet();
user.greetArrow(); // undefined in browser (strict mode rules vary)

function sayHello() { console.log("Explicit:", this.name); }
// call/apply/bind
sayHello.call(user); // Execute immediately with user context

const boundHello = sayHello.bind(user);
boundHello(); // Execute later

console.groupEnd();


// ==========================================
// 17. DESIGN PATTERNS
// ==========================================
console.group("17. Design Patterns");

// Module Pattern (IIFE - Immediately Invoked Function Expression)
const Calculator = (function () {
    let count = 0; // Private variable

    return {
        add: () => ++count,
        get: () => count
    };
})();

console.log("Module Add:", Calculator.add());
console.log("Module Get:", Calculator.get());
// console.log(Calculator.count); // undefined (private)

console.groupEnd();
