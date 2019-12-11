$(function() {

  // Header slider

  $('#header-slider').slick({
    // slidesToScroll: 4,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  });

  // first word title add in span

  $('.section__title').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});

  // Hamburger-menu

  $('.hamburger').click(function () {
		$(this).toggleClass('is-active');
		if($(this).hasClass('is-active')) {
			$('.navbar').slideDown(600);
			$('body').addClass('body--active');
		} else {
			$('.navbar').hide();
			$('body').removeClass('body--active');
		};
	});

  // Accordion (section about)

  if ($('.accordion__btn').hasClass('accordion__btn--active')) {
    $('.accordion__btn--active i').removeClass('fa-plus').addClass('fa-minus');
  } else {
    $('.accordion__btn--active i').removeClass('fa-minus').addClass('fa-plus');
  }

  $('.accordion__btn').click(function() {
    $('.accordion__btn').removeClass('accordion__btn--active');
    $(this).addClass('accordion__btn--active');

    $('.accordion__btn i').removeClass('fa-minus').addClass('fa-plus');
    $('.accordion__btn--active i').addClass('fa-minus').removeClass('fa-plus');

    $('.accordion__text').not($(this).next()).slideUp();
    $(this).next().slideToggle();
  });

});