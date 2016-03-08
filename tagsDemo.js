

var tagsArray =[]; 

$(document).ready(function(){
    //as we start writing
    $("#testInput").keydown(function (e) {
        e.preventDefault;
        // x repesent the keycode for whatever was typed 
        var x = e.which || e.keyCode;

        //key:  BackSpace(8)
        if (x == 8) {
            var s = $("li").last().remove();
        }

        //Key: Tab(9)
        //Key: ,(188)
        //Key: Enter(13)
        if (x == 9 || x == 188|| x==13) {
            var tagVal = $("#testInput").val();
            tagsArray.push(tagVal);
            $ul = $(".skill-box").find("ul");
            $ul.append('<li class="input-tag"><span class="skill">' + tagVal + '</span> <a class="xbutton" href="#">&times;</a> </li>');
            $("#testInput").val("").focus();
            // it is not focusing in the input box;
        }
        $(".xbutton").on("click", function () {
            $(this).closest("li").remove();
        });

    });
});
    
