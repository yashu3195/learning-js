//let A = 10
//const B = 20
//var C = 30
//console.log(A);
//console.log(B);
//console.log(C);
/*const  A = 56

if (true) {
    let A = 10
    const B = 20
    //var C = 30      //avoid var - ye global variable hi rahega scope me bhi
    console.log(A)        //output = 10
}
     
console.log(A);       // output = 56 */

/*function one(){

    const userName = "Hitesh"

    function two() {

        const website = "Google"

        console.log(userName);
    }
        //console.log(website);

    two()


}

one() */


/*function main() {

    const username = "Yashu"

    function subMain() {

        const website = "youtube"

        console.log(username);
        
    }
    subMain()
    
    //console.log(website);
}

main()

*/



if (true){

    const user = "Shruti";

    if(user === "Shruti"){
        const websiTe = " Meta"
        //console.log(user +  websiTe);
    }
    //console.log(websiTe);    --first error--website is not defined

}
//console.log(user);    --second errod--user is not defined

console.log(addOne(5))
// is tareeke se likhne par initialization se pahle bhi value access kar sakte hai
function addOne(num){
    return num + 1
}

//console.log(addTwo);
const addTwo = function(num){
    return num + 2
 
     //is tareeke se likhne par initialization se pahle value access nahi kar sakte
}
console.log(addTwo(8));