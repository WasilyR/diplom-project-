$(document).ready(function(){
		$('.portfolio__slider').slick({
			centerPadding: '100px',
			arrows: false,
			dots: false,
			Infinite: true,
			centerMode: true,
			slidesToShow: 1,
			waitForAnimate: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
					  centerMode: false,
					  slidesToShow: 1,
					}
				 },
				{
					breakpoint: 768,
					settings: {
					  centerMode: false,
					  slidesToShow: 1,
					}
				 },
			]
		})
			$('.portfolio-prev').on('click', function (e) {
				e.preventDefault()
				$('.portfolio__slider').slick('slickPrev')
			})
		
			$('.portfolio-next').on('click', function (e) {
				e.preventDefault()
				$('.portfolio__slider').slick('slickNext')
			})
		
		
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






