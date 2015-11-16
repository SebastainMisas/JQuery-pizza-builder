// Write your Pizza Builder JavaScript in this file.
$(document).on("ready", function () {
	$(".btn-pepperonni").on("click", function () {
		$(".btn-pepperonni").toggleClass("active")
		$(".pep").fadeToggle(0005);
	});
	$(".btn-mushrooms").on("click", function () {
		$(".mushroom").fadeToggle(0005);
		$(".btn-mushrooms").toggleClass("active")
	});
	$(".btn-green-peppers").on("click", function () {
		$(".green-pepper").fadeToggle(0005);
		$(".btn-green-peppers").toggleClass("active")
	});
	$(".btn-sauce").on("click", function () {
		$(".sauce").toggleClass("sauce-white");
		$(".btn-sauce").toggleClass("active")
	});
	$(".btn-crust").on("click", function () {
		$(".crust").toggleClass("crust-gluten-free");

		$(".btn-crust").toggleClass("active");
	});

	$('.btn').on('click', function(){
	var total = 10;
	$(".toppings").empty()

	if($('.btn-pepperonni').hasClass('active')){
		$(".toppings").append("<li>$1 pepperonnis</li>")
		total += 1;
	}
	if($('.btn-mushrooms').hasClass('active')){
		$(".toppings").append("<li>$1 mushrooms</li> ")
		total += 1;
	}
	if($('.btn-green-peppers').hasClass('active')){
		$(".toppings").append("<li>$1 green peppers</li>")
		total += 1;
	}
	if($('.btn-crust').hasClass('active')){
		$(".toppings").append("<li>$5 Gluten free crust</li>")
		total += 5;
	}
	if($('.btn-sauce').hasClass('active')){
		$(".toppings").append("<li>$3 White sause</li>")
		total += 3;
	};
	$('strong').empty();
	$('strong').append("$ " + total);
});
});