// Initial path
var path = "M 10 100 Q 500 100 990 100"
// Final path
var finalPath = "M 10 100 Q 500 100 990 100"

var string = document.querySelector("#string")

string.addEventListener("mousemove",function(event){
    path = `M 10 100 Q 500 ${event.y} 990 100`

    gsap.to("svg path",{
        attr: {d: path}
    })
}) 