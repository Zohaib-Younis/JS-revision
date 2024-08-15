//  STACK(all permitive data types) stored in stack
//  HEAP (ALL non permitive data types are stored in heap)

let myName="Zohaib";
let newName=myName;
newName="Shahryar";
console.log(myName);
console.log(newName);
/*basically stack ke ander hmay original value ni de jati bal k original vlue ke copy provide ke jati ha is lia original value ma kabi b changing nahi huti */ 


                // HEAP
/*
 heap ma hmay original value provide ke jati ha agar hm kuch b changing kertay hn tu original value k ander changing ho  gi.ya no permitive data types ka data ku store kernay k lia use hoti ha jasay k object and array wagira
*/
let myobj={
    myname:"Zohaib",
    age:21
}
let myobj2=myobj;

myobj.myname="Ali shoaib";
console.log(myobj);
console.log(myobj2);

/* myname value will be changed for both myobj and myobj2
*/


