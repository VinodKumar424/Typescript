var myFirstVariable = "hello world";
console.log(myFirstVariable);
var name = "John";
var score1 = 50;
var score2 = 42.50;
var sum = score1 + score2;
console.log("name" + name);
console.log("first score: " + score1);
console.log("second score: " + score2);
console.log("sum of the scores: " + sum);
//functions
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum of the numbers", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
//Generated by typescript 1.8.10
var res = function (a, b) {
    return a * b;
};
console.log(res(12, 2));
function factorial(number) {
    if (number <= 0) { // termination case
        return 1;
    }
    else {
        return (number * factorial(number - 1)); // function invokes itself
    }
}
;
console.log(factorial(6));
//Generated by typescript 1.8.10
var func = function (x) {
    if (typeof x == "number") {
        console.log(x + " is numeric");
    }
    else if (typeof x == "string") {
        console.log(x + " is a string");
    }
};
func(12);
func("Tom");
var fname = 'vinod';
var lname = 'kumar';
var fullname = fname + lname;
console.log(fullname);
if (10 > 5) {
    var x = "vinod";
}
console.log(x);
var y = 10;
var y = 20;
console.log(y);
