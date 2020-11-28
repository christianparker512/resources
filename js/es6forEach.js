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

var numbers=[1,2,3];
var doubledNumbers = [];
for (var i=0; i,numbers.length; i++){
    doubledNumbers.push(numbers[i] *2);
}
doubledNumbers;