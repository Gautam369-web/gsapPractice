gsap.from(".page1 #box", {
    x: 200,
    duration: 2,
    // delay: 1,
    rotate: 360,
    backgroundColor: "red",
    borderRadius: "50%",
    // repeat:-1, //infinite
    scrollTrigger: {
        trigger: ".page1 #box",
        // start: "top center",
        // end: "bottom center",
        start: "top 50%",
        scroller:"body",
        markers: true,
        scrub: 5
    }
})

gsap.from(".page2 #box", {
    x: 200,
    duration: 2,
    // delay: 1,
    rotate: 360,
    backgroundColor: "red",
    borderRadius: "50%",
    // repeat:-1, //infinite
    scrollTrigger: {

        trigger: ".page2 #box",
        // start: "top center",
        // end: "bottom center", 
        markers: true,
        scroller: "body",
        start: "top 60%",
        stop:"top 30%",
        // end: "bottom 20%",
        scrub:3
    }

})

gsap.from(".page3 #box", {
    x: 200,
    duration: 2,
    // delay: 1,
    rotate: 360,
    backgroundColor: "red",
    borderRadius: "50%",
    // repeat:-1, //infinite
    scrollTrigger: {
        trigger: ".page3 #box",
        // start: "top center",
        // end: "bottom center",
        scroller : "body",
        markers: true,
        scrub: 1
    }
})