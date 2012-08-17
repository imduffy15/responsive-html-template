$(window).load(function() {
    $('#featured').flexslider({
      start: function(slider){
        $('#featured').removeClass('loading');
      }
    }
  );            
});

$(document).load(function() {
   $(".container").fitVids();
})