//1. Primitive data type

//7 type : string, numbers, boolean, null, undefined, symbol(uniqeness), BigInt(for big numbers)





/*const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const bigNumber = 459452594462n

const id = Symbol('420');
const anotherId = Symbol('420');

console.log(id === anotherId);



//reference or non-primitive data types
//array, object, function

const heros = ["shaktiman", "doga", "nagraj"];
let myObj = {
    name: "anubhav",
    age: 28,
    city: "rewa",
}

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof id);
console.log(typeof myFunction);
console.log(typeof isLoggedIn);
console.log(typeof bigNumber);
console.log(typeof outsideTemp);*/

//*******************************************************************/
                  //memory

    // primitive => stack
    // reference/non-primitive  => heap







let myYoutubename = "literaturelane"
let anothername = myYoutubename
anothername = "code and learn"
console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "anubhav@google.com",
    upi: "anubhav@ybl"
}

let userTwo = userOne;
userTwo.email = "vibhav@gmail.com";

console.log(userOne);
console.log(userTwo);


