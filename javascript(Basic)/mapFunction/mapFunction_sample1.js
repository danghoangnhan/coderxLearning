function tripple(num) {
return num*3;
}

function multiply(numbers) {
return numbers.map(function(x){
  return tripple(x);
});

}