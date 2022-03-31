$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 300,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left-arrow.png"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right-arrow.png"></img></button>',
        responsive:[
            {
                breackpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
      });
});