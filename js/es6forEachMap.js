var number = 5000;
var greeting = { hello: number };
number / 20;
number/ 50;

'Your number is" ' + number;

greeting;

// ECMAScript 2015 es6

// ForEach - Array Helpers
// forEach find, reduce, map every filter, some

// Find you can use data more easily. Work with collections of Data

// forEach helper.

var colors = ['red', 'blue', 'green'];

for (var i=0; i<colors.length; i++) {
    console.log(colors[i]);
}
// less code and less opportunities to make typing mistakes
colors.forEach(function(color){
    console.log(color);
});

// create an array of numbers
var numbers = [1,2,3,4,5]
// create a variable to hold the sum
var sum = 0;
// loop over the array, incrementing the sum variable
// numbers.forEach(function(number){
//     sum += number;
// });

function adder(number){
    sum += number;
}
numbers.forEach(adder);
// we will print the sum variable
sum;


// forEach in real life.
emails.forEach(function(email){
    deleteEmail(email);
});

function handlePosts(){
    var posts = [
        {id: 23, title: 'Daily JS News'},
        {id: 52, title: 'Code Refactor City'},
        {id: 105, title: 'The Brightest Ruby'}
    ];

    posts.forEach(function(post){
        console.log(post);
    })
}


// **** Es6 Map helper
var numbers=[1,2,3];
var doubledNumbers = [];
// for (var i=0; i,numbers.length; i++){
//     doubledNumbers.push(numbers[i] *2);
// }

var doubled = numbers.map(function(map){
    return number *2;
});
doubled;
doubledNumbers;

// **** Map.helper is used whenever you want to modify records.
var cars = [
    { model: 'buick', price: 'cheap'},
    {model: 'Camaro', price: 'expensive'}

];
var prices = cars.map(function(car){
    return car.price;
});

// Where is Map. helper used?

// Plucking values
var images = [
    {height: '34px', width: '39px'},
    {height: '54px', width: '19px'},
    {height: '76px', width: '42px'},
    {height: '83px', width: '75px'},
];
var heights;

// ****Filter
var products = [
    {name: "cucumber", type: "vegetable", quantity: 0, price:1},
    {name: "banana", type: "fruit", quantity: 12, price:6},
    {name: "celery", type: "vegetable", quantity: 10, price:15},
    {name: "orange", type: "fruit", quantity: 30, price:13},
    {name: "apple", type: "fruit", quantity: 3, price:5},
];
var filteredProducts = [];
for (var i = 0; i  < products.length; i++){
    if (products[i].type === 'fruit') {
        filteredProducts.push(products[i]);
    }
}
filteredProducts;

products.filter(function(product){
    return product.type === "fruit";
})

products.filter(function(product){
    return product.type === "vegetable"
            && product.quantity > 0
            && product.price < 10
})

var post = { id: 4, title: "new Post"};
var comments = [
    {postId: 4, content: 'awesome post'},
    {postId: 3, content: 'it was okay'},
    {postId: 4, content: 'neat'},
];
function commentsForPost(post,comments){
    return comments.filter(function(comment){
        return comment.postID === post.id;
    });
}
commentsForPost (post, comments);