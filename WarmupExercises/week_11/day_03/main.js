var robot;

$(document).ready(function() {

	var directions = ["up", "right", "down", "left"];

	var createBoard = function() {
		var $board = $("<table></table>");
		$('body').append($board);
		for (var i = 0; i < 9; i++) {
			var $row = $("<tr></tr>");
			$("table").append($row);
			for (var j = 0; j < 9; j++) {
				var $cell = $("<td></td>");
				$row.append($cell);
			}
		}
	};

	createBoard();
	var Robot = function() {
		var x = 0;
		var y = 0;
		var direction = "up";

		var $bot = $("<div></div>");
		$bot.addClass("robot " + direction);
		$('body').append($bot);

		var moveRobot = function() {
			$bot.css("top", (window.innerHeight / 2 + y * 40 - 20) + "px");
			$bot.css("left", (window.innerWidth / 2 + x * 40 - 20) + "px");
		};

		moveRobot();
		var turn = function(dir) {
			$('.robot').removeClass("up down left right");
			var currentDirection = directions.indexOf(direction);
			if (dir === "right") {
				if (currentDirection < 3) {
					direction = directions[currentDirection + 1];
				} else {
					direction = directions[0];
				}
			} else {
				if (currentDirection > 0) {
					direction = directions[currentDirection - 1];
				} else {
					direction = directions[3];
				}
			}
			$('.robot').addClass(direction);
		};

    var advance = function() {
      if (direction === "up") {
        y = y - 1;
      } else if (direction === "down") {
        y = y + 1;
      } else if (direction === "left") {
        x = x - 1;
      } else if (direction === "right") {
        x = x + 1;
      }
			moveRobot();
    };

		return {
			advance: advance,
			left: function() {
				turn("left");
			},
			right: function() {
				turn("right");
			}
		};
	};
	robot = new Robot();

});
