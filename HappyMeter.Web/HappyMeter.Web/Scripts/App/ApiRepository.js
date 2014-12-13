function getMoods() {
	var response;
	jQuery.get("http://happymeter.apphb.com/Skandia/Moods/", function (response) {
		console.log(response);
	});

	return response;
}

function getMoodsByAjax() {
	var data = "hej";
	jQuery.ajax({
		url: 'http://happymeter.apphb.com/Skandia/Moods/',
		type: 'GET',
		dataType: 'jsonp',
		async: false,
		success: function (response) {
			data = response;
		}
	});

	return data;
}