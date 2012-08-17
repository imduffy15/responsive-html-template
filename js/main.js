$(document).ready(function() {
     $(".container").fitVids();
});

$(window).load(function() {
    $('#featured').flexslider({
      start: function(slider){
        $('#featured').removeClass('loading');
      }
    }
  );            
});
