


 //                ---1---



/*var a = document.querySelector('h1')
//console.log(a);

a.innerHTML = "Changed html through innerhtml";

var p = document.querySelector('p')
p.style.color = "darkorange"
a.style.backgroundColor = "yellow"
 

a.addEventListener('click', function() {
    a.innerHTML = 'mai badal jaunga click pe'
    a.style.backgroundColor = 'green'
})*/




//                ---2----


/*var bulb = document.querySelector("#bulb");

var btn = document.querySelector("button");

var flag = 0;

btn.addEventListener("click", function(){
    if (flag === 0){
        bulb.style.backgroundColor = "yellow"
        flag = 1;
    }
    else{
        bulb.style.backgroundColor = "transparent"
        btn.innerHTML = "Off"
        flag = 0;
    }
    
})
*/



//             -----3-------

/*var heading = document.querySelectorAll('h1')
heading.forEach(function(Elem) {
    console.log(Elem);
})

document.getElementById('box')
document.getElementsByClassName('box2')*/

var box = document.querySelector('#box');
//box.innerHTML = '<h1> hello ji</h1>'
box.textContent = '<h1> hello ji</h1>'