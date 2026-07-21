function init()
{
	// target: элемент, который будет плавно прокручиваться.
  // speed:  количество пикселей, которые будут прокручиваться за шаг колеса мыши.
  // smooth: коэффициент гладкости, чем выше значение, тем более плавно.

	new SmoothScroll(document.getElementById("blSetDesingSnakeScrollMain"), 15, 7);
	new SmoothScroll(document.getElementById("blSetDesingFoodScrollMain"), 15, 7);

	new SmoothScroll(document.getElementById("blMainListColors"), 15, 7);
	new SmoothScroll(document.getElementById("blMainListImgs"), 15, 7);

	new SmoothScroll(document.getElementById("blListTopicRu"), 15, 7);
	new SmoothScroll(document.getElementById("blListTopicEn"), 15, 7);

	// new SmoothScroll(document.getElementById("blSelectedModeInternal"), 50, 12);
}

function SmoothScroll(target, speed, smooth) 
{
  if (target === document)
    target = (document.scrollingElement 
              || document.documentElement 
              || document.body.parentNode 
              || document.body); // кроссбраузерная поддержка прокрутки документов
      
	var moving = false;
	var pos = target.scrollTop;
  var frame = target === document.body 
              && document.documentElement 
              ? document.documentElement 
              : target; // safari - это новый IE
  
	target.addEventListener('mousewheel', scrolled, { passive: false });
	target.addEventListener('DOMMouseScroll', scrolled, { passive: false });

	function scrolled(e) 
	{
		e.preventDefault(); // отключить прокрутку по умолчанию

		var delta = normalizeWheelDelta(e);

		pos += -delta * speed;
		pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)); // ограничить прокрутку

		if (!moving) update();
	}

	function normalizeWheelDelta(e)
	{
		if(e.detail)
		{
			if(e.wheelDelta)
				return e.wheelDelta/e.detail/40 * (e.detail>0 ? 1 : -1); // Opera
			else
				return -e.detail/3;    // Firefox
		}else
			return e.wheelDelta/120; // IE,Safari,Chrome
	}

	function update() 
	{
		moving = true;
    
		var delta = (pos - target.scrollTop) / smooth;
    
		target.scrollTop += delta;

		if (Math.abs(delta) > 0.5)
			requestFrame(update);
		else
			moving = false;
	}

	var requestFrame = function() // Кроссбраузерный requestAnimationFrame
	{ 
		return (
			window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(func) { window.setTimeout(func, 1000 / 50); }
		);
	}()
}