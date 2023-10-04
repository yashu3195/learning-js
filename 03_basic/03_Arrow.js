//const user = {
//    userName: "Anubhav Singh",
//    price: 999,
//
//    welcomMessage: function (){
//        {console.log(`${this.userName} , Welcome to Website`);}
//        console.log(this);
//    }
//    
//}
//***********************************this ko object ke andar use kar sakte hai par function ke andar nahi use kar sakte*************************
//user.welcomMessage()
//user.userName = "Sam Saket"
//user.price = 499
//user.welcomMessage()
//console.log(this);

//***********************************this ko object ke andar use kar sakte hai par function ke andar nahi use kar sakte*************************

/*function chay(){
    let userOne = "sam kol"
    console.log(this.userOne);
   
}

chay()
//console.log(this);


const chai = function(){
       let usertwo = "monty"
       console.log(this.usertwo);
}
chai()


const arrowF = () => {
    let usertwo = "monty"
       console.log(this.usertwo);
}
arrowF() */


//  ***********************Explicit return***********************
const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 9));



//**************Implicit Return************************************************************************************ */

//const multTwo = (num1, num2) => (num1 + num2)

//console.log(multTwo(3, 9));             output - 12


//const multTwo = () => ({ username: "hitesh"})

//console.log(multTwo());                   output - {'hitesh'}

const myArray = [2, 5, 89, 36, 45]
myArray.forEach(function () {  
})

myArray.forEach(() => {})
myArray.forEach(() => ({}))
myArray.forEach(() => ())