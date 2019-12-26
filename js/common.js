$(function() {

  // Header slider

  $('#header-slider').slick();

  // first word title add in span

  $('.section__title').each(function() {
		$(this).html($(this).html().replace(/^(\S+)/, '<span>$1</span>'));
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

  	// Filter (section projects)

	$('.projects__list-btn').click(function() {
		$('.projects__list-btn').removeClass('active');
		$(this).addClass('active');
	});

	var $projectsItem = $('.projects__list-item').hide(),
			viewLess = $('.projects__view-less').hide(),
			$curr;

  $('.projects__list-btn').click(function() {
		$curr = $projectsItem.filter('.' + this.id).hide();
    $curr.slice(0, 8).show();
		$projectsItem.not($curr).hide();
	}).filter('.active').click();

});