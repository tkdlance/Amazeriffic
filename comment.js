"use strict"; /*this will tell you if you have an error in the code*/

/*This is a way to setup Document ready
$( function(){
	
});
This wont run until everything is loaded*/
$( function(){
	var commentInput = $(".comment-input input"); //this just puts $(".comment-input input") into a variable
	
	function processCommentInput()
	{
		if ( commentInput.val() !== "")  //this checks to see if the input is blank and its a String value ".comment-input input" is the class its looking for
		{
			var $new_comment = $("<p>"); //creates a new paragraph tag
				$new_comment = 
					$("<p>").text( commentInput.val() );//Since the string isn't blank add this
				$(".comments").append( $new_comment ); 
				commentInput.val(""); //This will clear the value to blank or the input to blank 
		}
	}	//End Press Input
	
	$( commentInput ).on("keypress", function(event)
	{
		if( event.keyCode === 13) //When the Enter button is pressed do this. 13 = Enter button
		{
			processCommentInput();
		}
	}); // End on Keypress
	
	$(".comment-input button").on("click", function( event ) {
	
		processCommentInput();
		
	});
});



/*$(".comment-input button") looks for a button inside the class in the html page*/


/*This creates and adds a new comment in the box below. But if there nothing in the dialog box it will still add a line
in the background

  	$(".comment-input button").on("click", function( event ) {
		var $new_comment = $("<p>"); //creates a new paragraph tag
		var comment_text = $(".comment-input input").val(); //this looks at html file and under the input in .comment-input to creat the variable
		
		//this will check for an empty string
		$new_comment.text( comment_text );//This is the new comment that gets passed in
		$(".comments").append( $new_comment ); */
		
		
		// Shows how to use the Enter button to do something.. 
/*	$( commentInput ).on("keypress", function(event){
		if( event.keyCode === 13) //When the Enter button is pressed do this. 13 = Enter button
		{
			console.log("This is the keycode " + event.keyCode ); //Whenever the keyboard is pressed do something
		}
	}; */