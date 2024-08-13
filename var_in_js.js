                    //Var in js 

/**
 * Scope: var is function-scoped, while let and const are block-scoped.
Hoisting: Both var and let/const are hoisted, but let and const are not initialized and accessing them before declaration results in a ReferenceError.
Re-declaration: var allows re-declaration, while let and const do not.
 */
var age=20;
age=25;
console.log(age);

                    //Allow global scope
        //  var result;          //agar hm yaha var ko declare na keray to to is ka scope function ke ander tak rahay ga bus  
function add(x,y) {
 
    var result=x+y;
    console.log(result);

}
// console.log(result);

                                         //Hoisting

console.log(y); // Outputs: undefined
var y = 5;
// console.log(y); // Outputs: 5
