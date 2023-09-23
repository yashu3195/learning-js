const marvel_heros = ["ironman", "thor", "spiderman", "captainamerika"];
const dc_heros = ["batman", "flash", "superman", "wonderwoman"];

//marvel_heros.push(dc_heros);
////console.log(marvel_heros);
//console.log(marvel_heros[4] [1]);

const allHeroes = marvel_heros.concat(dc_heros); // concat joins two arrays
//console.log(allHeroes);

const allNewHeros = [...marvel_heros, ...dc_heros];  // this is spread method , coders prefer this method because this method can add many arrays at once
//console.log(allNewHeros);    
    
 //allNewHeros = ['ironman', 'thor', 'spiderman', 'captainamerika', 'batman', 'flash', 'superman', 'wonderwoman']

const newArray = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10]]]   // = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newAnotherArray = newArray.flat(Infinity)
const newAnotherArray = newArray.flat(4);   // 4 isliye ki 4 array hai
//console.log(newAnotherArray);

//Array.isArray("Anubhav");    // Array.isArray ye batata hai ki value array hai ki nahi
//console.log(Array.isArray("Anubhav"));
//console.log(Array.from("Anubhav"));   // Array.from Array.from values(string, object) ko array me badal deta hai  = [A', 'n', 'u', 'b', 'h', 'a', 'v']    
//console.log(Array.from({name: "Anubhav"}))   //object me ye batana padta hai ki key yaa value kiska array banana hai
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));   // output = [100, 200, 300], 


