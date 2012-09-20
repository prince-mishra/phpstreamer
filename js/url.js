(function(){
	if (typeof(KC.url === 'undefined')) {
		KC.url = {};
	}
	KC.url = {
		updateUrl : function(conf) {
			var cur = this.getUrl();
			jQuery.extend(true, cur, conf);
			str = this.serializeUrlObject(cur);
			window.location.hash = str;
		},

		getUrl : function(){
			hash = window.location.hash;
			if (hash) {
				obj = this.deserializeUrlObject(hash);
				return obj;
			} else {
				return {};
			}
		},
		
		serializeUrlObject : function(obj){
			var arr = [];
			for( var p in obj){
				arr.push(p + '||' + obj[p]);
			}
			return arr.join('&&');
		},
		deserializeUrlObject : function(str){
			str = str.substr(1);
			var arr = str.split('&&');
			var object  = {};
			for( var i=0; i< arr.length; i++){
				var cur = arr[i];
				var val = cur.split('||');
				object[val[0]] = val[1];
			}
			return object;
		}
	}
	
})();