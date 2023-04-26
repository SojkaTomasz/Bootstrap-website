$('.carousel-team').slick({
	arrows: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	mobileFirst: true,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 4,
			},
		},
	],
});
