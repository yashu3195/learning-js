var mainDiv = document.querySelector('#main')

var cursorDiv = document.querySelector('.cursor')

mainDiv.addEventListener("mousemove", function (dets) {
    //console.log(dets);
    //console.log(dets.x);
    //console.log(dets.y);
    cursorDiv.style.left = dets.x+"px"
   cursorDiv.style.top = dets.y+"px"
})

