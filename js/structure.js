$(document).ready(function(){
	
	function loadstreamer() {
		$('.photo').fadeOut('slow');
		$('.streamer').fadeIn('slow');
		KC.streamer.init();
	}
	function loadphoto() {
		$('.streamer').fadeOut('slow');
		$('.photo').fadeIn('slow');
		KC.streamer.kill();
		KC.photo.init();
	}
	$('#loadstreamer').click(function(){
		loadstreamer();
	});
	$('#loadphoto').click(function(){
		loadphoto();
	});
	$(window).hashchange(function(){
		urlobj = KC.url.getUrl();
		if (urlobj.hasOwnProperty('action') && urlobj['action'] !== '') {
			if (typeof(KC.operations[urlobj['action']]) === 'function') {
				KC.operations[urlobj['action']](urlobj);
			}
		}
	});
	$(window).trigger('hashchange');
	/*urlobj = KC.url.getUrl();
	if (urlobj.hasOwnProperty('action') && urlobj['action'] !== '') {
		if (typeof(KC.operations[urlobj['action']]) === 'function') {
			KC.operations[urlobj['action']](urlobj);
		}
		else {
			loadphoto();
		}
	}
	else {
		//loadphoto();
	}
	//setTimeout(changehash,10);
	*/
	loadstreamer();
});