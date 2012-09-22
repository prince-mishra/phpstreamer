(function(KeyboardJS){
	KeyboardJS.bind.key('down', function(){
		console.log("down");
		KC.streamer.rotateUp();
	});
	KeyboardJS.bind.key('up', function(){
		console.log("up");
		KC.streamer.rotateDown();
	});
	$(document).mousewheel(function(event, delta, deltaX, deltaY) {
		var o = '';
		if (delta > 0)
			KC.streamer.rotateDown();
		else if (delta < 0)
			KC.streamer.rotateUp();
		return false; // prevent default
	});
})(KeyboardJS);