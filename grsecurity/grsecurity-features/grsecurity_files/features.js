//var $container = $('#container-1');

//$container.masonry({
//	columnWidth: 1,
//	itemSelector: '.item'
//});

//var $container = $('#container-2');

//$container.masonry({
//	columnWidth: 1,
//	itemSelector: '.item'
//});

//var $container = $('#container-3');

//$container.masonry({
//	columnWidth: 1,
//	itemSelector: '.item'
//});

var $tabs = $('#tabs');

$tabs.tabs({
	event: 'click',
	hide: {
		effect: "fade",
		duration: 500
	},
	show: {
		effect: "fade",
		duration: 500
	}
});

$(document).ready(function() {
	$(".menubox").hide();

	$(".menuitem").click(function(event) {
		event.preventDefault();

		$('.menubox').hide();

		$($(this).attr('href')).fadeToggle("slow", "linear");;
	});
});
