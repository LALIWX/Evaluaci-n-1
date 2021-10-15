$(document).ready(function () {

    $(function () {
      $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 300
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

  