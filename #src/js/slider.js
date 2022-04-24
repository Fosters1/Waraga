
$(document).ready(function(){
        $('.slider-main').slick({
        arrows:true,
        dots:true,
        autoplay:true,
        autoplaySpeed:5000,
        touchTreshhold:10,
        vertical:false,
        verticalSwiping:false,
        infinite:true,
        rows:1,
        swipe: false,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    swipe: true,
                    arrows: false,
                }
            }
        ]
    });
});