// Now that the messages can pe rendered page number wise
// page number can be a random number between 1 and 23. page size being 15 always.
//
if (typeof KC === 'undefined') {
	var KC = {streamer : {}};
}

KC.streamer = {
	topicMap			: {"1":"veg", "2":"nonveg","3":"satire", "4":"political", "5":"recent", "6":"random"},
	topicDisplayText	: {"1":"Veg", "2":"NonVeg","3":"Satire", "4":"Political", "5":"Recent", "6":"Random"},
	totalTopics 		: 6,
	firstTopic 			: 1,
	totalHeightAdded 	: 0,
	totalHeightScrolled : 0,
	$lastItem			: '',
	streamTimer			:	'',
	animationStopped	:	false,
	restartTimeout		:	'',
	totalAdded			: 0,
	init : function() {
		KC.streamer.animateTopics();
		KC.streamer.bindevents();
		KC.streamer.reload(KC.streamer.firstTopic);
	},
	animateTopics : function() {
		$("#topics h2").animate({fontSize:"43px",lineHeight:"45px"},{duration:1000});
	},
	startAnimation : function() {
		$('#activeloader').show();
		$('#stoppedloader').hide();
		$("#waiting").modal("hide");
		/*
		 * need to clear earlier setInterval if it exists
		 */
		clearInterval(KC.streamer.streamTimer);
		KC.streamer.rotate();
		KC.streamer.streamTimer =  setInterval(function(){
			KC.streamer.rotate();
		}, 2000);
	},
	stopAnimation : function() {
		$('#activeloader').hide();
		$('#stoppedloader').show();
		clearInterval(KC.streamer.streamTimer);
	},
	bindevents : function() {
		$('#topics h2').click(function(){
			var self = $(this);
			$('#topics h2').removeClass('selected');
			self.addClass('selected');
			var query = parseInt(self.attr('query'));
			//KC.streamer.pauseAnimationWrapper();
			KC.streamer.flushQueue();
			KC.streamer.reload(query);
		});
		$('#next').click(function(){
			var item = $('#paginator input[name="curpage"]');
			var curpage = item.val();
			var nextpage = KC.streamer.nextPage(curpage);
			item.val(nextpage);
			KC.streamer.log(nextpage);
		});

		$('#items').delegate('li', 'click', function(){
			KC.streamer.pauseAnimationWrapper(true);
		});
		$('#activeloader').click(function(){
			KC.streamer.pauseAnimationWrapper(true);
		});
		$('#stoppedloader').click(function(){
			KC.streamer.startAnimationWrapper();
		});
	},
	rotate : function() {
		$('#items').animate({"top": "-=80px"}, 500);
		KC.streamer.totalHeightScrolled += 80; 
		var curcounter = $('#paginator input[name="curcount"]');
		var curval = curcounter.val();
		var diff = KC.streamer.totalHeightAdded-KC.streamer.totalHeightScrolled;
		//var condition = diff < KC.streamer.$lastItem.height();
		condition = diff < 10;
		if (condition===true && KC.streamer.totalAdded > 0) {
			var curtopic = KC.streamer.getTopic();
			var nextTopic = (curtopic % KC.streamer.totalTopics) + 1;
			
			KC.streamer.reload(nextTopic);
			
		}
		else {
			var newval = parseInt(curval)-1;
			curcounter.val(newval);
		}
	},
	log : function(message) {
		// ajax this to logger
	},
	reload : function(topic) {
		if(typeof topic === 'undefined') {
			var topic = 1 // stands for veg 
		}
		$("#waiting").modal({"backdrop":"static"});
		KC.streamer.setTopic(topic);
		var displayText = KC.streamer.topicDisplayText[topic];
		var cssclass = KC.streamer.topicMap[topic];
		var rand = Math.floor(Math.random()*1000);
		//var url = '/stream/' + topic + '/get?q=' + rand;
		var url = window.location.href + 'ajax.php?type=1';
		KC.streamer.pauseAnimationWrapper();
		KC.streamer.totalAdded = 0;
		$.getJSON(url, function(json){
			console.log(json);
			var objects = json.objects;
			var count = objects.length;
			var oldHeight = $('#items').height();
			$('#paginator input[name="curcount"]').val(count);
			var str = '';
			$.each(objects, function(i, v){
				if(v.message.search("<a") == -1) {
					var item = '<li class="' + cssclass + '" style="height:auto"><div class="tweet-wrapper"><span class="wish">"#KhattaCorp special"</span><br><em>' + displayText + '</em><span class="large">'+v.message+'</span></div></li><br />';
					str += item;
				}
			});
			$("#items").append(str);
			KC.streamer.totalAdded = count;
			setTimeout(KC.streamer.startAnimationWrapper,1);
			var newHeight = $('#items').height();
			KC.streamer.totalHeightAdded += (newHeight - oldHeight);
			var $lastItem = $('#items li:last');
			KC.streamer.$lastItem = $lastItem;
		});
	},
	getTopic : function() {
		return parseInt($('#paginator input[name="curtopic"]').val());
	},
	setTopic : function(topic) {
		$('#topics h2').removeClass('selected');
		$.each($('#topics h2'), function(i,v){
			if($(v).attr('query') == topic) {
				$(v).addClass('selected');
				return;
			}
		});
		$('#paginator input[name="curtopic"]').val(topic);
	},
	pauseAnimationWrapper : function(restart) {
		if(KC.streamer.animationStopped === false) {
			KC.streamer.animationStopped = true;
			KC.streamer.stopAnimation();
			if (restart === true) {
				KC.streamer.restartTimeout = setTimeout(function() {
					KC.streamer.startAnimationWrapper();
				}, 5000);
			}
			
		}
	},
	startAnimationWrapper : function() {
		if(KC.streamer.restartTimeout)
			clearTimeout(KC.streamer.restartTimeout);
		KC.streamer.startAnimation();
		KC.streamer.animationStopped = false;
	},
	flushQueue : function() {
		/*
		 * Scroll up the contents of #items so that new items can be appended at the bottom.
		 */
		var diff = KC.streamer.totalHeightAdded-KC.streamer.totalHeightScrolled;
		diff += 200;
		$('#items').animate({"top": "-=" + diff + "px"}, 1500);
		KC.streamer.totalHeightScrolled += diff;
	}
}
$(document).ready(function(){
	KC.streamer.init();
});
