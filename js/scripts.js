$(document).ready(function() {
  $(".hide-selections").hide();

  //Toggles between hidden and shown with easeing

  $(".cat-burger").on("click", function() {
    $(".hide-selections").toggle("fast");
  });

  $(".burger-menu").on("click", function() {
    $(this).hide();
    $('.sidenav').css('width', '250px');
  });

  $('.closebtn').on('click', function() {
    $('.burger-menu').show();
    $('.sidenav').css('width', '0');

  })
});
