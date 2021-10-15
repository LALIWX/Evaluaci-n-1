$(document).ready(function () {

    $(function () {
      $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
      });
    });
  
    $('.subir').click(function (e) {
  
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
});

  