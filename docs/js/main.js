$(document).ready(function(){
		$('.portfolio__slider').slick({
			arrows: true,
			dots: false,
			Infinite: true,
			slidesToShow: 1,
			waitForAnimate: false,
			centerMode: false,

		});
		
		$('.tariff__slider').slick({ 
			centerPadding: '40px',
			slidesToShow: 3,
			centerMode: true,
			Infinite: true,
			waitForAnimate: false,
			responsive: [
			  {
				 breakpoint: 768,
				 settings: {
					centerMode: true,
					centerPadding: '27px',
					slidesToShow: 1,
				 }
			  },
			  {
				 breakpoint: 480,
				 settings: {
					centerMode: true,
					centerPadding: '27px',
					slidesToShow: 1,
				 }
			  }
			]
		 });
		});






