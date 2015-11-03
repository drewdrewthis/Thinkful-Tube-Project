$(function(){

	$('#search-form').submit(function(e){
		e.preventDefault();
		var searchTerm = $('#user-input').val();
		getRequest(searchTerm);
	});
});

function makeTubeList(tubes) {
	$.each(tubes, function(index, value) {
		console.log(tubes[index].snippet.title);
		console.log(tubes[index].snippet.thumbnails.high.url);
		console.log("https://www.youtube.com/watch?v="+tubes[index].id.videoId);
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