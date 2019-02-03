// Hide all problems 
$("ul >li").hide();
$("span").hide();
//When page loads
$(document).ready(function() {
	
	//When user presses enter in input
	$(document).keypress(function(e) {
		if (e.which == 13) {
			$("span").show()
			$("li").hide();
		  //Do searchQuery function
			setTimeout(searchQuery,1000);
		}
	});

	function searchQuery() {
		//Clears all problems if visible
		
$("span").hide();
		//Set variable to value of input
		var search = $("input").val();
		
		//Using nlp library, scan input variable search
		var srch = nlp(search);

		//Scan for nouns and outpus as array
		var nouns = srch.nouns();
		var nounsArray = nouns.out("array");
		
		//Search for adjectives and output as array
		var adjs = srch.adjectives();
		var adjsArray = adjs.out("array");

		//Scan for verbs and output as array
		var verbs = srch.verbs();
		var vrbsArray = verbs.out("array")

		//Create new array which comtacenates all previous arrays and output it as alert
		var newArray = nounsArray.concat(adjsArray, vrbsArray);
		
		//alert(newArray);

		//Search algorithm, do loop through all items in array
		for (var i = 0; i < newArray.length; i++) {
			$('li').each(function() {
    var lowerCase = $(this).text().toLowerCase(); // convert text to Lowercase
    if(lowerCase.match(newArray[i])) {
        $(this).show();; 
    }      
});
			//If any items match, show them
			
		}
	}

});