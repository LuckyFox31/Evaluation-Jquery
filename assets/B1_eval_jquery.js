$(() => {
	// Question 1
	$("#toggleRedSquare").click(function () {
		$(".redsquare-app").toggleClass("is-active");
		$(".redsquare-controls button").attr("disabled")
			? $(".redsquare-controls button").removeAttr("disabled")
			: $(".redsquare-controls button").attr("disabled", "");
	});
});
