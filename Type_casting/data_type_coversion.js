// let age=34; // number
let age="34"; //string
console.log("Your age =",age," and type is =",typeof(age));
/**
 * Ab yaha per ap k pass type string ha and ap na operation number ma perform kerna ha to ap kia kray gay zahir c bat ha
 * hm type casting kray ga  
 */

let convertToNumber=Number(age);
console.log("Your age =",age," and type is =",typeof(convertToNumber));


/**
 * Jab ap ak striing ko convert kertay hn number ma  jasayy k "312abc". To ap ka conversion to ho jai ga lakin value NaN aye ge
 */
let number="123abc";
console.log(typeof(number));
let toNumber=Number(number);
console.log(typeof(toNumber));
console.log(toNumber);  // Output will be NaN  of this code



//*************************************Operation***************************************** */

let value=4;
let negvalue=-value;
console.log(negvalue);

let str1="Zohaib";
let str2=" Younis";
let str3=str1+str2;
console.log(str3);
