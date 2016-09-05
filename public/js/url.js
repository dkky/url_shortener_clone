$(document).ready(function(){
	function create_link(str){
		return '<a href="' + str + '">' + str + '</a>';
	}


	$('#url_link').submit(function(e){
		e.preventDefault();
		
		$.ajax({
			url: '/urls',
			method: 'POST',
			data: $(this).serialize(),
			dataType: 'json',
			beforeSend: function(){
				$('#submit_button').text('Loading');
				$('.info').empty();
				$('.error').empty();
			},
			success: function(data) {
				$('.info').append('<p>Your short url is: <a href="' + data.short_url +'">' + data.short_url +  '</a></p>');
				setTimeout(function(){$('#submit_button').text('Shorten');}, 1000);
				str = '';
				str += '<p> Your URL: </p>';
				str += create_link(data.long_url);
				str += '<p> is shortened into </p>';
				str += create_link('http://localhost:9393/' + data.short_url);
				str += '<div id="count"><p> Number of Visits: ' + data.count + '</p></div>';
				// Object.keys(data).forEach(function(key){
				// 	if(key=== 'long_url' || key === 'short_url') {
				// 		a = create_link(data[key]);
				// 		row = create_td(a);
				// 		str += row;
				// 	}
				// 	else {
				// 		row = create_td(a)
				// 		str += row
				// 	}
				// });
				$('#list ul').prepend('<li class="show">' + str + '</li>');
				// in <li can introduce a new class from css that has animation)
			},
			error: function(data) {
				$('.error').text(data.responseText);
			},
			complete: function(){
				$('#submit_button').text('retry?');
			},
		});
	});
});