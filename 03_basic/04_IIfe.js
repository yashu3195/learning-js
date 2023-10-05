//*   IMMEDIATLY INVOKED FUNCTION EXPRESSION  (IIFE)*/////

//function chai(){
//    console.log('DB CONNECTED');
//}
//chai()


//     *****NAMED IIFE*****
(function chai(){
console.log('DB CONNECTED');
})
();


//***************************UNNAMED IIFE */
//( () => {
//console.log('DB CONNECTED TWO');
//})
//()


( (name) => {
console.log(`DB CONNECTED TO ${name}`);
})
("Yashu")