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
