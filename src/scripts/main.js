// Main
console.log('FullStack Vietnam!')

$('.owl-one').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 1
        },
        1000:{
            items: 1
        }
    }
})

$('.owl-two').owlCarousel({
    loop:true,
    margin:10,
    dots: false,
    responsiveClass:true,
    autoplay: true,
    autoplayTimout: 5000,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
        }
    }
})