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
    // $('.blue-box2').animate({
    //     "margin-left": "200px"},
    //     1000);
    // $('.blue-box2').animate({
    //         "margin-left": "0px"},
    //     1000);

    // animating many things at the same time
    // $('.blue-box2').animate({
    //     "margin-left": "200px",
    //     "opacity": "0",
    //     "height": "50px",
    //     "width": "50px",
    //     "marginTop": "25px"
    // }, 1000);
    // $('p').animate({
    //     "margin-left": "200px",
    //     "opacity": "0",
    //     "height": "50px",
    //     "width": "50px",
    //     "marginTop": "25px",
    //     "font-size": "50px"
    // }, 1000);

    // Callback function with an alert
    // $('.red-box').fadeTo(1000, 0.2).fadeOut().delay(500).fadeIn();
    // $('.green-box').delay(2000).fadeTo(1000, 0.5).fadeOut().delay(500).fadeIn();
    // $('.blue-box1').delay(3000).fadeTo(1000, 0.8, function(){
    //     alert("This is the callback: animation is finished");
    // });

    // // callback trickledown effect
    // $('.red-box').fadeTo(1000, 0.2, function () {
    //     $('.green-box').delay(2000).fadeTo(1000, 0.5, function() {
    //         $('.blue-box1').delay(3000).fadeTo(1000, 0.0,function (){
    //             alert("This is the callback: animation is finished");
    //         });
    //     });
    // });

    // fadein a lightbox fadein and fadeout
    $('.lightbox').delay(500).fadeIn(1000);

});