 //var elem1 = document.querySelector('#elem1');
 //var elemImg = document.querySelector("#elem1 img")

 //elem1.addEventListener("mousemove", function () {
 //   console.log("hello");
 //   
 //})

 /*elem1.addEventListener("mousemove", function (dets) {
    elemImg.style.left = dets.x + "px"
    elemImg.style.top = dets.y + "px"
    
 })

 elem1.addEventListener("mouseenter", function (dets) {
      elemImg.style.opacity = 1
      
 })

 elem1.addEventListener("mouseleave", function (dets) {
    elemImg.style.opacity = 0
    
})*/


var allElem = document.querySelectorAll(".elem")

allElem.forEach(function (val) {
    val.addEventListener("mouseenter", function () {
        val.childNodes[3].style.opacity = 1
    })

    val.addEventListener("mouseleave", function () {
        val.childNodes[3].style.opacity = 0
    })

    val.addEventListener("mousemove", function(dets){
        val.childNodes[3].style.left = dets.x+"px"
        val.childNodes[3].style.top = dets.y+"px"
    })
})