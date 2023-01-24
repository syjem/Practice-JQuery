$(function() {
    $("#add").on("click", function() {
        var jem = $("input").val();
        if(jem !== '') {
            var elem = $("<li></li>").text(jem);
            $(elem).append("<button class='rem'>X</button>");
            $("#my-list").append(elem);
            $("input").val("");
        }
    });

    $(document).on("click", ".rem", function() {
        $(this).parent().remove();
    });
});