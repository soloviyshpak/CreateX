$(function () {

  // DIRECTIONS FILTER
  var mixer = mixitup('.directions__cardbox');

  $('.directions__filterbox-btn').on('click', function () {
    $('.directions__filterbox-btn').removeClass('directions__filterbox-btn--active')
    $(this).addClass('directions__filterbox-btn--active')
  })
  
  //  TEAM SLIDER
  $('.team__slider').slick({
      arrows: false,
      slidesToShow: 4,
      infinite: true,
      draggable: false,
      waitForAnimate: false,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
           
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1,
            dots: true,
            appendDots: $('.team__dots'),
          }
        },
      ]
    });
    // TEAM SLIDER BUTTONS
    $('.team__slider-prev').on('click', function (e){
      e.preventDefault()
      $('.team__slider').slick('slickPrev');
    })
    $('.team__slider-next').on('click', function (e){
      e.preventDefault()
      $('.team__slider').slick('slickNext');
    })
    
    // TESTIMONIALS SLIDER
    $('.testimonials__slider').slick({
      arrows: false,
      infinite: true,
      draggable: false,
      waitForAnimate: false,
      dots: true,
      appendDots: $('.testimonials__dots'),
    })
    // TESTIMONIALS SLIDER BUTTONS
    $('.testimonials__slider-prev').on('click', function (e){
      e.preventDefault()
      $('.testimonials__slider').slick('slickPrev');
    })
    $('.testimonials__slider-next').on('click', function (e){
      e.preventDefault()
      $('.testimonials__slider').slick('slickNext');
    })
    
    // PRGORAM ACCORDEON
    $('.program__accord-link').on('click', function (e) {
      e.preventDefault()
      if ($(this).hasClass('.program__accord-link--active')) {
        $(this).removeClass('program__accord-link--active')
        $(this).children('.program__accord-text').slideUp()
      } else {
        $('.program__accord-link').removeClass('program__accord-link--active')
        $('.program__accord-text').slideUp()
        $(this).addClass('program__accord-link--active')
        $(this).children('.program__accord-text').slideDown()
      }
    })

    // BURGER MENU
    $('.burger-btn').on('click', function (e) {
      e.preventDefault()
    })
    setInterval(() => {
      if ($(window).scrollTop() > 0 && $('.header__top-inner').hasClass('header__top-inner--active') === false) {
        $('.burger-btn').addClass('burger-btn--follow')
      } else {
        $('.burger-btn').removeClass('burger-btn--follow')
      }
    }, 0)
    $('.burger-btn, .overlay, .header__top-inner a').on('click', function (e) {
      $('.header__top-inner').toggleClass('header__top-inner--active')
      $('.overlay').toggleClass('overlay--show')
      $('.burger-btn').toggleClass('burger-btn--close')
    })

    // FOOTER SLIDE
    $('.footer__title--slide').on('click', function () {
      $(this).next().slideToggle()
      $(this).toggleClass('footer__title--slide_open')
    })
})