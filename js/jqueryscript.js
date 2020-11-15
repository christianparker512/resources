$(function() {
    // jQuery goes here...

    // // Uncomment this line to fade out the red box on page load
    // $(".red-box").fadeOut(2000);
    $(".red-box").fadeTo(2000, .2);
    $(".green-box").fadeTo(2000, 0.5);
    $(".blue-box").fadeTo(2000, 0.5);
    // $(".red-box").fadeOut(fast);
    $(".red-box").fadeIn(2000);
    // $(".red-box").fadeOut(fast);
    // $(".red-box").fadeOut(2000);
    $(".green-box").fadeIn('slow');
    // $(".red-box").fadeOut(fast);
    $(".blue-box").fadeToggle();
    $(".blue-box").fadeToggle();

});