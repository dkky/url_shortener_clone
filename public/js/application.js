$(document).ready(function() {
	$('#power').click(function(){
        $(this).effect('bounce',{times:3},500);
    });
});


$(document).ready(function(){
    $('#bee img').popover('show');
    $('body').click(function(){
    	$('#bee img').popover('destroy');
    });

    $.ajax({
    	url: '/joke',
    	method: 'get',
    	success: function(joke) {
    		$('#joke').text(joke);
    	}
    })
});

// $(document).ready(function() {
// 	$('#bee img').click(function(){
//         $(this).css("background-color","black");
//     });
// });



$(document).ready(function() {
    $(document).keydown(function(key) {
    	bee_left = $('#bee').position().left
    	bee_top = $('#bee').position().top
		switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				// if(bee_left > -750){
				// 	bee_left -= 100;
					$('#bee').animate({left: "-=100px"}, 'fast');
				// }
				// else {
				// 	$('#bee img').addClass('mirror');
				// }
				break;
			// Up Arrow Pressed
			// case 38:
			// 	$('#bee img').animate({top:"-=100px"},'fast');
			// 	break;
			// Right Arrow Pressed
			case 39:
				// if(bee_left < 200){
				// 	bee_left += 100
					$('#bee').animate({left: "+=100px"}, 'fast');
				// }
				// else {
				// 	$('#bee img').removeClass('mirror');
				// }
				// Put our code here
				// $('#bee').animate({left:"+=100px"},'fast');
				break;
			// Down Arrow Pressed
			// case 40:
			//     $('#bee img').animate({top:"+=100px"},'fast');
			// 	break;
		};		
	});
});	



function myFunction() {
	    var y = document.getElementById("myTopnav");
	    if (y.className === "header") {
	        y.className += " responsive";
	    } else {
	        y.className = "header";
	    }
}

// $(document).ready(function) {
// 	('#list').hide()
// });

function myFunction1() {
	    var x = document.getElementById('list');
	    if (x.style.display === 'none') {
	        x.style.display = 'block';
	    } else {
	        x.style.display = 'none';
	    }
}


// $(document).ready(function(){
//     $('[data-toggle="popover"]').popover();
// });