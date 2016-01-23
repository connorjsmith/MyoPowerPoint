$(document).ready(function() {
  // var a = $("#owl-demo").deepCopy();

  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
 
  sync1.owlCarousel({
  	navigation : false,
    singleItem : true,
    slideSpeed : 1000,
    pagination:true,
    afterAction : syncPosition,
    responsiveRefreshRate : 200,
  });
 
  sync2.owlCarousel({	
  	navigation : false,
    items : 15,
    /*itemsDesktop      : [1199,10],
    itemsDesktopSmall     : [979,10],
    itemsTablet       : [768,8],
    itemsMobile       : [479,4],*/
    pagination:true,
    responsiveRefreshRate : 100,
    afterInit : function(el){
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
 
  function syncPosition(el){
    var current = this.currentItem;
    $("#sync2")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($("#sync2").data("owlCarousel") !== undefined){
      center(current)
    }
  }
 
  $("#sync2").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
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
 
  function center(number){
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }
 
    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", num - sync2visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync2.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
      sync2.trigger("owl.goTo", num-1)
    }
    
  }
 
});

