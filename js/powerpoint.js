$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });

  var owl = $("#owl-demo").data('owlCarousel');

  Myo.on('fist', function() {
    console.log('Fist!');
    this.vibrate();
  });

  Myo.on('fingers_spread', function() {
    console.log('Fingers spread!');
    this.vibrate();
  });

  Myo.on('wave_in', function() {
    console.log('Wave in!');
    owl.prev();
  });

  Myo.on('wave_out', function() {
    console.log('Wave out!');
    owl.next();
  });

  Myo.on('double_tap', function() {
    console.log('Double tap!');
    this.vibrate();
  });

  Myo.on('connected', function() {
    Myo.setLockingPolicy("none");
  });

  Myo.connect();
 
});