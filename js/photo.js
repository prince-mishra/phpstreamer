if (typeof(KC.photo === 'undefined')) {
	KC.photo = {};
}
KC.photo = {
		init : function() {
			$('#start-slideshow').button().click(function () {
		        var options = $(this).data(),
		            modal = $(options.target),
		            data = modal.data('modal');
		        if (data) {
		            $.extend(data.options, options);
		        } else {
		            options = $.extend(modal.data(), options);
		        }
		        modal.find('.modal-slideshow').find('i')
		            .removeClass('icon-play')
		            .addClass('icon-pause');
		        console.log("click",options);
		        modal.modal(options);
		    });
		    // Load images via flickr for demonstration purposes:
		    $.ajax({
		        url: 'http://api.flickr.com/services/rest/',
		        data: {
		            format: 'json',
		            method: 'flickr.interestingness.getList',
		            api_key: '7617adae70159d09ba78cfec73c13be3'
		        },
			    dataType: 'jsonp',
		        jsonp: 'jsoncallback'
		    }).done(function (data) {
		        var gallery = $('#gallery'),
		            url;
		        $.each(data.photos.photo, function (index, photo) {
		            url = 'http://farm' + photo.farm + '.static.flickr.com/' +
		                photo.server + '/' + photo.id + '_' + photo.secret;
		            $('<a rel="gallery"/>')
		                .append($('<img>').prop('src', url + '_s.jpg'))
		                .prop('href', url + '_b.jpg')
		                .prop('title', photo.title)
		                .appendTo(gallery);
		        });
		    });
		}
}