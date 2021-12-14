$('.owl-carousel').owlCarousel({
    loop:true, // permite que a rolagem não acabe assim q acabar os itens
    margin:10, //margem entre um item e outro
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})