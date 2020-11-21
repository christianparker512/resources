$(function(){
    //$("ul ul: first").append("<li>I'm gonna be the last sub-item</li>";

    $("<li>I'm gonna be the last item</li>").appendTo($("ul ul:first"));

    $("ul ul").prepend("<li>I'm going to be the first sub-item</li>");

    $("<li>Christian Parker</li>").prependTo($("ul ul:first"));

    $(".red-box").after("<div class='red-box'>Another Red Box</div>");
    $(".blue-box1").after("<div class='blue-box1'>Another blue friend</div>");

    $(".blue-box1").before(function(){
            return "<div class='blue-box1'>Another blue friend</div>";
    });
    $(".blue-box1").before($(".red-box"));
    $('p').after($("#list"))

})