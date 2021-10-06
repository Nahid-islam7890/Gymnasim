$(document).ready(function(){
    $(".banner-container").slick({
        arrows: false,
        dots: true,
    }); //slick statement end
    $('.venobox').venobox({
        closeBackground: "#ffc155",
        closeColor: '#fff'
    });// venobox js
    $('.grallery-img').directionalHover({
          overlay:"grallery-overlay",
    });//hover js end
    $(".slick-container").slick({
        slidesToShow: 4,
        arrows: false,
        responsive:[
            {
                breakpoint: 992,
                settings:{
                    slidesToShow: 3,
                    autoplay: true,

                }
            },
            {
                breakpoint: 768,
                settings:{
                    slidesToShow: 2,
                    autoplay: true,

                }
            },
            {
                breakpoint: 576,
                settings:{
                    slidesToShow: 1,
                    autoplay: true,

                }
            }
        ]

    });// team-container end
    $(".testimoinal-container").slick({
        slidesToShow: 2,
        arrows: false,
        dots: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    
                  }
            },
            {
                breakpoint: 768,
                settings:{
                    slidesToShow: 1,
                    autoplay: true,

                }
            },
            
            


        ]
    });// statement end
    // counter up start
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });// statement end
    // partner js start
    $(".partner-container").slick({
        slidesToShow: 5,
       
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        nextArrow: '<i class="fas fa-chevron-right nextArrow"></i>',
        prevArrow: '<i class="fas fa-chevron-left prevArrow"></i>',
        responsive:[{
            breakpoint: 992,
            settings:{
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings:{
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 576,
            settings:{
                slidesToShow: 1,
                autoplay: true,
                centerMode: false,
                arrows: false,
                

            }
        }
    ]
    }
    );
})


$("#routine .routine-tab .tab-content ul li").click(
    function(){
        $(this).addClass("active").siblings().removeClass("active");
    }
)