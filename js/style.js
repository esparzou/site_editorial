$(document).ready(function(){
  $('#menu-handler').click(function(){
    $(this).toggleClass('move-icon-menu');
    $('#sidebar').toggleClass('show');

  });
});