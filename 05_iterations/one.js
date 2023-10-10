// for loop


//for (let index = 0; index < 10; index++) {
//    const element = index;
//    console.log(element);
//    
//}

//output  
//0
//1
//2
//3
//4
//5
//6
//7
//8
//9



//for (let i = 0; i <= 10; i++) {
//    const element = i;
//    console.log(element);
//    
//}
//
//console.log(element);  // not accessible outside block

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
       //console.log("5 is best no."); 
    }
    //console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer Loop Value: ${i}`);
    for (let j = 1; j <= 10; j++) {
    //console.log(`Inner Loop Value ${j} and inner Loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i * j);
}
    
}
let myArray = ["flash", "batman", "Joker"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}

for (let index = 1; index <= 20; index++) {
    const element = index;
    ;
    if (element == 5) {
        console.log("Detected 5 loop should be end here");
        //break
        continue
    }
    console.log(element)
}