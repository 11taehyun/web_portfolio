
$(function() {

    // 슬릭 슬라이드 시작!
    $('.slide-container').slick({
        dots: false,
        arrows: true,

        autoplay: true,                
        autoplaySpeed: 3000,           
        infinite: true,                 
        speed:500,                      


        slidesToShow: 1,                
        slidesToScroll: 1,              


        pauseOnDotsHover: true,         
        pauseOnFocus: true,             
        pauseOnHover: true,            



        // 네비게이션 화살표 커스텀
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></btton>',


        // 다른 슬라이드와 연결하는 옵션
        asNavFor: '.slide-nav',


        /* 반응형 */
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
    
        ]
    })  // 메인 슬라이드 끝


    // 슬라이드 네비게이션
    $('.slide-nav').slick({
        dots: false,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,

        pauseOnDotsHover: true,         
        pauseOnFocus: true,             
        pauseOnHover: true,             
        
        centerMode: true,
        focusOnSelect: true,

        // 다른 슬라이드와 연결하는 옵션
        asNavFor: '.slide-container',
    }) // 슬라이드 네비게이셔 끝


    /* 메뉴 닫기 */
    $('#btn-close').on('click', function() {
        $('header').animate({
            'left' : '-25rem'
        }, 400)

        $('body').animate({
            'padding-left' : 0
        }, 400)
    })

    /* 메뉴 열기 */
    $('#btn-menu').on('click', function() {
        $('header').animate({
            'left' : 0
        }, 400)

        $('body').animate({
            'padding-left' : '25rem'
        }, 400)
    })





})