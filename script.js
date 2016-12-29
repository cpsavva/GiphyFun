$(document).ready(function(){

$("#add-topic").on("click", function(){
	event.preventDefault();

	var input = $("#animal-input").val()
	var giphyURL = "http://api.giphy.com/v1/gifs/search?q=" + input + "&limit=10&api_key=dc6zaTOxFJmzC" 
	var newButton = $("<button>").attr("data-name", input).text(input)
	var newDiv = $("<div>").addClass(" col-md-12 well")
	var i = 0;

	$.ajax({url: giphyURL, method: "GET"}).done(function(response){
        console.log(response);
 		console.log(response.data[i].url);
        console.log(response.data[i].rating)

        var gifData = response.data

        for (let i=0; i <gifData.length; i++) {
        var still = gifData[i].images.fixed_width_still.url
   		var gif = gifData[i].images.fixed_width.url
   		var packageDiv = $("<div class='col-md-6 text-center items'>")
   		var ratingText = "<p>"+ gifData[i].rating+ "</p>"

		var topicImage = "<img src='" + gif + "'/>"

            packageDiv.prepend(topicImage + ratingText)
            newDiv.prepend(packageDiv)

            $("#images").prepend(newDiv)

		}
 
	}) /*ajax function*/

	
	$(".buttons").prepend(newButton)
	


}) /* input click function*/











































});