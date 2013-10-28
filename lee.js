
  
// this does the parallax        
$(document).ready(function(){

  $window = $(window);
  
  var leftMargin = Math.round(Math.random()*30);
  
  $('section[data-type="background"]').each(function(){
    var $bgobj = $(this); // assigning the object
   
    $(window).scroll(function() {
      var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
           
      // Put together our final background position
      var coords = $bgobj.data('offset') + ' ' + (600 + yPos) + 'px';

      // Move the background
      $bgobj.css({ backgroundPosition: coords });
    }); 
  });    
});

