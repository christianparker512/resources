$(function(){
   var gallery = $(".gallery");
   var images = [
    "img/laptop-mobile_small.jpg",
    "img/laptop-on-table_small.jpg",
    "img/people-office-group-team_small.jpg"
    ];
   gallery.data("availableImages", images);
   console.log(gallery.data('availableImages'));
   gallery.data("name")
});