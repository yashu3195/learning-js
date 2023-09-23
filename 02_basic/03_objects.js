// singleton - constructer se jab object banate hai tab vah singleton object hota hai.jab aise object banaate hai, to singleton object apne tarah kaa ek hi object hota hai

// object literals
const symbolCase = ("key1");

const jsUser = {
    name: "Anubhav",   // by default systen name ko string samjhega. "name" aise likhne ki jaroorat nahi hai.
    "full name": "Anubhav singh" ,    // is value ko dot(.) wale tareeke se nhi access kar sakte, iske liye hame [square bracket] wala notation method lagani padegi.
    mobNo: 8815455148,
    location: "rewa",
    age: 28,
    symbolCase: Symbol("key1"),
    email: 'Anubhav@google.com',
    isLoggedIn: false,
    lastLoginDays: ["monday", "friday"] 
}

//console.log(jsUser.age);    // jab dot(.) ke roop me access karenge tab "string" 
//console.log(jsUser["email"]);  // yaha is tareeke se karne par output  error dikhayega kyonki email ko as a string likhna padega["email"]
//console.log(typeof jsUser.symbolCase);
console.log(jsUser.symbolCase);
console.log(typeof jsUser.symbolCase);
jsUser.email = "anubhav@jh.com"
jsUser.age = 29;
console.log(jsUser.age);
//Object.freeze(jsUser)
jsUser.age = 30
console.log(jsUser["age"]);

console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsUser.greetingTwo())