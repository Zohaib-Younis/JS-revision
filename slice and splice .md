var z = 10;
var z = 20;
console.log(z); // Outputs: 20

#1. Purpose:
##Slice: Ye method array ka ek naya portion banata hai bina original array ko modify kiye. Yeh shallow copy return karta hai.
##Splice: Ye method original array ko modify karta hai aur elements ko add ya remove karta hai.
###2. Syntax:
####Slice: array.slice(start, end)
####Splice: array.splice(start, deleteCount, item1, item2, ...)
###3. Parameters:
#####Slice:
#####start: Index jahan se slicing start karni hai.
#####end (optional): Index jahan tak slicing karni hai (is index ko include nahi kiya jata).
###Splice:
#####start: Index jahan se modification start karni hai.
#####deleteCount: Kitne elements delete karne hain.
item1, item2, ... (optional): Wo elements jo add karne hain array mein.
#### 4. Return Value:
### Slice: Ek nayi array return karta hai jisme specified portion hota hai original array ka.
### Splice: Wo elements return karta hai jo remove kiye gaye hain original array se.
5. Modification of Original Array:
### Slice: Original array ko modify nahi karta.
### Splice: Original array ko modify karta hai.
Example:
##### Slice:

javascript
let arr = [1, 2, 3, 4, 5];
let slicedArr = arr.slice(1, 3);  // [2, 3]
console.log(arr);  // [1, 2, 3, 4, 5]
##### Splice:

javascript
=
let arr = [1, 2, 3, 4, 5];
let splicedArr = arr.splice(1, 2);  // [2, 3]
console.log(arr);  // [1, 4, 5]
## Summary :

Slice array ka ek portion copy karne ke liye use hota hai bina original array ko change kiye.
Splice array mein modification (add/remove) ke liye use hota hai aur original array ko change karta hai.
