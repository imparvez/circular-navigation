$(document).ready(function(){

  $('.trigger').on('click', function(){
    $('.cn-wrapper li').toggleClass('slideout');
  })

  $('#cn-button').on('click', function(){
    $('#cn-wrapper').toggleClass('opened-nav');
    if($(this).text() == "-") {
      $(this).text('+')
    } else {
      $(this).text('-')
    }
  })

});