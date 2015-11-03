$(function(){

	$('#search-form').submit(function(e){
		e.preventDefault();
		var searchTerm = $('#user-input').val();
		getRequest(searchTerm);
	});
});

function makeTubeList(tubes) {
	$.each(tubes, function(index, value) {

		var title = tubes[index].snippet.title,
			thumb = tubes[index].snippet.thumbnails.high.url,
			url = "https://www.youtube.com/watch?v="+tubes[index].id.videoId,
			html = "";

		console.log(title);
		console.log(thumb);
		console.log(url);

		var html = '<div class="tubebox col-xs-12 col-md-4 col-lg-3">\
						<a href="'+url+'" class="thumbnail">\
							<img src="'+thumb+'"/>\
							<div class="caption">\
								<h3 class="tube-title">'+title+'"</h3>\
							</div>\
						</a>\
					</div>';

		$('.results-area>.row').append(html);
	});
}

function getRequest(searchTerm) {
	var params = {
		part: 'snippet',
		key: "AIzaSyCFGeSvagLxU8YAq-3X5OPJqX34n9Q_mRQ",
		q: searchTerm
	};
	url = 'https://www.googleapis.com/youtube/v3/search';

	$.get(url, params, function(data){
		var tubes = data.items;
		console.debug(tubes);
		makeTubeList(tubes);
	});
}