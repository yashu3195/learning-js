var istatus = document.querySelector("h5");

var btn = document.querySelector("#add")

var check = 0;

btn.addEventListener("click", function(){
    if (check === 0) {
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        btn.innerHTML = "Remove Freind"
       check = 1;
    }
    else{
        istatus.innerHTML = "Stranger";
        istatus.style.color = "Red"
        btn.innerHTML = "Add Freind"
        check = 0;

    }
   
})

/*var remov = document.querySelector("#remove")
remov.addEventListener("click", function(){
    istatus.innerHTML = "Stranger"
    istatus.style.color = "red"

})*/