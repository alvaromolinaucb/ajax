
$( document ).ready(function() {
    $('#person_country_id').change(function () {

        
        $.getJSON("/cities/by_country/"+$('#person_country_id').val()+".json", function(result) {
            var options ='';
            $.each(result, function(index, city) {
                console.log(city);
                options += '<option value="'+city.id+'">'+city.name+'</option>';
            });
            $("#person_city_id").html(options);
        });
    });
});


/*
function cambio_css(){

	if(document.getElementById('person_country_id').selectedIndex == 0){
		document.getElementById('person_city_id').style.backgroundColor = 'red';
	}else{
		document.getElementById('person_city_id').style.backgroundColor = 'green';
	}
}*/




/*
$( document ).ready(function() {
	$('#person_country_id').change(function () {
		$.getJSON("/cities/by_country/"+$('#person_country_id').val()+".json", function(result) {
			var options ='';
			$.each(result, function(index, city) {
				console.log(city);
				options += '<option value="'+city.id+'">'+city.name+'</option>';
			});
			$("#person_city_id").html(options);
		});
	});
});
*/

/*


$.ajax({
    // the URL for the request
    url: "post.php",
 
    // the data to send (will be converted to a query string)
    data: {
        id: 123
    },
 
    // whether this is a POST or GET request
    type: "GET",
 
    // the type of data we expect back
    dataType : "json",
 
    // code to run if the request succeeds;
    // the response is passed to the function
    success: function( json ) {
        $( "<h1/>" ).text( json.title ).appendTo( "body" );
        $( "<div class=\"content\"/>").html( json.html ).appendTo( "body" );
    },
 
    // code to run if the request fails; the raw request and
    // status codes are passed to the function
    error: function( xhr, status ) {
        alert( "Sorry, there was a problem!" );
    },
 
    // code to run regardless of success or failure
    complete: function( xhr, status ) {
        alert( "The request is complete!" );
    }
});

*/