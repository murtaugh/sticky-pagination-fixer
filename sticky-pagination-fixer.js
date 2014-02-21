
var stickyItem = 'sticky-header';	// the ID of the fixed-position element
var readAssistOffset = 40;			// screen height - this offset value = scroll distance
var duration = 250;					// scroll speed in ms
var doc = document.documentElement;

keydown = function (e) {

	var curElement = document.activeElement.nodeName;

	if ((e.keyCode === 32 && curElement === "BODY") || (e.keyCode === 33 || e.keyCode === 34)) {

		var viewportHeight = window.innerHeight;
		var stickyHeaderHeight = document.getElementById(stickyItem).offsetHeight;
		var newViewportHeight = viewportHeight - stickyHeaderHeight - readAssistOffset;
	
		e.preventDefault();
		
		if(e) {
		
			isShift = e.shiftKey || e.keyCode === 33 ? true : false;
		
		} else {
			
			isShift = window.event.shiftKey || e.keyCode === 33 ? true : false;
			
		};
	
		currScrollPosition = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
	
		scrollToHere = newViewportHeight + currScrollPosition;
	
		if (isShift) {
		
			scrollToHere = currScrollPosition - newViewportHeight;
		
		}
	
		smoothScrollTo(scrollToHere)
	
	}

}

window.smoothScrollTo = (function () {

	var timer, start, factor;

	return function (target) {

		var offset = window.pageYOffset,
			delta = target - window.pageYOffset;
		
		start = Date.now();

		factor = 0;
	
		if( timer ) {

			clearInterval(timer);

		}
	
		function step() {

			var y;

			factor = (Date.now() - start) / duration;

			if( factor >= 1 ) {

				clearInterval(timer);
				factor = 1;

			} 

			y = factor * delta + offset;

			window.scrollBy(0, y - window.pageYOffset);

		}
	
		timer = setInterval(step, 10);

		return timer;

	};

}());

window.onkeydown = keydown;