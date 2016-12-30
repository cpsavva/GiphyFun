$(document).ready(function(){

function gifAPI (){
	var gifData;
	var input = $("#animal-input").val()
	var giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&limit=10&api_key=dc6zaTOxFJmzC" 	
	var newButton = $("<button>").attr("data-name", input).text(input)
	var newDiv = $("<div>").addClass(" col-md-12 well")
	var i = 0;
	
	$.ajax({url: giphyURL, method: "GET"}).done(function(response){
        console.log(response);
 		console.log(response.data[i].url);
        console.log(response.data[i].rating)

        var gifData = response.data

        for (let i=0; i < gifData.length; i++) {

   		var packageDiv = $("<div class='col-md-6 text-center'>")
   		var ratingText = "<p class='rating'>"+ gifData[i].rating+ "</p>"
   		var image = $("<img>").addClass("items").attr("src", gifData[i].images.fixed_width_still.url).data("mode", "0").data("still", gifData[i].images.fixed_width_still.url).data("gif", gifData[i].images.fixed_width.url)
		



            packageDiv.prepend(image).append(ratingText)
            newDiv.prepend(packageDiv)

            $("#images").prepend(newDiv)

		}
 		$(".buttons").prepend(newButton)
	}) /*ajax function*/
	
		
};	
		
	

$("#add-topic").on("click", function(){
	event.preventDefault();
	
	gifAPI();

}); /* input click function*/
$(document).on("click", ".items", function(){
	// alert("it clicks  " + $(this).data("mode"));
			if ($(this).data("mode") == 0) {
				$(this).attr("src", $(this).data("gif")).data("mode", "1")
			}
			else {
				$(this).attr("src", $(this).data("still")).data("view", "0")
			}


		}); 









































});