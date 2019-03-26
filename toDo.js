"use strict";

$(function (){
	
	var toDos = [
		"Get Grocoreirs" ,
		"Make Spreadsheets" ,
		"See Family" ,
		"!!!" ,
		"Make Diner" ,
		"Go to bed"
		];
	
	//Find all the tab spans, and loop through each one.
	$(".tabs span").toArray().forEach( function( element) {
		
		// when one is clicked, clear the content section
		$( element ).on( "click", function() {          //This is a forloop for the active tabs(for (i = 0; i < $(".tabs span").taArray().length; i++)
			var $element = $(element),				//This is a comment. This is the same as var $element = $(element);
			    $content;							//										 var $content;
		
			$(".tabs span").removeClass("active");
			$(element).addClass("active");
			$("main .content").empty();
			
			if ($(element).parent().is(":nth-child(1)") ){
				$content = $("<ul>");
				for (var i = toDos.length - 1;  i >= 0; i--)
				{
					$content.append( $("<li>").text( toDos[i] ) );
				}; //end for toDos
				$("main .content").append( $content );
			
				//console.log("first tab clicked");
			}
			else if ($(element).parent().is(":nth-child(2)") ){
				
				$content = $("<ul>");
				toDos.forEach( function ( todo ) {
					$content.append( $("<li>").text( todo ) );
				}); //end for toDos
				$("main .content").append( $content );
				
				//console.log("second tab clicked");
			}
			else if ($(element).parent().is(":nth-child(3)") ){
				console.log("third tab clicked");
			}
			else{
				console.warn("Something bad has happened");
			}
			
			return false;
			
		}); //end on element click
		
	}); //end for each .tabs span
	
}); //end doc ready