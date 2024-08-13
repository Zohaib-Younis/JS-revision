<<<<<<< HEAD
                            //constant variable in js 
//TypeError: Assignment to constant variable.
// const age=21;
// age=23;
// console.log(age);

                            //Always need to initialize value at the time of declaration const variable
//This will through an error 
// const myage;
// age=45;


                            //block scope only cannot access const variable outside the block
function add(x,y) {
    const result=x+y;
    console.log(result);
}
//console.log(result); //ReferenceError: result is not defined
add(23,27);

=======
                            //constant variable in js 
//TypeError: Assignment to constant variable.
// const age=21;
// age=23;
// console.log(age);

                            //Always need to initialize value at the time of declaration const variable
//This will through an error 
// const myage;
// age=45;


                            //block scope only cannot access const variable outside the block
function add(x,y) {
    const result=x+y;
    console.log(result);
}
//console.log(result); //ReferenceError: result is not defined
add(23,27);

>>>>>>> 7063a36d6c1a69f1db12c8d716dc51cdd49cb0d5
