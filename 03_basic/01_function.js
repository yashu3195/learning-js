
/*function sayName() {
    console.log("A");
    console.log("N");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("V");
    
}
sayName()

*/

/*function sayMyName(firstName, secondName ) {
return("Hello My Name Is: " + firstName + secondName);
}

console.log(sayMyName('Anubhav ', "Singh")); */


//function addTwoNumber(number1, number2) {
  //  return(number1 + number2)}

//console.log(addTwoNumber(1 + "a"));


//console.log(addTwoNumber(3, 5));

//const result = addTwoNumber(3, "a")
//console.log(result);
//console.log(typeof result);






/*function addNumber(numberOne, numberTwo) {
  console.log(numberOne + numberTwo);
}
function addNumber(numberOne, numberTwo) {
  let result = numberOne + numberTwo;
  //console.log("Anubhav"); // return ke pahle ho jayega execute par return ke baad nhi hoga kuchh
  return result
  //console.log("Anubhav");  //return ke baad koi kaam nahi karega function
}

const result = addNumber(3, 9)
console.log("Result: ", result);




function addNumber(numberOne, numberTwo) {
    let result = numberOne + numberTwo;
    return result
  }
  
  const result = addNumber(3, 9)
  console.log("Result: ", result);*/




  //function addNumber(numberOne, numberTwo) {
    //let result = numberOne + numberTwo;
    //return result
    //return numberOne + numberTwo}
  


  //const result = addNumber(3, 9)
  //console.log("Result: ", result);

  //function loginUserMessage(username){
    //if(username === undefined){
      //  console.log("Please Enter Your Name");
    //}
    //return `${username} Just Logged In`}
  //loginUserMessage("Yashu")
  //console.log(loginUserMessage("Yashu"));




  /*function loginUserMessage(username){
    if(username === undefined){
        console.log("Please Enter a Username");
    return
    }
    return `${username} Just Logged In`
  }
  //loginUserMessage("Yashu")
  console.log(loginUserMessage());*/






  /*function loginUserMessage(username){
    if(!username){
        console.log("Please Enter a Username");
    return
    }
    return `${username} Just Logged In`
  }
  //loginUserMessage("Yashu")
  console.log(loginUserMessage());*/






  function loginUserMessage(username = "Yashu"){
    if(!username){
        console.log("Please Enter a Username");
    return
    }
    return `${username} Just Logged In`
  }
  //loginUserMessage("Yashu")
  console.log(loginUserMessage("Rishi"));