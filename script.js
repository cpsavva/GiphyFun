$(document).ready(function(){
var newButton;
var gifData;
var newDiv;


//FUNCTIONS//
function gif(){
	$("#images").empty();
	newDiv = $("<div>").addClass(" col-md-12 well")
	var i = 0
	
	$.ajax({url: giphyURL, method: "GET"}).done(function(response){
        console.log(response);
 		console.log(response.data[i].url);
        console.log(response.data[i].rating)

        gifData = response.data

        for (let i=0; i < gifData.length; i++) {

   		var packageDiv = $("<div class='col-md-6 text-center'>")
   		var ratingText = "<p class='rating'>"+  gifData[i].rating+' - rated'+ "</p>"
   		var image = $("<img>").addClass("items").attr("src", gifData[i].images.fixed_width_still.url).data("mode", "0").data("still", gifData[i].images.fixed_width_still.url).data("gif", gifData[i].images.fixed_width.url)
		
            packageDiv.prepend(image).append(ratingText)
            newDiv.prepend(packageDiv)

            $("#images").prepend(newDiv)
		}

 		
	}) /*ajax function*/
}


//MAIN PROCESSES//
$(document).on("click",".topic", function(){

	var input = $(this).data("name");
	giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&limit=10&api_key=dc6zaTOxFJmzC" 	
	var i = 0
	console.log(input)
	gif();

});

$("#add-topic").on("click", function(){
	event.preventDefault();
	var formInput = $("#topic-input").val()
	var newButton = $("<button>").addClass("topic").data("name", formInput).text(formInput)
	console.log(formInput)
	$(".buttons").append(newButton)
	giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + formInput + "&limit=10&api_key=dc6zaTOxFJmzC"
	gif();

})

//switch from gif to still//
$(document).on("click",".items", function(){
	console.log("it clicks  " + $(this).data("mode"));
			if ($(this).data("mode") == 0) {
				$(this).attr("src", $(this).data("gif")).data("mode", "1")
			}
			else {
				$(this).attr("src", $(this).data("still")).data("mode", "0")
			}

}); 


});