const name = "hitesh";
const repoCount = 50;

console.log(name + repoCount + " value");   
//prefer to not write like this.


console.log(`hello my name is ${name.toUpperCase} and my repo count is ${repoCount}`);
//write string like this  => this is string interpolation

const gameName = new String('Anubhav-ss-baghel')
console.log(gameName[2]);

console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase())
console.log(gameName.charAt(5));
console.log(gameName.indexOf('a'));


const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-10, 5)
console.log(anotherString);

const newStringOne = "  anubhav  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rankindiaservices.business.site/rankindia%20home"
console.log(url.replace('%20', '-'));

console.log(url.includes('rankindia'));
console.log(url.includes('anubhav'));

console.log(gameName.split('-'));

