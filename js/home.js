$( document ).ready(function(){
	$("body").on("contextmenu", "img", function(e) {
	  return false;
	});
	
	$(window).scroll(function() {
    var caesarea = $('.caesarea-item').offset().top;
	  if ($(window).scrollTop() >= (caesarea - 120) && $(window).scrollTop() <= (caesarea + 400)){	
	  	$('#animate1').addClass('item-hovered');
	  } 
	  if ($(window).scrollTop() >=  caesarea + 600){
	  	$('#animate1').removeClass('item-hovered');
	  }
	  var belair = $('.belair-item').offset().top;
	  if ($(window).scrollTop() >= (belair - 120) && $(window).scrollTop() <= (belair + 400)){
	  	$('#animate3').addClass('item-hovered');
	  } 
	  if ($(window).scrollTop() >=  belair + 600){
	  	$('#animate3').removeClass('item-hovered');
	  }

	  var aspen1 = $('.aspen1-img-2').offset().top;
	  if ($(window).scrollTop() >= (aspen1 - 120) && $(window).scrollTop() <= (aspen1 + 400)){
	  	$('#animate2').addClass('item-hovered');
	  } 
	  if ($(window).scrollTop() >=  aspen1 + 600){
	  	$('#animate2').removeClass('item-hovered');
	  }
	  
	  var aspen2 = $('.aspen2-img-1').offset().top;
	  if ($(window).scrollTop() >= (aspen2 - 120) && $(window).scrollTop() <= (aspen2 + 400)){
	  	$('#animate4').addClass('item-hovered');
	  } 
	  if ($(window).scrollTop() >=  aspen2 + 600){
	  	$('#animate4').removeClass('item-hovered');
	  }
	});



	$("#area1").mouseenter( function() {
    $('.caesarea-triangle').removeClass('hidden');
  });
  $("#close-caesarea").click( function() {
  	$('.caesarea-triangle').addClass('hidden');
  	hideContent();
  });

  $("#area2").mouseenter( function() {
  	$('.furniture-triangle').removeClass('hidden');
  });
  $("#close-furniture").click( function() {
  	$('.furniture-triangle').addClass('hidden');
  	hideContent();
  });

  $("#area3").mouseenter( function() {
  	$('.mallorca-triangle').removeClass('hidden');
  });
  $("#close-mallorca").click( function() {
  	$('.mallorca-triangle').addClass('hidden');
  	hideContent();
  });

  $("#area4").mouseenter( function() {
  	$('.london-triangle').removeClass('hidden');
  });
  $("#close-london").click( function() {
  	$('.london-triangle').addClass('hidden');
  	hideContent();
  });

  $("#area5").mouseenter( function() {
  	$('.bsas-triangle').removeClass('hidden');
  });
  $("#close-bsas").click( function() {
  	$('.bsas-triangle').addClass('hidden');
  	hideContent();
  });

  $("#area6").mouseenter( function() {
  	$('.sfernando-triangle').removeClass('hidden');
  });
  $("#close-sfernando").click( function() {
  	$('.sfernando-triangle').addClass('hidden');
  	hideContent();
  });

  $("#area7").mouseenter( function() {
  	$('.bahamas-tirangle').removeClass('hidden');
  });
  $("#close-bahamas").click( function() {
  	$('.bahamas-tirangle').addClass('hidden');
  	hideContent();
  });

  $("#area8").mouseenter( function() {
  	$('.aspen-triangle').removeClass('hidden');
  });
  $("#close-aspen").click( function() {
  	$('.aspen-triangle').addClass('hidden');
  	hideContent();
  });

  $("#area9").mouseenter( function() {
  	$('.la-triangle').removeClass('hidden');
  });
  $("#close-la").click( function() {
  	$('.la-triangle').addClass('hidden');
  	hideContent();
  });


	  

  // transitions
  $("#aspen-transition-1").click( function() {
  	$('.aspen1-triangle').removeClass('hidden');
  	$('.aspen1-triangle').animate({height: "285px"}, "slow", "swing");
  	showContent();
  });
  $("#aspen-transition-2").click( function() {
  	$('.aspen2-triangle').removeClass('hidden');
  	$('.aspen2-triangle').animate({height: "285px"}, "slow", "swing");
  	showContent();
  });
  $("#aspen-transition-3").click( function() {
  	$('.aspen3-triangle').removeClass('hidden');
  	$('.aspen3-triangle').animate({height: "285px"}, "slow", "swing");
  	showContent();
  });

  $("#london-transition-1").click( function() {
  	$('.london1-triangle').removeClass('hidden');
  	$('.london1-triangle').animate({height: "285px"}, "slow", "swing");
  	showContent();
  });
  $("#london-transition-2").click( function() {
  	$('.london2-triangle').removeClass('hidden');
  	$('.london2-triangle').animate({height: "285px"}, "slow", "swing");
  	showContent();
  });
  $("#london-transition-3").click( function() {
  	$('.london3-triangle').removeClass('hidden');
  	$('.london3-triangle').animate({height: "285px"}, "slow", "swing");
  	showContent();
  });
  $("#bsas-transition-1").click( function() {
  	$('.bsas1-triangle').removeClass('hidden');
  	$('.bsas1-triangle').animate({height: "285px"}, "slow", "swing");
  	showContent();
  });
  $("#bsas-transition-2").click( function() {
  	$('.bsas2-triangle').removeClass('hidden');
  	$('.bsas2-triangle').animate({height: "285px"}, "slow", "swing");
  	showContent();
  });
  $("#la-transition-1").click( function() {
  	$('.la1-triangle').removeClass('hidden');
  	$('.la1-triangle').animate({height: "285px"}, "slow", "swing");
  	showContent();
  });
  $("#la-transition-2").click( function() {
  	$('.la2-triangle').removeClass('hidden');
  	$('.la2-triangle').animate({height: "285px"}, "slow", "swing");
  	showContent();
  });
  $("#la-transition-3").click( function() {
  	$('.la3-triangle').removeClass('hidden');
  	$('.la3-triangle').animate({height: "285px"}, "slow", "swing");
  	showContent();
  });
  $("#la-transition-4").click( function() {
  	$('.la4-triangle').removeClass('hidden');
  	$('.la4-triangle').animate({height: "285px"}, "slow", "swing");
  	showContent();
  });
  $("#la-transition-5").click( function() {
  	$('.la5-triangle').removeClass('hidden');
  	$('.la5-triangle').animate({height: "285px"}, "slow", "swing");
  	showContent();
  });

	function showContent() {
		setTimeout(function () {
       $('.late-content').removeClass('hidden');
    }, 800);
	}
	function hideContent(className) {
		$('.late-content').addClass('hidden');
		setTimeout(function () {
       $(className).addClass('hidden');
    }, 500);
	}


	  // transitions
	  $("#aspen1-close").click( function() {
	  	hideContent('.aspen1-triangle');
	  	$('.aspen1-triangle').animate({height: "0px"}, "slow", "swing");
	  });
	  $("#aspen2-close").click( function() {
	  	hideContent('.aspen2-triangle');
	  	$('.aspen2-triangle').animate({height: "0px"}, "slow", "swing");
	  });
	  $("#aspen3-close").click( function() {
	  	hideContent('.aspen3-triangle');
	  	$('.aspen3-triangle').animate({height: "0px"}, "slow", "swing");
	  });

	  $("#london1-close").click( function() {
	  	hideContent('.london1-triangle');
	  	$('.london1-triangle').animate({height: "0px"}, "slow", "swing");
	  });
	  $("#london2-close").click( function() {
	  	hideContent('.london2-triangle');
	  	$('.london2-triangle').animate({height: "0px"}, "slow", "swing");
	  });
	  $("#london3-close").click( function() {
	  	hideContent('.london3-triangle');
	  	$('.london3-triangle').animate({height: "0px"}, "slow", "swing");
	  });

	  $("#bsas1-close").click( function() {
	  	hideContent('.bsas1-triangle');
	  	$('.bsas1-triangle').animate({height: "0px"}, "slow", "swing");
	  });
	  $("#bsas2-close").click( function() {
	  	hideContent('.bsas2-triangle');
	  	$('.bsas2-triangle').animate({height: "0px"}, "slow", "swing");
	  });

	  $("#la1-close").click( function() {
	  	hideContent('.la1-triangle');
	  	$('.la1-triangle').animate({height: "0px"}, "slow", "swing");
	  });
	  $("#la2-close").click( function() {
	  	hideContent('.la2-triangle');
	  	$('.la2-triangle').animate({height: "0px"}, "slow", "swing");
	  });
	  $("#la3-close").click( function() {
	  	hideContent('.la3-triangle');
	  	$('.la3-triangle').animate({height: "0px"}, "slow", "swing");
	  });
	  $("#la4-close").click( function() {
	  	hideContent('.la4-triangle');
	  	$('.la4-triangle').animate({height: "0px"}, "slow", "swing");
	  });
	  $("#la5-close").click( function() {
	  	hideContent('.la5-triangle');
	  	$('.la5-triangle').animate({height: "0px"}, "slow", "swing");
	  });



	  // MOBILE
	  $("#close-modal").click( function() {
	  	$('.mobile-modal').addClass('hidden');
	  });
	  $("#mobile-bahamas").click( function() {
	  	$('.mobile-modal').css("background-image", "url('./images/Mobile/bahamas.png')");
	  	$('.mobile-modal').removeClass('hidden');
	  });
	  $("#mobile-sfernando").click( function() {
	  	$('.mobile-modal').css("background-image", "url('./images/Mobile/sfernando.png')");
	  	$('.mobile-modal').removeClass('hidden');
	  });
	  $("#mobile-mallorca").click( function() {
	  	$('.mobile-modal').css("background-image", "url('./images/Mobile/mallorca.png')");
	  	$('.mobile-modal').removeClass('hidden');
	  });
	  $("#mobile-caesarea").click( function() {
	  	$('.mobile-modal').css("background-image", "url('./images/Mobile/caesarea.png')");
	  	$('.mobile-modal').removeClass('hidden');
	  });
	  $("#mobile-furniture").click( function() {
	  	$('.mobile-modal').css("background-image", "url('./images/Mobile/furniture.png')");
	  	$('.mobile-modal').removeClass('hidden');
	  });

	  // MOBILE BA
	  $("#mobile-ba").click( function() {
	  	$('.mobile-modal-ba-1').removeClass('hidden');
	  });
	  $("#go-to-ba-1").click( function() {
	  	$('.mobile-modal-ba-1').removeClass('hidden');
	  	$('.mobile-modal-ba-2').addClass('hidden');
	  });
	  $("#go-to-ba-2").click( function() {
	  	$('.mobile-modal-ba-1').addClass('hidden');
	  	$('.mobile-modal-ba-2').removeClass('hidden');
	  });
	  $("#close-modal-ba-1").click( function() {
	  	$('.mobile-modal-ba-1').addClass('hidden');
	  });
	  $("#close-modal-ba-2").click( function() {
	  	$('.mobile-modal-ba-2').addClass('hidden');
	  });

	  // MOBILE ASPEN
	  $("#mobile-aspen").click( function() {
	  	$('.mobile-modal-aspen-1').removeClass('hidden');
	  });
	  $("#go-to-aspen-1").click( function() {
	  	$('.mobile-modal-aspen-2').addClass('hidden');
	  	$('.mobile-modal-aspen-3').addClass('hidden');
	  	$('.mobile-modal-aspen-1').removeClass('hidden');
	  });
	  $(".go-to-aspen-2").click( function() {
	  	$('.mobile-modal-aspen-1').addClass('hidden');
	  	$('.mobile-modal-aspen-3').addClass('hidden');
	  	$('.mobile-modal-aspen-2').removeClass('hidden');
	  });
	  $("#go-to-aspen-3").click( function() {
	  	$('.mobile-modal-aspen-1').addClass('hidden');
	  	$('.mobile-modal-aspen-2').addClass('hidden');
	  	$('.mobile-modal-aspen-3').removeClass('hidden');
	  });
	  $("#close-modal-aspen-1").click( function() {
	  	$('.mobile-modal-aspen-1').addClass('hidden');
	  });
	  $("#close-modal-aspen-2").click( function() {
	  	$('.mobile-modal-aspen-2').addClass('hidden');
	  });
	  $("#close-modal-aspen-3").click( function() {
	  	$('.mobile-modal-aspen-3').addClass('hidden');
	  });

	  // MOBILE LONDON
	  $("#mobile-london").click( function() {
	  	$('.mobile-modal-london-1').removeClass('hidden');
	  });
	  $("#go-to-london-1").click( function() {
	  	$('.mobile-modal-london-2').addClass('hidden');
	  	$('.mobile-modal-london-3').addClass('hidden');
	  	$('.mobile-modal-london-1').removeClass('hidden');
	  });
	  $(".go-to-london-2").click( function() {
	  	$('.mobile-modal-london-1').addClass('hidden');
	  	$('.mobile-modal-london-3').addClass('hidden');
	  	$('.mobile-modal-london-2').removeClass('hidden');
	  });
	  $("#go-to-london-3").click( function() {
	  	$('.mobile-modal-london-1').addClass('hidden');
	  	$('.mobile-modal-london-2').addClass('hidden');
	  	$('.mobile-modal-london-3').removeClass('hidden');
	  });
	  $("#close-modal-london-1").click( function() {
	  	$('.mobile-modal-london-1').addClass('hidden');
	  });
	  $("#close-modal-london-2").click( function() {
	  	$('.mobile-modal-london-2').addClass('hidden');
	  });
	  $("#close-modal-london-3").click( function() {
	  	$('.mobile-modal-london-3').addClass('hidden');
	  });

	  // MOBILE LA
	  $("#mobile-la").click( function() {
	  	$('.mobile-modal-la-1').removeClass('hidden');
	  });
	  $(".go-to-la-1").click( function() {
	  	$('.mobile-modal-la-2').addClass('hidden');
	  	$('.mobile-modal-la-3').addClass('hidden');
	  	$('.mobile-modal-la-4').addClass('hidden');
	  	$('.mobile-modal-la-5').addClass('hidden');
	  	$('.mobile-modal-la-1').removeClass('hidden');
	  });
	  $(".go-to-la-2").click( function() {
	  	$('.mobile-modal-la-1').addClass('hidden');
	  	$('.mobile-modal-la-3').addClass('hidden');
	  	$('.mobile-modal-la-4').addClass('hidden');
	  	$('.mobile-modal-la-5').addClass('hidden');
	  	$('.mobile-modal-la-2').removeClass('hidden');
	  });
	  $(".go-to-la-3").click( function() {
	  	$('.mobile-modal-la-1').addClass('hidden');
	  	$('.mobile-modal-la-2').addClass('hidden');
	  	$('.mobile-modal-la-4').addClass('hidden');
	  	$('.mobile-modal-la-5').addClass('hidden');
	  	$('.mobile-modal-la-3').removeClass('hidden');
	  });
	  $(".go-to-la-4").click( function() {
	  	$('.mobile-modal-la-1').addClass('hidden');
	  	$('.mobile-modal-la-2').addClass('hidden');
	  	$('.mobile-modal-la-3').addClass('hidden');
	  	$('.mobile-modal-la-5').addClass('hidden');
	  	$('.mobile-modal-la-4').removeClass('hidden');
	  });
	  $(".go-to-la-5").click( function() {
	  	$('.mobile-modal-la-1').addClass('hidden');
	  	$('.mobile-modal-la-2').addClass('hidden');
	  	$('.mobile-modal-la-3').addClass('hidden');
	  	$('.mobile-modal-la-4').addClass('hidden');
	  	$('.mobile-modal-la-5').removeClass('hidden');
	  });
	  $("#close-modal-la-1").click( function() {
	  	$('.mobile-modal-la-1').addClass('hidden');
	  });
	  $("#close-modal-la-2").click( function() {
	  	$('.mobile-modal-la-2').addClass('hidden');
	  });
	  $("#close-modal-la-3").click( function() {
	  	$('.mobile-modal-la-3').addClass('hidden');
	  });
	  $("#close-modal-la-4").click( function() {
	  	$('.mobile-modal-la-4').addClass('hidden');
	  });
	  $("#close-modal-la-5").click( function() {
	  	$('.mobile-modal-la-5').addClass('hidden');
	  });
})
