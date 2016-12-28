$(document).ready(function(){

$("#testingButton").on("click", function(){
	// var input = $("#topicInput").val()
	// var giphyURL = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=dc6zaTOxFJmzC" 
	

	// $.ajax({url: giphyURL, method: "GET"}).done(function(response){
 //          console.log(response);
var testUrl = "http://api.giphy.com/v1/gifs/search?q=bird&api_key=dc6zaTOxFJmzC"
$.ajax({url: testUrl, method: "GET"}).done(function(response){
          console.log(response);
})

})
















































});