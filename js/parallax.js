$(document).ready(function(argument) {
	$(window).scroll(function () {
		var lr = $(this).scrollTop();

		$(".main-block1").css({
			transform : "translateY(-"+lr/70 +'%)'
		});
	})
});