$(document).ready(function() {


$('.hide-selections').hide()

  //Toggles between hidden and shown with easeing

  $('.cat-burger').on('click', function(){
    $('.hide-selections').toggle('fast')
  })

});
