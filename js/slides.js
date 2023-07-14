$(function(){

    $('.mosaico .container .mosaico-wraper').slick({

        slidesToShow: 6,
        responsive:[

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    Infinity: true,
                    dots: false,
                    slidesToScroll:3,
                    arrows: false
                }
            },

            {
                breakpoint: 580,
                settings: {
                    slidesToShow:2,
                    arrows: false,
                    centerMode: true
                }
            },

            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    centerMode: true
                }
            }

        ]

    })

    $('.tratamentos .container').slick({
        centerMode: false,
        slidesToShow: 3,
        arrows: false,
        Infinity: false,
        responsive:[

            {
                breakpoint: 768,
                settings:{
                    arrows: false,
                    dots: true,
                    infinite: false,
                    centerMode: false,
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 480,
                settings:{
                    arrows: false,
                    dots: true,
                    infinite: false,
                    centerMode: false,
                    slidesToShow: 1
                }
            }

        ]
    })

    $('.depoimentos .container').slick({
        centerMode: false,
        arrows: false,
        slidesToShow: 1,
        dots: true
    })

    $('.mosaico-social .container-social').slick({
        centerMode: false,
        arrows: false,
        slidesToShow: 9,
        responsive:[
            {
                breakpoint: 768,
                settings:{
                    arrows: false,
                    infinite: false,
                    centerMode: false,
                    slidesToShow: 6
                }
            },

            {
                breakpoint: 550,
                settings:{
                    arrows: false,
                    infinite: false,
                    centerMode: false,
                    slidesToShow: 4
                }
            },

            {
                breakpoint: 480,
                settings:{
                    arrows: false,
                    infinite: false,
                    centerMode: false,
                    slidesToShow: 3
                }
            }
        ]
    })

})