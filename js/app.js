$(function (){

    // Jquery Starts Here
    $('.parenSlider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '60px',
      autoplay: true,
      autoplaySpeed: 800,
      prevArrow: ".arrows .leftArrow",
      nextArrow: ".arrows .rightArrow",
      dots: true,
    });

})