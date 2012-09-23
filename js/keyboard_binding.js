(function(KeyboardJS){
	KeyboardJS.bind.key('down', function(){
		KC.streamer.rotateUp();
	});
	KeyboardJS.bind.key('up', function(){
		KC.streamer.rotateDown();
	});
	KeyboardJS.bind.key('space', function(){
		if (KC.streamer.animationStopped === true)
		{
			//debugger;
			KC.streamer.startAnimationWrapper();
		}
		else if (KC.streamer.animationStopped === false)
		{
			//debugger;
			KC.streamer.pauseAnimationWrapper();
		}
		
	});
	$(document).mousewheel(function(event, delta, deltaX, deltaY) {
		if (delta > 0)
			KC.streamer.rotateDown();
		else if (delta < 0)
			KC.streamer.rotateUp();
		return false; // prevent default
	});
})(KeyboardJS);