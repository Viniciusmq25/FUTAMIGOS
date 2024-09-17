$(document).ready(function() {

  var $slider = $('.elenco');
    $slider.slick({
      infinite: true,
      centerMode: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      swipeToSlide: false,
      dots: true,
      draggable: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            slidesToShow: 3
          }
        }
      ]
    });
  });
