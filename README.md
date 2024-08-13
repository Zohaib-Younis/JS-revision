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
