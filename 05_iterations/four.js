const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by app"
}


for (const key in myObject) {
   //console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming){
    //console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "America")
map.set('FR', "France")
map.set('UK', "The Great Britain")

for (const key in map) {
 
   // console.log(key);
}

// is tarah se map me iterations nahi kiya jaa sakta tareeke hai par ye nhi hai aage seekhenge