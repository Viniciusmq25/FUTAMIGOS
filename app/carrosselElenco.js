$(document).ready(function() { 
  var $slider = $('.elenco');
  $slider.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    dots: false,
    centerMode: true, // Ativar centerMode
    focusOnSelect: true,
    touchThreshold: 100,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 3,
          swipeToSlide: true,
          centerMode: true, // Manter centerMode ativado para telas maiores
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          swipeToSlide: true,
          centerMode: false, // Desativar centerMode para telas menores
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          swipeToSlide: true,
          centerMode: false, // Desativar centerMode para telas menores
          dots: false
        }
      }
    ]
  });
});



$(document).ready(function() {
  $('.musicas-futamigos').slick({
    infinite:false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          swipeToSlide: true,
          centerMode: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          swipeToSlide: true,
          centerMode: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          swipeToSlide: true,
          centerMode: false,
        }
      }
    ]
  });
})