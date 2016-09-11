jQuery(document).ready(function(){

	jQuery('.section.references .slides').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots:true,
		arrows:true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows:true,
				}
			}
		]
	});

});
