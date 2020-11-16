$(function() {
    // jQuery goes here...

    // // Uncomment this line to fade out the red box on page load
    // $(".red-box").fadeOut(2000);
    // $(".red-box").fadeTo(2000, .2);
    // $(".green-box").fadeTo(2000, 0.5);
    // $(".blue-box").fadeTo(2000, 0.5);
    // // $(".red-box").fadeOut(fast);
    // $(".red-box").fadeIn(2000);
    // // $(".red-box").fadeOut(fast);
    // // $(".red-box").fadeOut(2000);
    // $(".green-box").fadeIn('slow');
    // // $(".red-box").fadeOut(fast);
    // $(".blue-box").fadeToggle();
    // $(".blue-box").fadeToggle();

    // Hide and show as well as hide and slidedown
    // $(".blue-box1").hide(1000);
    // $(".blue-box1").show(2000);
    // $(".blue-box2").slideUp(2000);
    // $(".blue-box2").slideDown(2000);
    // $("p").hide();
    // $("p").slideDown(5000);

    // Jquery AnimationEffect
    $('.blue-box2').animate({
        "margin-left": "200px"},
        1000);
    $('.blue-box2').animate({
            "margin-left": "0px"},
        1000);

});