//hoisting
var x;
console.log(x);
var x = 5;
console.log(x);
function run(){
    console.log(x);
}
run();


// var variable is cross scope
//let work only in scope
