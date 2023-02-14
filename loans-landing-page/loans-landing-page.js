$(".llp-banner-slider").slick({
  arrows: false,
  dots:true,
  appendDots: '.llp-slick-dots'
});


$(".llp-partners-carousel").slick({
  slidesToShow: 6,
  arrows:false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  pauseOnHover: false,
  cssEase: 'linear',
  accesibility: false,
  draggable: false,
  swipe: false,
  touchMove: false,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
});
