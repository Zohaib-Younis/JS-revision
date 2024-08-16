                // arrys
const myArray=[0,1,2,3,4,5]
console.log(myArray[2]);

/**
 * resiseable
 * mixed data types can be written in singke array
 */


                    //INTERVIEW PROPECTIVE
// array-copy-ooperation create shallow copies in array





                    //Array method
myArray.push(6); // 6 element at last
// myArray.push(7); // 7 element at last
// myArray.pop();      // pop ka matlab hota ha k array ma last per jo b value ge wo delete ho jai ge 


myArray.unshift(9); // shoro ma 9 ajai ga or phir saray number agay shift hotay jai
myArray.shift();  // remove 1st element from arra
console.log(myArray.includes(9)); //mujhy koi number apni array ma find kerna ha tu ma kia kru ga
console.log(myArray.indexOf(6)); // mujhy wo index da day ga jaha 6 store hoa para hoga

let newArray=myArray.join();


console.log(myArray);
console.log(newArray); // result will be in sttring datat type change ho jai ge yaha per 

                                            //INTERVIEW

                        //Slice and Splice
console.log("A:",myArray);
const myn1= myArray.slice(1,3); /// 3 wala index include ni hoga ismay index 1 and 2 per ju value hogi wohhi hmaray pass ajai ge 

console.log(myn1);
console.log("B:",myArray);

                    //Splice
const myn2= myArray.splice(1,3);
console.log(myn2);
console.log("C:",myArray); // hmara original value manupulate ho jjai ga is method wahi per agar bat krain slice ke tu original value same rahay ga 