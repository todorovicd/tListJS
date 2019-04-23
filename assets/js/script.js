//Mark completed
$("ul").on("click", "li", function() {
 $(this).toggleClass("completed");
});

//Delete todos
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

//Add new todos
$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        let todoText = $(this).val();
        $(this).val("");

        // $("ul").append("<li><span>X</span> " + todoText + "</li>");
        $("ul").append(`<li><span><i class="fa fa-trash"></i></span> ${todoText} </li>`);
    }
});

 $(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
 });