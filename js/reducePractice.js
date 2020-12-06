// var numbers = [10,20,30];
// var sum = 0;
//
// for (var i = 0; i < numbers.length; i ++){
//     sum += numbers [i];
// }
// numbers.reduce(function (sum, number){
//     return sum + number;
// }, 0);
//
//
// var primaryColors= [
//     {color: 'red'},
//     {color: 'blue'},
//     {color: 'yellow'}
// ]
//
// primaryColors.reduce(function(previous, primaryColor){
//     previous.push(primaryColor.color);
// },[]);
// let numbers = [1, 2, 3, 4, 5];
// numbers.map(n => n * 3)

const p = new Promise((resolve, reject) => {
    resolve(3);
});

p.then(result => console.log(result));
p.catch(error => console.log('An error occured!'));

