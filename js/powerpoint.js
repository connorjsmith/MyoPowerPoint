$(document).ready(function() {
  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
 
  sync1.owlCarousel({
    center: true,
    loop: false,
    items: 1,
    responsiveRefreshRate : 200,
  });
 
  sync2.owlCarousel({
    center: true,
    loop: false,
    items: 3,
    responsiveRefreshRate : 100,
    afterInit: function(el) {
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });


  document.getElementById("sync2").style.display = "none";

  function SwitchtoThumbnail(){
  	document.getElementById("sync2").style.display = "block";
  	document.getElementById("sync1").style.display = "none";
  }

  function SwitchBack(){
  	document.getElementById("sync2").style.display = "none";
  	document.getElementById("sync1").style.display = "block";
  }
 
  var owl1 = sync1.owlCarousel();
  var owl2 = sync2.owlCarousel();

  owl1.on('next.owl.carousel', function(e) {
    owl2.trigger('next.owl.carousel');
  });

  owl1.on('prev.owl.carousel', function(e) {
    owl2.trigger('prev.owl.carousel');
  });

  Myo.on('fist', function() {
    console.log('Fist!');
    SwitchBack();
    this.vibrate();
  });

  Myo.on('fingers_spread', function() {
    console.log('Fingers spread!');
    SwitchtoThumbnail();
    this.vibrate();
  });

  Myo.on('wave_in', function() {
    console.log('Wave in!');
    owl1.trigger('prev.owl.carousel');
  });

  Myo.on('wave_out', function() {
    console.log('Wave out!');
    owl1.trigger('next.owl.carousel');
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
