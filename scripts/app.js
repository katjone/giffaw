$(document).ready(function(){
    console.log('Heyyy');


$.ajax({

	// What kind of request
	method: "GET",

	// The URL for the request
	url: "http://api.giphy.com/v1/gifs/search",

	// The data to send aka query parameters
	data: $("form").serialize(),

	// Code to run if the request succeeds;
	// the response is passed to the function
	success: onSuccess,

	// Code to run if the request fails; the raw request and
	// status codes are passed to the function
	error: onError
});

function onSuccess(json) {
	// $("div").append("<h1>"+json.title+"</h1>");
	console.log(json.data[0].title);
	arr = json.data;
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i].images.fixed_height_small.url);
		$('.gif-gallery').append(`<img src="${arr[i].images.fixed_height_small.url}" alt-text="${arr[i].title}">`)
	}



}

function onError(xhr, status, errorThrown) {
	alert("Sorry, there was a problem!");
	console.log("Error: " + errorThrown);
	console.log("Status: " + status);
	console.dir(xhr);
}
});
