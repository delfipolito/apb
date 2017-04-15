$( document ).ready(function(){
	 var cont = 1;

	 window.setInterval(function(){
		if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			 
		} 
		var background;
		var text;
		var color = '';
		switch (cont) {
			case 1: 
				background = 'url(./images/Aspen.jpg)'
				text = 'Aspen';
				color = 'white';
			break;
			case 2:
				background = 'url(./images/BuenosAires.jpg)'
				text = 'Buenos Aires'; 
				color = 'white';
			break;
			case 3:
				background = 'url(./images/Caesarea.jpg)'
				text = 'Caesarea'; 
				color = 'black';
			break;
			case 4:
				background = 'url(./images/Londres.jpg)'
				text = 'Londres'; 
				color = 'black';
			break;
			case 5:
				background = 'url(./images/LosAngeles.jpg)'
				text = 'Los Ángeles'; 
				color = 'black';
			break;
			case 6:
				background = 'url(./images/Mallorca.jpg)'
				text = 'Mallorca'; 
				color = 'white';
			break;
			case 7:
				background = 'url(./images/WindermereIsland.jpg)'
				text = 'Windermere Island';
				color = 'white'; 
			break;
			default: 
		}

		  $('#home')
 			.animate({opacity: 0}, 'slow', function() {
 					$(this)
 						.css({'background-image': background})
 						.animate({opacity: 1});
 			});

 		if (color == 'white') {
 			$('#border')
 			.animate({opacity: 0}, 'slow', function() {
 					$(this)
 						.css({'border-color': 'white'})
 						.animate({opacity: 1});
 			});
 			$('.enter-button')
 			.animate({opacity: 0}, 'slow', function() {
 					$(this)
 						.css({'color': 'white'})
 						.animate({opacity: 1});
 			});
 		} else if (color == 'black'){
 			$('#border')
 			.animate({opacity: 0}, 'slow', function() {
 					$(this)
 						.css({'border-color': 'black'})
 						.animate({opacity: 1});
 			});
 			$('.enter-button')
 			.animate({opacity: 0}, 'slow', function() {
 					$(this)
 						.css({'color': 'black'})
 						.animate({opacity: 1});
 			});
 		}
 		
			if (cont<7) {
				cont = cont + 1;
			} else {
				cont = 1;
			}
			
		}, 5000);


		$("#area1").mouseenter( function() {
      $('.caesarea-triangle').removeClass('hidden');
	  });
	  $("#close-caesarea").click( function() {
	  	$('.caesarea-triangle').addClass('hidden');
	  });

	  $("#area2").mouseenter( function() {
	  	$('.furniture-triangle').removeClass('hidden');
	  });
	  $("#close-furniture").click( function() {
	  	$('.furniture-triangle').addClass('hidden');
	  });

	  $("#area3").mouseenter( function() {
	  	$('.mallorca-triangle').removeClass('hidden');
	  });
	  $("#close-mallorca").click( function() {
	  	$('.mallorca-triangle').addClass('hidden');
	  });

	  $("#area4").mouseenter( function() {
	  	$('.london-triangle').removeClass('hidden');
	  });
	  $("#close-london").click( function() {
	  	$('.london-triangle').addClass('hidden');
	  });

	  $("#area5").mouseenter( function() {
	  	$('.bsas-triangle').removeClass('hidden');
	  });
	  $("#close-bsas").click( function() {
	  	$('.bsas-triangle').addClass('hidden');
	  });

	  $("#area6").mouseenter( function() {
	  	$('.sfernando-triangle').removeClass('hidden');
	  });
	  $("#close-sfernando").click( function() {
	  	$('.sfernando-triangle').addClass('hidden');
	  });

	  $("#area7").mouseenter( function() {
	  	$('.bahamas-tirangle').removeClass('hidden');
	  });
	  $("#close-bahamas").click( function() {
	  	$('.bahamas-tirangle').addClass('hidden');
	  });

	  $("#area8").mouseenter( function() {
	  	$('.aspen-triangle').removeClass('hidden');
	  });
	  $("#close-aspen").click( function() {
	  	$('.aspen-triangle').addClass('hidden');
	  });

	  $("#area9").mouseenter( function() {
	  	$('.la-triangle').removeClass('hidden');
	  });
	  $("#close-la").click( function() {
	  	$('.la-triangle').addClass('hidden');
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
})
