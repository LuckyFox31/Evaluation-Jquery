$(() => {
	// -- EXERCICE 1 --

	// Question 1
	$("#toggleRedSquare").click(function () {
		$(".redsquare-app").toggleClass("is-active");
		$(".redsquare-controls button").attr("disabled")
			? $(".redsquare-controls button").removeAttr("disabled")
			: $(".redsquare-controls button").attr("disabled", "");

		applicationActivated();
	});

	// Question 2
	function applicationActivated() {
		if ($(".redsquare-app").attr("class").split(" ")[1] == "is-active") {
			$(window).keyup(function (e) {
				// Ne fonctionne pas, pas le temps d'investinguer pourquoi.
				// let test = e.key;
				// switch (test) {
				// 	case "ArrowUp":
				// 		console.log("OUI");
				// 		$(".square").css("transform", "translateY(-20px)");
				// 		break;

				// 	case "ArrowDown":
				// 		$(".square").css("transform", "translateY(20px)");
				// 		break;

				// 	case "ArrowRight":
				// 		$(".square").css("transform", "translateX(20px)");
				// 		break;

				// 	case "ArrowLeft":
				// 		$(".square").css("transform", "translateX(-20px)");
				// 		break;

				// 	default:
				// 		break;
				// }

				if (e.key == "ArrowUp") {
					$(".square").css("transform", "translateY(-20px)");
				} else if (e.key == "ArrowDown") {
					$(".square").css("transform", "translateY(20px)");
				} else if (e.key == "ArrowRight") {
					$(".square").css("transform", "translateX(20px)");
				} else if (e.key == "ArrowLeft") {
					$(".square").css("transform", "translateX(-20px)");
				}
			});
		}

		// Question 3
		$("#scaleUp").click(function () {
			$(".square").css("height", `${Number($(".square").css("height").split("px")[0]) + 20}px`);
			$(".square").css("width", `${Number($(".square").css("width").split("px")[0]) + 20}px`);
		});

		// Question 4
		$("#scaleDown").click(function () {
			if (Number($(".square").css("height").split("px")[0]) > 50) {
				$(".square").css("height", `${Number($(".square").css("height").split("px")[0]) - 20}px`);
				$(".square").css("width", `${Number($(".square").css("width").split("px")[0]) - 20}px`);
			}
		});

		// Question 5
		$("#shapeCircle").click(function () {
			$(".square").css("border-radius", "100%");
		});

		// Question 6
		$("#shapeSquare").click(function () {
			$(".square").css("border-radius", "0%");
		});
	}

	// -- EXERCICE 2 --

	jumbotron();

	function jumbotron() {
		// Question 1
		$("#samplenav ul li a").click(function (e) {
			e.preventDefault();
		});

		// Question 2
		$("#samplenav ul").addClass("list-group");
		$("#samplenav ul li").addClass("list-group-item");

		// Question 3
		$("#samplenav a")
			.siblings("ul")
			.parent()
			.children("a")
			.prepend('<i class="fa fa-plus-circle"></i> ');

		// Question 4
		$(".jumbotron p i").text(`${$(".jumbotron").attr("data-source")}`);

		// Question 5
		// Le siblings() ne voulait pas fonctionner.
		$(".team")
			.parent()
			.parent()
			.parent()
			.parent()
			.children("li:nth-child(2)")
			.children("ul")
			.children("li:nth-child(2)")
			.addClass(".list-group-item-success");
	}
});
