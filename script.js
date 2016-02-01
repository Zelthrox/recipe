$(document).ready(function(){
	//console.log("script included!");

	//tracking ingredients
	$('.Ingredients > ul > li').click(function(){
		$(this).fadeTo('slow', 0.5).css('color', 'green');
	});

	//click to hide all photos
	$('#HideImg').click(function(){
		$('img').fadeTo('slow',0);
	});
});