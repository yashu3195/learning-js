
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






 /*function loginUserMessage(username = "Yashu"){
    if(!username){
        console.log("Please Enter a Username");
    return
    }
    return `${username} Just Logged In`
  }
  //loginUserMessage("Yashu")
  console.log(loginUserMessage("Rishi"));*/



  /*function calculateCartPrice(...num1){
    return num1
  }
  console.log(calculateCartPrice(200, 400, 500, 2000));
  */



  /*function calculateCartPrice(val1, val2, ...num1){
    return num1
  }
  console.log(calculateCartPrice(200, 400, 500, 2000));
*/

  const user = {
    userName: "Yashu",
    Price: 199,
  }

  function handleObject(anyobject) {
    console.log(`Username is ${anyobject.userName} and Price is ${anyobject.Price} `);
  }
 // handleObject(user)

 handleObject({
    userName: "Anubhav",
    Price: 399,
 })

 const newArray = [200, 663, 50, 663]
 function returnSecondValue(getNewArray){
return getNewArray[2]
 }
 console.log(returnSecondValue([200, 420, 307, 302]));
