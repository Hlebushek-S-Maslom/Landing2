$(function(){

	$('.slider_inner').slick( {
		nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
		prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
		infinite: false
	});

	$('.nav ul').hide();
	$('.nav_btn').on('click', function() {
		$('.nav ul').slideToggle();
	});

	$('.work_panel-heading').click(function() {
		$(this).toggleClass('on').next().slideToggle();
		$('.work_panel-heading').not(this).removeClass('on').next().slideUp();
	});
});