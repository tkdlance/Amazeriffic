//If your using your own laptup you need to edit the Chrome properties link with this
//"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="C:/ChromeDevSession"

var main = function (toDoObjects) {
    "use strict";
    //debugger; all this does it stop the code and shows whats going on in the console. 

	//pg 165. This is a mapping function that will reorganise  the JSOn file
	var toDos = toDoObjects.map( function( toDo ){
		return toDo.description; 
	});
	//the toDoObjects = the JSON Array
	var organizedByTag = function (toDoObjects){
		
		var tags = [];  //This will create an empty tag array
		toDoObjects.forEach( function (toDo)
		{
			toDo.tags.forEach( function(tag) //goes throught each array by the tags
			{
				if (tags.indexOf(tag) === -1) //this will looks to see if this tag is in any other tag and number it. If it doens't it labesl it -1
				{
					tags.push(tag); 
				}
			});
		});
		
		
		var tagObjects = tags.map(function (tag){
			var toDosWithTag = [];
			toDoObjects.forEach (function (toDo){
				if (toDo.tags.indexOf(tag) !== -1)
				{
					toDosWithTag.push( toDo.description );
				}
			});
			return { "name" : tag, "toDos": toDosWithTag };
		});
		
		console.log( tagObjects );
		return (tagObjects);
	};
	
    $(".tabs a span").toArray().forEach(function (element) {
        var $element = $(element);

        // create a click handler for this element
        $element.on("click", function () {
            var $content,
                $input,
                $button,
                i;

            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                $content = $("<ul>");
                for (i = toDos.length-1; i >= 0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }
            } else if ($element.parent().is(":nth-child(2)")) {
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });

            } else if ($element.parent().is(":nth-child(3)")) {
				console.log("the tags tab was clicked!");
                var organizedByTags = organizedByTag(toDoObjects);
				organizedByTags.forEach( function(tag)
				{	
					var $tagName = $('<h3>').text(tag.name),
						$content = $('<ul>');
							
						tag.toDos.forEach(function (toDo)
						{
							var description = $('<li>').text(toDo);
							$content.append (description);
						});
					$( 'main .content').append ( $tagName );
					$( 'main .content').append ( $content );
				});

			//This is the 4th tab. This show how to add to the other tab
            } else if ($element.parent().is(":nth-child(4)")) {
                var $input = $("<input>").addClass("description"),
                    $inputLabel = $("<p>").text("Description: "),
                    $tagInput = $("<input>").addClass("tags"),
                    $tagLabel = $("<p>").text("Tags: "),
                    $button = $("<button>").text("+");

                $button.on("click", function () {
                    var description = $input.val(),
                        tags = $tagInput.val().split(","); //This will split the strings and create the first input and the 2nd input
                                 
                    toDoObjects.push({"description":description, "tags":tags});

                    // update toDos
                    toDos = toDoObjects.map(function (toDo) {
                        return toDo.description;
                    });

                    $input.val("");
                    $tagInput.val("");
                });

                $content = $("<div>").append($inputLabel)
                                     .append($input)
                                     .append($tagLabel)
                                     .append($tagInput)
                                     .append($button);
            }

            $("main .content").append($content);

            return false;
        });
    });

    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(function () {
    $.getJSON("http://nipmucskiclub.com/todos.json", function (toDoObjects) {
        main(toDoObjects);
    });
});
