// gsap.to(".box1",{
//     rotate:360,
//     duration: 2,
//     delay:1,
//     x:400,
//     borderRadius:"50%",
//     repeat:-1


// })

// gsap.from(".box2",{
//     duration:2,
//     delay:1,
//     x:400,
//     stagger:0.5,
//     opacity:0,
//     borderRadius:"50%",
//     rotate:360,
//     repeat:-1

// })


var animation = gsap.timeline()

animation.to (".box1",{
    x:200,
    duration:2,
    delay : 1,
    // rotate:360,
    // repeat:-1


})

animation.to (".box2",{
    x:200,
    duration:2,
    // delay:1,
    // rotate:360
})

animation.to (".box3",{
    x:200,
    duration:2,
    // delay:1,
    // rotate:360
})