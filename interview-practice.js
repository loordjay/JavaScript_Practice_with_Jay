/**
 * JAVASCRIPT INTERVIEW PRACTICE
 * =============================
 * 
 * This file contains common coding interview questions solved in JavaScript.
 * Run this file in your browser console or Node.js environment to test.
 */

// 1. REVERSE A STRING
// ------------------------------------------
function reverseString(str) {
    // Split into array, reverse array, join back to string
    return str.split('').reverse().join('');
}
console.log("1. Reverse String 'hello':", reverseString("hello")); // "olleh"


// 2. CHECK FOR PALINDROME
// ------------------------------------------
// A palindrome reads the same forwards and backwards (e.g., "racecar")
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log("2. Is 'racecar' a palindrome?:", isPalindrome("racecar")); // true
console.log("   Is 'hello' a palindrome?:", isPalindrome("hello"));   // false


// 3. FIZZBUZZ
// ------------------------------------------
// Print numbers 1 to n. 
// If divisible by 3, print "Fizz".
// If divisible by 5, print "Buzz".
// If divisible by both, print "FizzBuzz".
function fizzBuzz(n) {
    console.group("3. FizzBuzz Output:");
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
        else if (i % 3 === 0) console.log("Fizz");
        else if (i % 5 === 0) console.log("Buzz");
        else console.log(i);
    }
    console.groupEnd();
}
fizzBuzz(15); // Check console for output


// 4. FIND THE LARGEST NUMBER IN AN ARRAY
// ------------------------------------------
function findMax(arr) {
    // Using simple loop
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;

    // Alternative strict one-liner: return Math.max(...arr);
}
console.log("4. Max of [1, 5, 3, 9, 2]:", findMax([1, 5, 3, 9, 2])); // 9


// 5. REMOVE DUPLICATES FROM ARRAY
// ------------------------------------------
function removeDuplicates(arr) {
    // Set object stores only unique values
    return [...new Set(arr)];
}
console.log("5. Remove duplicates from [1, 2, 2, 3, 4, 4, 5]:", removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]


// 6. FACTORIAL (RECURSION)
// ------------------------------------------
// 5! = 5 * 4 * 3 * 2 * 1 = 120
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log("6. Factorial of 5:", factorial(5)); // 120


// 7. SUM TWO NUMBERS (Target Sum)
// ------------------------------------------
// Find two numbers in an array that add up to a target
function twoSum(arr, target) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (map.has(complement)) {
            return [map.get(complement), i]; // Return indices
        }
        map.set(arr[i], i);
    }
    return [];
}

// 8. FLATTEN A NESTED ARRAY
// ------------------------------------------
function flattenArray(arr) {
    // Array.prototype.flat(Infinity) is the modern way
    // Recursive custom implementation:
    return arr.reduce((acc, val) =>
        Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),
        []);
}
console.log("8. Flatten [1, [2, [3, 4]]]:", flattenArray([1, [2, [3, 4]]]));


// 9. IMPLEMENT MEMOIZATION
// ------------------------------------------
// Caches the result of a function call based on arguments
function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            console.log("Fetching from cache for args:", args);
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}
const slowSquare = n => {
    // Simulate slow calculation
    for (let i = 0; i < 10000000; i++) { }
    return n * n;
};
const fastSquare = memoize(slowSquare);
console.log("9. Memoize - First call (slow):", fastSquare(5));
console.log("   Memoize - Second call (fast):", fastSquare(5));


// 10. CUSTOM PROMISE.ALL
// ------------------------------------------
function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;

        if (promises.length === 0) resolve([]);

        promises.forEach((p, index) => {
            Promise.resolve(p)
                .then(value => {
                    results[index] = value;
                    completed++;
                    if (completed === promises.length) resolve(results);
                })
                .catch(err => reject(err));
        });
    });
}
console.log("10. Testing Custom Promise.all:");
myPromiseAll([
    Promise.resolve(1),
    Promise.resolve(2),
    new Promise(resolve => setTimeout(() => resolve(3), 100))
]).then(console.log); // [1, 2, 3]


// 11. DEBOUNCE FUNCTION
// ------------------------------------------
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
// Usage: const processSearch = debounce((text) => apiCall(text), 300);


// 12. THROTTLE FUNCTION
// ------------------------------------------
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
