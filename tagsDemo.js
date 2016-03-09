

var tagsArray = [];
var tagsHistory = []; //to match these maybe?
$(document).ready(function(){
    //as we start writing
    $("#testInput").keydown(function (e) {
        // x repesent the keycode for whatever was typed 
        var x = e.which || e.keyCode;
        var typedValue = $("#testInput").val();

        //key:  BackSpace(8)
        if (x == 8) {
            if (typedValue === "") {
                if ($("ul.input-box>li").length > 1) {
                    $("ul").find("li.input-tag:last").remove();
                    tagsArray.pop($("li.input-tag:last span.skill").text());
                }
            }
        }

        /* When the used press , / Tab /Enter buton, New tag is formed.*/
        if (x == 9 || x == 188 || x == 13) {
            e.preventDefault();
            if (typedValue !== "") {
                var index = jQuery.inArray(typedValue, tagsArray);
                if (index < 0) {
                    tagsArray.push(typedValue);
                    tagsHistory.push(typedValue);
                    if ($("ul.input-box>li").hasClass("input-tag")) {
                        $('<li class="input-tag"><span class="skill">' + typedValue + '</span> <a class="xbutton" href="#">&times;</a> </li>').insertBefore(".input-list");
                    } else {
                        $(".input-box").prepend('<li class="input-tag"><span class="skill">' + typedValue + '</span> <a class="xbutton" href="#">&times;</a> </li>');
                    }
                    $("#testInput").val("");
                } else {
                    console.log("Match Found");
                    $("#testInput").val("");
                }
            }
        }
        //when click on the x button, remove the respective Tag from the field.
        $(".xbutton").on("click", function () {
            var delVal = $(this).closest("li").find("span.skill").text();
            var index = jQuery.inArray(delVal, tagsArray);
            if (index >= 0) {
                $(this).closest("li").remove();
                tagsArray.splice(index, 1);
            }
        }); 
    });

  
});
    
