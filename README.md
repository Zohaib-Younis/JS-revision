# JavaScript `let` Variable

## Introduction

In JavaScript, `let` is a keyword used to declare variables with block scope. It provides more predictable and safer variable declarations compared to `var`. Understanding how `let` works is crucial for writing clean and efficient JavaScript code.

## Features of `let`

### 1. Block Scope
- Variables declared with `let` are only accessible within the block where they are defined.
- Example:
  ```javascript
  if (true) {
      let x = 10;
      console.log(x); // Outputs: 10
  }
  console.log(x); // ReferenceError: x is not defined
#### 2. No Hoisting Like var
let variables are hoisted but not initialized. Accessing them before their declaration will result in a ReferenceError.
Example:
javascript
Copy code
console.log(y); // ReferenceError: y is not defined
let y = 5;
###### 3 No Redeclaration
You cannot redeclare a variable using let within the same scope.
Example:
javascript
Copy code
let z = 20;
let z = 30; // SyntaxError: Identifier 'z' has already been declare



# JavaScript const Keyword

The const keyword in JavaScript is used to declare variables whose value is intended to remain constant throughout the lifecycle of the program. It is a part of ES6 (ECMAScript 2015) and is essential for writing clear and maintainable code.

### Key Features

### Block Scoped: 
The scope of a const variable is limited to the block, statement, or expression in which it is declared.
### No Reassignment:
Once a variable is declared with const, its value cannot be reassigned.
### Declaration and Initialization:
A const variable must be initialized at the time of declaration.
### Objects and Arrays:
While the reference to a const variable cannot be changed, the contents of the object or array it holds can be modified.
### Example Usage
const pi = 3.14159;
console.log(pi); // Outputs: 3.14159

// pi = 3.14; // TypeError: Assignment to constant variable.
### Using const with Objects
const car = { brand: "Toyota", model: "Corolla" };
car.model = "Camry"; // This is allowed
console.log(car); // Outputs: { brand: "Toyota", model: "Camry" }
### Using const with Arrays

const numbers = [1, 2, 3];
numbers.push(4); // This is allowed
console.log(numbers); // Outputs: [1, 2, 3, 4]
### Block Scope

if (true) {
    const x = 10;
    console.log(x); // Outputs: 10
}
console.log(x); // ReferenceError: x is not defined
### Best Practices
Use const by default, unless you know the variable's value will need to change, in which case use let.
This approach makes the code easier to understand and prevents accidental reassignment of variables.

# JavaScript `var` Keyword

## Introduction

The `var` keyword in JavaScript is used to declare variables. It has been part of the language since its inception, but with the introduction of `let` and `const` in ES6 (ECMAScript 2015), `var` is now considered less favorable due to its unique behavior regarding scope, hoisting, and redeclaration.

## Key Features

### 1. Function Scope
Variables declared with `var` are scoped to the function in which they are declared. If a variable is declared inside a function using `var`, it is accessible throughout the entire function.

```javascript
function example() {
    var x = 10;
    if (true) {
        var x = 20;
        console.log(x); // Outputs: 20
    }
    console.log(x); // Outputs: 20
}
example();

#### 2.Hoisting

Variables declared with var are hoisted to the top of their scope. This means that the declaration is moved to the top of its scope, but the assignment remains where it is. As a result, the variable can be accessed before it is actually assigned a value, which results in undefined.


console.log(y); // Outputs: undefined
var y = 5;
console.log(y); // Outputs: 5

##### 3.Redeclaration
With var, you can redeclare a variable within the same scope without causing an error. This can lead to unintended behavior, especially in larger codebases.


var z = 10;
var z = 20;
console.log(z); // Outputs: 20

# 1. Purpose:
### Slice: Ye method array ka ek naya portion banata hai bina original array ko modify kiye. Yeh shallow copy return karta hai.<br>

### Splice: Ye method original array ko modify karta hai aur elements ko add ya remove karta hai.
<br>
## 2. Syntax:<br>


Slice: array.slice(start, end)
Splice: array.splice(start, deleteCount, item1, item2, ...)
### 3. Parameters:
Slice:
start: Index jahan se slicing start karni hai.
end (optional): Index jahan tak slicing karni hai (is index ko include nahi kiya jata).
###Splice:
 start: Index jahan se modification start karni hai.
 deleteCount: Kitne elements delete karne hain.
item1, item2, ... (optional): Wo elements jo add karne hain array mein.
#### 4. Return Value:
### Slice: Ek nayi array return karta hai jisme specified portion hota hai original array ka.
### Splice: Wo elements return karta hai jo remove kiye gaye hain original array se.
5. Modification of Original Array:
### Slice: Original array ko modify nahi karta.
### Splice: Original array ko modify karta hai.
<br>
Example:
##### Slice:

javascript

let arr = [1, 2, 3, 4, 5];
let slicedArr = arr.slice(1, 3);  // [2, 3]
console.log(arr);  // [1, 2, 3, 4, 5]<br>

##### Splice:

javascript
let arr = [1, 2, 3, 4, 5];
let splicedArr = arr.splice(1, 2);  // [2, 3]
console.log(arr);  // [1, 4, 5]<br>

## Summary:

Slice array ka ek portion copy karne ke liye use hota hai bina original array ko change kiye.
Splice array mein modification (add/remove) ke liye use hota hai aur original array ko change karta hai.