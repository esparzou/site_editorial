$(document).ready(function(){
  $('#menu-handler').click(function(){
    $(this).toggleClass('move-menu-handler');
    $('#sidebar').toggleClass('show-sidebar');
  });

  $('.open-sub-menu').click(function(){
    $(this).siblings('.sub-menu').slideToggle();
  });

});