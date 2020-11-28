$function(){
    // attr(), prop(), val()
    speciallink.attr("href", "http://christianparker.com");

    var checkbox = $("input.checkbox");
    console.log(checkbox.prop("checked"));
    console.log(checkbox.attr('checked'));

    var textInput = $('input:text');
    console.log(textInput.val());

    var rangeInput = $("input[type='range']");
    console.log(rangeInput.val());
});