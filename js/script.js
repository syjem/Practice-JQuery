
$(function() {
    $("#add").on("click", function() {
        var jem = $("input").val();
        if(jem !== '') {
            var elem = $("<li></li>").text(jem);
            $(elem).append("<button class='rem'>Clear</button>"); //add class rem
            $("#my-list").append(elem);
            $("input").val("");
            $(".rem").on("click", function() {
                $(this).parent().remove();
            }); 
        }
    });
});