gsap.to(".box1",{
    x: 200,
    duration: 2,
    delay: 1,
    rotate : 360,
    backgroundColor: "red",
    borderRadius: "50%",
    // opacity : 0
    repeat:-1 //infinite
    
})


gsap.from("h1", 
    {
        duration: 2,
        delay: 1,
        // color: "red",
        y:30,
        // fontSize: "3rem",
        // letterSpacing: "10px",
        // textShadow: "2px 2px 2px black",
        // rotation: 360,
        stagger:0.5,
        opacity:0


    }
)