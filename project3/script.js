var animation = gsap.timeline()

animation.from('h2', { y: -100 }, {
    y: 0, duration: 2, 
    delay: 1,
    // ease: 'bounce',
    // ease: 'bounce'
    repeat:-1
})


animation.from('h4',{
    y: -50,
    duration: 0.5,
    // delay: 1,
    // ease: 'bounce',

    stagger:0.5,
    // repeat:-1
})

animation.from('h1',{
    x: -100,
    duration: 1,
    opacity:0,
    // delay: 1,
    // ease: 'bounce',
    stagger:0.5,
    repeat:-1
})