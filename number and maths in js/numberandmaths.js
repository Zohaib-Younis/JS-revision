const { Console } = require("console");

const score=400;
console.log(score)
const balance= new Number(100); // gaurenty ha k hmaray pass number he store hoga 
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3)); //agar hm na 3 likha to point k bad 3 zero print ho gaye agar 2 likhtay to 2 print hu jatay





        //These are some of the prototypes of number
        /**
            * [Prototype]]
            : 
            Number
            constructor
            : 
            ƒ Number()
            toExponential
            : 
            ƒ toExponential()
            toFixed
            : 
            ƒ toFixed()
            toLocaleString
            : 
            ƒ toLocaleString()
            toPrecision
            : 
            ƒ toPrecision()
            toString
            : 
            ƒ toString()
            valueOf
            : 
            ƒ valueOf()
            [[Prototype]]
            : 
            Object
            [[PrimitiveValue]]
            : 
            0
         */
const otherNumber=23.89666;
console.log(otherNumber.toPrecision(4));


const value=100000;//this is not good to see number in this format
console.log(value.toLocaleString());//zero will be seprated by a comma 

/******************************** MATH WITH NUMBERS ********************************* */
let number=876.98000;
console.log(Math.round(number)); //output will be 877

console.log(Math.ceil(number)); // output will be 877 ceil matlab Oper wala
console.log(Math.floor(number)) // output will be 876 floor matlab nichay wala

console.log(Math.random()); // this will generate a random number but number will in between 0 and 1 always
console.log(Math.sign(number));
/**
 1: If the number is positive.
-1: If the number is negative.
 0: If the number is zero.
-0: If the number is negative zero (though in practice, -0 and 0 are treated the same in most cases).
 NaN: If the value passed is not a number.
 */

 console.log(Math.sqrt(6));  // this method is used to find out square root of a number
 console.log(Math.trunc(number));
 /**
  The Math.trunc() function in JavaScript is used to remove the fractional part of a number, effectively truncating it to its integer component. It does this by simply cutting off the decimal part, regardless of whether the number is positive or negative, without rounding.
  */

  console.log(Math.abs(-8)); // always return positive values this will convert -tive value to a positive value it will return 8