$('.vitrine-flex').slick({
    dots: false,
    arrows: false,
    infinite: false,
    centerMode: false,
    speed: 1000,
    slidesToShow: 6,
    autoPlay: true,
    autoPlaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
        {
            breakPoint: 768,
            settings: {
                slidesToShow: 3
            }
        
    }]
});

$('.vitrine-wraper').hover(function(){
    $(this).css('z-index','1000');
});

$('.vitrine-wraper').mouseout(function(){
    $(this).css('z-index','0');
});