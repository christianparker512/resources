$(function(){
    $('a').addClass("fancy-link");
    // Don't need a . in this because your adding a class'
    $('p:first').addClass("large emphasize");

    $('li li').addClass(function(index){
        $(this).addClass('item' +index);
    });
    $('div').addClass((function(index,currentClass){
        if (currentClass === "dummy"){
            return "red-box";
        }
    }));
    $(".red-box").removeClass("red-box").addClass('blue-box');

    $(".dummy").removeClass("dummy").addClass("green-box");

});