var numbers = [10,20,30];
var sum = 0;

for (var i = 0; i < numbers.length; i ++){
    sum += numbers [i];
}
numbers.reduce(function (number){
    return sum;
})