//***************************dates */

/*let myDate = new Date();
console.log(myDate); //  unorganized format of date and time not understandable(2023-09-19T18:34:02.786Z)

console.log(myDate.toString()); // Tue Sep 19 2023 18:35:36 GMT+0000 (Coordinated Universal Time)


console.log(myDate.toJSON());            //     2023-09-19T18:40:01.222Z
console.log(myDate.toDateString());      //     Tue Sep 19 2023
console.log(myDate.toUTCString());      //     Tue, 19 Sep 2023 18:40:01 GMT
console.log(myDate.toLocaleString());   //    9/19/2023, 6:40:01 PM
console.log(myDate.toTimeString());   //    18:44:04 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleDateString());   //    9/19/2023
console.log(myDate.toISOString());   //    2023-09-19T18:46:10.069Z

console.log(typeof myDate);          // type is object */

/*let myCreatedDate = new Date(2023, 5, 12);
console.log(myCreatedDate.toString());

let myCreatedDate2 = new Date(1994, 0, 3, 12, 56, 25);
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2023-5-12");
console.log(myCreatedDate3.toLocaleString());  */

let myCreatedDate3 = new Date("03-11-2010");
//console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now();
//console.log(myTimeStamp);

//console.log(myCreatedDate3.getTime());

/*console.log(Math.floor(Date.now()/1000));*/

let newDate = new Date();
/*console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());*/ 

console.log(`the day is ${newDate.getDay()} and the month is ${newDate.getMonth()}`);