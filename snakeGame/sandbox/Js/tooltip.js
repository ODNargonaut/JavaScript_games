let tooltip = (elem, tooltipBl, b=false) =>
	{
		$(!b?"#"+elem:"."+elem).mousemove(function (e) 
		{
			$show = true;

			$nSnake = $(this).attr("data-nsnake");
			$nFood = $(this).attr("data-nfood");

			if ($nSnake !== undefined && snake.history.design.listAvatars[+$nSnake]) $show = false;
			if ($nFood  !== undefined && food.history.design.listAvatars[+$nFood])   $show = false;

			if ($show)
			{
				$("#"+tooltipBl).css(
				{ 
					"top" : e.pageY + 5,
					"left" : e.pageX + 5
				}).show();
			}
		}).mouseout(function () 
		{
			$("#"+tooltipBl).hide().css(
			{
				"top" : 0,
				"left" : 0
			});
		});
	};



let n = 0;

// 
function newTestBl()
{
	let offset = 45;

	let testBl = '<div class="testBl" style="margin-top: '+(offset*n)+'px;">';
	let span = '<span>Змейка</span></div>';

	testBl += span;
	$(".clMain").append(testBl);

	n++;


	let idTooltip = "tooltipDesign";
	$("#"+idTooltip).css("width", 160+"px");
	
	tooltip("testBl", idTooltip, true);
}