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
    // $('.lightbox').delay(500).fadeIn(1000);

    // jquery selectors
    // $('li:even').css('background-color', "red");
    // $('h2, p:first, li:last').css('background-color', "yellow");
    // // $('.redbox').css('background-color', "yellow");
    // // $('li').css('background-color', "yellow");
    // // $("input[type='text']").css('background-color','red');

    // traversal
    // $('#list').find('li').css('background-color', "purple");
    // $('#list').children().css('background-color', "red");
    // $('#list').parents().css('background-color', "lightblue");
    // $('#list').parent().css('background-color', "pink");
    // $('#list').siblings().css('background-color', "orange");
    // $('#list').prev().css('background-color', "aliceblue");
    // $('#list').next().css('background-color', "green");

    // jquery filter elements selected with some criteria
    // $('#li').first().css("background-color", "yellow");

    // Adding new Elements to the DOM
    // append goes to the last of the ul
    // $('ul ul:first').append('<li>I am going to be the last item');
    // $('<li>I am going to be the first item</li>').appendTo($('ul ul:first'));

    // prepend goes to the beginning of the ul
    // $('ul ul:first').prepend('<li>I am going to be the first item');
    // or
    // $("<li>I'm gonna the be the first item</li>").prependTo("ul ul:first");
    //
    // $('<h4>Christian parker</h4>').prependTo('#content');
    // $('<h4>Christian parker</h4>').appendTo('#content');

    // $('.red-box').after("<div class='red-box'>another red</div>");
    // $('.blue-box2').after("<div class='blue-box2'>another blue friend</div>");

    // $('.blue-box2').before(function(){
    //     return "<div class='blue-box2'>blue #3</div>";
    // })
    // $('.blue-box2').before($('.red-box'));
    //
    // $('p').after($("#list"));

    // replace/remove elements from the DOM - using .replaceWith
    // $('li').replaceWith('<li>Replaced.</li>');
    // $('li').replaceWith(function(){
    //   return "<li>Replaced with function.</li>"
    // })
    // var firstListItem = $('li:first');
    // $('p:first').replaceWith(firstListItem);



    // retrieve and set values - attr(), prop(), val()
    // var specialLink = $('#special-link')
    // console.log(special.link.attr('href'));

    // video slideshow of what I've learned about animations in jquery'
    var galleryImage = $('.gallery').find('img').first();
    var images = [
        "img/laptop-mobile_small.jpg",
        "img/laptop-on-table_small.jpg",
        "img/people-office-group-team_small.jpg",
    ];
    var i = 0;
    setInterval(function() {
        i = (i + 1) % images.length;
        galleryImage.fadeOut(function(){
            $(this).attr('src',images[i]);
            $(this).fadeIn();
            console.log(galleryImage.attr("src"));
        })
    },2000);

});