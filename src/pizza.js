// Write your Pizza Builder JavaScript in this file.
$(document).on("ready", function () {
	$(".btn-pepperonni").on("click", function () {
		$(".pep").fadeToggle(0005);
	});
	$(".btn-mushrooms").on("click", function () {
		$(".btn-mushrooms").toggleClass("active")
	});
	$(".btn-green-peppers").on("click", function () {
		$(".btn-green-peppers").toggleClass("active")
	});
	$(".btn-sauce").on("click", function () {
		$(".btn-sauce").toggleClass("active")
	});
	$(".btn-crust").on("click", function () {
		$(".btn-crust").toggleClass("active");
	});
});