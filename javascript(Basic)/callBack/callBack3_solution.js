function transform(numbers, callback) {
var result=[];
for(var i=0;i<numbers.length;i++){
    result.push(callback(numbers[i]));
}
    return result;
    }

function double(num){
return num*2;
}
