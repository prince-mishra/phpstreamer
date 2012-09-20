if (typeof(KC.operations) === 'undefined') {
	KC.operations = {};
}
KC.operations = {
	loadImage : function(urlobj) {
		if (window.loadImage === 'undefined') {
			alert("loadImage not defined.");
		}
		else {
			url = urlobj['url'];
			window.loadImage(
				    url,
				    function (img) {
				        if(img.type === "error") {
				            console.log("Error loading image " + imageUrl);
				        } else {
				            document.body.appendChild(img);
				        }
				    },
				    {maxWidth: 600}
				);
		}
	}

}
