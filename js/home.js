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


})