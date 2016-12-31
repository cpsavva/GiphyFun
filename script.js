$(document).ready(function(){
var newButton;
var gifData;
var input;
var newDiv;

//FUNCTIONS//
function gifAPI (){
	input = $(".topic").val();
	giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&limit=10&api_key=dc6zaTOxFJmzC" 	
	newButton = $("<button>").addClass("topicBtn topic").text(input).attr("value", input)
	newDiv = $("<div>").addClass(" col-md-12 well")
	var i = 0

	$.ajax({url: giphyURL, method: "GET"}).done(function(response){
        console.log(response);
 		console.log(response.data[i].url);
        console.log(response.data[i].rating)

        gifData = response.data

        for (let i=0; i < gifData.length; i++) {

   		var packageDiv = $("<div class='col-md-6 text-center'>")
   		var ratingText = "<p class='rating'>"+ gifData[i].rating+ "</p>"
   		var image = $("<img>").addClass("items").attr("src", gifData[i].images.fixed_width_still.url).data("mode", "0").data("still", gifData[i].images.fixed_width_still.url).data("gif", gifData[i].images.fixed_width.url)
		
            packageDiv.prepend(image).append(ratingText)
            newDiv.prepend(packageDiv)

            $("#images").prepend(newDiv)
		}

 		
	}) /*ajax function*/
};	
		
	
//MAIN PROCESSES//

$("#add-topic").on("click", function(){
	event.preventDefault();
	
	gifAPI();
	$(".buttons").prepend(newButton)
	console.log(newButton.text())
	
}); /* input click function*/

	
 $(document).on("click", ".topicBtn", function(){
 	console.log($(this).val())
 	gifAPI();

 })

$(document).on("click", ".items", function(){
	console.log("it clicks  " + $(this).data("mode"));
			if ($(this).data("mode") == 0) {
				$(this).attr("src", $(this).data("gif")).data("mode", "1")
			}
			else {
				$(this).attr("src", $(this).data("still")).data("mode", "0")
			}

}); 


});