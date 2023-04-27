new Swiper('.first-swiper', {
    touchRatio: 1,
    TouchAngle: 45,
    simulateTouch: true,
    grabCursor: true,

    slidesPerView: 1.2,
    
    spaceBetween: 30,

    freeMode: true,

    breakpoints: {
        426: {
            
            slidesPerView: 2.25,
        },

        769: {
            
            slidesPerView: 3.6,
        },

        
        
        

    },
})


new Swiper('.second-swiper',{
    touchRatio: 1,
    TouchAngle: 45,

    slidesPerView: 1,
    
    spaceBetween: 20,

    freeMode: true,

    breakpoints: {
    
        426: {
            slidesPerView: 1.8,
            spaceBetween: 2.5,
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 2.5,
        },
    },

})
