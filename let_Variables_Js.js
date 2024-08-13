                //let Variable complete understanding 
/**
 * same variable  name cannot be redeclared in js usnig let 
 */

let age=21;
console.log(age);
age=23;
console.log(age)
age=25;
console.log(age);
                           // redeclaration
// let age=15;  // thoroguh a syntax error 
/**
 * Block Scope:
Variables declared with let are only accessible within the block (i.e., a pair of curly braces {}) where they are defined. This is different from var, which is function-scoped
 */

function add(x,y) {
    let result=x+y;
    console.log("a+b=",result);    
}

//console.log(result); //ReferenceError: result is not defined

add(12,87);

                                //Hoisting not allowed for let variables

//ReferenceError: Cannot access 'x' before initialization
// console.log(x);
// let x=15;
